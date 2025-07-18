import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import CardWithButton from './card-with-button';
 
const StoryFromTheField = () => {
    const { storiesFromTheField, voicesImpact } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">
                    {currentLocale === 'kh' ? (storiesFromTheField?.title_kh ?? storiesFromTheField?.title) : storiesFromTheField?.title}
                </h2>

                <div className="mt-4">
                    {storiesFromTheField?.children?.map((item) => (
                        <Link href={`/impact/${item.id}`}>
                            <Card
                                key={item.id}
                                className="bg-primary/10 mt-4 flex cursor-pointer flex-row gap-0 overflow-hidden rounded-xl border border-none border-gray-200 text-start shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                            >
                                <CardHeader>
                                    <div className="aspect-square size-20 rounded-lg">
                                        <img
                                            src={`/assets/images/pages/thumb/${item.images[0]?.image}`}
                                            className="size-20 shrink-0 object-contain"
                                            alt=""
                                        />
                                    </div>
                                </CardHeader>

                                <CardContent className="flex flex-col justify-center p-0 pr-4">
                                    <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                        {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                    </h3>
                                    <p
                                        className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                currentLocale === 'kh'
                                                    ? (item?.short_description_kh ?? item?.short_description)
                                                    : item?.short_description,
                                        }}
                                    ></p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                <h3 className="text-3xl font-bold tracking-tight">
                    {currentLocale === 'kh' ? (voicesImpact?.title_kh ?? voicesImpact?.title) : voicesImpact?.title}
                </h3>
                <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                    {voicesImpact?.children?.map((item) => (
                        <Card
                            key={item.id}
                            className="flex bg-transparent flex-row gap-4 overflow-hidden rounded-xl border border-none border-gray-200 p-2 shadow-none transition sm:flex-row"
                        >
                            <CardHeader className="px-0">
                                <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                    <img src={`/assets/icons/user.png`} className="mb-2 size-14 shrink-0 object-contain" alt="" />
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col justify-center p-0">
                                <p
                                    className="text-foreground text-base whitespace-pre-line"
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
                <CardWithButton className='mt-8' />
                <Card className="bg-primary/10 mt-8 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">What’s Next</h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            We're expanding our reach, deepening our partnerships, and exploring new ways to use technology and collaboration to drive
                            impact.
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`/contact`} prefetch>
                            <Button>Partner With Us</Button>
                        </Link>
                        <Link href={`/careers`}>
                            <Button variant="outline">Join Our Team</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    );
};

export default StoryFromTheField;
