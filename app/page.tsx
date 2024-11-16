import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import FeaturedArtifacts from '@/components/FeaturedArtifacts';
import NFTMarketplaceSection from '@/components/NFTMarketplaceSection';
import LoreSection from '@/components/LoreSection';
import StatsSection from '@/components/StatsSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arktifact Chronicles - Journey Through Time</title>
        <meta name="description" content="Explore humanity's journey through collectible digital artifacts" />
      </Head>
      <main className="min-h-screen bg-gray-900">
        <HeroSection />
        <StorySection />
        <FeaturedArtifacts />
        <NFTMarketplaceSection />
        <StatsSection />
        <LoreSection />
        <CommunitySection />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
