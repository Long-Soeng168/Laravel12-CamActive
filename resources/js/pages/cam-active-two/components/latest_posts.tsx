import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';

const LatestPosts = ({ items }: { items: any }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto max-w-screen-xl px-6 pb-20 xl:px-6">
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items?.map((item) => (
                    <Link href={`/resources/${item.id}`} key={item.id}>
                        <Card className="gap-2 bg-transparent overflow-hidden rounded-none border-none p-0 transition-all duration-300 hover:scale-105">
                            <CardHeader className="p-0">
                                <div className="flex aspect-video w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                                    <img
                                        src={`/assets/images/posts/thumb/${item?.images[0]?.image}`}
                                        className="mb-2 size-full shrink-0 object-cover"
                                        alt=""
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="m-0 text-[1.35rem] font-semibold tracking-tight">
                                    {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                </h3>
                                <p className="text-muted-foreground mt-1">
                                    {currentLocale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestPosts;
