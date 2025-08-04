import { usePage } from '@inertiajs/react';
import WhatWeDoCard from './what-we-do-card';
import useTranslation from '@/hooks/use-translation';


const WhatWeDo = () => {
    const { products } = usePage().props;     

    if (!products) {
        return null;
    }
    return (
        <section className="relative pb-20">
            <div className="mx-auto max-w-screen-xl space-y-8 text-center">
                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.children?.map((item) => (
                        <WhatWeDoCard key={item.id} item={item} />
                    ))}
                    {/* <Card
                            key={item.id}
                            className="dark:bg-primary/15 border-border/50 transform cursor-pointer rounded-xl border shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                    <img
                                        src={`/assets/cam-active/what-we-do/${item.image}`}
                                        className="mb-2 size-20 shrink-0 object-contain"
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-foreground text-2xl font-semibold">{item.title}</h3>
                                <p className="line-clamp-3 text-lg text-gray-500">{item.description}</p>
                            </CardContent>
                        </Card> */}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
