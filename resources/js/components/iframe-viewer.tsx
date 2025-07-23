import { cn } from '@/lib/utils';
interface IframeViewerProps {
    url: string;
    title?: string;
    className?: string;
}
const IframeViewer = ({ url, title = 'iframe', className }: IframeViewerProps) => {
    if (!url) return <p>No URL provided</p>;

    let embedUrl = url;

    try {
        const urlObj = new URL(url);

        // Check for YouTube "watch" URLs
        if (urlObj.hostname.includes('youtube.com') && urlObj.pathname === '/watch' && urlObj.searchParams.has('v')) {
            const videoId = urlObj.searchParams.get('v');
            const siParam = urlObj.searchParams.get('si');
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
            if (siParam) {
                embedUrl += `?si=${siParam}`;
            }
        }
    } catch (error) {
        console.error('Invalid URL:', error);
        return <p>Invalid URL</p>;
    }

    return (
        <iframe
            src={embedUrl}
            className={cn(className, 'aspect-video h-full w-full')}
            title={title}
            style={{ border: 'none' }}
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
        />
    );
};

export default IframeViewer;
