import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const HowToApply = () => {
    return (
        <div className="mt-4 space-y-4">
            <div className="w-full max-w-full">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Full Name" className="dark:bg-primary/20 mt-0.5" />
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="text" placeholder="Phone Number" className="dark:bg-primary/20 mt-0.5" />
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" className="dark:bg-primary/20 mt-0.5" />
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="picture">Attach CV</Label>
                <Input id="picture" type="file" className="file:bg-primary/20 dark:bg-primary/20 pb-8 pl-1 file:rounded-sm file:px-2 file:py-0" />
            </div>
            <div className="flex w-full flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." className='dark:bg-primary/20' />
            </div>
            <Button className="w-full">Submit</Button>
        </div>
    );
};

export default HowToApply;
