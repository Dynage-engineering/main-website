import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { SITE } from '../consts';

export async function GET(context) {
    return rss({
        title: SITE.TITLE,
        description: SITE.DESCRIPTION,
        site: context.site || SITE.URL,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/*.{md,mdx}'),
        ),
    });
}