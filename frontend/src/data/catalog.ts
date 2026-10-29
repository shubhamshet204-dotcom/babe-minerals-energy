export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  brandSlug: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  size: string;
  description: string;
  batch: string;
  grade: string;
  price: string;
  priceValue: number;
  moq?: string;
  bisCode?: string;
}

import { hotRolledProducts } from './hotRolledProducts';
import { steelProducts } from './steelProducts';
export { hotRolledProducts, steelProducts };

export interface CategoryItem {
  slug: string;
  title: string;
  description: string;
  spec: string;
  tag: string;
  image: string;
  imageAlt: string;
  restricted?: boolean;
}

export interface NavGroup {
  id: number;
  slug: string;
  title: string;
  categorySlugs: string[];
  icon: 'layers' | 'box' | 'truck' | 'filter' | 'file-text' | 'shield-check' | 'refresh-cw';
}

export const navGroups: NavGroup[] = [
  {
    id: 1,
    slug: 'steel-and-metals',
    title: 'Steel & Metals',
    categorySlugs: [
      'steel',
      'steel-products',
      'ferrous-metals',
      'non-ferrous-metals',
      'non-ferrous-metal-products',
      'ferroalloys',
      'alloys-and-master-alloys',
    ],
    icon: 'layers',
  },
  {
    id: 2,
    slug: 'minerals-and-mining',
    title: 'Minerals & Mining',
    categorySlugs: [
      'foundry-materials',
      'minerals-and-ores',
      'mining-and-steelmaking-raw-materials',
    ],
    icon: 'box',
  },
  {
    id: 3,
    slug: 'energy-and-petroleum',
    title: 'Energy & Petroleum',
    categorySlugs: [
      'industrial-gases',
      'crude-oil-and-petroleum',
      'petrochemicals',
      'electrical-and-energy-materials',
    ],
    icon: 'truck',
  },
  {
    id: 4,
    slug: 'chemicals-and-plastics',
    title: 'Chemicals & Plastics',
    categorySlugs: [
      'engineering-plastics',
      'commodity-plastics',
      'plastic-products-and-compounds',
      'chemicals',
      'specialty-chemicals',
      'rubber-and-elastomers',
    ],
    icon: 'filter',
  },
  {
    id: 5,
    slug: 'agri-and-textiles',
    title: 'Agri & Textiles',
    categorySlugs: [
      'food-grains-and-agricultural-commodities',
      'cotton-and-textile-materials',
      'fertilizers-and-agricultural-inputs',
    ],
    icon: 'file-text',
  },
  {
    id: 6,
    slug: 'construction-and-industrial',
    title: 'Construction & Industrial',
    categorySlugs: [
      'construction-materials',
      'machinery-and-engineering-products',
      'packaging-materials',
      'paper-pulp-and-wood',
      'industrial-safety-and-consumables',
    ],
    icon: 'box',
  },
  {
    id: 7,
    slug: 'recycling-and-scrap',
    title: 'Recycling & Scrap',
    categorySlugs: [
      'recycling-and-scrap',
    ],
    icon: 'refresh-cw',
  },
  {
    id: 8,
    slug: 'food-and-pharma',
    title: 'Food & Pharma',
    categorySlugs: [
      'pharmaceutical-food-and-personal-care-ingredients',
    ],
    icon: 'shield-check',
  },
];

