import type { ProductItem } from './catalog';

export interface HotRolledProduct extends ProductItem {
  subType: 'Hot Rolled Sheets' | 'Hot Rolled Coils' | 'Hot Rolled Plates' | 'Chequered Sheets' | 'HRPO Coils & Sheets';
  thicknessMm: number;
  widthMm: number;
  lengthMm: number | 'Coil';
  yieldStrengthMpa?: number;
  finish?: string;
}

// Generate the complete catalog of 124 MS Hot Rolled Products spanning all brands, grades, types and thicknesses
const brandsConfig = [
  { name: 'One Helix', slug: 'one-helix', mill: 'JSW One Verified Primary Mill' },
  { name: 'JSW Steel', slug: 'jsw-steel', mill: 'JSW Vijayanagar / Dolvi Mill' },
  { name: 'NMDC', slug: 'nmdc', mill: 'NMDC Nagarnar Steel Plant' },
  { name: 'Tata Steel', slug: 'tata-steel', mill: 'Tata Steel Kalinganagar / Jamshedpur' },
  { name: 'SAIL', slug: 'sail', mill: 'SAIL Rourkela / Bokaro / Bhilai' },
  { name: 'AM/NS India', slug: 'amns-india', mill: 'AM/NS Hazira Steel Complex' },
  { name: 'Jindal Steel', slug: 'jindal-steel', mill: 'JSPL Angul / Raigarh Mill' },
];

const subTypesList: Array<{
  subType: 'Hot Rolled Sheets' | 'Hot Rolled Coils' | 'Hot Rolled Plates' | 'Chequered Sheets' | 'HRPO Coils & Sheets';
  thicknesses: number[];
  widths: number[];
  lengths: (number | 'Coil')[];
  grades: { grade: string; bis: string; basePrice: number }[];
}> = [
  {
    subType: 'Hot Rolled Sheets',
    thicknesses: [1.6, 2.0, 2.5, 3.0, 3.15, 4.0, 5.0, 6.0, 8.0, 10.0, 12.0],
    widths: [1000, 1200, 1250, 1500],
    lengths: [2500, 3000, 6000],
    grades: [
      { grade: 'E250BR', bis: 'IS 2062:2011', basePrice: 55400 },
      { grade: 'E250A', bis: 'IS 2062:2011', basePrice: 55200 },
      { grade: 'E250B', bis: 'IS 2062:2011', basePrice: 55800 },
      { grade: 'E350BR', bis: 'IS 2062:2011', basePrice: 57400 },
      { grade: 'E410', bis: 'IS 2062:2011', basePrice: 58600 },
    ],
  },
  {
    subType: 'Hot Rolled Coils',
    thicknesses: [1.6, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0, 12.0],
    widths: [1000, 1250, 1500, 1800, 2000],
    lengths: ['Coil'],
    grades: [
      { grade: 'E250BR', bis: 'IS 2062:2011', basePrice: 53800 },
      { grade: 'IS 10748 GR1', bis: 'IS 10748:2004', basePrice: 54200 },
      { grade: 'IS 10748 GR2', bis: 'IS 10748:2004', basePrice: 54600 },
      { grade: 'IS 10748 GR3', bis: 'IS 10748:2004', basePrice: 55100 },
      { grade: 'E350BR', bis: 'IS 2062:2011', basePrice: 56200 },
    ],
  },
  {
    subType: 'Hot Rolled Plates',
    thicknesses: [12.0, 14.0, 16.0, 18.0, 20.0, 22.0, 25.0, 28.0, 32.0, 36.0, 40.0, 45.0, 50.0, 63.0, 75.0, 80.0, 100.0],
    widths: [1500, 2000, 2500],
    lengths: [6000, 6300, 8000, 10000, 12000],
    grades: [
      { grade: 'E250BR', bis: 'IS 2062:2011', basePrice: 56000 },
      { grade: 'E250B', bis: 'IS 2062:2011', basePrice: 56400 },
      { grade: 'E250C', bis: 'IS 2062:2011', basePrice: 57200 },
      { grade: 'E350BR', bis: 'IS 2062:2011', basePrice: 58500 },
      { grade: 'E450BR', bis: 'IS 2062:2011', basePrice: 61000 },
    ],
  },
  {
    subType: 'Chequered Sheets',
    thicknesses: [2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0],
    widths: [1000, 1250, 1500],
    lengths: [2500, 3000, 6000],
    grades: [
      { grade: 'IS 3502 / E250', bis: 'IS 3502:2009', basePrice: 57000 },
    ],
  },
  {
    subType: 'HRPO Coils & Sheets',
    thicknesses: [1.6, 2.0, 2.5, 3.0, 3.5, 4.0],
    widths: [1250, 1500],
    lengths: [2500, 3000, 'Coil'],
    grades: [
      { grade: 'E250BR / HRPO', bis: 'IS 2062:2011', basePrice: 58800 },
      { grade: 'SAPH440 / HRPO', bis: 'JIS G3113', basePrice: 61200 },
    ],
  },
];

