import React, { useState } from 'react';
import abiInvestLogo from '../assets/abi-invest-logo.svg';
import erelysLogo from '../assets/erelys-logo.svg';
import coodivLogo from '../assets/coodiv-logo.svg';
import dilmiPaintLogo from '../assets/dilmi-paint-logo.svg';
import dilmiDentalLogo from '../assets/dilmi-dental-logo.svg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'construction', label: 'Construction' },
    { id: 'tech', label: 'Technology' },
    { id: 'health', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      name: 'Dilmi Paint',
      category: 'construction',
      description: 'Premium eco-friendly paint products for residential and commercial use.',
      image: 'portfolio-1',
      year: '2015',
      url: 'https://www.dilmipaint.com/',
      employees: '100 - 250',
      logo: dilmiPaintLogo
    },
    {
      id: 2,
      name: 'Coodiv',
      category: 'tech',
      description: 'Web development and digital marketing solutions',
      image: 'portfolio-2',
      year: '2018',
      url: 'https://coodiv.net/',
      employees: '10 - 50',
      logo: coodivLogo
    },
    {
      id: 3,
      name: 'ABI Invest',
      category: 'finance',
      description: 'Investment management and financial advisory services',
      image: 'portfolio-3',
      year: '2017',
      url: 'https://www.abiinvest.net/',
      employees: '1 - 5',
      logo: abiInvestLogo
    },
    {
      id: 4,
      name: 'Dilmi Dental',
      category: 'health',
      description: 'Comprehensive dental care and oral health services',
      image: 'portfolio-4',
      year: '2019',
      url: 'https://www.dilmidental.com/',
      employees: '5 - 10',
      logo: dilmiDentalLogo
    },
    {
      id: 5,
      name: 'Erelys',
      category: 'tech',
      description: 'Pioneering drone services for agriculture, infrastructure inspection, and delivery solutions.',
      image: 'portfolio-5',
      year: '2020',
      url: 'https://erelys.com/',
      employees: '10 - 50',
      logo: erelysLogo
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our <span className="highlight">Portfolio</span></h2>
        
        <p className="portfolio-subtitle">
          We've backed exceptional founders building category-defining companies 
          across multiple sectors and stages.
        </p>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button 
              key={filter.id} 
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div className="portfolio-item neo-card" key={item.id}>
              <div className={`portfolio-item-image ${item.logo ? 'with-logo' : item.image}`}>
                {item.logo && <img src={item.logo} alt={`${item.name} logo`} className="company-logo" />}
              </div>
              <div className="portfolio-item-content">
                <div className="portfolio-item-header">
                  <h3>{item.name}</h3>
                  <span className="category-tag">{filters.find(f => f.id === item.category).label}</span>
                </div>
                <p>{item.description}</p>
                <div className="portfolio-item-meta">
                  <div className="meta-item">
                    <span className="meta-label">Founded</span>
                    <span className="meta-value">{item.year}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Employees</span>
                    <span className="meta-value">{item.employees}</span>
                  </div>
                </div>
                <a href={item.url} className="portfolio-item-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 