// All 30 categories matching docs/category-list.md
export const categories30: CategoryItem[] = [
  {
    slug: 'steel',
    title: 'Steel',
    description: 'Primary and specialty industrial steel grades: carbon, alloy, tool, stainless, high-tensile, bearing, and structural steel.',
    spec: 'IS / ASTM / EN',
    tag: '20 Grades',
    image: '/images/categories/MS hot rolled.png',
    imageAlt: 'Steel products and industrial alloys',
  },
  {
    slug: 'steel-products',
    title: 'Steel Products',
    description: 'Processed and manufactured steel components, standard sections, fasteners, and fabricated industrial supplies.',
    spec: 'Grade / Dimension',
    tag: 'Industrial',
    image: '/images/categories/steel-products.jpg',
    imageAlt: 'Fabricated and processed steel products',
  },
  {
    slug: 'ferrous-metals',
    title: 'Ferrous Metals',
    description: 'Primary iron and iron-based metals including pig iron, sponge iron (DRI), and cast iron feedstock.',
    spec: 'Fe Content %',
    tag: 'Bulk',
    image: '/images/categories/ferrous-metals.jpg',
    imageAlt: 'Ferrous metals and pig iron materials',
  },
  {
    slug: 'non-ferrous-metals',
    title: 'Non-Ferrous Metals',
    description: 'Primary base metals including aluminium, copper, zinc, lead, nickel, and tin ingots.',
    spec: 'Purity / Grade',
    tag: 'Base Metals',
    image: '/images/categories/non-ferrous-metals.jpg',
    imageAlt: 'Non-ferrous metal ingots and cathode slabs',
  },
  {
    slug: 'non-ferrous-metal-products',
    title: 'Non-Ferrous Metal Products',
    description: 'Extrusions, sheets, rods, wire, busbars, and rolled profiles in non-ferrous metals and alloys.',
    spec: 'Alloy / Temper',
    tag: 'Fabricated',
    image: '/images/categories/non-ferrous-metal-products.jpg',
    imageAlt: 'Non-ferrous metal sheets, bars and extrusions',
  },
  {
    slug: 'ferroalloys',
    title: 'Ferroalloys',
    description: 'Alloys of iron with high proportion of other elements such as ferro chrome, ferro silicon, and ferro manganese.',
    spec: 'Si / Mn / Cr %',
    tag: 'Smelting',
    image: '/images/categories/ferroalloys.jpg',
    imageAlt: 'Ferroalloy lumps and smelting additives',
  },
  {
    slug: 'alloys-and-master-alloys',
    title: 'Alloys and Master Alloys',
    description: 'Pre-alloyed base concentrates and master alloy additives for metal casting, refining, and grain refinement.',
    spec: 'Composition %',
    tag: 'Refining',
    image: '/images/categories/alloys-and-master-alloys.jpg',
    imageAlt: 'Master alloy ingots and additive materials',
  },
  {
    slug: 'foundry-materials',
    title: 'Foundry Materials',
    description: 'Consumables and inputs for foundries including silica sand, bentonite, inoculants, binders, and refractories.',
    spec: 'AFS / Grade',
    tag: 'Foundry',
    image: '/images/categories/foundry-materials.jpg',
    imageAlt: 'Foundry molding sands, additives and refractories',
  },
  {
    slug: 'minerals-and-ores',
    title: 'Minerals and Ores',
    description: 'Natural mineral resources including iron ore, bauxite, limestone, gypsum, dolomite, and quartz.',
    spec: 'Grade / Origin',
    tag: 'Bulk Ore',
    image: '/images/categories/minerals-and-ores.jpg',
    imageAlt: 'Mined mineral ores and rock aggregates',
  },
  {
    slug: 'mining-and-steelmaking-raw-materials',
    title: 'Mining and Steelmaking Raw Materials',
    description: 'Primary inputs for blast furnaces and smelting, including coking coal, metallurgical coke, flux, and sinter.',
    spec: 'GCV / Ash %',
    tag: 'Raw Materials',
    image: '/images/categories/mining-and-steelmaking-raw-materials.jpg',
    imageAlt: 'Metallurgical coke and steelmaking feedstock',
  },
  {
    slug: 'industrial-gases',
    title: 'Industrial Gases',
    description: 'High-purity compressed and liquefied industrial gases such as oxygen, nitrogen, argon, and carbon dioxide.',
    spec: 'Purity %',
    tag: 'Gases',
    image: '/images/categories/industrial-gases.jpg',
    imageAlt: 'Industrial gas cylinders and storage tanks',
    restricted: true,
  },
  {
    slug: 'engineering-plastics',
    title: 'Engineering Plastics',
    description: 'High-performance polymers including nylon, polyacetal (POM), polycarbonate, and PBT for mechanical components.',
    spec: 'Polymer Grade',
    tag: 'Resins',
    image: '/images/categories/engineering-plastics.jpg',
    imageAlt: 'Engineering plastic resin granules and profiles',
  },
  {
    slug: 'commodity-plastics',
    title: 'Commodity Plastics',
    description: 'High-volume standard thermoplastic resins including HDPE, LDPE, LLDPE, PP, and PVC.',
    spec: 'MFI / Density',
    tag: 'Bulk Polymer',
    image: '/images/categories/commodity-plastics.jpg',
    imageAlt: 'Thermoplastic polymer pellets and bulk granules',
  },
  {
    slug: 'plastic-products-and-compounds',
    title: 'Plastic Products and Compounds',
    description: 'Compounded polymer granules, masterbatches, reinforced blends, and semi-finished plastic shapes.',
    spec: 'Filler / Color',
    tag: 'Compounding',
    image: '/images/categories/plastic-products-and-compounds.jpg',
    imageAlt: 'Plastic compounds, masterbatches and molded stock',
  },
  {
    slug: 'chemicals',
    title: 'Chemicals',
    description: 'Standard basic and bulk industrial inorganic and organic chemical compounds.',
    spec: 'Concentration %',
    tag: 'Chemicals',
    image: '/images/categories/chemicals.jpg',
    imageAlt: 'Industrial chemical storage and IBC containers',
    restricted: true,
  },
  {
    slug: 'specialty-chemicals',
    title: 'Specialty Chemicals',
    description: 'Formulated and performance chemical agents, catalysts, water treatment additives, and surface treatments.',
    spec: 'Formulation',
    tag: 'Performance',
    image: '/images/categories/specialty-chemicals.jpg',
    imageAlt: 'Specialty formulation reagents and chemical drums',
    restricted: true,
  },
  {
    slug: 'crude-oil-and-petroleum',
    title: 'Crude Oil and Petroleum',
    description: 'Hydrocarbon feedstocks, crude oil fractions, furnace fuel oil, and heavy industrial petroleum derivatives.',
    spec: 'API / Viscosity',
    tag: 'Fuels',
    image: '/images/categories/crude-oil-and-petroleum.jpg',
    imageAlt: 'Crude petroleum barrels and refinery storage tanks',
    restricted: true,
  },
  {
    slug: 'petrochemicals',
    title: 'Petrochemicals',
    description: 'Chemical products derived from petroleum refining, including aromatic hydrocarbons, olefins, and solvents.',
    spec: 'Purity %',
    tag: 'Solvents',
    image: '/images/categories/petrochemicals.jpg',
    imageAlt: 'Petrochemical refinery infrastructure and drums',
    restricted: true,
  },
  {
    slug: 'recycling-and-scrap',
    title: 'Recycling and Scrap',
    description: 'Recyclable scrap metals, shredded steel, brass cuttings, and industrial secondary raw materials.',
    spec: 'ISRI Grade',
    tag: 'Secondary',
    image: '/images/categories/recycling-and-scrap.jpg',
    imageAlt: 'Sorted metal scrap and recycled industrial scrap',
  },
  {
    slug: 'food-grains-and-agricultural-commodities',
    title: 'Food Grains and Agricultural Commodities',
    description: 'Bulk agricultural crops including wheat, rice, pulses, oilseeds, and dry commercial grains.',
    spec: 'Moisture / Grade',
    tag: 'Agri Bulk',
    image: '/images/categories/food-grains-and-agricultural-commodities.jpg',
    imageAlt: 'Wholesale agricultural grains and bulk harvest stock',
  },
  {
    slug: 'cotton-and-textile-materials',
    title: 'Cotton and Textile Materials',
    description: 'Natural and synthetic raw textile inputs including raw cotton bales, spun yarns, and woven fabric stock.',
    spec: 'Count / Staple',
    tag: 'Textiles',
    image: '/images/categories/cotton-and-textile-materials.jpg',
    imageAlt: 'Raw cotton bales and industrial textile fibers',
  },
  {
    slug: 'fertilizers-and-agricultural-inputs',
    title: 'Fertilizers and Agricultural Inputs',
    description: 'Agricultural plant nutrition compounds including urea, DAP, MOP, micronutrients, and soil conditioners.',
    spec: 'N-P-K Value',
    tag: 'Agri Inputs',
    image: '/images/categories/fertilizers-and-agricultural-inputs.jpg',
    imageAlt: 'Agricultural fertilizer bags and granular nutrients',
  },
  {
    slug: 'rubber-and-elastomers',
    title: 'Rubber and Elastomers',
    description: 'Natural rubber sheets, synthetic elastomers, SBR, and carbon black additives for industrial compounding.',
    spec: 'Mooney / RSS',
    tag: 'Elastomers',
    image: '/images/categories/rubber-and-elastomers.jpg',
    imageAlt: 'Industrial raw rubber bales and synthetic polymers',
  },
  {
    slug: 'construction-materials',
    title: 'Construction Materials',
    description: 'Heavy civil and building materials including aggregates, bricks, AAC blocks, cement, and masonry supplies.',
    spec: 'IS Standard',
    tag: 'Building',
    image: '/images/categories/construction-materials.jpg',
    imageAlt: 'Commercial construction supplies and masonry materials',
  },
  {
    slug: 'machinery-and-engineering-products',
    title: 'Machinery and Engineering Products',
    description: 'Industrial machinery, power transmissions, pumps, electric motors, valves, and mechanical hardware.',
    spec: 'Rating / kW',
    tag: 'Equipment',
    image: '/images/categories/machinery-and-engineering-products.jpg',
    imageAlt: 'Industrial machinery and mechanical assemblies',
  },
  {
    slug: 'electrical-and-energy-materials',
    title: 'Electrical and Energy Materials',
    description: 'Power distribution cabling, switchgear, solar components, transformers, and industrial conductors.',
    spec: 'Voltage / Amps',
    tag: 'Electrical',
    image: '/images/categories/electrical-and-energy-materials.jpg',
    imageAlt: 'Industrial electrical cabling and power distribution gear',
  },
  {
    slug: 'packaging-materials',
    title: 'Packaging Materials',
    description: 'Industrial transport packaging including corrugated boxes, stretch film, steel strapping, and woven sacks.',
    spec: 'GSM / Ply',
    tag: 'Packaging',
    image: '/images/categories/packaging-materials.jpg',
    imageAlt: 'Heavy industrial packaging and strapping supplies',
  },
  {
    slug: 'paper-pulp-and-wood',
    title: 'Paper, Pulp and Wood',
    description: 'Kraft paper, industrial linerboard, packaging pulp, treated timber, and engineered plywood sheets.',
    spec: 'GSM / Caliper',
    tag: 'Pulp & Paper',
    image: '/images/categories/paper-pulp-and-wood.jpg',
    imageAlt: 'Industrial paper rolls, pulp stock and timber sheets',
  },
  {
    slug: 'industrial-safety-and-consumables',
    title: 'Industrial Safety and Consumables',
    description: 'PPE equipment, welding electrodes, abrasive discs, lubricants, and workshop maintenance consumables.',
    spec: 'EN / IS Standard',
    tag: 'Safety & MRO',
    image: '/images/categories/industrial-safety-and-consumables.jpg',
    imageAlt: 'Industrial safety gear and workshop consumables',
  },
  {
    slug: 'pharmaceutical-food-and-personal-care-ingredients',
    title: 'Pharmaceutical, Food and Personal-Care Ingredients',
    description: 'Active pharmaceutical ingredients (APIs), excipients, food-grade additives, and personal care raw ingredients.',
    spec: 'Assay / USP',
    tag: 'Pharma Grade',
    image: '/images/categories/pharmaceutical-food-and-personal-care-ingredients.jpg',
    imageAlt: 'Pharmaceutical raw ingredients and food additives',
    restricted: true,
  },
];

