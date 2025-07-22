import { Separator } from '@/components/ui/separator';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import Social from './social';

const Footer = () => {
    const { pages_menus, application_info, pages_menus_bottoms } = usePage().props;
    console.log(pages_menus_bottoms);
    const { t, currentLocale } = useTranslation();
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl">
                <Separator />
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:px-6">
                    {/* Logo & Tagline */}
                    <div className="col-span-full lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <img src="/assets/cam-active/Camactive-Logo-Light.png" className="h-24 rounded-full dark:hidden" alt="Cam-Active Logo" />
                            <img
                                src="/assets/cam-active/Camactive-Logo-Dark.png"
                                className="hidden h-24 rounded-full dark:block"
                                alt="Cam-Active Logo"
                            />
                            {/* <p className="text-xl font-bold">Cam Active</p> */}
                        </div>
                        <p className="text-muted-foreground mt-4">A Strategic Partner for Education & Impact.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="font-semibold">Quick Links</h6>
                        <ul className="mt-6 space-y-4">
                            {pages_menus?.products && (
                                <li>
                                    <Link href="/products" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.products.title_kh : pages_menus?.products.title}
                                    </Link>
                                </li>
                            )}
                            {pages_menus?.impact && (
                                <li>
                                    <Link href="/impact" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.impact.title_kh : pages_menus?.impact.title}
                                    </Link>
                                </li>
                            )}
                            {pages_menus?.resources && (
                                <li>
                                    <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.resources.title_kh : pages_menus?.resources.title}
                                    </Link>
                                </li>
                            )}
                            {pages_menus?.careers && (
                                <li>
                                    <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.careers.title_kh : pages_menus?.careers.title}
                                    </Link>
                                </li>
                            )}
                            {pages_menus?.about && (
                                <li>
                                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.about.title_kh : pages_menus?.about.title}
                                    </Link>
                                </li>
                            )}
                            {pages_menus?.contact && (
                                <li>
                                    <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                        {currentLocale === 'kh' ? pages_menus?.contact.title_kh : pages_menus?.contact.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <h6 className="font-semibold">{t('Contact')}</h6>
                        <ul className="text-muted-foreground mt-6 space-y-3 text-sm">
                            <li>{currentLocale === 'kh' ? application_info?.address_kh : application_info?.address}</li>
                            <li>{application_info?.phone}</li>
                            <li>
                                <a href={`mailto:${application_info?.email}`} className="hover:underline">
                                    {application_info?.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="col-span-full lg:col-span-1">
                        {/* <h6 className="font-semibold">Newsletter</h6> */}
                        {/* <form className="mt-6 flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="focus:ring-primary w-full rounded border border-gray-300 p-2 text-sm focus:ring-2 focus:outline-none"
                                />
                                <button type="submit" className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-sm font-medium text-white">
                                    Subscribe
                                </button>
                            </form> */}
                        {/* Social Icons */}
                        <h6 className="font-semibold">{t('Social Media')}</h6>
                        <Social />
                    </div>
                </div>

                <Separator />

                {/* Bottom bar */}
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-6">
                    <span className="text-muted-foreground text-sm">
                        {currentLocale === 'kh' ? application_info?.copyright_kh : application_info?.copyright}
                    </span>

                    <div className="text-muted-foreground flex justify-center space-x-6 text-sm">
                        {pages_menus_bottoms?.map((item, index) => (
                            <>
                                {index > 0 && <span>|</span>}
                                <Link href={`/detail_page/${item.id}`} className="hover:text-foreground">
                                    {currentLocale === 'kh' ? item?.title_kh || item?.title : item?.title}
                                </Link>
                            </>
                        ))}
                    </div>
                </div>

                {/* Privacy & Terms */}
            </div>
        </footer>
    );
};

export default Footer;
