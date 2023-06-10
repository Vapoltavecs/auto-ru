import { Dispatch, FC, memo, SetStateAction, useCallback } from 'react'
import cls from './Switcher.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'

type SwitcherProps = {
    className?: string
    theme: Themes,
    active: boolean,
    onSwitch: () => void,
}

const Switcher: FC<SwitcherProps> = memo(({ className, theme, active, onSwitch }) => {
    const clickHanlder = useCallback(() => {
       onSwitch()
    }, [active])
    return <button className={classNames(cls.Switcher, { [cls.active]: active }, [className, cls[theme]])} onClick={clickHanlder}><div className={classNames(cls.round)}></div></button>
})

export default Switcher