// Helper functions
export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getGroupBySlug(groupSlug: string): NavGroup | undefined {
  return navGroups.find((g) => g.slug === groupSlug);
}

export function getGroupByCategorySlug(catSlug: string): NavGroup | undefined {
  return navGroups.find((g) => g.categorySlugs.includes(catSlug));
}

export const categories: CategoryItem[] = [
  // Existing categories (preserved exactly as they were)
  {
    slug: 'steel',
    title: 'Steel',
    description: 'Primary and specialty industrial steel grades: carbon, alloy, tool, stainless, high-tensile, bearing, and structural steel.',
    spec: 'IS / ASTM / EN',
    tag: '20 Grades',
    image: '/images/categories/MS hot rolled.png',
    imageAlt: 'Steel products and industrial alloys',
  },
  {
    slug: 'hot-rolled-steel',
    title: 'MS Hot rolled',
    description: 'HR coils, sheets, plates and checkered stock for fabrication, sheds and commercial structures.',
    spec: 'IS 2062',
    tag: 'Fast dispatch',
    image: '/images/categories/MS hot rolled.png',
    imageAlt: 'MS Hot rolled steel coil',
  },
  {
    slug: 'cold-rolled-steel',
    title: 'MS Cold rolled',
    description: 'Precision CRCA sheets and coils for appliances, furniture, panels, and industrial applications.',
    spec: 'IS 513',
    tag: 'High finish',
    image: '/images/categories/ms cold rolled.png',
    imageAlt: 'MS Cold rolled sheet',
  },
  {
    slug: 'tmt-bars',
    title: 'TMT',
    description: 'Fe 500D and Fe 550D rebars for RCC applications, residential and infrastructure projects.',
    spec: 'IS 1786',
    tag: 'High ductility',
    image: '/images/categories/tmt.png',
    imageAlt: 'TMT reinforcement bars',
  },
  {
    slug: 'cement',
    title: 'Cement',
    description: 'OPC and PPC cement for foundations, concrete work and large-scale construction.',
    spec: 'OPC / PPC',
    tag: 'Project supply',
    image: '/images/categories/cement.png',
    imageAlt: 'Cement bag',
  },
  {
    slug: 'coated-steel',
    title: 'Coated Steel',
    description: 'GI and pre-painted coated sheets for roofing, cladding and corrosion-resistant applications.',
    spec: 'GI / PPGI',
    tag: 'Weather-ready',
    image: '/images/categories/coated steel.png',
    imageAlt: 'Coated steel profile',
  },
  {
    slug: 'wire-rods',
    title: 'Wire rods',
    description: 'Steel wire rod feedstock for drawing, fasteners, mesh and general engineering.',
    spec: 'IS 7887',
    tag: 'Mill supply',
    image: '/images/categories/wire rods.png',
    imageAlt: 'Steel wire rod coil',
  },
  {
    slug: 'structural-steel',
    title: 'Structural Steel',
    description: 'Angles, channels, beams, columns and section stock for industrial and commercial builds.',
    spec: 'IS 2062 / IS 808',
    tag: 'Custom lengths',
    image: '/images/categories/structural steel.png',
    imageAlt: 'Structural steel beams and channels',
  },
  // Remaining categories from the 30 list
  ...categories30.filter((c) => !['steel'].includes(c.slug)),
];

