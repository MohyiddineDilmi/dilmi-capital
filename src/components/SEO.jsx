import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [],
  image = '/images/dilmi-capital-og.jpg',
  url,
  canonical,
  type = 'website'
}) => {
  // Default title and description if not provided
  const defaultTitle = 'Dilmi Capital - Investing in tomorrow\'s innovations';
  const defaultDescription = 'Dilmi Capital is a forward-thinking venture capital firm committed to identifying, investing in, and nurturing groundbreaking technologies and disruptive business models.';
  
  // Use provided values or fallbacks
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoUrl = url || 'https://dilmicapital.com';
  const seoCanonical = canonical || seoUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords.length > 0 && 
        <meta name="keywords" content={keywords.join(', ')} />
      }
      <link rel="canonical" href={seoCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content="Dilmi Capital" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Best Practices */}
      <meta name="robots" content="index, follow" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO; 