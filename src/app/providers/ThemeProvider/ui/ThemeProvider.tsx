import { FC, ReactNode, useState } from 'react'
import { ThemeContext } from '../module/context'
import { Themes } from '../module/types'

type ThemeProviderProps = {
    children: ReactNode
}



const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const defaultTheme = localStorage.getItem("theme") as Themes || Themes.LIGHT
    const [theme, setTheme] = useState<Themes>(defaultTheme)
    return <ThemeContext.Provider value={{ theme, setTheme }} >{children}</ThemeContext.Provider>
}

export default ThemeProvider