export const topProducts: ProductItem[] = [
  {
    id: 'hr-sheets-e250',
    name: 'IS 2062 E250 HR Sheets & Plates',
    brand: 'Tata Steel',
    brandSlug: 'tata-steel',
    categorySlug: 'hot-rolled-steel',
    image: '/images/hot rolled sheets.png',
    imageAlt: 'Hot-rolled steel sheets and plates in warehouse storage',
    size: '2.0 mm – 25.0 mm',
    description: 'Hot rolled plate and sheet stock ideal for industrial fabrication, PEB structures, and heavy machinery.',
    batch: 'Primary mill direct',
    grade: 'E250 BR/C',
    price: '₹76,200 / MT',
    priceValue: 76200,
    moq: '2.5 MT',
    bisCode: 'IS 2062:2011',
  },
  {
    id: 'tmt-fe550d',
    name: 'Fe 550D High-Ductility TMT Bar',
    brand: 'SAIL',
    brandSlug: 'sail',
    categorySlug: 'tmt-bars',
    image: '/images/rebar.jpg',
    imageAlt: 'Ribbed reinforcement steel bars',
    size: '8 mm – 32 mm',
    description: 'High-strength thermo-mechanically treated reinforcement bar for columns, heavy civil slabs, and metro infrastructure.',
    batch: 'BIS certified',
    grade: 'Fe 550D',
    price: '₹84,400 / MT',
    priceValue: 84400,
    moq: '1.0 MT',
    bisCode: 'IS 1786:2008',
  },
  {
    id: 'structural-beam-ismb',
    name: 'MS Structural Joist / Beam (ISMB)',
    brand: 'Jindal Steel',
    brandSlug: 'jindal-steel',
    categorySlug: 'structural-steel',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Steel stock in an industrial warehouse',
    size: 'ISMB 150 – 500',
    description: 'Universal structural beam sections engineered for pre-engineered buildings, crane girders, and commercial framing.',
    batch: 'Custom 6m/12m',
    grade: 'ISMB E250',
    price: '₹82,900 / MT',
    priceValue: 82900,
    moq: '3.0 MT',
    bisCode: 'IS 808 / IS 2062',
  },
  {
    id: 'crca-coils-cr2',
    name: 'CRCA Precision Coils & Sheets',
    brand: 'AM/NS India',
    brandSlug: 'amns-india',
    categorySlug: 'cold-rolled-steel',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Cold-rolled steel coils in warehouse storage',
    size: '0.40 mm – 2.50 mm',
    description: 'Precision cold-reduced commercial quality steel for automotive pressings, electrical enclosures, and white goods.',
    batch: 'Mill direct',
    grade: 'CR2/CR3 Oiled',
    price: '₹79,600 / MT',
    priceValue: 79600,
    moq: '2.0 MT',
    bisCode: 'IS 513:2016',
  },
  {
    id: 'ms-channel-ismc',
    name: 'MS Structural Channels (ISMC)',
    brand: 'JSW Steel',
    brandSlug: 'jsw-steel',
    categorySlug: 'structural-steel',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Structural steel channels in stockyard',
    size: 'ISMC 75 – 300',
    description: 'Medium weight structural steel channels for purlins, automotive chassis, and industrial bracing frameworks.',
    batch: 'Standard lengths',
    grade: 'ISMC E250',
    price: '₹81,200 / MT',
    priceValue: 81200,
    moq: '2.0 MT',
    bisCode: 'IS 808',
  },
  {
    id: 'ms-angle-isa',
    name: 'Equal & Unequal MS Angles (ISA)',
    brand: 'SAIL',
    brandSlug: 'sail',
    categorySlug: 'structural-steel',
    image: '/images/steel-coils.jpg',
    imageAlt: 'MS angle sections',
    size: '25x25x3 to 150x150x12 mm',
    description: 'Hot rolled equal angle sections for transmission towers, general fabrication, and truss building.',
    batch: 'Mill traceable',
    grade: 'ISA E250',
    price: '₹79,900 / MT',
    priceValue: 79900,
    moq: '1.5 MT',
    bisCode: 'IS 2062',
  },
  {
    id: 'coated-ppgi-sheets',
    name: 'Pre-Painted Galvanized (PPGI) Roofing',
    brand: 'Tata Steel',
    brandSlug: 'tata-steel',
    categorySlug: 'coated-steel',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Coated steel profile sheet',
    size: '0.45 mm – 0.80 mm',
    description: 'Corrosion resistant colour coated roofing profile sheets with superior thermal insulation and weather protection.',
    batch: 'Factory packed',
    grade: 'PPGI 120 GSM',
    price: '₹88,500 / MT',
    priceValue: 88500,
    moq: '1.0 MT',
    bisCode: 'IS 14246',
  },
  {
    id: 'ultratech-opc-53',
    name: 'UltraTech Premium OPC 53 Grade Cement',
    brand: 'UltraTech Cement',
    brandSlug: 'ultratech-cement',
    categorySlug: 'cement',
    image: '/images/cement-plant.jpg',
    imageAlt: 'Cement plant and bags',
    size: '50 kg Bag / Bulk Tanker',
    description: 'High early strength Ordinary Portland Cement for structural concrete, precast elements, and critical RCC slabs.',
    batch: 'Fresh depot stock',
    grade: 'OPC 53',
    price: '₹380 / Bag',
    priceValue: 7600,
    moq: '50 Bags',
    bisCode: 'IS 269:2015',
  },
];

