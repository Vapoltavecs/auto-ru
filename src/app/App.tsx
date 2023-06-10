import { useTheme } from "@app/providers/ThemeProvider"
import "./sass/index.sass"
import { classNames } from "@shared/lib/classNames/classNames"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "@shared/lib/router"
import Header from "@widgets/Header"

export const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <BrowserRouter>
                <Header theme={theme}/>
                <Routes>
                    {Object.values(AppRoutes).map(route => <Route {...route} key={route.path}/>)}
                </Routes>
            </BrowserRouter>
        </div>
    )
}