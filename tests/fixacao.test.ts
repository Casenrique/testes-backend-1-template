import { fixacao } from "../src/fixacao"
import { fixacao2 } from "../src/fixacao"

describe("fixacao", () => {
    test("deve retornar true quando o array for igual às letras da string enviada", () => {
        const result = fixacao("teste")
        expect(result).toEqual(["t", "e", "s", "t", "e"])
    })
})

describe("fixacao2", () => {
    test("deve retornar true quando o array for igual às letras da string enviada", () => {
        const result = fixacao2("pokemon")
        expect(result).toEqual(["p", "o", "k", "e", "m", "o", "n",])
    })
})