export const allProducts: ProductItem[] = [
  ...topProducts,
  ...hotRolledProducts,
  ...steelProducts,
];

export const brands = [
  { name: 'JSW Steel', slug: 'jsw-steel', category: 'Steel', logo: '/images/brands/jsw steel.png', imageAlt: 'JSW Steel' },
  { name: 'Tata Steel', slug: 'tata-steel', category: 'Steel', logo: '/images/brands/sail.png', imageAlt: 'Tata Steel' },
  { name: 'SAIL', slug: 'sail', category: 'Steel', logo: '/images/brands/sail.png', imageAlt: 'SAIL' },
  { name: 'Jindal Steel', slug: 'jindal-steel', category: 'Steel', logo: '/images/brands/jsw steel.png', imageAlt: 'Jindal Steel' },
  { name: 'AM/NS India', slug: 'amns-india', category: 'Steel', logo: '/images/brands/jsw one.png', imageAlt: 'AM/NS India' },
  { name: 'JSW Cement', slug: 'jsw-cement', category: 'Cement', logo: '/images/brands/jse cement.png', imageAlt: 'JSW Cement' },
  { name: 'JSW One', slug: 'jsw-one', category: 'Steel & TMT', logo: '/images/brands/jsw one.png', imageAlt: 'JSW One TMT' },
  { name: 'Ultratech Cement', slug: 'ultratech-cement', category: 'Cement', logo: '/images/brands/ultratech cement.png', imageAlt: 'Ultratech Cement' },
  { name: 'Chettinad Cement', slug: 'chettinad-cement', category: 'Cement', logo: '/images/brands/chettinad cement.png', imageAlt: 'Chettinad Cement' },
  { name: 'Ambuja Cement', slug: 'ambuja-cement', category: 'Cement', logo: '/images/brands/ambuja cement.png', imageAlt: 'Ambuja Cement' },
  { name: 'Kalika', slug: 'kalika', category: 'Steel', logo: '/images/brands/kalika cement.png', imageAlt: 'Kalika Steel' },
  { name: 'Shree Cement', slug: 'shree-cement', category: 'Cement', logo: '/images/brands/shree cement.png', imageAlt: 'Shree Cement' },
  { name: 'Zuari Cement', slug: 'zuari-cement', category: 'Cement', logo: '/images/brands/zuari.png', imageAlt: 'Zuari Cement' },
];

