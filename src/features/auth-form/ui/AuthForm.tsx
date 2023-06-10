import { FC } from 'react'
import cls from './AuthForm.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { useForm } from "react-hook-form"
import Input from '@shared/ui-kit/Input'
import { Themes } from '@app/providers/ThemeProvider'
import { EAuthForm } from '../model/model'
import Button, { ButtonViews } from '@shared/ui-kit/Button'

type AuthFormProps = {
    className?: string,
    theme: Themes
}

const AuthForm: FC<AuthFormProps> = ({ className, theme }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(console.log)
    return (
        <form onSubmit={onSubmit} className={classNames(cls.AuthForm, {}, [className])}>
            <span className={classNames(cls.AuthForm__title)}>Авторизация</span>
            <Input className={classNames(cls.AuthForm__input)}  {...register(EAuthForm.email, { required: "This field is required" })} placeholder="E-mail" theme={theme} />
            <Input className={classNames(cls.AuthForm__input)}  {...register(EAuthForm.password, { required: "This field is required" })} placeholder="Password" theme={theme} />
            <Button type="submit" view={ButtonViews.FILLED} theme={theme} className={classNames(cls.AuthForm__button)}>Войти</Button>
        </form>)
}

export default AuthForm