import { render } from "@testing-library/react"
import { Card } from "./Card"

describe("Card", () => {
    test("Card is renders with children", () => {
        const TEXT = "test"
        const card = render(<Card >{TEXT}</Card>)
        expect(card.getByText(TEXT)).toBeInTheDocument()
        expect(card).toMatchSnapshot()
    })
})

export {}