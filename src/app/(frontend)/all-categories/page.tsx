import { generateRandomCategorySlugs } from "@/data/categories";
import Link from "next/link";

const navItems = generateRandomCategorySlugs().slice(0, 20000).map((slug) => ({
		href: `/category/${slug}`,
		label: `Category ${slug}`,
	}))

import React from 'react'

type Props = {}

const AllCategoriesPage = (props: Props) => {
	return (
		<>
			<h3>All Categories</h3>
			<ul>
				{navItems.map(({ href, label }) => (
					<li key={href}>
						<Link href={href}>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default AllCategoriesPage