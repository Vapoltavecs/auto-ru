import { Dispatch, SetStateAction } from "react"

export enum Themes {
    LIGHT="light",
    DARK="dark"
}

export type TThemeContext = {
    theme: Themes,
    setTheme: Dispatch<SetStateAction<Themes>>
}