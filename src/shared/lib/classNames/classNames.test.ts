import { classNames } from "./classNames"

describe("ClassNames", () => {
    test("Все параметры", () => {
        expect(classNames("defaultClass", {modeClass: true, active: false }, ["123"])).toBe("defaultClass 123 modeClass")
    })
    test("Только основной класс", () => {
        expect(classNames("defaultClass")).toBe("defaultClass")
    })
    test("Без модов и дополнительных классов", () => {
        expect(classNames("defaultClass", {}, [])).toBe("defaultClass")
    })
    test("Если дополнительные классы будут undefined", () => {
        expect(classNames("d", {}, [undefined])).toBe("d")
    })
})