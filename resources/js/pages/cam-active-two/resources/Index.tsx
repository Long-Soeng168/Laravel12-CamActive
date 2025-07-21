import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import CardWithButton from '../components/card-with-button';
import FeaturedMedia from '../components/featured-media';
import LatestPosts from '../components/latest_posts';
import SectionHeader from '../components/section-header';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Index = () => {
    const { categories_with_posts, medias, post_categories } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Resources & Reports" subtitle="Ideas that inspire. Knowledge that drives impact." />
            </div>
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
