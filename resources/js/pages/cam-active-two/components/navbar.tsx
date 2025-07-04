import MySelectLanguageSwitch from '@/components/my-select-language-switch';
import ToggleModeSwitch from '@/components/toggle-mode-switch';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Menu } from './ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { url } = usePage();
    const isActive = (path: string) => (url === path ? 'text-primary font-bold underline underline-offset-4' : 'hover:text-primary');

    return (
        <div className={cn('mx-auto flex max-w-screen-xl items-center justify-between px-4', className)}>
            <Link href={'/'} prefetch>
                <img src="/assets/cam-active/Camactive-Logo.webp" className="h-20 p-2 rounded-full" />
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
                            Home
                        </Link>
                        <Link href="/products" className={`hover:text-foreground block text-lg font-semibold ${isActive('/products')}`}>
                            Products
                        </Link>
                        <Link href="/impact" className={`hover:text-foreground block text-lg font-semibold ${isActive('/impact')}`}>
                            Impact
                        </Link>
                        <Link href="/resources" className={`hover:text-foreground block text-lg font-semibold ${isActive('/resources')}`}>
                            Resources & Reports
                        </Link>
                        <Link href="/careers" className={`hover:text-foreground block text-lg font-semibold ${isActive('/careers')}`}>
                            Careers
                        </Link>
                        <Link href="/about" className={`hover:text-foreground block text-lg font-semibold ${isActive('/about')}`}>
                            About Us
                        </Link>
                        <Link href="/contact" className={`hover:text-foreground block text-lg font-semibold ${isActive('/contact')}`}>
                            Contact Us
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="hidden items-center justify-end gap-2 md:flex">
                <Menu setActive={setActive}>
                    <Link href={'/'} prefetch className={isActive('/')}>
                        Home
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
                    </Link>

                    <Link href={'/company'} prefetch>
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

                    <Link href={'/products'} prefetch className={isActive('/products')}>
                        Products
                    </Link>
                    <Link href={'/impact'} prefetch className={isActive('/impact')}>
                        Impact
                    </Link>
                    <Link href={'/resources'} prefetch className={isActive('/resources')}>
                        Resources & Reports
                    </Link>
                    <Link href={'/careers'} prefetch className={isActive('/careers')}>
                        Careers
                    </Link>
                    <Link href={'/about'} prefetch className={isActive('/about')}>
                        About Us
                    </Link>
                    <Link href={'/contact'} prefetch className={isActive('/contact')}>
                        Contact Us
                    </Link>
                </Menu>
                <ToggleModeSwitch />
                <MySelectLanguageSwitch />
            </div>
        </div>
    );
}
