import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import ByTheNumbers from '../components/by-the-numbers';
import PageHeading from '../components/page-heading';
import StoryFromTheField from '../components/story-from-the-field';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Impact = () => {
    const { impact } = usePage().props;
    const { t, currentLocale } = useTranslation();
    
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (impact?.title_kh ?? impact?.title) : impact?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html = currentLocale === 'kh' ? (impact?.short_description_kh ?? impact?.short_description) : impact?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (impact?.title_kh ?? impact?.title) : impact?.title} />
                {impact?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${impact?.images[0]?.image}`} />}
            </Head>
            <PageHeading item={impact} />
            <ByTheNumbers />
            <div>
                <StoryFromTheField />
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

export default Impact;
