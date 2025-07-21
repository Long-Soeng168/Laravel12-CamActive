import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const Social = () => {
    const { links } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <div className="z-10 my-2 flex items-center justify-start gap-2 rounded-full text-2xl transition-all duration-300 *:transition-all *:duration-300">
            {links?.map((item) => (
                <button key={item.id} className="bg-background cursor-pointer rounded-full p-1 shadow-lg hover:-translate-y-5 hover:scale-125 dark:bg-[#191818]">
                    <a href={item.link || '#'} target="_blank">
                        <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                            <img src={`/assets/images/links/thumb/${item.image}`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                        </div>
                    </a>
                </button>
            ))}
        </div>
    );
};

export default Social;
