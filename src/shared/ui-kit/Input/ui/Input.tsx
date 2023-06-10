import React, { FC, forwardRef, InputHTMLAttributes } from 'react'
import cls from './Input.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'

type InputProps = {
    className?: string,
    theme: Themes,
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = forwardRef(({ className, theme, ...otherProps }, ref) => {
    return <input ref={ref as React.LegacyRef<HTMLInputElement>} className={classNames(cls.Input, {}, [className, cls[theme]])} {...otherProps} />
})

export default Input