export const industries = [
  {
    title: 'Infrastructure & Bridges',
    text: 'Heavy structural steel beams, high-strength TMT Fe550D, and foundation supply with full mill test compliance for highway and civil projects.',
    image: '/images/rebar.jpg',
    imageAlt: 'Reinforcing steel for infrastructure work',
    tag: 'Civil Infrastructure',
    num: '01',
  },
  {
    title: 'PEB & Industrial Sheds',
    text: 'Certified HR plates, purlins, ISMB beams, and colour coated roofing sheets for pre-engineered warehouses and manufacturing plants.',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Coils of steel stored in a warehouse',
    tag: 'Pre-Engineered',
    num: '02',
  },
  {
    title: 'Building & Construction',
    text: 'Dependable reinforcement bars, binding wire, and 53-grade cement delivered directly to construction sites across major metropolitan hubs.',
    image: '/images/rebar.jpg',
    imageAlt: 'Reinforcement bars for construction',
    tag: 'Residential & Commercial',
    num: '03',
  },
  {
    title: 'Precision Fabrication & OEM',
    text: 'Tight-tolerance CRCA sheets, laser-quality HR plates, and cold drawn wire rods for electrical panels, machinery, and automotive parts.',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Steel coils inside a manufacturing supply warehouse',
    tag: 'OEM & Machining',
    num: '04',
  },
];

