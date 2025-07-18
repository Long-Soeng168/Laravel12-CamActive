import { Card, CardContent } from '@/components/ui/card';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const teamMembers = [
    { id: 1, name: 'Long Soeng', position: 'Full-Stack Developer' },
    { id: 2, name: 'Sok Dara', position: 'Project Manager' },
    { id: 3, name: 'Chan Rith', position: 'UX/UI Designer' },
    { id: 4, name: 'Pisey Neang', position: 'QA Engineer' },
    { id: 5, name: 'Sovann Ou', position: 'Frontend Developer' },
    { id: 6, name: 'Sreyleak Im', position: 'Backend Developer' },
    { id: 7, name: 'Davin Phan', position: 'DevOps Engineer' },
    { id: 8, name: 'Vannak Men', position: 'Product Owner' },
    { id: 9, name: 'Kanha Sou', position: 'Content Strategist' },
    { id: 10, name: 'Narith Chum', position: 'Mobile App Developer' },
    { id: 11, name: 'Chanda Sieng', position: 'UI/UX Researcher' },
    { id: 12, name: 'Bopha Khun', position: 'Marketing Specialist' },
];

const OurTeam = () => {
    const { teams } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8">
                <h2 className="px-6 text-3xl font-bold tracking-tight">{t('Our Team')}</h2>
                <div className="grid grid-cols-2 gap-2 px-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {teams?.map((item) => (
                        <Card key={item.id} className="border-border/50 transform rounded-xl border-none transition-all duration-300 hover:scale-105">
                            <CardContent className="flex flex-col items-center space-y-3 px-0 py-0">
                                <div className="flex size-16 shrink-0 justify-center rounded-lg md:justify-start">
                                    <img src={`/assets/images/teams/thumb/${item.image}`} className="mb-2 size-16 shrink-0 object-cover" alt="" />
                                </div>
                                <h3 className="text-foreground text-lg font-semibold">
                                    {currentLocale === 'kh' ? (item?.name_kh ?? item?.name) : item?.name}
                                </h3>
                                <p
                                    className="text-sm text-gray-400"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            currentLocale === 'kh'
                                                ? (item?.short_description_kh ?? item?.short_description)
                                                : item?.short_description,
                                    }}
                                ></p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
