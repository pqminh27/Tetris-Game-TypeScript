function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0)
}

if (import.meta.vitest) {
    const {describe, expect, it} = import.meta.vitest
    describe("#testSum", () => {
        it("returns the sum of the numbers in normal array in App", () => {
            expect(sum(1, 2)).toBe(3)
        })
        it("returns the sum of 1 number in array in App", () => {
            expect(sum()).toBe(0)
        })
    })
}
