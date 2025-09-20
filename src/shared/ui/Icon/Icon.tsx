'use client'

import { forwardRef, useMemo, useEffect, useState } from 'react'
import { clsx } from 'clsx'

// Компонент-обертка для отображения SVG
interface IconDisplayProps {
  svgContent: string
  size?: number | string
  className?: string
  onClick?: () => void
}

const IconDisplay = forwardRef<HTMLSpanElement, IconDisplayProps>(
  ({ svgContent, size, className, onClick }, ref) => {
    const sizeClasses = useMemo(() => {
      if (size) {
        if (typeof size === 'number') {
          return { width: `${size}px`, height: `${size}px` }
        }
        return { width: size, height: size }
      }
      return { width: '24px', height: '24px' } // размер по умолчанию
    }, [size])

    // Если svgContent пустой — показываем прозрачный placeholder
    const content = svgContent || '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"></svg>'

    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center flex-shrink-0',
          {
            'cursor-pointer': onClick,
          },
          className
        )}
        style={sizeClasses}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }
)

IconDisplay.displayName = 'IconDisplay'

// Интерфейс для Icon
interface IconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'default',
  className,
  onClick,
}) => {
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    // Загружаем SVG как текст
    fetch(`/icons/${name}.svg`)
      .then((res) => res.text())
      .then(setSvgContent)
  }, [name])

  const colorClass = color ? `icon--${color}` : ''

  return (
    <IconDisplay
      svgContent={svgContent}
      size={size}
      className={clsx('icon', colorClass, className)}
      onClick={onClick}
    />
  )
}