// Helper to systematically produce exactly 124 authentic catalog entries
const items: HotRolledProduct[] = [];

let counter = 1;
// 1. Generate core Hot Rolled Sheets (48 items)
for (const b of brandsConfig) {
  for (const t of [1.6, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0]) {
    if (items.length >= 48) break;
    const w = t <= 2.5 ? 1250 : 1500;
    const l = t <= 2.5 ? 2500 : 6000;
    const gIndex = (counter) % 5;
    const g = subTypesList[0].grades[gIndex];
    const priceVal = g.basePrice + (t < 2.0 ? 1800 : (t >= 8.0 ? 600 : 0)) + (b.slug === 'tata-steel' ? 1200 : (b.slug === 'jsw-steel' ? 800 : 0));

    items.push({
      id: `hr-item-${counter}-${b.slug}-sheet-${t.toFixed(1).replace('.', '-')}`,
      name: `${b.name} Hot Rolled Sheets ${g.bis} ${g.grade} ${t.toFixed(1)} mm`,
      brand: b.name,
      brandSlug: b.slug,
      categorySlug: 'hot-rolled-steel',
      subType: 'Hot Rolled Sheets',
      image: '/images/hot rolled sheets.png',
      imageAlt: `${b.name} Hot Rolled Sheets ${g.bis} ${g.grade}`,
      size: `${t.toFixed(1)} mm × ${w} mm × ${l} mm`,
      thicknessMm: t,
      widthMm: w,
      lengthMm: l,
      description: `${b.name} mill-tested hot rolled steel sheet conforming to ${g.bis} grade ${g.grade}. Excellent weldability, flatness tolerance, and uniform surface quality for PEB sheds, chassis, tanks, and fabrication.`,
      batch: b.mill,
      grade: g.grade,
      bisCode: g.bis,
      price: `₹${priceVal.toLocaleString('en-IN')} / MT`,
      priceValue: priceVal,
      moq: t >= 6.0 ? '5.0 MT' : '2.5 MT',
    });
    counter++;
  }
}

// 2. Generate Hot Rolled Coils (32 items) - Rolls keep the original coil image
for (const b of brandsConfig) {
  for (const t of [1.6, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0, 12.0]) {
    if (items.length >= 48 + 32) break;
    const w = t <= 2.5 ? 1250 : (t <= 6.0 ? 1500 : 1800);
    const gIndex = (counter) % subTypesList[1].grades.length;
    const g = subTypesList[1].grades[gIndex];
    const priceVal = g.basePrice + (t < 2.0 ? 1500 : 0) + (b.slug === 'tata-steel' ? 1000 : (b.slug === 'jsw-steel' ? 600 : 0));

    items.push({
      id: `hr-item-${counter}-${b.slug}-coil-${t.toFixed(1).replace('.', '-')}`,
      name: `${b.name} Hot Rolled Coils ${g.bis} ${g.grade} ${t.toFixed(1)} mm`,
      brand: b.name,
      brandSlug: b.slug,
      categorySlug: 'hot-rolled-steel',
      subType: 'Hot Rolled Coils',
      image: '/images/categories/MS hot rolled.png',
      imageAlt: `${b.name} Hot Rolled Coils ${g.bis} ${g.grade}`,
      size: `${t.toFixed(1)} mm × ${w} mm Coil`,
      thicknessMm: t,
      widthMm: w,
      lengthMm: 'Coil',
      description: `Prime master coil from ${b.name} for automatic tube mills, slitting centers, and cold reduction feed. Fully certified with mill test reports.`,
      batch: b.mill,
      grade: g.grade,
      bisCode: g.bis,
      price: `₹${priceVal.toLocaleString('en-IN')} / MT`,
      priceValue: priceVal,
      moq: '15.0 MT',
    });
    counter++;
  }
}

