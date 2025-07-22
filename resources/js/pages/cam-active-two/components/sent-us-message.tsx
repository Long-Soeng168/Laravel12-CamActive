import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';

const SendUsMessage = () => {
    const { t, currentLocale } = useTranslation();
    const [successMessage, setSuccessMessage] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/submit_message', {
            onSuccess: (page) => {
                if (page.props.flash?.success) {
                    setSuccessMessage(page.props.flash.success);
                    toast.success('Success', {
                        description: page.props.flash.success,
                    });
                    reset();
                }

                if (page.props.flash?.error) {
                    toast.error('Error', {
                        description: page.props.flash.error,
                    });
                }
            },
            onError: (e) => {
                toast.error('Submission failed', {
                    description: Object.values(e).flat().join('\n'),
                });
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="w-full max-w-full">
                <Label htmlFor="name">{t('Name')}</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="mt-0.5"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="w-full max-w-full">
                <Label htmlFor="phone">{t('Phone')}</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Phone"
                    className="mt-0.5"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="email">{t('Email')}</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="mt-0.5"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="w-full max-w-full">
                <Label htmlFor="subject">{t('Subject')}</Label>
                <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="mt-0.5"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
            </div>

            <div className="flex w-full flex-col gap-2">
                <Label htmlFor="message">{t('Message')}</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here."
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={processing}>
                {processing ? t('Submitting...') : t('Submit')}
            </Button>

            {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}
        </form>
    );
};

export default SendUsMessage;
