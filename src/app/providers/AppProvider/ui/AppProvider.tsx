import QueryProvider from '@app/providers/Query'
import ThemeProvider from '@app/providers/ThemeProvider'
import React, { FC } from 'react'

type AppProviderProps = {
    children: React.ReactNode
}


export const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
    )
}
