import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Arktifact Chronicles - Journey Through Time",
  description = "Explore humanity's journey through collectible digital artifacts. Own a piece of history with Arktifact Chronicles NFTs.",
  image = "/images/og/default.jpg",
  url = "https://arktifact.com",
  type = "website"
}: SEOProps) => {
  const siteTitle = `${title} | Arktifact Chronicles`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="NFT, Arktifact Chronicles, digital collectibles, blockchain, history, artifacts" />
      <meta name="author" content="Arktifact Chronicles" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO; 