import MainPage from "@pages/MainPage/ui/MainPage"
import { RouteProps } from "react-router-dom"


export enum Routes {
    MAIN="main"
}

export const RoutePaths: Record<Routes, string> =  {
    [Routes.MAIN]:  "/"
}

export const AppRoutes: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RoutePaths[Routes.MAIN],
        element: <MainPage />        
    }
}
