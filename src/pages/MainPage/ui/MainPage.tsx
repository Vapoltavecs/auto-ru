import { FC } from 'react'
import cls from './MainPage.module.sass'

type MainPageProps = {
    className?: string
}

const MainPage:FC<MainPageProps> = ({className}) => {
    return <div className={className}></div>
}

export default MainPage