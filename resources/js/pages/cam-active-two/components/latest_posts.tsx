import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

const LatestPosts = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-6 pb-20 xl:px-6">
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((i) => (
                    <Link href={'/posts/1'} key={i}>
                        <Card className="gap-2 overflow-hidden rounded-none border-none p-0 transition-all duration-300 hover:scale-105">
                            <CardHeader className="p-0">
                                <div className="flex aspect-video w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                                    <img src={`/assets/cam-active/posts/image2.jpg`} className="mb-2 size-full shrink-0 object-cover" alt="" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="m-0 text-[1.35rem] font-semibold tracking-tight">
                                    A beginner&apos;s guide to blackchain for engineers
                                </h3>
                                <p className="text-muted-foreground mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
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
