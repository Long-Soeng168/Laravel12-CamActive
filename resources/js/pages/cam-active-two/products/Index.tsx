import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import CardWithButton from '../components/card-with-button';
import PageHeading from '../components/page-heading';
import WhatWeDo from '../components/what-we-do';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Solutions = () => {
    const { products } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (products?.title_kh ?? products?.title) : products?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html =
                            currentLocale === 'kh' ? (products?.short_description_kh ?? products?.short_description) : products?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (products?.title_kh ?? products?.title) : products?.title} />
                {products?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${products?.images[0]?.image}`} />}
            </Head>
            <PageHeading item={products} />
            <WhatWeDo />
            <div className="mb-20 flex justify-center">
                <CardWithButton className="max-w-lg text-center" />
            </div>
            {/* <HeroTwo />
            <OurServices />
            <OurResources />
            <CatalogFunctionality />
            <OurIntegratedSolutions />
            <TechnologyBasedSolutions />
            <WhyChooseUs /> */}
        </CamActiveLayout>
    );
};

export default Solutions;
