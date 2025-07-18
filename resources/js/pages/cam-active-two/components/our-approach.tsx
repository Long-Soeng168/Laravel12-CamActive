import { Card, CardContent } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const OurApproach = () => {
    const { ourApproach } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section className="relative my-20">
            {ourApproach?.title && (
                <div className="mx-auto max-w-screen-xl space-y-8">
                    <h2 className="px-6 text-3xl font-bold tracking-tight">
                        {currentLocale === 'kh' ? (ourApproach?.title_kh ?? ourApproach?.title) : ourApproach?.title}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {ourApproach?.children?.map((item) => (
                            <Card
                                key={item.id}
                                className="dark:bg-primary/15 border-border/50 transform rounded-xl border-none transition-all duration-300 hover:scale-105"
                            >
                                <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                    <div className="flex size-20 shrink-0 justify-center rounded-lg md:justify-start">
                                        <img
                                            src={`/assets/images/pages/thumb/${item.images[0]?.image}`}
                                            className="mb-2 size-20 shrink-0 object-contain"
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="text-foreground text-2xl font-semibold">
                                        {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                    </h3>
                                    <p
                                        className="line-clamp-5 text-lg text-gray-500 dark:text-gray-400"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                currentLocale === 'kh'
                                                    ? (item?.short_description_kh ?? item?.short_description)
                                                    : item?.short_description,
                                        }}
                                    ></p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurApproach;
