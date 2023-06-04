import { FC, ReactNode } from 'react'
import cls from './Link.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'
import { NavLink, NavLinkProps } from 'react-router-dom'

export enum LinkViews {
    DEFAULT="default",
    FILLED="filled",
    BORDERED="bordered"
}

type LinkProps = {
    className?: string,
    children: ReactNode,
    view: LinkViews,
    theme: Themes
} & NavLinkProps

export const Link:FC<LinkProps> = ({className, children, view, theme, ...otherProps}) => {
    return <NavLink {...otherProps} className={classNames(cls.Link, {}, [className, cls[theme], cls[view]])}>{children}</NavLink>
}
