export interface CartItem {
  id: string;
  name: string;
  brand: string;
  size: string;
  price: string;
  priceValue: number;
  quantity: number;
}

const STORAGE_KEY = 'bme-cart';

export function getCart(): CartItem[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is CartItem =>
      item && typeof item.id === 'string' && typeof item.name === 'string' &&
      typeof item.brand === 'string' && typeof item.size === 'string' && typeof item.price === 'string' &&
      typeof item.priceValue === 'number' && Number.isFinite(item.priceValue) &&
      Number.isInteger(item.quantity) && item.quantity > 0,
    );
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('bme:cart-updated'));
}

export function addCartItem(product: Omit<CartItem, 'quantity'>) {
  const items = getCart();
  const existing = items.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else items.push({ ...product, quantity: 1 });
  saveCart(items);
}

export function updateCartItem(id: string, quantity: number) {
  const items = getCart()
    .map((item) => item.id === id ? { ...item, quantity } : item)
    .filter((item) => item.quantity > 0);
  saveCart(items);
}

export function removeCartItem(id: string) {
  saveCart(getCart().filter((item) => item.id !== id));
}

export function clearCart() {
  saveCart([]);
}
