import React, { ReactNode, FC } from "react"
import cl from "./Card.module.sass"


type Props = {
    children: ReactNode
}

export const Card:FC<Props> = ({children}) => {
    return <div className={cl.card}>{children}</div>
}