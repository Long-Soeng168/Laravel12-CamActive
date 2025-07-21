import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

export default function CardWithButton({ className }: { className?: string }) {
    const { heading1 } = usePage().props;
    const { currentLocale } = useTranslation();
    return (
        <Card className={cn('bg-primary/10 w-full border-none px-6', className)}>
            <CardHeader className="px-0">
                <CardTitle className="text-2xl font-bold">
                    {currentLocale === 'kh' ? (heading1?.title_kh ?? heading1?.title) : heading1?.title}
                </CardTitle>
                <CardDescription className="text-foreground text-base">
                    {currentLocale === 'kh' ? (heading1?.short_description_kh ?? heading1?.short_description) : heading1?.short_description}
                </CardDescription>
            </CardHeader>
            <div>
                {heading1?.button1_title && (
                    <Button size="lg">
                        <Link href={heading1?.button1_link}>
                            {currentLocale === 'kh' ? (heading1?.button1_title_kh ?? heading1?.button1_title) : heading1?.button1_title}
                        </Link>
                    </Button>
                )}
                {heading1?.button2_title && (
                    <Button size="lg" variant="outline" className='ml-4'>
                        <Link href={heading1?.button2_link}>
                            {currentLocale === 'kh' ? (heading1?.button2_title_kh ?? heading1?.button2_title) : heading1?.button2_title}
                        </Link>
                    </Button>
                )}
            </div>
        </Card>
    );
}
