export const generateRandomCategorySlugs = () => {
	return Array.from({ length: 100000 }, (_, i) => `slug-${i}`);
}