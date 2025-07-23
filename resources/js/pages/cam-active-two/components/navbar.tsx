import MySelectLanguageSwitch from '@/components/my-select-language-switch';
import ToggleModeSwitch from '@/components/toggle-mode-switch';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Menu } from './ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { url } = usePage();
    const { pages_menus, application_info } = usePage().props;
    const { t, currentLocale } = useTranslation();
    const isActive = (path: string) => (url === path ? 'text-primary font-bold underline underline-offset-4' : 'hover:text-primary');
    return (
        <div className={cn('mx-auto flex max-w-screen-xl items-center justify-between px-4 py-1.5', className)}>
            <Link href={'/'} prefetch>
                <img
                    src={`/assets/images/application_info/${application_info?.image}`}
                    className="h-14 rounded-full dark:hidden"
                    alt="Cam-Active Logo"
                />
                <img
                    src={`/assets/images/application_info/${application_info?.image_dark_mode}`}
                    className="hidden h-14 rounded-full dark:block"
                    alt="Cam-Active Logo"
                />
                {/* <img src="/assets/cam-active/Camactive-Logo-Dark.png" className="hidden h-14 rounded-full dark:block" alt="Cam-Active Logo" /> */}
                {/* <img src="/assets/icons/image-icon.png" className="h-20 p-2" /> */}
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="flex md:hidden">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[350px] p-4 sm:w-[450px]">
                    <div className="mt-12 space-y-6 text-base">
                        <Link href="/" className={`hover:text-foreground block text-lg font-semibold ${isActive('/')}`}>
                            {t('Home')}
                        </Link>
                        {pages_menus.products && (
                            <Link href="/products" className={`hover:text-foreground block text-lg font-semibold ${isActive('/products')}`}>
                                {currentLocale == 'kh' ? pages_menus.products.title_kh : pages_menus.products.title}
                            </Link>
                        )}
                        {pages_menus.impact && (
                            <Link href="/impact" className={`hover:text-foreground block text-lg font-semibold ${isActive('/impact')}`}>
                                {currentLocale == 'kh' ? pages_menus.impact.title_kh : pages_menus.impact.title}
                            </Link>
                        )}
                        {pages_menus.resources && (
                            <Link href="/resources" className={`hover:text-foreground block text-lg font-semibold ${isActive('/resources')}`}>
                                {currentLocale == 'kh' ? pages_menus.resources.title_kh : pages_menus.resources.title}
                            </Link>
                        )}
                        {pages_menus.careers && (
                            <Link href="/careers" className={`hover:text-foreground block text-lg font-semibold ${isActive('/careers')}`}>
                                {currentLocale == 'kh' ? pages_menus.careers.title_kh : pages_menus.careers.title}
                            </Link>
                        )}
                        {pages_menus.about && (
                            <Link href="/about" className={`hover:text-foreground block text-lg font-semibold ${isActive('/about')}`}>
                                {currentLocale == 'kh' ? pages_menus.about.title_kh : pages_menus.about.title}
                            </Link>
                        )}
                        {pages_menus.contact && (
                            <Link href="/contact" className={`hover:text-foreground block text-lg font-semibold ${isActive('/contact')}`}>
                                {currentLocale == 'kh' ? pages_menus.contact.title_kh : pages_menus.contact.title}
                            </Link>
                        )}
                    </div>
                    <div className='flex gap-4'>
                        <ToggleModeSwitch />
                        <MySelectLanguageSwitch />
                    </div>
                </SheetContent>
            </Sheet>
            <div className="hidden items-center justify-end gap-2 md:flex">
                <Menu setActive={setActive}>
                    <Link href={'/'} prefetch className={isActive('/')}>
                        {t('Home')}
                    </Link>
                    {/* <Link href={'/products'} prefetch>
                        <MenuItem setActive={setActive} active={active} item="Solutions">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/products" prefetch>
                                    Our Services
                                </HoveredLink>
                                <HoveredLink href="/products" prefetch>
                                    Our Resources
                                </HoveredLink>
                                <HoveredLink href="/products" prefetch>
                                    Catalog Functionality
                                </HoveredLink>
                                <HoveredLink href="/products" prefetch>
                                    Our Integrated Solutions
                                </HoveredLink>
                                <HoveredLink href="/products" prefetch>
                                    Technology-Based Solutions
                                </HoveredLink>
                                <HoveredLink href="/products" prefetch>
                                    Why Choose Us
                                </HoveredLink>
                            </div>
                        </MenuItem>
                    </Link> */}

                    {/* <Link href={'/company'} prefetch>
                        <MenuItem setActive={setActive} active={active} item="Company">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/company" prefetch>
                                    Who We Are
                                </HoveredLink>
                                <HoveredLink href="/company" prefetch>
                                    Who We Serve
                                </HoveredLink>
                                <HoveredLink href="/company" prefetch>
                                    Our Global Reach
                                </HoveredLink>
                                <HoveredLink href="/company" prefetch>
                                    Our Partners
                                </HoveredLink>
                                <HoveredLink href="/company" prefetch>
                                    Our Commitment
                                </HoveredLink>
                            </div>
                        </MenuItem>
                    </Link> */}

                    {pages_menus.products && (
                        <Link href={'/products'} prefetch className={isActive('/products')}>
                            {currentLocale == 'kh' ? pages_menus.products.title_kh : pages_menus.products.title}
                        </Link>
                    )}
                    {pages_menus.impact && (
                        <Link href={'/impact'} prefetch className={isActive('/impact')}>
                            {currentLocale == 'kh' ? pages_menus.impact.title_kh : pages_menus.impact.title}
                        </Link>
                    )}
                    {pages_menus.resources && (
                        <Link href={'/resources'} prefetch className={isActive('/resources')}>
                            {currentLocale == 'kh' ? pages_menus.resources.title_kh : pages_menus.resources.title}
                        </Link>
                    )}
                    {pages_menus.careers && (
                        <Link href={'/careers'} prefetch className={isActive('/careers')}>
                            {currentLocale == 'kh' ? pages_menus.careers.title_kh : pages_menus.careers.title}
                        </Link>
                    )}
                    {pages_menus.about && (
                        <Link href={'/about'} prefetch className={isActive('/about')}>
                            {currentLocale == 'kh' ? pages_menus.about.title_kh : pages_menus.about.title}
                        </Link>
                    )}
                    {pages_menus.contact && (
                        <Link href={'/contact'} prefetch className={isActive('/contact')}>
                            {currentLocale == 'kh' ? pages_menus.contact.title_kh : pages_menus.contact.title}
                        </Link>
                    )}
                </Menu>
                <ToggleModeSwitch />
                <MySelectLanguageSwitch />
            </div>
        </div>
    );
}
