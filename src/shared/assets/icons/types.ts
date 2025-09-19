export type IconName = string

export type IconColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'default'

export interface IconProps {
  name: IconName
  color?: IconColor
  size?: number | string
  className?: string
  onClick?: () => void
}