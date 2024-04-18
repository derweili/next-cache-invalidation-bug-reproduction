import { RANDOM_CAT_FACT_TAG } from "@/cache/tags";

export const getRandomCatFact = async () => {
	const response = await fetch('https://catfact.ninja/fact', {cache: 'force-cache', next: {
		tags: [RANDOM_CAT_FACT_TAG]
	}});

	return response.json() as Promise<{fact: string, length: number}>;
}