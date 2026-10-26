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

export const categories = [
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
