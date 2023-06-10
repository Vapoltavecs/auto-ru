import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import cls from './Button.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'

export enum ButtonViews {
  FILLED = 'filled',
  BORDERED = "bordered"
}


type ButtonProps = {
  className?: string,
  view: ButtonViews,
  children: ReactNode,
  theme?: Themes
} & ButtonHTMLAttributes<HTMLButtonElement>


const Button: FC<ButtonProps> = ({ className, view, children, theme = Themes.LIGHT, ...otherProps }) => {
  return <button className={classNames(cls.Button, {}, [className, cls[view], cls[theme]])} {...otherProps}>{children}</button>
}

export default Button