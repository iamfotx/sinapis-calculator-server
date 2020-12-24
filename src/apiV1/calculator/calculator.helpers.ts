export function areNumbers(numbers: number[]) {
    const nonNumerics = numbers.filter((num: number) => typeof num !== 'number' || num !== num)
    return !Boolean(nonNumerics.length)
}
