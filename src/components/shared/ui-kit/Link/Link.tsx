import { NavLink } from "react-router-dom"
import { FC, ReactNode } from "react"
import styled from "styled-components"
import { View } from "./Link.type"

type Props = {
    page: string,
    children: ReactNode,
    view: View
}

export const Link:FC<Props> = ({page, children, view}) => {

    const Link = styled(NavLink)`
        color: ${view.color};
        transition: color .3s;
        text-decoration: none;
        &:hover{
            color: ${view.hovered}
        }
    `
    return <Link to={page}>{children}</Link>
}
