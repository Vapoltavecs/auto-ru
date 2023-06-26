import { FC, useState } from 'react'
import { Themes, useTheme } from '@app/providers/ThemeProvider'
import Switcher from '@shared/ui-kit/Switcher'
import { useCallback } from 'react'

type ThemeSwitcherProps = {
    className?: string
}

const defaultState = localStorage.getItem("theme") === Themes.DARK

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, switchTheme } = useTheme()
    const [isActive, setActive] = useState(defaultState)

    const changeTheme = useCallback(() => {
        switchTheme()
        setActive(active => !active)
    }, [theme, isActive])

    return (
        <Switcher theme={theme} className={className} active={isActive} onSwitch={changeTheme} />
    )
}

export default ThemeSwitcher