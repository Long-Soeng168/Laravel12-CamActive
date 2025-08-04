import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import CardWithButton from '../components/card-with-button';
import FeaturedMedia from '../components/featured-media';
import LatestPosts from '../components/latest_posts';
import PageHeading from '../components/page-heading';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Index = () => {
    const { categories_with_posts, resource } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (resource?.title_kh ?? resource?.title) : resource?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html =
                            currentLocale === 'kh' ? (resource?.short_description_kh ?? resource?.short_description) : resource?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (resource?.title_kh ?? resource?.title) : resource?.title} />
                {resource?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${resource?.images[0]?.image}`} />}
            </Head>
            {resource?.id && <PageHeading item={resource} />}
            <div className="my-20">
                {categories_with_posts?.map((category) => (
                    <>
                        <div className="mx-auto flex max-w-screen-xl flex-wrap items-end justify-between gap-4 px-6">
                            <div className="z-30 flex w-full justify-between">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {currentLocale === 'kh' ? (category?.name_kh ?? category?.name) : category?.name}
                                </h2>
                                <Link href={`/search_resources?category_code=${category?.code}`}>
                                    <Button size="sm" variant="outline">
                                        {t('See More')} <ArrowRightIcon />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <LatestPosts items={category?.posts} />
                    </>
                ))}

                <FeaturedMedia />

                <div className="mx-auto max-w-screen-xl px-6">
                    <CardWithButton />
                </div>
            </div>
        </CamActiveLayout>
    );
};

export default Index;