// 3. Generate Hot Rolled Heavy Plates (28 items)
for (const b of [brandsConfig[1], brandsConfig[3], brandsConfig[4], brandsConfig[6], brandsConfig[2]]) {
  for (const t of [12.0, 14.0, 16.0, 18.0, 20.0, 22.0, 25.0, 28.0, 32.0, 36.0, 40.0, 45.0, 50.0, 63.0, 75.0, 80.0, 100.0]) {
    if (items.length >= 48 + 32 + 28) break;
    const w = t <= 20.0 ? 2000 : 2500;
    const l = t <= 25.0 ? 6300 : 8000;
    const gIndex = (counter) % subTypesList[2].grades.length;
    const g = subTypesList[2].grades[gIndex];
    const priceVal = g.basePrice + (t >= 50.0 ? 3500 : (t >= 32.0 ? 2200 : (t >= 20.0 ? 1200 : 0)));

    items.push({
      id: `hr-item-${counter}-${b.slug}-plate-${t.toFixed(0)}mm`,
      name: `${b.name} Hot Rolled Plates ${g.bis} ${g.grade} ${t.toFixed(0)} mm`,
      brand: b.name,
      brandSlug: b.slug,
      categorySlug: 'hot-rolled-steel',
      subType: 'Hot Rolled Plates',
      image: '/images/hot rolled sheets.png',
      imageAlt: `${b.name} Hot Rolled Plates ${g.bis} ${g.grade}`,
      size: `${t.toFixed(0)} mm × ${w} mm × ${l} mm`,
      thicknessMm: t,
      widthMm: w,
      lengthMm: l,
      description: `Heavy structural steel plate tested for ultrasonic internal soundness, Charpy V-notch toughness, and yield integrity for wind towers, bridge girders, and PEB bases.`,
      batch: b.mill,
      grade: g.grade,
      bisCode: g.bis,
      price: `₹${priceVal.toLocaleString('en-IN')} / MT`,
      priceValue: priceVal,
      moq: '5.0 MT',
    });
    counter++;
  }
}

// 4. Generate Chequered Sheets & Coils (10 items)
for (const b of [brandsConfig[0], brandsConfig[1], brandsConfig[3], brandsConfig[4], brandsConfig[5]]) {
  for (const t of [2.5, 3.0, 4.0, 5.0, 6.0, 8.0]) {
    if (items.length >= 48 + 32 + 28 + 10) break;
    const w = 1250;
    const l = 2500;
    const g = subTypesList[3].grades[0];
    const priceVal = g.basePrice + (t <= 3.0 ? 800 : 0) + (b.slug === 'tata-steel' ? 1000 : 0);

    items.push({
      id: `hr-item-${counter}-${b.slug}-cheq-${t.toFixed(1).replace('.', '-')}`,
      name: `${b.name} Chequered Sheets IS 3502 Tear Pattern ${t.toFixed(1)} mm`,
      brand: b.name,
      brandSlug: b.slug,
      categorySlug: 'hot-rolled-steel',
      subType: 'Chequered Sheets',
      image: '/images/hot rolled sheets.png',
      imageAlt: `${b.name} Chequered Sheets IS 3502 Tear Pattern`,
      size: `${t.toFixed(1)} mm × ${w} mm × ${l} mm`,
      thicknessMm: t,
      widthMm: w,
      lengthMm: l,
      description: `Anti-skid tear-drop embossed hot rolled steel floor plate for industrial stair treads, factory ramps, truck beds, and boiler walkways.`,
      batch: b.mill,
      grade: g.grade,
      bisCode: g.bis,
      price: `₹${priceVal.toLocaleString('en-IN')} / MT`,
      priceValue: priceVal,
      moq: '2.5 MT',
    });
    counter++;
  }
}

// 5. Generate Pickled and Oiled HRPO (6 items to reach exactly 124)
for (const b of [brandsConfig[1], brandsConfig[3], brandsConfig[5]]) {
  for (const t of [1.6, 2.0, 2.5, 3.0]) {
    if (items.length >= 124) break;
    const w = 1250;
    const l = 2500;
    const g = subTypesList[4].grades[counter % 2];
    const priceVal = g.basePrice + (b.slug === 'tata-steel' ? 1200 : 600);

    items.push({
      id: `hr-item-${counter}-${b.slug}-hrpo-${t.toFixed(1).replace('.', '-')}`,
      name: `${b.name} Pickled & Oiled (HRPO) Sheets ${g.grade} ${t.toFixed(1)} mm`,
      brand: b.name,
      brandSlug: b.slug,
      categorySlug: 'hot-rolled-steel',
      subType: 'HRPO Coils & Sheets',
      image: '/images/hot rolled sheets.png',
      imageAlt: `${b.name} Pickled & Oiled (HRPO) Sheets ${g.grade}`,
      size: `${t.toFixed(1)} mm × ${w} mm × ${l} mm`,
      thicknessMm: t,
      widthMm: w,
      lengthMm: l,
      description: `Acid-pickled scale-free hot rolled steel with rust-preventative oil coating. Ready for direct laser cutting, stamping, and precision powder coat painting.`,
      batch: `${b.name} Pickling Line`,
      grade: g.grade,
      bisCode: g.bis,
      price: `₹${priceVal.toLocaleString('en-IN')} / MT`,
      priceValue: priceVal,
      moq: '2.5 MT',
    });
    counter++;
  }
}


export const hotRolledProducts: HotRolledProduct[] = items;
