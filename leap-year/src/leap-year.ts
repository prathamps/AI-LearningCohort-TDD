function isDivisibleBy(year: number, divisor: number): boolean {
	return year % divisor === 0
}

export function isLeapYear(year: number): boolean {
	return (
		isDivisibleBy(year, 400) ||
		(isDivisibleBy(year, 4) && !isDivisibleBy(year, 100))
	)
}
