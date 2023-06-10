import { Themes } from "@app/providers/ThemeProvider"
import { classNames } from "@shared/lib/classNames/classNames"
import { ReactNode, FC } from "react"
import cl from "./Card.module.sass"


type Props = {
    children: ReactNode,
    className?: string,
    theme: Themes
}

export const Card: FC<Props> = ({ children, className, theme }) => {
    return <div className={classNames(cl.card, {}, [className, cl[theme]])}>{children}</div>
}