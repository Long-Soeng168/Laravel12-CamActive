import { Link } from '@inertiajs/react';
import { DribbbleIcon, GithubIcon, HomeIcon, TwitchIcon, TwitterIcon } from 'lucide-react';
import { ReactNode } from 'react';
import Footer from '../components/footer';
import { Navbar } from '../components/navbar';

const CamActiveLayout = ({ children }: { children: ReactNode }) => {
    return (
        <> 
            <header className="bg-background sticky top-0 z-50 mx-auto backdrop-blur-md">
                <Navbar />
            </header>
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
        </>
    );
};

export default CamActiveLayout;
