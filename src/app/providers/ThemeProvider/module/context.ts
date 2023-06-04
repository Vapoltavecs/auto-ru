import { createContext } from 'react';
import { Themes, TThemeContext } from './types';

export const ThemeContext = createContext<TThemeContext>({
    theme: Themes.LIGHT,
    setTheme: () => {}
})