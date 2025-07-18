import { usePage } from '@inertiajs/react';
import ByTheNumbers from '../components/by-the-numbers';
import SectionHeader from '../components/section-header';
import StoryFromTheField from '../components/story-from-the-field';
import CamActiveLayout from '../layouts/CamActiveLayout';
import PageHeading from '../components/page-heading';

const Impact = () => {
    const { impact } = usePage().props;
    return (
        <CamActiveLayout>
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
