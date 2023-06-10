import { FC } from 'react'
import cls from './CarCardList.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { ICar } from '../../model/car'
import { Themes } from '@app/providers/ThemeProvider'
import EmptyList from '@shared/ui-kit/EmptyList'
import { CarCard } from '../CarCard/CarCard'
import { TRequest } from "@shared/lib/types/types"
import { useState } from 'react'
import Switcher from '@shared/ui-kit/Switcher'
import { useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type CarCardListProps = {
    className?: string,
    cars: TRequest<ICar[]>,
    theme: Themes
}
export enum ListViews {
    list = "list",
    grid = "grid"
}

const CarCardList: FC<CarCardListProps> = ({ className, cars, theme }) => {
    const [view, setView] = useState<ListViews>(ListViews.grid)

    const switchView = useCallback(() => {
        setView(view => view === ListViews.list ? ListViews.grid : ListViews.list)
    }, [view])

    if (!cars || cars.length === 0) {
        return <EmptyList theme={theme} />
    }

    return (
        <div className={classNames(cls.CarCardList, {}, [className])}>
            <div className={cls.switcher}><span>Сетка</span><Switcher theme={theme} active={view === ListViews.list} onSwitch={switchView} /><span>Список</span></div>
            <ul className={classNames(cls.list__wrapper, {}, [cls[view]])}>
                {cars.map(car => <li className={classNames(cls["list__wrapper-item"])} key={car.id}><CarCard className={cls.CarCardList__item} car={car} theme={theme} view={view} /></li>).reverse()}
            </ul>
        </div>
    )
}

export default CarCardList