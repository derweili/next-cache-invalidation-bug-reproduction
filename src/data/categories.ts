export const generateRandomCategorySlugs = () => {
	return Array.from({ length: 1000 }, (_, i) => `slug-${i}`);
}