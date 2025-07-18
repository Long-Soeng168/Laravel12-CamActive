import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import OurApproach from './components/our-approach';
import OurTeam from './components/our-team';
import PageHeading from './components/page-heading';
import CamActiveLayout from './layouts/CamActiveLayout';

const Careers = () => {
    const { about, ourMission, ourVision, ourStory } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <PageHeading item={about} />
            <div className="mx-auto mt-20 max-w-screen-xl">
                <Card
                    key={ourMission.id}
                    className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row"
                >
                    <CardHeader className="pl-0">
                        <div className="flex size-16 shrink-0 justify-center rounded-lg md:justify-start">
                            <img
                                src={`/assets/images/pages/thumb/${ourMission.images[0]?.image}`}
                                className="mb-2 size-16 shrink-0 object-contain"
                                alt=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center p-0">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {currentLocale === 'kh' ? (ourMission?.title_kh ?? ourMission?.title) : ourMission?.title}
                        </h2>
                        <p
                            className="text-foreground mt-2 line-clamp-3 max-w-[70ch] text-base lg:text-lg"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? (ourVision?.short_description_kh ?? ourVision?.short_description)
                                        : ourVision?.short_description,
                            }}
                        ></p>
                    </CardContent>
                </Card>
                <Card
                    key={ourVision.id}
                    className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row"
                >
                    <CardHeader className="pl-0">
                        <div className="flex size-16 shrink-0 justify-center rounded-lg md:justify-start">
                            <img
                                src={`/assets/images/pages/thumb/${ourVision.images[0]?.image}`}
                                className="mb-2 size-16 shrink-0 object-contain"
                                alt=""
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center p-0">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {currentLocale === 'kh' ? (ourVision?.title_kh ?? ourVision?.title) : ourVision?.title}
                        </h2>
                        <p
                            className="text-foreground mt-2 line-clamp-3 max-w-[70ch] text-base lg:text-lg"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? (ourVision?.short_description_kh ?? ourVision?.short_description)
                                        : ourVision?.short_description,
                            }}
                        ></p>
                    </CardContent>
                </Card>
            </div>
            <div>
                <OurApproach />
                <OurTeam />
            </div>
            <div className="mx-auto mt-20 max-w-screen-xl">
                <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            {currentLocale === 'kh' ? (ourStory?.title_kh ?? ourStory?.title) : ourStory?.title}
                        </h2>
                        <div
                            className="prose max-w-none text-lg text-foreground"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? (ourStory?.long_description_kh ?? ourStory?.long_description)
                                        : ourStory?.long_description,
                            }}
                        ></div>
                    </CardContent>
                </Card>
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
