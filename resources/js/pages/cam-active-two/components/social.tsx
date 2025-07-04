const Social = () => {
    return (
        <div className="z-10 my-2 flex items-center justify-start gap-2 rounded-full text-2xl transition-all duration-300 *:transition-all *:duration-300">
            <button className="cursor-pointer rounded-full bg-background p-1 shadow-lg hover:-translate-y-5 hover:scale-125 dark:bg-[#191818]">
                <a href="www.facebook.com/camactivenet" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/facebook.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
            </button>
            <button className="cursor-pointer rounded-full bg-background p-1 shadow-lg hover:-translate-y-5 hover:scale-125 dark:bg-[#191818]">
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/instagram.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
            </button>
            <button className="cursor-pointer rounded-full bg-background p-1 shadow-lg hover:-translate-y-5 hover:scale-125 dark:bg-[#191818]">
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/linkedin.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
            </button>
            <button className="cursor-pointer rounded-full bg-background p-1 shadow-lg hover:-translate-y-5 hover:scale-125 dark:bg-[#191818]">
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/youtube.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
            </button>
        </div>
    );
};

export default Social;
