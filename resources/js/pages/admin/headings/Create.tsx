import MyDialogCancelButton from '@/components/my-dialog-cancel-button';
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProgressWithValue } from '@/components/ui/progress-with-value';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useTranslation from '@/hooks/use-translation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as inertiaUseForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    title: z.string().min(1).max(255),
    title_kh: z.string().max(255).optional(),
    code: z.string().min(1).max(255),
    status: z.string().max(255).optional(),
    button1_title: z.string().max(255).optional(),
    button1_title_kh: z.string().max(255).optional(),
    button1_link: z.string().max(255).optional(), // Assuming link is also a string with max 255 chars
    button2_title: z.string().max(255).optional(),
    button2_title_kh: z.string().max(255).optional(),
    button2_link: z.string().max(255).optional(), // Assuming link is also a string with max 255 chars
    short_description: z.string().max(500).optional(),
    short_description_kh: z.string().max(500).optional(),
});

export default function Create({
    editData,
    readOnly,
    setIsOpen,
}: {
    editData?: any;
    readOnly?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    // ===== Start Our Code =====
    const { t } = useTranslation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: editData?.title || '',
            title_kh: editData?.title_kh || '',
            code: editData?.code || '',
            status: editData?.status || 'active',
            short_description: editData?.short_description || '',
            short_description_kh: editData?.short_description_kh || '',
            button1_title: editData?.button1_title || '',
            button1_title_kh: editData?.button1_title_kh || '',
            button1_link: editData?.button1_link || '',
            button2_title: editData?.button2_title || '',
            button2_title_kh: editData?.button2_title_kh || '',
            button2_link: editData?.button2_link || '',
        },
    });

    const { post, data, progress, processing, transform, errors } = inertiaUseForm();

    function onSubmit(values: z.infer<typeof formSchema>) {
        // toast(
        //     <pre className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        //     </pre>
        //   );
        try {
            transform(() => ({
                ...values,
            }));
            if (editData?.id) {
                post('/admin/headings/' + editData.id + '/update', {
                    preserveScroll: true,
                    onSuccess: (page) => {
                        if (page.props.flash?.success) {
                            toast.success('Success', {
                                description: page.props.flash.success,
                            });
                        }
                    },
                    onError: (e) => {
                        toast.error('Error', {
                            description: 'Failed to update.' + JSON.stringify(e, null, 2),
                        });
                    },
                });
            } else {
                post('/admin/headings', {
                    preserveScroll: true,
                    onSuccess: (page) => {
                        form.reset();
                        if (page.props.flash?.success) {
                            toast.success('Success', {
                                description: page.props.flash.success,
                            });
                        }
                    },
                    onError: (e) => {
                        toast.error('Error', {
                            description: 'Failed to create.' + JSON.stringify(e, null, 2),
                        });
                    },
                });
            }
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Error', {
                description: 'Something went wrong!' + error,
            });
        }
    }
    // ===== End Our Code =====

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Title')}</FormLabel>
                                    <FormControl>
                                        <AutosizeTextarea placeholder={t('Title')} type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.title && <div>{errors.title}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="title_kh"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Title Khmer')}</FormLabel>
                                    <FormControl>
                                        <AutosizeTextarea placeholder={t('Title Khmer')} type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.title_kh && <div>{errors.title_kh}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Unique Code')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ex: TOPNAV" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.code && <div>{errors.code}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem key={field.value}>
                                    <FormLabel>{t('Status')}</FormLabel>
                                    <Select key={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="active">{t('Active')}</SelectItem>
                                            <SelectItem value="inactive">{t('Inactive')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage>{errors.status && <div>{errors.status}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="short_description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('Short Description')}</FormLabel>
                            <FormControl>
                                <AutosizeTextarea placeholder={t('Short Description')} className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage>{errors.short_description && <div>{errors.short_description}</div>}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="short_description_kh"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('Short Description Khmer')}</FormLabel>
                            <FormControl>
                                <AutosizeTextarea placeholder={t('Short Description Khmer')} className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage>{errors.short_description_kh && <div>{errors.short_description_kh}</div>}</FormMessage>
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="button1_title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 1 Title')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 1 title')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button1_title && <div>{errors.button1_title.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="button1_title_kh"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 1 Title (Khmer)')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 1 title in Khmer')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button1_title_kh && <div>{errors.button1_title_kh.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-12">
                        <FormField
                            control={form.control}
                            name="button1_link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 1 Link')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 1 link')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button1_link && <div>{errors.button1_link.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="button2_title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 2 Title')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 2 title')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button2_title && <div>{errors.button2_title.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="button2_title_kh"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 2 Title (Khmer)')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 2 title in Khmer')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button2_title_kh && <div>{errors.button2_title_kh.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-12">
                        <FormField
                            control={form.control}
                            name="button2_link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('Button 2 Link')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('Enter button 2 link')} {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.button2_link && <div>{errors.button2_link.message}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                {progress && <ProgressWithValue value={progress.percentage} position="start" />}
                {setIsOpen && <MyDialogCancelButton onClick={() => setIsOpen(false)} />}

                {!readOnly && (
                    <Button disabled={processing} type="submit">
                        {processing && (
                            <span className="size-6 animate-spin">
                                <Loader />
                            </span>
                        )}
                        {processing ? t('Submitting') : t('Submit')}
                    </Button>
                )}
            </form>
        </Form>
    );
}
