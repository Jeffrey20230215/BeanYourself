import { useEffect, useMemo, useState } from 'react';
import { getCartPageData } from '../services/cartService';

const SHIPPING_FEE = 80;
const FREE_SHIPPING_THRESHOLD = 1200;

function clampQuantity(quantity) {
  return Math.max(1, quantity);
}

export function useCartPage() {
  const [cartData, setCartData] = useState({ items: [], recommendations: [] });
  const [promoCode, setPromoCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadCart() {
      setIsLoading(true);
      const data = await getCartPageData();

      if (isMounted) {
        setCartData(data);
        setIsLoading(false);
      }
    }

    loadCart();

    return () => {
      isMounted = false;
    };
  }, []);

  const summary = useMemo(() => {
    const subtotal = cartData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
    const discount = promoCode.trim().toUpperCase() === 'BEAN200' ? 200 : 0;
    const total = Math.max(subtotal + shipping - discount, 0);

    return {
      subtotal,
      shipping,
      discount,
      total,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    };
  }, [cartData.items, promoCode]);

  function updateItemQuantity(itemId, nextQuantity) {
    setCartData((current) => ({
      ...current,
      items: current.items.map((item) =>
        item.id === itemId ? { ...item, quantity: clampQuantity(nextQuantity) } : item,
      ),
    }));
  }

  function removeItem(itemId) {
    setCartData((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== itemId),
    }));
  }

  function addRecommendation(recommendation) {
    setCartData((current) => {
      const existingItem = current.items.find((item) => item.id === recommendation.id);

      if (existingItem) {
        return {
          ...current,
          items: current.items.map((item) =>
            item.id === recommendation.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }

      return {
        ...current,
        items: [
          ...current.items,
          {
            id: recommendation.id,
            name: recommendation.name,
            sizeLabel: '加購商品',
            grindLabel: recommendation.description,
            price: recommendation.price,
            quantity: 1,
            image: recommendation.image,
          },
        ],
      };
    });
  }

  return {
    items: cartData.items,
    recommendations: cartData.recommendations,
    promoCode,
    setPromoCode,
    summary,
    isLoading,
    updateItemQuantity,
    removeItem,
    addRecommendation,
  };
}
