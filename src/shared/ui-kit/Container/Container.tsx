import { ReactNode, FC } from "react"
import cl from "./Container.module.sass"

type Props = {
    children: ReactNode | ReactNode[]
}

export const Container:FC<Props> = ({children}) => {
    return <div className={cl.container}>{children}</div>
}