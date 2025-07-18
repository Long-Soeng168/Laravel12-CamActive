import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Handshake } from 'lucide-react';
import HoverButton from './hover-button';

const HeroOne = () => {
    const { hero } = usePage().props;
    const { t, currentLocale } = useTranslation();

    if (!hero) {
        return null;
    }
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-screen-xl gap-12 px-6 py-20 lg:grid-cols-2">
                <div>
                    <h1 className="leading-tight font-bold lg:text-5xl">{currentLocale == 'kh' ? (hero.title_kh ?? hero.title) : hero.title}</h1>
                    <p
                        className="mt-6 max-w-[60ch] text-xl"
                        dangerouslySetInnerHTML={{
                            __html: currentLocale == 'kh' ? (hero.short_description_kh ?? hero.short_description) : hero.short_description,
                        }}
                    ></p>
                    <div className="mt-12 flex flex-wrap items-center gap-4">
                        <Link href={`/products`} prefetch>
                            <HoverButton
                                label={t('Explore Our Work')}
                                icon={<ArrowUpRight className="h-5 w-5" />}
                                gradientFrom="from-true-primary"
                                gradientTo="to-blue-600"
                            />
                        </Link>
                        <Link href={`/contact`} prefetch>
                            <Button variant="outline" size="lg">
                                <Handshake className="!h-5 !w-5" /> {t('Partner With Us')}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="aspect-video w-full max-w-full rounded-xl bg-transparent">
                    <img src={`/assets/images/pages/${hero.images[0]?.image}`} alt="" className="size-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroOne;
