import useTranslation from '@/hooks/use-translation';

const PageHeading = ({ item }: { item: any }) => {
    const { t, currentLocale } = useTranslation();

    return (
        <div
            className="bg-primary/10 text-foreground prose-headings:text-foreground prose prose-headings:m-0 prose-p:mt-4 prose-p:text-xl mb-20 max-w-none py-10"
            dangerouslySetInnerHTML={{
                __html: currentLocale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description,
            }}
        ></div>
    );
};

export default PageHeading;
