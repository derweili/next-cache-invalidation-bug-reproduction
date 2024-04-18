import { generateRandomCategorySlugs } from '@/data/categories';
import React from 'react'

type Props = {}


export async function generateStaticParams(): Promise<Array<{ slug?: string }>> {
	// create 1000 random slugs
	const slugs = generateRandomCategorySlugs();

	return slugs.map((slug) => {
		return {
			slug
		};
	});
}


const page = (props: Props) => {
	return (
		<>
			<h3>Tag page</h3>
			<p>Props</p>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</>
	)
}

export default page