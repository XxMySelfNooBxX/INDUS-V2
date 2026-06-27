export interface EquipmentStat {
  label: string;
  value: string;
  iconName: string;
}

export interface EquipmentItem {
  id: string;
  category: string;
  subCategory?: string;
  title: string;
  features?: string[];
  stats?: EquipmentStat[];
  specs: string[];
}

export const equipmentData: EquipmentItem[] = [
  // Haulage
  { 
    id: "tipping-trailers", 
    category: "Haulage", 
    subCategory: "TRACTOR TRAILERS",
    title: "Tipping Trailers", 
    features: [
      "Farmking Tipping Trailers can be tipped hydraulically with ease and quick unloading.",
      "The side door can be dropped down or removed for reachability for loading and unloading, increasing productivity.",
      "The trailers' chassis and frame are constructed using high-strength structural steel providing rigidity and stability.",
      "High-strength steel hubs and solid axles provide maximum load ability.",
      "All Farmking Trailers are equipped with reversible towing hooks to reduce and increase the tow hook height for individual requirement mounting.",
      "Tubeless type or Tube Type Tyres (Optional)"
    ],
    stats: [
      { label: "Power Required", value: "35 - 120 H.P.", iconName: "Tractor" },
      { label: "Tipping Capacity", value: "2 - 10 Ton", iconName: "Truck" },
      { label: "Volume Capacity", value: "3 Side", iconName: "Box" },
      { label: "Axle Type", value: "Solid", iconName: "Dumbbell" }
    ],
    specs: ["35 - 120 H.P.", "2 - 10 Ton Capacity", "3 Side Tipping", "Solid Build"] 
  },
  { 
    id: "non-tipping-trailers", 
    category: "Haulage", 
    subCategory: "TRACTOR TRAILERS",
    title: "Non-Tipping Trailers", 
    features: [
      "Farmking Non-Tipping Trailer is used for transporting goods where double handling is required for the material.",
      "Option of 2 Wheel or 4 Wheel with Regular or Tandem wheel setup.",
      "The side door can be dropped down or removed for reachability for loading and unloading, increasing productivity.",
      "The trailers' chassis and frame are constructed using high-strength structural steel providing rigidity and stability.",
      "High-strength steel hubs and solid axles provide maximum load ability.",
      "All Farmking Trailers are equipped with reversible towing hooks to reduce and increase the tow hook height for individual requirement mounting.",
      "Tubeless type or Tube Type Tyres (Optional)"
    ],
    stats: [
      { label: "Power required", value: "35 - 60 H.P.", iconName: "Tractor" },
      { label: "Capacity", value: "3-10 Ton", iconName: "Truck" },
      { label: "Axle Type", value: "Solid", iconName: "Dumbbell" },
      { label: "Volumetric Capacity", value: "2.05 cu.m.", iconName: "Box" }
    ],
    specs: ["35 - 60 H.P.", "3 - 10 Ton Capacity", "Solid Build", "2.05 cu.m. Volume"] 
  },
  { 
    id: "3-way-tipping-trailers", 
    category: "Haulage", 
    subCategory: "TRACTOR TRAILERS",
    title: "3-Way Tipping Trailers", 
    features: [
      "Farmking Tipping Trailers can be tipped hydraulically with ease and quick unloading.",
      "The side door can be dropped down or removed for reachability for loading and unloading, increasing productivity.",
      "The trailers' chassis and frame are constructed using high-strength structural steel providing rigidity and stability.",
      "High-strength steel hubs and solid axles provide maximum load ability.",
      "All Farmking Trailers are equipped with reversible towing hooks to reduce and increase the tow hook height for individual requirement mounting.",
      "Tubeless type or Tube Type Tyres (Optional)"
    ],
    stats: [
      { label: "Power required", value: "35 - 60 H.P.", iconName: "Tractor" },
      { label: "Tipping Capacity", value: "3 - 10 TON", iconName: "Truck" },
      { label: "Axle Type", value: "Solid", iconName: "Dumbbell" },
      { label: "Volumetric Capacity", value: "2.05 cu.m.", iconName: "Box" }
    ],
    specs: ["35 - 60 H.P.", "3 - 10 Ton Capacity", "Solid Build", "2.05 cu.m. Volume"] 
  },
  { 
    id: "water-tankers-bowsers", 
    category: "Haulage", 
    subCategory: "WATER TANKER",
    title: "Water Tankers / Bowsers", 
    features: [
      "FARMKING Water Tankers are used in the domestic supply of drinking water, irrigation and livestock water supply, horticulture, commercial and industrial water supply, dust and fire suppressions utility, etc.",
      "The tankers incorporate a full-length chassis under the body for complete rigidity and stability.",
      "It has baffle partitions strategically placed for easy maneuverability during braking, acceleration, and turning.",
      "It can easily mounted and detached from the tanker.",
      "Standard fitment of the swivel hitch eliminates the risk of combined rollover.",
      "It is provided with a ladder and a walking area over the tanker for easy reachability on the tanker. It included multiple manholes for easy cleaning."
    ],
    stats: [
      { label: "Power required", value: "35 - 60", iconName: "Tractor" },
      { label: "Capacity", value: "5000 Liters", iconName: "Box" },
      { label: "Axle Type", value: "Solid", iconName: "Dumbbell" }
    ],
    specs: ["35 - 60 H.P.", "5000 Liters Capacity", "Solid Build"] 
  },
  
  // Harvesting
  { 
    id: "rotary-mulcher-flail-mower", 
    category: "Harvesting", 
    subCategory: "MULCHER",
    title: "Rotary Mulcher / Flail Mower", 
    features: [
      "FARMKING Rotary Mulcher is designed to shred the remaining crop residual, hay grass, shrubs, small woods, pruning, etc. into fine pieces.",
      "It is also widely used to chop remains of sugarcane stalks, paddy straw, banana tree waste, and other crops and convert them into organic mulch increasing soil fertility.",
      "It is designed for maximum efficiency and toughest job conditions. It can chops stalks up to size of 2 inches.",
      "It comes with standard electronically balanced rotor to work vibration free at higher speeds and thus require less power.",
      "It is equipped with Rear Roller with provision of height adjustment. This allows to achieve the compaction of mulch uniformly."
    ],
    stats: [
      { label: "Power Required", value: "40 - 80 HP", iconName: "Tractor" },
      { label: "Cutting Width", value: "1.60m - 2.20m", iconName: "Ruler" },
      { label: "PTO Speed", value: "540 RPM", iconName: "Settings" },
      { label: "3-Point Linkage", value: "CAT I & II", iconName: "Triangle" }
    ],
    specs: ["40 - 80 HP", "1.60m - 2.20m Width", "540 RPM", "CAT I & II Hitch", '"Y+ I" Blades or "L" Hammer', "Manual Offset (Max 300 mm)", "Counter Knives"] 
  },
  { 
    id: "sickle-bar-mower-forage-mower", 
    category: "Harvesting", 
    subCategory: "FORAGE MOWER",
    title: "Sickle Bar Mower / Forage Mower", 
    features: [
      "Forage Mower is used for cutting fodder crops such as millet, sorghum, oats, barley, etc.",
      "The blades run inside the tooth in reciprocating motion increasing the cutting efficiency and avoiding waste logging issue.",
      "It saves labour cost and time. It is also available in multiple cutting widths: 62 inches & 84 inches for various field jobs.",
      "It has belt driven cutter blades thus, it can be even used on lower HP tractors.",
      "It comes with parking stand which provide stability when sickle bar is not in use."
    ],
    stats: [
      { label: "Power Required", value: "35-45", iconName: "Tractor" },
      { label: "Cutting Width", value: "62 -84 inches", iconName: "Ruler" },
      { label: "Input RPM", value: "540 RPM", iconName: "Settings" },
      { label: "Weight", value: "190 - 215 kg.", iconName: "Weight" }
    ],
    specs: ["35 - 45 HP", "62 - 84 inches Width", "540 RPM", "190 - 215 kg Weight"] 
  },

  // Crop Protection
  { 
    id: "boom-sprayer", 
    category: "Crop Protection", 
    subCategory: "SPRAYERS",
    title: "Boom Sprayer", 
    features: [
      "Variable boom height allows you to use the boom sprayer at various heights and at various stages of the crop cycle.",
      "The storage tank is equipped with a water level indicator for operator convenience.",
      "The agrochemical-resistant storage tank increases the life span.",
      "The boom has the scope of height adjustment allowing up to 610 mm vertical height gain, other adjustments can be done by tractor lift.",
      "It comes fitted with a 5HP / 60 Liter per minute capacity HTP water pump.",
      "It can be operated in semi and fully opened boom position on either sides, independently"
    ],
    stats: [
      { label: "Pump Output", value: "60 Liters/min", iconName: "Activity" },
      { label: "Storage", value: "400 & 600 Liters", iconName: "Database" },
      { label: "Spray Coverage", value: "9/12 meters", iconName: "CloudRain" },
      { label: "3 Point Linkage", value: "CAT II", iconName: "Triangle" }
    ],
    specs: ["60 Liters/min", "400 & 600 Liters Capacity", "9/12 meters Reach", "CAT II Hitch"] 
  },
  { 
    id: "tractor-mounted-sprayer", 
    category: "Crop Protection", 
    subCategory: "SPRAYERS",
    title: "Tractor Mounted Sprayer", 
    features: [
      "FARMKING Tractor mounted sprayer is a 3-point hitch-attached PTO-driven manual spraying equipment. The basic setup is convenient and easy to use.",
      "It is available in Tank capacity of 550 liters and 100 liters.",
      "It is suitable for farms, orchards, tree plantations, and hard-to-access areas for the effective application of pesticides.",
      "The option of a 100 or 200-m long pipe can reach up to distances while maintaining high pressure.",
      "Easy reach with vertical throw height of 20 ft and 25 ft to horizontally.",
      "Equipped with HTP Pump with an output capacity of 50 liters per minute."
    ],
    stats: [
      { label: "Tank Capacity", value: "550 & 1000 Liters", iconName: "Database" },
      { label: "Pump Capacity", value: "50Liter / Minute", iconName: "Activity" },
      { label: "Tractor Hitch", value: "CAT II", iconName: "Triangle" },
      { label: "Power Required", value: "35-50 H.P.", iconName: "Tractor" }
    ],
    specs: ["550 & 1000 Liters Capacity", "50 Liter/Minute Flow", "CAT II Hitch", "35 - 50 H.P."] 
  },
  { 
    id: "fertilizer-spreader", 
    category: "Crop Protection", 
    subCategory: "FERTILIZER SPREADERS",
    title: "Fertilizer Spreader", 
    features: [
      "Fertilizer Spreader is used for spreading granular fertilizers, uniformly and quickly.",
      "It is available in 400- and 600-Liter tank capacity.",
      "It can accurately distribute mineral fertilizers, organic compounds, and seeds up to 12 m working width.",
      "The quantity and working width can be increased and decreased as per the user's requirements. It also has provision for single-side spreading of fertilizer."
    ],
    stats: [
      { label: "Hopper Capacity", value: "400 / 600 Liters", iconName: "Database" },
      { label: "Working Width", value: "14 Meter", iconName: "Radio" },
      { label: "PTO", value: "540 RPM", iconName: "Settings" },
      { label: "3 Point Linkage", value: "CAT II", iconName: "Triangle" }
    ],
    specs: ["400 / 600 Liters Capacity", "14 Meter Spread", "540 RPM", "CAT II Hitch"] 
  }
];
