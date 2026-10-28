import React from 'react';
import CarCard from './CarCard';

export default function FleetGrid({ cars = [], emptyMessage }) {
  if (!cars || cars.length === 0) {
    return (
      <div className="py-16 px-4 text-center rounded-2xl border border-dashed border-slate-700 bg-[#111C2E]/50 max-w-lg mx-auto">
        <p className="text-slate-300 text-sm">
          {emptyMessage || 'No matching vehicles found.'}
        </p>
      </div>
    );
  }

  // Dynamic grid styling: centers cleanly if single vehicle, or lays out in balanced grid
  const gridClasses =
    cars.length === 1
      ? 'grid grid-cols-1 max-w-md mx-auto'
      : cars.length === 2
      ? 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';

  return (
    <div className={gridClasses}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
