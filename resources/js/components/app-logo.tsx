import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    const { application_info } = usePage().props;
    const { currentLocale } = useTranslation();
    return (
        <div className="flex items-center">
            <div className="text-sidebar-primary-foreground flex aspect-square w-32 items-center justify-center rounded-md">
                {application_info?.image ? (
                    <>
                        <img
                            alt="app_logo"
                            className="h-fu w-full object-contain dark:hidden"
                            src={`/assets/images/application_info/thumb/${application_info?.image}`}
                        />
                        <img
                            alt="app_logo"
                            className="h-fu w-full object-contain hidden dark:inline"
                            src={`/assets/images/application_info/thumb/${application_info?.image_dark_mode}`}
                        />
                    </>
                ) : (
                    <AppLogoIcon className="size-5 fill-current text-black" />
                )}
            </div>
            {/* <div className="ml-1 grid flex-1 text-left text-sm">
                <span className={`mb-0 truncate ${currentLocale == 'kh' ? 'font-siemreap-regular' : 'font-semibold'}`}>
                    {(currentLocale === 'kh' ? application_info?.name_kh : application_info?.name) || 'Dashboard'}
                </span>
            </div> */}
        </div>
    );
}
