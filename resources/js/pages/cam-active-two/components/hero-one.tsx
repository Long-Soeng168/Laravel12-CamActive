import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Handshake } from 'lucide-react';
import HoverButton from './hover-button';

const HeroOne = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-screen-xl gap-12 px-6 py-20 lg:grid-cols-2">
                <div>
                    <h1 className="leading-tight font-bold lg:text-5xl">Driving Educational Excellence</h1>
                    <p className="mt-6 max-w-[60ch] text-xl">Your partner in progress, one product, one partner, and one community at a time.</p>
                    <div className="mt-12 flex flex-wrap items-center gap-4">
                        <Link href={`/products`} prefetch>
                            <HoverButton
                                label="Explore Our Work"
                                icon={<ArrowUpRight className="h-5 w-5" />}
                                gradientFrom="from-true-primary"
                                gradientTo="to-blue-600"
                                onClick={() => console.log('Explore clicked')}
                            />
                        </Link>
                        <Link href={`/contact`} prefetch>
                            <Button variant="outline" size="lg">
                                <Handshake className="!h-5 !w-5" /> Partner With Us
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="aspect-video w-full max-w-full rounded-xl bg-transparent">
                    <img src="/assets/cam-active/hero1.png" alt="" className="size-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroOne;
