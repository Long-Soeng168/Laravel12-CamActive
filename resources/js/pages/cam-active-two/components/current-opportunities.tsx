import MyNoData from '@/components/my-no-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { PaperclipIcon } from 'lucide-react';
import HowToApply from './how-to-apply';

const data = [
    {
        id: 1,
        title: 'Education Program Officer',
        short_description: 'Help design and implement learning initiatives in partnership with schools and NGOs.',
    },
    {
        id: 2,
        title: 'Logistics Coordinator',
        short_description: 'Manage supply chains and ensure timely delivery of educational resources.',
    },
    {
        id: 3,
        title: 'Partnership Development Lead',
        short_description: 'Build relationships with stakeholders and lead collaborative projects.',
    },
    {
        id: 4,
        title: 'Communications & Content Specialist',
        short_description: 'Share our story through writing, media, and digital platforms.',
    },
];

const CurrentOpportunities = () => {
    const { opportunities, heading1 } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{t('Current Opportunities')}</h2>

                <div className="mt-4 space-y-4">
                    {opportunities.map((item) => (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card
                                    key={item.id}
                                    className="bg-primary/10 flex cursor-pointer flex-row justify-between gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                                >
                                    {/* <CardHeader>
                                <div className="bg-primary/20 aspect-square w-20 shrink-0 rounded-lg lg:w-20" />
                            </CardHeader> */}

                                    <CardContent className="flex flex-col justify-center p-0">
                                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                            {currentLocale === 'kh' ? (item?.name_kh ?? item?.name) : item?.name}
                                        </h3>
                                        <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">
                                            {currentLocale === 'kh'
                                                ? (item?.short_description_kh ?? item?.short_description)
                                                : item?.short_description}
                                        </p>
                                    </CardContent>
                                    <Button size="sm">{t('Apply Now')}</Button>
                                </Card>
                            </DialogTrigger>
                            <DialogContent
                                showCloseButton={true}
                                className="bg-background text-foreground min-w-[95%] gap-0 rounded-none p-0 sm:min-w-[95%]"
                            >
                                <DialogHeader>
                                    <DialogTitle className="hidden"></DialogTitle>
                                    <DialogDescription className="hidden"></DialogDescription>
                                </DialogHeader>
                                <div>
                                    <div>
                                        <h1 className="text-primary p-4 pb-0 text-xl font-bold">
                                            {currentLocale === 'kh' ? (item?.name_kh ?? item?.name) : item?.name}
                                        </h1>
                                    </div>
                                    <div className="text-foreground flex flex-col justify-between gap-4 p-2 lg:flex-row lg:p-4">
                                        <div className="w-full">
                                            {item?.qualification ? (
                                                <div
                                                    className="prose max-w-none"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.qualification,
                                                    }}
                                                ></div>
                                            ) : (
                                                <div className="flex w-full justify-center">
                                                    <MyNoData />
                                                </div>
                                            )}
                                        </div>

                                        <div className="w-full shrink-0 space-y-4 lg:w-md">
                                            {/* <div className="w-full max-w-full">
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        id="name"
                                                        type="name"
                                                        placeholder="Name"
                                                        className="text-foreground w-full max-w-full rounded-none"
                                                    />
                                                </div> */}
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">Position</Label>
                                                <Input
                                                    id="position"
                                                    type="position"
                                                    placeholder="Position"
                                                    disabled
                                                    value="ELV Design Engineer"
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none disabled:opacity-80"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="message"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            {/* <div className="w-full max-w-full">
                                                    <Label htmlFor="email">Phone number</Label>
                                                    <Input
                                                        id="phone"
                                                        type="phone"
                                                        placeholder="Phone"
                                                        className="text-foreground w-full max-w-full rounded-none"
                                                    />
                                                </div> */}
                                            <div className="flex w-full max-w-full justify-end gap-4">
                                                <Button variant="secondary" className="rounded-none">
                                                    <PaperclipIcon /> Attach CV
                                                </Button>
                                                <Button variant="secondary" className="rounded-none">
                                                    Apply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                <Card className="bg-primary/10 mt-12 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                            {currentLocale === 'kh' ? (heading1?.title_kh ?? heading1?.title) : heading1?.title}
                        </h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            {currentLocale === 'kh' ? (heading1?.short_description_kh ?? heading1?.short_description) : heading1?.short_description}
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`#`} prefetch>
                            <Button>{t('Apply Now')}</Button>
                        </Link>
                    </CardFooter>
                </Card>
                <h3 className="mt-10 text-3xl font-bold tracking-tight">{t('How to Apply')}</h3>
                <HowToApply />
            </aside>
        </div>
    );
};

export default CurrentOpportunities;
