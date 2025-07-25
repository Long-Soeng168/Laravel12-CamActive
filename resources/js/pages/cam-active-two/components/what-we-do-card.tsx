import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';
import styled from 'styled-components';

const WhatWeDoCard = ({ item }: { item: any }) => {
    const { t, currentLocale } = useTranslation();

    const title = currentLocale === 'kh' ? (item.title_kh ?? item.title) : item.title;
    const description = currentLocale === 'kh' ? (item.short_description_kh ?? item.short_description) : item.short_description;

    return (
        <StyledWrapper>
            <Link key={item.id} href={`/products/${item.id}`} prefetch>
                <div className="card group relative h-full overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
                    <header className="flex flex-col items-center justify-center p-4">
                        <img src={`/assets/images/pages/${item.images[0]?.image}`} className="mb-3 size-20 object-contain" alt={title} />
                        <h3 className="text-center text-2xl font-semibold group-hover:text-white">{title}</h3>
                    </header>
                    <div className="px-4 pb-4 text-center">
                        <p
                            className="line-clamp-3 text-lg text-foreground group-hover:text-white"
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                    </div>
                    <div className="go-corner absolute right-4 bottom-4 text-xl text-blue-600">
                        <div className="go-arrow">→</div>
                    </div>
                </div>
            </Link>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card-title {
        color: #262626;
        font-size: 1.5em;
        line-height: normal;
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    .small-desc {
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5em;
        color: #452c2c;
    }

    .go-corner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 2em;
        height: 2em;
        overflow: hidden;
        top: 0;
        right: 0;
        background: linear-gradient(#2b3490);
        border-radius: 0 4px 0 32px;
    }

    .go-arrow {
        margin-top: -4px;
        margin-right: -4px;
        color: white;
        font-family: courier, sans;
    }

    .card {
        display: block;
        position: relative;
        border-radius: 10px;
        padding: 2em 1.2em;
        margin: 12px;
        text-decoration: none;
        z-index: 0;
        overflow: hidden;
        heigh: 100%;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #ffffff;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        transition:
            background-color 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
    }

    .card:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: linear-gradient(135deg, #364a60, #2b3490);
        height: 32px;
        width: 32px;
        border-radius: 32px;
        transform: scale(1);
        transform-origin: 50% 50%;
        transition:
            transform 0.35s ease-out,
            background 0.35s ease-out;
    }

    .card:hover:before {
        transform: scale(40);
        background: #2b3490;
    }

    .card:hover .small-desc {
        transition: all 0.5s ease-out;
        color: rgba(255, 255, 255, 0.8);
    }

    .card:hover .card-title {
        transition: all 0.5s ease-out;
        color: #ffffff;
    }

    /* Dark mode overrides */
    .dark & .card {
        background-color: #2e2e2e;
    }

    .dark & .card-title {
        color: #ffffff;
    }

    .dark & .small-desc {
        color: #ffffff;
    }

    .dark & .card:hover .small-desc {
        color: rgba(255, 255, 255, 0.8);
    }

    .dark & .card:hover .card-title {
        color: #ffffff;
    }
`;

export default WhatWeDoCard;
