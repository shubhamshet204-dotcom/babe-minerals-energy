import { addCartItem, getCart } from './cart';

function updateCartBadges() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((badge) => {
    badge.textContent = String(count);
  });
}

async function updateAuthLinks() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-auth-link]')];
  if (!links.length) return;

  try {
    const apiBase = import.meta.env.PUBLIC_API_URL || 'http://localhost:4000';
    const response = await fetch(`${apiBase}/api/auth/me`, { credentials: 'include' });
    if (!response.ok) return;
    const result = await response.json();
    for (const link of links) {
      link.href = '/account';
      link.textContent = link.closest('nav') ? 'My account' : `Hi, ${result.user.name.split(' ')[0]}`;
      link.setAttribute('aria-label', `Signed in as ${result.user.name}. Open account`);
    }
  } catch {
    // Keep the sign-in link available when the API is offline.
  }
}

function setupDeliveryLocation() {
  const select = document.querySelector<HTMLSelectElement>('[data-delivery-location]');
  const defaultLocation = 'Belagavi, Karnataka (590001)';
  if (select) {
    select.value = localStorage.getItem('bme-delivery-location') || defaultLocation;
    select.addEventListener('change', () => {
      localStorage.setItem('bme-delivery-location', select.value);
      document.querySelectorAll<HTMLInputElement>('[data-delivery-location-field]').forEach((field) => {
        field.value = select.value;
      });
    });
  }
  document.querySelectorAll<HTMLInputElement>('[data-delivery-location-field]').forEach((field) => {
    field.value = localStorage.getItem('bme-delivery-location') || defaultLocation;
  });
}

function setupStorefront() {
  updateCartBadges();
  void updateAuthLinks();
  setupDeliveryLocation();
  window.addEventListener('bme:cart-updated', updateCartBadges);
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-add-to-cart]');
    if (!button || button.disabled) return;

    const { productId, productName, productBrand, productSize, productPrice, productPriceValue } = button.dataset;
    const priceValue = Number(productPriceValue);
    if (!productId || !productName || !Number.isFinite(priceValue)) return;

    addCartItem({
      id: productId,
      name: productName,
      brand: productBrand || 'BME verified supply',
      size: productSize || 'Confirm with procurement',
      price: productPrice || 'Request quote',
      priceValue,
    });

    const originalLabel = button.textContent;
    button.textContent = 'Added';
    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1200);
  });
}

setupStorefront();
