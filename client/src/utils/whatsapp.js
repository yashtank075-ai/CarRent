/**
 * Dwarkadhish Car Rent - Contact and WhatsApp Configuration Helper
 * Business Location: Surat, Gujarat, India
 * Official Contact: 6352174619
 */

export const BUSINESS_INFO = {
  name: "Dwarkadhish Car Rent",
  shortName: "Dwarkadhish",
  tagline: "Find the Right Car for Every Journey",
  phone: "6352174619",
  countryCode: "91",
  city: "Surat",
  state: "Gujarat",
  country: "India",
  location: "Surat, Gujarat, India",
  displayPhone: "+91 63521 74619",
  whatsappBaseUrl: "https://wa.me/916352174619",
};

/**
 * Builds a safe WhatsApp URL with an encoded prefilled message.
 * @param {string} customMessage - Message to send
 * @returns {string} Fully formatted WhatsApp URL
 */
export function getWhatsAppLink(customMessage) {
  const base = BUSINESS_INFO.whatsappBaseUrl;
  if (!customMessage) {
    const defaultMsg = `Hello ${BUSINESS_INFO.name}, I would like to enquire about your car rental services in Surat.`;
    return `${base}?text=${encodeURIComponent(defaultMsg)}`;
  }
  return `${base}?text=${encodeURIComponent(customMessage)}`;
}

/**
 * Builds an enquiry message tailored to an individual vehicle.
 * Only packages explicitly provided in the data are listed.
 * Never invents prices or packages.
 * 
 * @param {Object} car - Vehicle object from data/cars.js
 * @returns {string} WhatsApp link with car specific message
 */
export function getCarWhatsAppLink(car) {
  if (!car) return getWhatsAppLink();

  let message = `Hello ${BUSINESS_INFO.name},\nI am interested in enquiring about renting the ${car.name} in Surat.`;

  const packages = car.rentalPackages || [];
  if (packages.length > 0) {
    message += `\n\nSpecified packages shown on site:`;
    packages.forEach((pkg) => {
      if (pkg.duration && pkg.price) {
        message += `\n• ${pkg.duration}: ₹${pkg.price.toLocaleString("en-IN")}`;
      }
    });
    message += `\n\nCould you please confirm current availability, exact rental terms, and security deposit details?`;
  } else {
    message += `\n\nCould you please share the available rental packages, rates, and availability for this car?`;
  }

  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
