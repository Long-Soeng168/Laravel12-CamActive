import MyNoData from '@/components/my-no-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { Head, Link, usePage } from '@inertiajs/react';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const { item_show, relate_items } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <CamActiveLayout>
            <Head>
                <title>{currentLocale == 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title}</title>
                <meta
                    name="description"
                    content={(() => {
                        const html =
                            currentLocale === 'kh' ? (item_show?.short_description_kh ?? item_show?.short_description) : item_show?.short_description;
                        const temp = document.createElement('div');
                        temp.innerHTML = html;
                        return temp.textContent?.slice(0, 160) || '';
                    })()}
                />
                <meta property="og:title" content={currentLocale == 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title} />
                {item_show?.images[0]?.image && <meta property="og:image" content={`/assets/images/pages/thumb/${item_show?.images[0]?.image}`} />}
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

                <aside className="w-full shrink-0 lg:max-w-sm">
                    <h3 className="text-2xl font-bold tracking-tight">
                        {currentLocale === 'kh' ? (item_show?.parent?.title_kh ?? item_show?.parent?.title) : item_show?.parent?.title}
                    </h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                        {relate_items?.map((item) => (
                            <Link href={`/impact/${item.id}`}>
                                <Card
                                    key={item.id}
                                    className="bg-primary/10 mt-4 flex cursor-pointer flex-row gap-0 overflow-hidden rounded-xl border border-none border-gray-200 text-start shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                                >
                                    <CardHeader>
                                        <div className="aspect-square size-20 rounded-lg">
                                            <img
                                                src={`/assets/images/pages/${item.images[0]?.image}`}
                                                className="size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex flex-col justify-center p-0 pr-4">
                                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                            {currentLocale === 'kh' ? (item.title_kh ?? item.title) : item.title}
                                        </h3>
                                        <p
                                            className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    currentLocale === 'kh'
                                                        ? (item.short_description_kh ?? item.short_description)
                                                        : item.short_description,
                                            }}
                                        ></p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
