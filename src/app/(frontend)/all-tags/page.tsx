import { generateRandomCategorySlugs } from "@/data/categories";
import Link from "next/link";

const navItems = generateRandomCategorySlugs().slice(0, 20000).map((slug) => ({
		href: `/tag/${slug}`,
		label: `Tag ${slug}`,
	}))

import React from 'react'

type Props = {}

const AllTagsPage = (props: Props) => {
	return (
		<>
			<h3>All Tags</h3>
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

export default AllTagsPage