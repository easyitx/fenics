import { IconColor } from "./types"

// Маппинг цветов из палитры приложения
const COLOR_MAP: Record<IconColor, string> = {
  primary: 'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  tertiary: 'var(--color-text-tertiary)',
  disabled: 'var(--color-text-disabled)',
  accent: 'var(--color-accent-primary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  info: 'var(--color-info)',
  default: '#5A5257'
}

// Кэш для загруженных иконок
let iconsCache: Record<string, string> = {}

// Получение SVG иконки по имени
export const getIconSvg = async (name: string): Promise<string | null> => {
  try {
    // Если иконка уже в кэше
    if (iconsCache[name]) {
      return iconsCache[name]
    }

    // Пытаемся загрузить SVG файл по имени из папки public/icons
    const response = await fetch(`/icons/${name}.svg`)
    
    if (response.ok) {
      const svgText = await response.text()
      
      // Парсим SVG и извлекаем содержимое
      const parser = new DOMParser()
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml')
      const svgElement = svgDoc.querySelector('svg')
      
      if (svgElement) {
        // Извлекаем внутреннее содержимое SVG
        const svgContent = svgElement.innerHTML
        iconsCache[name] = svgContent
        return svgContent
      }
    }
    
    // Если файл не найден, возвращаем null
    console.warn(`Icon "${name}.svg" not found`)
    return null
    
  } catch (error) {
    console.error(`Failed to load icon: ${name}`, error)
    return null
  }
}

// Кастомизация SVG с цветом, размером и классами
export const customizeSvg = (
  svgContent: string,
  size?: number | string,
  color?: IconColor,
  className?: string
): string => {
  // Определяем цвет
  const fillColor = color ? COLOR_MAP[color] : COLOR_MAP.default
  
  // Определяем размер
  const sizeValue = size ? (typeof size === 'number' ? `${size}px` : size) : '24px'
  
  // Заменяем все fill атрибуты на нужный цвет
  let customizedSvg = svgContent
    .replace(/fill="[^"]*"/g, `fill="${fillColor}"`)
    .replace(/fill='[^']*'/g, `fill="${fillColor}"`)
  
  // Если нет fill атрибутов, добавляем fill к path элементам
  if (!customizedSvg.includes('fill=')) {
    customizedSvg = customizedSvg.replace(/<path/g, `<path fill="${fillColor}"`)
    customizedSvg = customizedSvg.replace(/<rect/g, `<rect fill="${fillColor}"`)
    customizedSvg = customizedSvg.replace(/<circle/g, `<circle fill="${fillColor}"`)
    customizedSvg = customizedSvg.replace(/<polygon/g, `<polygon fill="${fillColor}"`)
  }
  
  // Создаем полный SVG с правильным viewBox
  return `<svg width="${sizeValue}" height="${sizeValue}" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" ${className ? `class="${className}"` : ''}>${customizedSvg}</svg>`
}

// Очистка кэша (для разработки)
export const clearIconsCache = (): void => {
  iconsCache = {}
}

// Предзагрузка иконок
export const preloadIcons = async (iconNames: string[]): Promise<void> => {
  const promises = iconNames.map(name => getIconSvg(name))
  await Promise.all(promises)
}