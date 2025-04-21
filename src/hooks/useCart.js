import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Cart saved:', cartItems);
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    console.log('Adding product:', product);
    setCartItems(prevItems => {
      // Normalize the product data structure
      const normalizedProduct = {
        id: product.id,
        name: product.name || product.title,
        price: Number(product.price),
        image: product.image,
        quantity: 1
      };

      const existingItem = prevItems.find(item => item.id === normalizedProduct.id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === normalizedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('Updated cart:', updatedItems);
        return updatedItems;
      }

      const newItems = [...prevItems, normalizedProduct];
      console.log('New cart:', newItems);
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      console.log('Removed from cart:', productId, 'New cart:', updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Number(quantity) } : item
      );
      console.log('Updated quantity:', productId, quantity, 'New cart:', updatedItems);
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    console.log('Cart cleared');
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log('Cart total:', total);
    return total;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };
};

export default useCart; 