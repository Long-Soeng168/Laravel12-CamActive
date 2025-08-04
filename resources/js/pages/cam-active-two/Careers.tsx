import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import CurrentOpportunities from './components/current-opportunities';
import PageHeading from './components/page-heading';
import WhyWorkWithUs from './components/why-work-with-us';
import CamActiveLayout from './layouts/CamActiveLayout';

const Careers = () => {
    const { career } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (career?.title_kh ?? career?.title) : career?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html = currentLocale === 'kh' ? (career?.short_description_kh ?? career?.short_description) : career?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (career?.title_kh ?? career?.title) : career?.title} />
                {career?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${career?.images[0]?.image}`} />}
            </Head>
            <PageHeading item={career} />
            <WhyWorkWithUs />
            <div>
                <CurrentOpportunities />
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

export default Careers;
