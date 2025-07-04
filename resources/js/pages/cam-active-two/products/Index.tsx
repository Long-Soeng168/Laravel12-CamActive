import SectionHeader from '../components/section-header';
import TailoredSolutionsCard from '../components/tailored-solutions-card';
import WhatWeDo from '../components/what-we-do';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Solutions = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 text-primary mb-20 py-10">
                <SectionHeader title="Our Products" subtitle="Empowering education. Streamlining logistics. Building partnerships." />
            </div>
            <WhatWeDo />
            <div className="mb-20 flex justify-center">
                <TailoredSolutionsCard />
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
