import { useForm } from '@inertiajs/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProgressWithValue } from '@/components/ui/progress-with-value';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';

const CareerSubmitForm = ({ item }: { item?: any }) => {
    const { t, currentLocale } = useTranslation();
    const [fileKey, setFileKey] = useState(Date.now());
    const [successMessage, setSuccessMessage] = useState('');

    const { data, setData, post, processing, progress, errors, reset } = useForm({
        name: '',
        career_id: item?.id,
        email: '',
        phone: '',
        message: '',
        cv: null as File | null,
    });

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData('cv', e.target.files?.[0] || null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.phone || !data.cv) {
            toast.error('Please fill out all fields and attach your CV.');
            return;
        }

        post('/submit_career', {
            onSuccess: (page) => {
                if (page.props.flash?.success) {
                    setSuccessMessage(page.props.flash.success);
                    toast.success('Success', { description: page.props.flash.success });
                    setFileKey(Date.now());
                    setData({
                        name: '',
                        career_id: item?.id,
                        email: '',
                        phone: '',
                        message: '',
                        cv: null as File | null,
                    });
                }
                if (page.props.flash?.error) {
                    toast.error('Error', { description: page.props.flash.error });
                }
            },
            onError: (e) => {
                toast.error('Error', {
                    description: Object.values(e).flat().join('\n'),
                });
            },
            preserveScroll: true,
        });
    };

    useEffect(() => {
        if (successMessage) {
            const timeout = setTimeout(() => setSuccessMessage(''), 5000);
            return () => clearTimeout(timeout);
        }
    }, [successMessage]);

    return (
        <form onSubmit={handleSubmit} className="w-full shrink-0 space-y-4 lg:w-lg">
            <div className="w-full max-w-full">
                <Label htmlFor="name">{t('Name')}</Label>
                <Input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Full Name"
                    className="text-foreground dark:bg-primary/20 w-full max-w-full"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="w-full max-w-full">
                <Label htmlFor="phone">{t('Phone')}</Label>
                <Input
                    id="phone"
                    type="text"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder="Phone Number"
                    className="text-foreground dark:bg-primary/20 w-full max-w-full"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="w-full max-w-full">
                <Label htmlFor="email">{t('Email')}</Label>
                <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="Email"
                    className="text-foreground dark:bg-primary/20 w-full max-w-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="w-full max-w-full">
                <Label htmlFor="message">{t('Message')}</Label>
                <Textarea
                    id="message"
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Message"
                    className="text-foreground dark:bg-primary/20 w-full max-w-full"
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>

            <div key={fileKey} className="w-full max-w-full">
                <Label htmlFor="cv">{t('Attach CV')}</Label>
                <Input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="file:bg-primary/20 dark:bg-primary/20 pb-8 pl-1 file:rounded-sm file:px-2 file:py-0"
                />
                {data.cv && (
                    <p className="mt-1 text-sm">
                        {t('Selected File')} : <strong>{data.cv.name}</strong>
                    </p>
                )}
                {errors.cv && <p className="text-red-500">{errors.cv}</p>}
            </div>

            <div className="mt-6 flex w-full max-w-full justify-end gap-4">
                <Button type="submit" className="w-full" disabled={processing}>
                    {processing ? t('Submitting...') : t('Apply')}
                </Button>
            </div>

            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {progress && <ProgressWithValue value={progress.percentage} position="start" />}
        </form>
    );
};

export default CareerSubmitForm;
