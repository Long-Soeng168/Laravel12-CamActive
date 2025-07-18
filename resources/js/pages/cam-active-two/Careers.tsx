import { usePage } from '@inertiajs/react';
import CurrentOpportunities from './components/current-opportunities';
import PageHeading from './components/page-heading';
import SectionHeader from './components/section-header';
import WhyWorkWithUs from './components/why-work-with-us';
import CamActiveLayout from './layouts/CamActiveLayout';

const Careers = () => {
    const { career } = usePage().props;
    return (
        <CamActiveLayout>
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
