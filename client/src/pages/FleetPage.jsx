import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import FleetFilters from '../components/FleetFilters';
import FleetGrid from '../components/FleetGrid';
import EmptyState from '../components/EmptyState';
import CTASection from '../components/CTASection';
import { FLEET_DATA } from '../data/cars';

export default function FleetPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredCars = useMemo(() => {
    return FLEET_DATA.filter((car) => {
      const matchesSearch = car.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
      const matchesCategory =
        selectedCategory === 'All' || car.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'price-asc') {
        const priceA = a.rentalPackages?.[0]?.price || 999999;
        const priceB = b.rentalPackages?.[0]?.price || 999999;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.rentalPackages?.[0]?.price || 0;
        const priceB = b.rentalPackages?.[0]?.price || 0;
        return priceB - priceA;
      }
      return 0;
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('default');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Page Heading */}
      <SectionHeading
        tag="Available Vehicles"
        title="Explore Our Fleet"
        subtitle="Browse cars available for rental in Surat. Contact directly on WhatsApp to verify live availability, customized durations, and deposit terms."
      />

      {/* Filter and Search Controls */}
      <FleetFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleReset}
      />

      {/* Results Count & Active Info */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#646B76] -mt-6 px-1">
        <span>Showing {filteredCars.length} of {FLEET_DATA.length} vehicle{FLEET_DATA.length === 1 ? '' : 's'}</span>
        <span>All rates in INR (₹)</span>
      </div>

      {/* Fleet Display */}
      {filteredCars.length > 0 ? (
        <FleetGrid cars={filteredCars} />
      ) : (
        <EmptyState
          title="No Vehicles Matched"
          message="We could not find any vehicle matching your filter criteria. Reset the filters to view all available vehicles."
          showReset={true}
          onReset={handleReset}
        />
      )}

      {/* Call to action */}
      <CTASection
        title="Looking for a specific vehicle?"
        subtitle="If you have an exact model or custom rental requirement in mind, reach out directly to check availability."
        buttonText="Ask on WhatsApp"
      />
    </div>
  );
}
