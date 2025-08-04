import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import HeroOne from './components/hero-one';
import LatestPosts from './components/latest_posts';
import WhatWeDo from './components/what-we-do';
import WhyPartnerWithUs from './components/why-partner-with-us';
import CamActiveLayout from './layouts/CamActiveLayout';

const Index = () => {
    const { latest_resources, pages_menus, hero } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (hero?.title_kh ?? hero?.title) : hero?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html = currentLocale === 'kh' ? (hero?.short_description_kh ?? hero?.short_description) : hero?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (hero?.title_kh ?? hero?.title) : hero?.title} />
                {hero?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${hero?.images[0]?.image}`} />}
            </Head>
            <HeroOne />
            <WhatWeDo />
            <WhyPartnerWithUs />
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-end justify-between gap-4 px-6">
                <div className="z-30 flex w-full justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">
                        {pages_menus.resources && currentLocale == 'kh' ? pages_menus.resources.title_kh : pages_menus.resources.title}
                    </h2>
                    <Link href={`/resources`}>
                        <Button size="sm" variant="outline">
                            {t('See More')} <ArrowRightIcon />
                        </Button>
                    </Link>
                </div>
            </div>
            <LatestPosts items={latest_resources} />

            {/* <OurExpertise />
            <FeaturedSolutions />
            <WhyChooseUs />
            <Testimonials /> */}
        </CamActiveLayout>
    );
};

export default Index;
