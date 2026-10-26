-- =====================================================
-- BME Steels – Supabase Schema
-- Paste this entire file into Supabase SQL Editor
-- and click "Run".
-- =====================================================

-- 1. Products table
CREATE TABLE IF NOT EXISTS public.products (
  id            TEXT        PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name          TEXT        NOT NULL,
  brand         TEXT        NOT NULL DEFAULT '',
  brand_slug    TEXT        NOT NULL DEFAULT '',
  category_slug TEXT        NOT NULL,
  image         TEXT        NOT NULL DEFAULT '/images/steel-coils.jpg',
  image_alt     TEXT        NOT NULL DEFAULT '',
  size          TEXT        NOT NULL DEFAULT '',
  description   TEXT        NOT NULL DEFAULT '',
  batch         TEXT        NOT NULL DEFAULT '',
  grade         TEXT        NOT NULL DEFAULT '',
  price         TEXT        NOT NULL,
  price_value   INTEGER     NOT NULL,
  moq           TEXT,
  bis_code      TEXT,
  is_featured   BOOLEAN     NOT NULL DEFAULT false,
  display_order INTEGER     NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Quote requests table
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name              TEXT        NOT NULL,
  email             TEXT        NOT NULL,
  phone             TEXT        NOT NULL DEFAULT '',
  company           TEXT        NOT NULL,
  requirement       TEXT        NOT NULL,
  delivery_location TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Enable Row Level Security
ALTER TABLE public.products       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- 4. RLS: products – public read, authenticated write
CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON public.products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON public.products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON public.products FOR DELETE
  TO authenticated
  USING (true);

-- 5. RLS: quote_requests – public insert, authenticated read
CREATE POLICY "Anyone can submit a quote"
  ON public.quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all quotes"
  ON public.quote_requests FOR SELECT
  TO authenticated
  USING (true);

-- 6. Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 7. Seed initial products
INSERT INTO public.products (id, name, brand, brand_slug, category_slug, image, image_alt, size, description, batch, grade, price, price_value, moq, bis_code, is_featured, display_order) VALUES
('hr-sheets-e250',       'IS 2062 E250 HR Sheets & Plates',        'Tata Steel',      'tata-steel',       'hot-rolled-steel',  '/images/hot rolled sheets.png', 'Hot-rolled steel sheets and plates in warehouse storage', '2.0 mm – 25.0 mm',        'Hot rolled plate and sheet stock ideal for industrial fabrication, PEB structures, and heavy machinery.',          'Primary mill direct', 'E250 BR/C',     '₹76,200 / MT', 76200, '2.5 MT',  'IS 2062:2011',     true,  1),
('tmt-fe550d',           'Fe 550D High-Ductility TMT Bar',         'SAIL',            'sail',             'tmt-bars',          '/images/rebar.jpg',             'Ribbed reinforcement steel bars',                         '8 mm – 32 mm',            'High-strength thermo-mechanically treated reinforcement bar for columns, heavy civil slabs, and metro infrastructure.', 'BIS certified',       'Fe 550D',       '₹84,400 / MT', 84400, '1.0 MT',  'IS 1786:2008',     true,  2),
('structural-beam-ismb', 'MS Structural Joist / Beam (ISMB)',      'Jindal Steel',    'jindal-steel',     'structural-steel',  '/images/steel-coils.jpg',      'Steel stock in an industrial warehouse',                  'ISMB 150 – 500',          'Universal structural beam sections engineered for pre-engineered buildings, crane girders, and commercial framing.', 'Custom 6m/12m',       'ISMB E250',     '₹82,900 / MT', 82900, '3.0 MT',  'IS 808 / IS 2062', true,  3),
('crca-coils-cr2',       'CRCA Precision Coils & Sheets',          'AM/NS India',     'amns-india',       'cold-rolled-steel', '/images/steel-coils.jpg',      'Cold-rolled steel coils in warehouse storage',            '0.40 mm – 2.50 mm',       'Precision cold-reduced commercial quality steel for automotive pressings, electrical enclosures, and white goods.',  'Mill direct',         'CR2/CR3 Oiled', '₹79,600 / MT', 79600, '2.0 MT',  'IS 513:2016',      true,  4),
('ms-channel-ismc',      'MS Structural Channels (ISMC)',          'JSW Steel',       'jsw-steel',        'structural-steel',  '/images/steel-coils.jpg',      'Structural steel channels in stockyard',                  'ISMC 75 – 300',           'Medium weight structural steel channels for purlins, automotive chassis, and industrial bracing frameworks.',       'Standard lengths',    'ISMC E250',     '₹81,200 / MT', 81200, '2.0 MT',  'IS 808',           false, 5),
('ms-angle-isa',         'Equal & Unequal MS Angles (ISA)',        'SAIL',            'sail',             'structural-steel',  '/images/steel-coils.jpg',      'MS angle sections',                                       '25x25x3 to 150x150x12 mm','Hot rolled equal angle sections for transmission towers, general fabrication, and truss building.',                 'Mill traceable',      'ISA E250',      '₹79,900 / MT', 79900, '1.5 MT',  'IS 2062',          false, 6),
('coated-ppgi-sheets',   'Pre-Painted Galvanized (PPGI) Roofing', 'Tata Steel',      'tata-steel',       'coated-steel',      '/images/steel-coils.jpg',      'Coated steel profile sheet',                              '0.45 mm – 0.80 mm',       'Corrosion resistant colour coated roofing profile sheets with superior thermal insulation and weather protection.',  'Factory packed',      'PPGI 120 GSM',  '₹88,500 / MT', 88500, '1.0 MT',  'IS 14246',         false, 7),
('ultratech-opc-53',     'UltraTech Premium OPC 53 Grade Cement', 'UltraTech Cement','ultratech-cement',  'cement',            '/images/cement-plant.jpg',     'Cement plant and bags',                                   '50 kg Bag / Bulk Tanker', 'High early strength Ordinary Portland Cement for structural concrete, precast elements, and critical RCC slabs.',   'Fresh depot stock',   'OPC 53',        '₹380 / Bag',   7600,  '50 Bags', 'IS 269:2015',      false, 8)
ON CONFLICT (id) DO NOTHING;
