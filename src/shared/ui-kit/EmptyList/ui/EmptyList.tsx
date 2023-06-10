import { FC } from 'react'
import cls from './EmptyList.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'

type EmptyListProps = {
    className?: string
    theme: Themes
}

const EmptyList:FC<EmptyListProps> = ({className, theme}) => {
    return <div className={classNames(cls.EmptyList, {}, [className, cls[theme]])}>Тут пока ничего нет...</div>
}

export default EmptyList