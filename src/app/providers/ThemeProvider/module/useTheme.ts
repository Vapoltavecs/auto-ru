import { ThemeContext } from './context';
import { useCallback, useContext, useEffect } from 'react';
import { Themes } from './types';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const switchTheme = useCallback((newTheme?: Themes) => {
        if (newTheme) {
            setTheme(newTheme)
        } else {
            setTheme(theme => theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT)
        }
    }, [theme])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

   

    return { theme, switchTheme }
}