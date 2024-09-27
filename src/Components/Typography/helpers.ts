import {CombineSameArrayTripleTimes, CombineTwoArrays} from "../../../Interfaces/list-operations";

export const combineArrays = <T extends readonly string[], U extends readonly string[]>(arr1: T, arr2: U): CombineTwoArrays<T, U>[] => {
    const result: CombineTwoArrays<T, U>[] = []
    for (const item1 of arr1) {
        for (const item2 of arr2) {
            result.push(`${item1}-${item2}` as CombineTwoArrays<T, U>)
        }
    }
    return result
}
export const combineSameArrayTripleTimes = <T extends readonly string[]>(arr1: T): CombineSameArrayTripleTimes<T>[] => {
    const result: CombineSameArrayTripleTimes<T>[] = []
    for (const item1 of arr1) {
        for (const item2 of arr1) {
            for (const item3 of arr1) {
                result.push(`${item1}-${item2}-${item3}` as CombineSameArrayTripleTimes<T>)
            }
        }
    }
    return result
}