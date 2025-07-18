import { Card, CardContent } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const WhyWorkWithUs = () => {
    const { whyWorkWithUs } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8 px-6">
                <h2 className="text-foreground mb-2 text-3xl font-bold">
                    {currentLocale === 'kh' ? (whyWorkWithUs?.title_kh ?? whyWorkWithUs?.title) : whyWorkWithUs?.title}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {whyWorkWithUs?.children?.map((item) => (
                        <Card
                            key={item.id}
                            className="dark:bg-primary/15 border-border/50 transform rounded-xl border-none bg-transparent p-2 pt-4 transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex flex-col items-center space-y-4 px-0 py-0 text-center">
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
                                    className="line-clamp-5 text-lg text-gray-500"
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
        </section>
    );
};

export default WhyWorkWithUs;