export const trustPoints = [
  {
    title: '100% Primary Mill Direct',
    text: 'Sourced straight from certified primary mills (Tata, SAIL, JSP, JSW) with original manufacturer heat certificates.',
    iconName: 'shield-check',
  },
  {
    title: 'Transparent Index Pricing',
    text: 'Real-time base pricing per metric tonne without hidden loading fees or surprise escalations at weighment.',
    iconName: 'file-text',
  },
  {
    title: '24-48 Hr Express Dispatch',
    text: 'Streamlined regional yard logistics guaranteeing fast turnaround on standard stock lengths and coil slit orders.',
    iconName: 'truck',
  },
  {
    title: 'MSME Working Capital Credit',
    text: 'Access flexible 30-90 days financing and structured credit terms designed to support growing contractors.',
    iconName: 'credit-card',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Specify Requirements',
    text: 'Select your required steel grades, standard sizes, tonnage, and destination pincode.',
  },
  {
    step: '02',
    title: 'Instant Freight & Price',
    text: 'Receive a transparent commercial quote with GST, freight, and estimated yard dispatch window.',
  },
  {
    step: '03',
    title: 'Flexible Settlement / Credit',
    text: 'Pay securely via RTGS, escrow, or activate MSME credit lines linked to your GST profile.',
  },
  {
    step: '04',
    title: 'Doorstep Delivery with MTC',
    text: 'Track real-time transit and receive calibrated electronic weighbridge slips and digital MTC.',
  },
];

