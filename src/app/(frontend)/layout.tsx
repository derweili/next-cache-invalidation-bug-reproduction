import { generateRandomCategorySlugs } from '@/data/categories';
import { getRandomCatFact } from '@/data/randomCatFact';
import Link from 'next/link';
import React from 'react'


const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/all-categories', label: 'All Categories' },
	...generateRandomCategorySlugs().slice(0, 100).map((slug) => ({
		href: `/category/${slug}`,
		label: `Category ${slug}`,
	})),
	...generateRandomCategorySlugs().slice(80000, 80100).map((slug) => ({
		href: `/category/${slug}`,
		label: `Category ${slug}`,
	})),
	...generateRandomCategorySlugs().slice(0, 100).map((slug) => ({
		href: `/tag/${slug}`,
		label: `Tag ${slug}`,
	})),
	...generateRandomCategorySlugs().slice(80000, 80100).map((slug) => ({
		href: `/tag/${slug}`,
		label: `Tag ${slug}`,
	})),
	{ href: '/all-tags', label: 'All Tags' },
	{ href: '/category/other', label: 'Category withouth generateStaticParams' },
]

/* eslint-disable react/function-component-definition */
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const catFact = await getRandomCatFact()
	return (
		<>
			<header>
				<h2>Cat fact (global layout):</h2>
				<p>
					<strong>
						{catFact.fact}
					</strong>
				</p>
			</header>

				<nav>
					<ul>
						{navItems.map(({ href, label }) => (
							<li key={href}>
								<Link href={href}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			<main>
				<h2>Page Template Content:</h2>
				{children}
			</main>
		</>
	);
}
