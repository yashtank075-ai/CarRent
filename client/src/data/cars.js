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
    isDemo: false,
    images: [
      "/images/hyundai-venue-premium.png"
    ],
    rentalPackages: [
      { duration: "12 Hours", price: 2500, note: "Surat local / city drive" },
      { duration: "24 Hours", price: 3500, note: "Full day rental" }
    ],
    specs: {},
    description: "The Hyundai Venue provides a stylish, agile, and comfortable driving experience, well-suited for city commuting in Surat as well as weekend trips across Gujarat."
  },
  {
    id: "maruti-suzuki-swift",
    slug: "maruti-suzuki-swift",
    name: "Maruti Suzuki Swift",
    category: "Hatchback",
    tag: "Popular Choice",
    isFeatured: true,
    isDemo: false,
    images: [
      "/images/maruti-swift-black.png"
    ],
    rentalPackages: [
      { duration: "12 Hours", price: 2500, note: "Surat local / city drive" },
      { duration: "24 Hours", price: 3200, note: "Full day rental" }
    ],
    specs: {},
    description: "A stylish and comfortable hatchback for city drives and everyday travel."
  },
  {
    id: "hyundai-verna",
    slug: "hyundai-verna",
    name: "Hyundai Verna",
    category: "Sedan",
    tag: "Executive Sedan",
    isFeatured: true,
    isDemo: false,
    images: [
      "/images/hyundai-verna-white.png"
    ],
    rentalPackages: [
      { duration: "12 Hours", price: 3500, note: "Surat local / city drive" },
      { duration: "24 Hours", price: 4000, note: "Full day rental" }
    ],
    specs: {},
    description: "A sophisticated sedan offering exceptional comfort, performance, and style for city travel and journeys across Gujarat."
  }
];

export const VEHICLE_CATEGORIES = [
  "All",
  "Compact SUV",
  "SUV",
  "Sedan",
  "Hatchback"
];
