import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';

const FeaturedMedia = () => {
    const { medias, post_categories, pages_menus } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-8 px-6 lg:flex-row">
            <div className="w-full max-w-full flex-1 rounded-md whitespace-nowrap lg:min-w-2xl">
                <div className="z-30 flex justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">{currentLocale === 'kh' ? (medias?.name_kh ?? medias?.name) : medias?.name}</h2>
                    <Link href={`/search_resources?category_code=${medias?.code}`}>
                        <Button size="sm" variant="outline">
                            {t('See More')} <ArrowRightIcon />
                        </Button>
                    </Link>
                </div>
                <div className="relative">
                    <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l to-transparent"></div>
                    <ScrollArea className="w-full">
                        <div className="flex space-x-4 p-4 pb-6">
                            {medias?.posts?.map((item) => (
                                <Link href={`/resources/${item.id}`} key={item.id}>
                                    <Card className="w-60 bg-transparent gap-2 overflow-hidden rounded-none border-none p-0 transition-all duration-300 hover:scale-105">
                                        <CardHeader className="p-0">
                                            <div className="flex aspect-video w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                                                <img
                                                    src={`/assets/images/posts/thumb/${item?.images[0]?.image}`}
                                                    className="mb-2 size-full shrink-0 object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-0 whitespace-normal">
                                            <h3 className="m-0 line-clamp-2 text-[1.35rem] font-semibold tracking-tight">
                                                {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                            </h3>
                                            <p className="text-muted-foreground mt-1 line-clamp-3">
                                                {currentLocale === 'kh'
                                                    ? (item?.short_description_kh ?? item?.short_description)
                                                    : item?.short_description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-xs">
                <h3 className="text-3xl font-bold tracking-tight">
                    {pages_menus.resources && currentLocale == 'kh' ? pages_menus.resources.title_kh : pages_menus.resources.title}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                    {post_categories?.map((item) => (
                        <Link
                            href={`/search_resources?category_code=${item.code}`}
                            className="text-primary flex text-base whitespace-pre-line hover:underline"
                            key={item}
                        >
                            <ChevronRightIcon />
                            {currentLocale === 'kh' ? (item?.name_kh ?? item?.name) : item?.name}
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default FeaturedMedia;
