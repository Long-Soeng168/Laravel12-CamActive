import MyNoData from '@/components/my-no-data';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const { item_show } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html =
                            currentLocale === 'kh' ? (item_show?.long_description_kh ?? item_show?.long_description) : item_show?.long_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title} />
            </Head>
            <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start justify-between gap-12 px-6 py-6 lg:flex-row lg:py-8 xl:px-6">
                <div className="flex-1">
                    <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">
                        {currentLocale === 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title}
                    </h3>
                    {item_show?.long_description ? (
                        <div className="prose ck-content max-w-none">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        currentLocale === 'kh'
                                            ? (item_show?.long_description_kh ?? item_show?.long_description)
                                            : item_show?.long_description,
                                }}
                            />
                        </div>
                    ) : (
                        <MyNoData />
                    )}
                </div>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
