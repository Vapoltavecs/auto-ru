import { $api } from '@api/api'
import { useQuery } from '@app/providers/Query'
import { useTheme } from '@app/providers/ThemeProvider'
import CarCardList, { ICar } from '@entities/Car'
import { FC } from 'react'
import cls from './MainPage.module.sass'

type MainPageProps = {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    const { data } = useQuery<ICar[]>("cars", {
        queryFn: async () => (await $api.get("/cars/all")).data,
        cache: true
    })
    const { theme } = useTheme()
    
    return <div className={className}><CarCardList cars={data} theme={theme} /></div>
}

export default MainPage 