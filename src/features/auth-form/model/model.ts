export enum EAuthForm {
    email = "email",
    password = "password"
}

export type TAuthForm = {
    [EAuthForm.email]: string,
    [EAuthForm.password]: string
}