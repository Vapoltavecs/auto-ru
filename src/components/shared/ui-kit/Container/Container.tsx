import { CONTAINTER } from "@constants/styles/styles"
import { ReactNode, FC } from "react"
import cl from "./Container.module.sass"

type Props = {
    children: ReactNode | ReactNode[]
}

export const Container:FC<Props> = ({children}) => {
    return <div style={{maxWidth: CONTAINTER}} className={cl.container}>{children}</div>
}