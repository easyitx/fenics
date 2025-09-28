'use client'

import React from 'react'
import { clsx } from 'clsx'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string
    size?: number | string
}

export const Icon: React.FC<IconProps> = ({
                                              name,
                                              size = 24,
                                              className,
                                              ...props
                                          }) => {
    const sizeStyle = typeof size === 'number'
        ? { width: size, height: size }
        : { width: size, height: size }

    return (
        <svg
            className={clsx('inline-flex shrink-0', className)}
            {...sizeStyle}
            {...props}
        >
            <use href={`/icons/sprite.svg#${name}`} />
        </svg>
    )
}