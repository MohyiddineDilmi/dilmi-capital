/**
 * SEO Configuration
 * Contains centralized SEO settings for the Dilmi Capital website
 */

// Site-wide default SEO settings
export const DEFAULT_SEO = {
  title: 'Dilmi Capital - Investing in tomorrow\'s innovations',
  description: 'Dilmi Capital is a forward-thinking venture capital firm committed to identifying, investing in, and nurturing groundbreaking technologies and disruptive business models.',
  url: 'https://dilmicapital.com',
  image: '/images/dilmi-capital-og.jpg',
  twitterHandle: '@dilmicapital',
  keywords: [
    'venture capital',
    'investments',
    'startups',
    'technology',
    'innovation',
    'finance',
    'funding'
  ],
}

// Page-specific SEO settings
export const PAGE_SEO = {
  home: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
    url: DEFAULT_SEO.url,
    type: 'website',
  },
  leadership: {
    title: 'Leadership Team | Dilmi Capital',
    description: 'Meet the experienced leadership team at Dilmi Capital - investors and operators with deep industry expertise driving our venture capital strategy.',
    keywords: [
      'leadership',
      'venture capital',
      'investment team',
      'founders',
      'executive team',
      'management'
    ],
    url: `${DEFAULT_SEO.url}/leadership`,
    type: 'website',
  },
  news: {
    title: 'News & Updates | Dilmi Capital',
    description: 'Stay up to date with the latest news, investments, and insights from Dilmi Capital\'s venture portfolio and team.',
    keywords: [
      'venture capital news',
      'investment updates',
      'startup news',
      'portfolio companies',
      'industry insights',
      'funding announcements'
    ],
    url: `${DEFAULT_SEO.url}/news`,
    type: 'website',
  },
}

// Article schema generator for blog posts
export const generateArticleSchema = (article) => {
  return {
    headline: article.title,
    image: article.image || DEFAULT_SEO.image,
    datePublished: article.publishDate,
    dateModified: article.updateDate || article.publishDate,
    articleBody: article.excerpt,
    mainEntityOfPage: `${DEFAULT_SEO.url}/news/${article.slug}`,
  }
}

// Create a variable for the default export
const seoConfig = {
  DEFAULT_SEO,
  PAGE_SEO,
  generateArticleSchema
};

export default seoConfig; 