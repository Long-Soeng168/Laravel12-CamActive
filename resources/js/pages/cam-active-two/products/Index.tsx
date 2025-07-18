import { usePage } from '@inertiajs/react';
import PageHeading from '../components/page-heading';
import CardWithButton from '../components/card-with-button';
import WhatWeDo from '../components/what-we-do';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Solutions = () => {
    const { products } = usePage().props;

    return (
        <CamActiveLayout>
            <PageHeading item={products} />
            <WhatWeDo />
            <div className="mb-20 flex justify-center">
                <CardWithButton className='max-w-lg text-center' />
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
