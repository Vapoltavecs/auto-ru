import { FC } from 'react'
import cls from './RegistrationForm.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'

type RegistrationFormProps = {
    className?: string
}

const RegistrationForm:FC<RegistrationFormProps> = ({className}) => {
    return <div className={classNames(cls.RegistrationForm, {}, [className])}>RegistrationForm</div>
}

export default RegistrationForm