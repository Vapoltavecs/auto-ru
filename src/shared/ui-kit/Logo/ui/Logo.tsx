import { FC } from 'react'
import cls from './Logo.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { NavLink } from 'react-router-dom'
import { RoutePaths } from '@shared/lib/router'

type LogoProps = {
    className?: string
}

const Logo:FC<LogoProps> = ({className}) => {
    return <NavLink to={RoutePaths.main} className={classNames(cls.Logo, {}, [className])}>auto.ru</NavLink>
}

export default Logo