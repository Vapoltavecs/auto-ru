import configure, { configWithJest } from "./configure"
import * as path from "path"


describe("Config aliases", () => {
    test("Корректные данные для vite", () => {
        expect(configure({"@test/*": ["./test/*"]})).toEqual({"@test": path.resolve("src", "test")})
    })
    test("Корректные данные для jest", () => {
        expect(configWithJest({"@test/*": ["./test/*"]})).toEqual({"^@test/(.*)$": path.join("<rootDir>", "src", "test", "$1")})
    })
})



export {}