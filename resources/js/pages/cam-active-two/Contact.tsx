import { Card, CardContent } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import PageHeading from './components/page-heading';
import SendUsMessage from './components/sent-us-message';
import Social from './components/social';
import CamActiveLayout from './layouts/CamActiveLayout';

const Contact = () => {
    const { contact, application_info } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (contact?.title_kh ?? contact?.title) : contact?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html =
                            currentLocale === 'kh' ? (contact?.short_description_kh ?? contact?.short_description) : contact?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (contact?.title_kh ?? contact?.title) : contact?.title} />
                {contact?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${contact?.images[0]?.image}`} />}
            </Head>
            <PageHeading item={contact} />
            <div className="mt-20">
                <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
                    <div>
                        <div className="space-y-10">
                            {contact?.children?.map((item) => (
                                <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 bg-transparent py-0 shadow-none transition sm:flex-row">
                                    {/* <CardHeader className="pl-0">
                                    <div className="bg-primary/20 flex aspect-square w-24 shrink-0 items-center justify-center rounded-2xl shadow-md lg:w-28">
                                        <TargetIcon className="text-primary size-20" />
                                    </div>
                                </CardHeader> */}
                                    <CardContent className="flex flex-col justify-center p-0">
                                        <h2 className="text-3xl font-bold tracking-tight">
                                            {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                        </h2>
                                        <div
                                            className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    currentLocale === 'kh'
                                                        ? (item?.short_description_kh ?? item?.short_description)
                                                        : item?.short_description,
                                            }}
                                        ></div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Social />
                        </div>
                    </div>
                    <aside className="w-full shrink-0 lg:max-w-lg">
                        <h3 className="text-3xl font-bold tracking-tight">{t('Send Us a Message')}</h3>
                        <SendUsMessage />
                        {application_info?.google_map && (
                            <div className="mt-10 overflow-hidden rounded-xl">
                                <iframe className="h-[300px]" src={application_info?.google_map} width="100%" height="100%" loading="lazy"></iframe>
                            </div>
                        )}
                    </aside>
                </div>
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

export default Contact;
