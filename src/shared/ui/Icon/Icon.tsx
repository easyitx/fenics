'use client'

import { forwardRef, useEffect, useState, useMemo } from 'react'
import { clsx } from 'clsx'
import { IconProps, IconName } from '@/shared/assets/icons/types'
import { customizeSvg, getIconSvg } from '@/shared/assets/icons/utils'

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
      return {}
    }, [size])

    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center flex-shrink-0',
          {
            'cursor-pointer': onClick,
            'w-6 h-6': !size, // размер по умолчанию
          },
          className
        )}
        style={sizeClasses}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    )
  }
)

IconDisplay.displayName = 'IconDisplay'

// Основной компонент Icon
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ name, size, className, color, onClick }, ref) => {
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    // Загружаем SVG контент
    useEffect(() => {
      let isMounted = true

      const loadIcon = async () => {
        try {
          setIsLoading(true)
          setHasError(false)
          
          const rawSvg = await getIconSvg(name)
          
          if (!isMounted) return

          if (rawSvg) {
            const customizedSvg = customizeSvg(rawSvg, size, color, undefined)
            setSvgContent(customizedSvg)
          } else {
            setHasError(true)
          }
        } catch (error) {
          if (isMounted) {
            setHasError(true)
            console.warn(`Failed to load icon: ${name}`, error)
          }
        } finally {
          if (isMounted) {
            setIsLoading(false)
          }
        }
      }

      loadIcon()

      return () => {
        isMounted = false
      }
    }, [name, size, color])

    // Состояние загрузки
    if (isLoading) {
      return (
        <span
          ref={ref}
          className={clsx(
            'inline-flex items-center justify-center animate-pulse bg-gray-200 rounded',
            {
              'w-6 h-6': !size,
            },
            className
          )}
          style={size ? { width: size, height: size } : {}}
        />
      )
    }

    // Состояние ошибки
    if (hasError || !svgContent) {
      return (
        <span
          ref={ref}
          className={clsx(
            'inline-flex items-center justify-center bg-gray-100 rounded text-gray-400 text-xs',
            {
              'w-6 h-6': !size,
            },
            className
          )}
          style={size ? { width: size, height: size } : {}}
          title={`Icon "${name}" not found`}
        >
          ?
        </span>
      )
    }

    return (
      <IconDisplay
        ref={ref}
        svgContent={svgContent}
        size={size}
        className={className}
        onClick={onClick}
      />
    )
  }
)

Icon.displayName = 'Icon'

// Вспомогательные компоненты с предустановленными размерами
export const IconSm = (props: Omit<IconProps, 'size'>) => (
  <Icon {...props} size={16} />
)

export const IconMd = (props: Omit<IconProps, 'size'>) => (
  <Icon {...props} size={24} />
)

export const IconLg = (props: Omit<IconProps, 'size'>) => (
  <Icon {...props} size={32} />
)

export const IconXl = (props: Omit<IconProps, 'size'>) => (
  <Icon {...props} size={48} />
) 