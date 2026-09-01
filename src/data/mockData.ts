export const IMAGES = {
  general: "https://api.iconify.design/mdi/trash-can.svg?color=%236b7280",
  recyclables: "https://api.iconify.design/mdi/recycle.svg?color=%233b82f6",
  organic: "https://api.iconify.design/mdi/leaf.svg?color=%2316a34a",
};

export const WASTE_SCHEDULES = [
  {
    street: "Aggrey Road",
    neighborhood: "Old GRA",
    generalWaste: "Monday",
    recyclables: "Wednesday",
    organicWaste: "Friday",
  },
  {
    street: "Trans Amadi Road",
    neighborhood: "Trans Amadi",
    generalWaste: "Tuesday",
    recyclables: "Thursday",
    organicWaste: "Saturday",
  },
  {
    street: "Rumuola Road",
    neighborhood: "Rumuola",
    generalWaste: "Monday",
    recyclables: "Friday",
    organicWaste: "Wednesday",
  },
  {
    street: "Ada George Road",
    neighborhood: "Ada George",
    generalWaste: "Wednesday",
    recyclables: "Monday",
    organicWaste: "Saturday",
  },
  {
    street: "Peter Odili Road",
    neighborhood: "GRA Phase 3",
    generalWaste: "Thursday",
    recyclables: "Tuesday",
    organicWaste: "Sunday",
  },
  {
    street: "Ikwerre Road",
    neighborhood: "Mile 3",
    generalWaste: "Friday",
    recyclables: "Wednesday",
    organicWaste: "Monday",
  },
];

export const RECYCLING_CENTERS = [
  {
    id: 1,
    name: "GreenLoop Drop-Off Center",
    address: "12 Aggrey Road, Old GRA",
    hours: "Mon–Sat, 8:00 AM – 6:00 PM",
    categories: ["Plastics", "Glass", "Metal"],
  },
  {
    id: 2,
    name: "EcoPoint Trans Amadi",
    address: "45 Trans Amadi Industrial Layout",
    hours: "Mon–Fri, 9:00 AM – 5:00 PM",
    categories: ["E-waste", "Batteries", "Plastics"],
  },
  {
    id: 3,
    name: "Rumuola Community Recycling Hub",
    address: "7 Rumuola Road, Rumuola",
    hours: "Daily, 7:00 AM – 7:00 PM",
    categories: ["Paper", "Cardboard", "Glass"],
  },
  {
    id: 4,
    name: "Ada George Green Station",
    address: "23 Ada George Road",
    hours: "Mon–Sat, 8:00 AM – 4:00 PM",
    categories: ["Organic", "Metal", "Plastics"],
  },
];