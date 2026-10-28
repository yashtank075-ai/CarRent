/**
 * Dwarkadhish Car Rent - Fleet Data Configuration
 * 
 * Instructions for adding future vehicles:
 * 1. Add new car objects to the `FLEET_DATA` array.
 * 2. Only confirmed vehicles should be listed.
 * 3. Never invent prices or specifications. If any property (transmission, seating, fuel, packages)
 *    is unknown or pending confirmation, set it to `null` or omit it. The UI gracefully adapts.
 * 4. Store high-resolution car images in `/images/` within `client/public/`.
 * 
 * Confirmed Vehicle Information:
 * - Hyundai Venue
 *   12-Hour Package: ₹2,500
 *   24-Hour Package: ₹3,500
 */

export const FLEET_DATA = [
  {
    id: "hyundai-venue",
    slug: "hyundai-venue",
    name: "Hyundai Venue",
    category: "Compact SUV",
    tag: "Popular Choice",
    isFeatured: true,
    isDemo: false, // Confirmed vehicle entry
    // High quality confirmed vehicle photography for Hyundai Venue
    images: [
      "/images/hyundai-venue-premium.png"
    ],
    // Known confirmed rental packages
    rentalPackages: [
      { duration: "12 Hours", price: 2500, note: "Surat local / city drive" },
      { duration: "24 Hours", price: 3500, note: "Full day rental" }
    ],
    // Known specifications (only verified items; others omitted or null)
    specs: {
      seating: "5 Seater",
      transmission: "Manual / Automatic (Confirm on enquiry)",
      fuelType: "Petrol / Diesel",
      ac: true
    },
    description: "The Hyundai Venue provides a stylish, agile, and comfortable driving experience, well-suited for city commuting in Surat as well as weekend trips across Gujarat."
  }
];

export const VEHICLE_CATEGORIES = [
  "All",
  "Compact SUV",
  "SUV",
  "Sedan",
  "Hatchback"
];
