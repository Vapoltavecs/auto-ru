import { FC, SetStateAction, useState } from 'react'
import { Themes, useTheme } from '@app/providers/ThemeProvider'
import Switcher from '@shared/ui-kit/Switcher'

type ThemeSwitcherProps = {
    className?: string
}

const defaultState = localStorage.getItem("theme") === Themes.DARK

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, switchTheme } = useTheme()
    const [isActive, setActive] = useState(defaultState)

    const changeTheme = (isActive: SetStateAction<boolean>) => {
        switchTheme()
        setActive(isActive)
    }

    return (
        <Switcher theme={theme} active={isActive} setActive={changeTheme} />
    )
}

export default ThemeSwitcher