export const insights = [
  {
    tag: 'Technical Guide',
    meta: 'Material Standards',
    title: 'Selecting the Right TMT Grade: Fe 500D vs Fe 550D vs CRS',
    summary: 'A comprehensive engineering guide on yield strength, elongation, seismic resistance, and cost per square meter.',
    image: '/images/rebar.jpg',
    imageAlt: 'Close-up of reinforcing steel bars',
  },
  {
    tag: 'Procurement Ops',
    meta: 'Cost Optimization',
    title: 'Reducing Plate Cutting & Scrap Wastage in Structural Fabrication',
    summary: 'Standard nesting tips and standard plate sizing strategies that reduce offcut losses for PEB fabricators.',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Steel coil stock in a warehouse',
  },
  {
    tag: 'Quality Compliance',
    meta: 'Inspection & MTC',
    title: 'How to Authenticate Mill Test Certificates (MTC) for BIS Compliance',
    summary: 'Key chemical composition parameters (Carbon, Sulphur, Phosphorus) and mechanical test checks to verify on delivery.',
    image: '/images/steel-coils.jpg',
    imageAlt: 'Steel coil inventory at an industrial supply warehouse',
  },
];

export const faqList = [
  {
    q: 'How does BME guarantee material authenticity?',
    a: 'Every consignment dispatched by Bable Minerals and Energy Private Limited (BME) is accompanied by the original primary mill manufacturer’s Mill Test Certificate (MTC) containing heat number, chemical composition, and mechanical test results matching the physical stamping on the steel.',
  },
  {
    q: 'What is the Minimum Order Quantity (MOQ)?',
    a: 'For TMT bars and structural sections, MOQ starts from 1 MT per standard size. For customized coil slitting or plate profile cutting, MOQ is typically 2.5 MT to 5 MT.',
  },
  {
    q: 'How are freight and transportation charges calculated?',
    a: 'Freight is calculated transparently based on the delivery pincode and total tonnage, utilizing our regional dispatch hub in Belagavi, Karnataka and network of calibrated transport carriers. You can also opt for self-pickup from our Belagavi stockyard.',
  },
  {
    q: 'What payment and credit options are available for MSMEs?',
    a: 'We accept RTGS/NEFT, corporate Net Banking, and offer 30-90 days trade credit for GST-registered MSMEs through our partner financial institutions subject to KYC verification.',
  },
  {
    q: 'Can I request customized lengths and coil slitting?',
    a: 'Yes, Bable Minerals and Energy Private Limited (BME) provides value-added processing including decoiling, precision slitting, cut-to-length (CTL), and beam profile drilling through our service center partners.',
  },
];
