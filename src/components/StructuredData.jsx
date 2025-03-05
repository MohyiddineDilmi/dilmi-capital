import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  let structuredData;

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Dilmi Capital',
        url: 'https://dilmicapital.com',
        logo: 'https://dilmicapital.com/images/dilmi-capital-logo.svg',
        sameAs: [
          'https://www.linkedin.com/company/dilmi-capital',
        ],
        ...data
      };
      break;
    
    case 'localBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Dilmi Capital',
        description: 'A forward-thinking venture capital firm committed to identifying, investing in, and nurturing groundbreaking technologies and disruptive business models.',
        url: 'https://dilmicapital.com',
        telephone: '+1-123-456-7890',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Innovation Drive',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94103',
          addressCountry: 'US'
        },
        ...data
      };
      break;
    
    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Organization',
          name: 'Dilmi Capital'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dilmi Capital',
          logo: {
            '@type': 'ImageObject',
            url: 'https://dilmicapital.com/images/dilmi-capital-logo.svg'
          }
        },
        ...data
      };
      break;
      
    default:
      structuredData = data;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 