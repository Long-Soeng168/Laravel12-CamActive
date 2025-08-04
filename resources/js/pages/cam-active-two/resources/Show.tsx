import IframeViewer from '@/components/iframe-viewer';
import MyNoData from '@/components/my-no-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRightIcon } from 'lucide-react';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const { item_show, relate_items, post_categories, pages_menus } = usePage().props;
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
            <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-12 px-6 py-6 lg:flex-row lg:py-8 xl:px-6">
                <div>
                    <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">
                        {currentLocale === 'kh' ? (item_show?.title_kh ?? item_show?.title) : item_show?.title}
                    </h3>

                    <div className="mb-4 h-auto w-full shrink-0 overflow-hidden rounded-lg">
                        {item_show?.type == 'video' ? (
                            <IframeViewer className='aspect-video' url={`${item_show?.link}`} />
                        ) : (
                            <img src={`/assets/cam-active/posts/image2.jpg`} className="mb-2 size-full shrink-0 object-cover" alt="" />
                        )}
                    </div>
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

                    <h2 className="mt-20 text-3xl font-bold tracking-tight">{t('Related')}</h2>

                    <div className="mt-4 space-y-12">
                        {relate_items?.map((item) => (
                            <Link href={`/resources/${item.id}`} key={item.id}>
                                <Card className="flex flex-col overflow-hidden rounded-md border-none shadow-none sm:flex-row sm:items-center">
                                    {/* <CardHeader className="px-0 sm:p-0">
                                        <div className="bg-muted aspect-video rounded-lg sm:w-64">
                                            <img
                                                className="h-full max-h-[600px] w-full rounded-md object-cover"
                                                src={`/assets/images/posts/thumb/${item.images[0].image}`}
                                                alt=""
                                            />
                                        </div>
                                    </CardHeader> */}
                                    <CardHeader className="p-0">
                                        <div className="bg-muted aspect-video w-52 overflow-hidden rounded-md border-b">
                                            <img src={`/assets/images/posts/${item.images[0]?.image}`} className="size-full object-cover" alt="" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex flex-col px-0 py-0 sm:px-4">
                                        <h3 className="line-clamp-2 text-2xl font-semibold tracking-tight">
                                            {currentLocale === 'kh' ? (item.title_kh ?? item.title) : item.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 line-clamp-3">
                                            {currentLocale === 'kh' ? (item.short_description_kh ?? item.short_description) : item.short_description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                <aside className="sticky top-8 w-full shrink-0 lg:max-w-sm">
                    <h3 className="text-3xl font-bold tracking-tight">
                        {pages_menus.resources && currentLocale == 'kh' ? pages_menus.resources.title_kh : pages_menus.resources.title}
                    </h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                        {post_categories?.map((category) => (
                            <Link
                                href={`/search_resources?category_code=${category.code}`}
                                key={category?.id}
                                className="bg-primary/5 hover:bg-primary/10 flex cursor-pointer items-center justify-between gap-2 rounded-md p-3"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <img className="size-6" src={`/assets/images/post_categories/thumb/${category.image}`} alt="" /> */}
                                    <div className="bg-primary/20 flex aspect-square w-8 shrink-0 items-center justify-center rounded-full shadow-md lg:w-8">
                                        <ChevronRightIcon className="text-primary size-6" />
                                    </div>
                                    <span className="font-medium">
                                        {currentLocale === 'kh' ? (category.name_kh ?? category.name) : category.name}
                                    </span>
                                </div>
                                {/* <Badge className="min-h-6 min-w-6 rounded-full px-1.5">{category.posts_count}</Badge> */}
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
