import Button, { ButtonViews } from "./Button"
import { render } from "@testing-library/react"

describe("button", () => {
    test("Button is renders", () => {
        const TEXT = "Кнопка"
        const btn = render(<Button view={ButtonViews.FILLED}>{TEXT}</Button>)
        expect(btn.queryByText(TEXT)).toBeInTheDocument()
        expect(btn).toMatchSnapshot()
    })
})

export { }