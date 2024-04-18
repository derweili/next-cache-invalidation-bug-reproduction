import { RANDOM_CAT_FACT_TAG, UNSUED_CACHE_TAG } from '@/cache/tags';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * Route used to invalidate the random cat fact cache.
 */
export async function GET(request: Request) {

	const tags = [
		RANDOM_CAT_FACT_TAG,
		UNSUED_CACHE_TAG
	]

	if (tags.length === 0 ) {
		return NextResponse.json({ error: 'No tags or paths provided' }, { status: 400 });
	}

	tags.forEach((tag) => {
		revalidateTag(tag);
	});

	return NextResponse.json({ tags });
}
