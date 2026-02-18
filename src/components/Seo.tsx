import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    jsonLd?: Record<string, any>;
}

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    canonical,
    image = 'https://stalflow.com.br/og-image.jpg',
    type = 'website',
    jsonLd
}) => {
    const siteTitle = 'StalFlow | Soluções Digitais & Desenvolvimento de Software';
    const fullTitle = title === 'Home' ? siteTitle : `${title} | StalFlow`;
    const currentUrl = canonical || window.location.href;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

export default Seo;
