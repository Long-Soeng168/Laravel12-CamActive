import MyNoData from '@/components/my-no-data';
import { MyPagination } from '@/components/my-pagination';
import { MySearchTableData } from '@/components/my-search-table-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useTranslation from '@/hooks/use-translation';
import { Link, router, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';

const BlogPosts = () => {
    const { t, currentLocale } = useTranslation();

    const { tableData, pages_menus, allCategories } = usePage().props;
    // Get dynamic path

    return (
        <div className="mx-auto max-w-screen-xl px-6 py-16 xl:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight">
                    {pages_menus?.resources && currentLocale === 'kh' ? pages_menus?.resources.title_kh : pages_menus?.resources.title}
                </h2>
                <div className="flex w-full flex-wrap items-center justify-end gap-4 md:w-auto">
                    <div className="relative block flex-1 scroll-mt-20">
                        {/* <Search className="absolute inset-y-0 left-2.5 my-auto h-5 w-5" />
                        <Input
                            className="w-full flex-1 rounded border-none bg-slate-100/70 pl-10 shadow-none md:w-[280px] dark:bg-slate-800"
                            placeholder="Search"
                        /> */}
                        <MySearchTableData />
                    </div>
                    {/* <Select defaultValue="recommended">
                        <SelectTrigger className="w-[120px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recommended">Articles</SelectItem>
                            <SelectItem value="latest">Videos</SelectItem> 
                        </SelectContent>
                    </Select> */}
                    <Select
                        defaultValue={
                            typeof window !== 'undefined' ? (new URLSearchParams(window.location.search).get('category_code') ?? 'all') : 'all'
                        }
                        onValueChange={(value?: string) => {
                            if (typeof window === 'undefined') return;

                            const queryParams = new URLSearchParams(window.location.search);
                            const currentPath = window.location.pathname;

                            if (value === 'all') {
                                queryParams.delete('category_code');
                            } else {
                                queryParams.set('category_code', value);
                                queryParams.set('page', 1);
                            }
                            router.get(`${currentPath}?${queryParams.toString()}`);
                        }}
                    >
                        <SelectTrigger className="w-[220px] h-12">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">{t('All Resources')}</SelectItem>
                            {allCategories?.map((item) => (
                                <SelectItem key={item.id} value={item.code || '---'}>
                                    {currentLocale === 'kh' ? (item?.name_kh ?? item?.name) : item?.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tableData?.data?.map((item) => (
                    <Link href={`/resources/${item.id}`} prefetch key={item.id}>
                        <Card className="gap-2 overflow-hidden rounded-none border-none p-0 transition-all duration-300 hover:scale-105">
                            <CardHeader className="p-0">
                                <div className="flex aspect-video w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                                    <img
                                        src={`/assets/images/posts/thumb/${item?.images[0]?.image}`}
                                        className="mb-2 size-full shrink-0 object-cover"
                                        alt=""
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="m-0 text-[1.35rem] font-semibold tracking-tight">
                                    {currentLocale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                </h3>
                                <p className="text-muted-foreground mt-1">
                                    {currentLocale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            {tableData?.data?.length < 1 && <MyNoData />}
            <MyPagination />
        </div>
    );
};

export default BlogPosts;
