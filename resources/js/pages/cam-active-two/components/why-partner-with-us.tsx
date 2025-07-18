import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

const WhyPartnerWithUs = () => {
    const { whyWorkWithUs, whoWeWorkWith } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <section className="pb-20">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Left Section */}
                    {whyWorkWithUs.title && (
                        <div className="flex-1">
                            <h2 className="text-foreground mb-2 text-3xl font-bold">
                                {currentLocale === 'kh' ? (whyWorkWithUs.title_kh ?? whyWorkWithUs.title) : whyWorkWithUs.title}
                            </h2>
                            {/* <p className='mb-2'>We’re not just service providers—we’re partners in progress.</p> */}
                            <ul className="text-foreground mt-4 space-y-4 text-lg">
                                <li
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            currentLocale === 'kh'
                                                ? (whyWorkWithUs.short_description_kh ?? whyWorkWithUs.short_description)
                                                : whyWorkWithUs.short_description,
                                    }}
                                ></li>
                                <li>
                                    <Link href="/impact" prefetch>
                                        <Button size="lg" variant="outline">
                                            {t('Learn More')} <ArrowUpRight className="!h-5 !w-5" />
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Right Section */}
                    {whoWeWorkWith.title && (
                        <div className="flex-2">
                            <h2 className="text-foreground mb-2 text-3xl font-bold">
                                {currentLocale === 'kh' ? (whoWeWorkWith.title_kh ?? whoWeWorkWith.title) : whoWeWorkWith.title}
                            </h2>
                            {/* <p className='mb-2'>We proudly collaborate with:</p> */}
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
                                {whoWeWorkWith?.children?.map((item) => (
                                    <Link
                                        href={`/who-we-work-with/${item.id}`}
                                        key={item.id}
                                        className="bg-background flex flex-col items-center justify-start rounded-xl border border-dashed border-gray-300 p-2 py-4 text-center transition hover:border-solid hover:shadow-md"
                                    >
                                        <img
                                            src={`/assets/images/pages/thumb/${item.images[0]?.image}`}
                                            alt={item.title}
                                            className="mb-4 h-16 w-16 object-contain"
                                        />
                                        <p className="text-foreground text-base font-medium">
                                            {currentLocale === 'kh' ? (item.title_kh ?? item.title) : item.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerWithUs;
