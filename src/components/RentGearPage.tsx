import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface GearItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  availability: number;
  rating: number;
}

const RentGearPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const gearItems: GearItem[] = [
    {
      id: 1,
      name: "Professional Paragliding Helmet",
      category: "paragliding",
      price: 15,
      image: "/images/paragliding-helmet.jpg",
      description: "Lightweight, certified safety helmet with excellent ventilation",
      availability: 12,
      rating: 4.9
    },
    {
      id: 2,
      name: "Paragliding Harness",
      category: "paragliding",
      price: 25,
      image: "/images/paragliding-harness.PNG",
      description: "Comfortable, adjustable harness with safety certification",
      availability: 8,
      rating: 4.8
    },
    {
      id: 3,
      name: "Premium Camping Tent",
      category: "camping",
      price: 30,
      image: "/images/camping-tent.jpeg",
      description: "Waterproof 2-person tent, easy setup, perfect for outdoor adventures",
      availability: 15,
      rating: 4.7
    },
    {
      id: 4,
      name: "Hiking Backpack 50L",
      category: "camping",
      price: 20,
      image: "/images/hiking-backpack.jpg",
      description: "Durable, comfortable backpack with multiple compartments",
      availability: 20,
      rating: 4.6
    },
    {
      id: 5,
      name: "Sleeping Bag",
      category: "camping",
      price: 18,
      image: "/images/sleeping-bag.jpg",
      description: "Warm, compact sleeping bag suitable for all seasons",
      availability: 25,
      rating: 4.5
    },
    {
      id: 6,
      name: "Portable Camping Stove",
      category: "camping",
      price: 12,
      image: "/images/camping-stove.jpg",
      description: "Lightweight, efficient camping stove with fuel canister",
      availability: 18,
      rating: 4.4
    }
  ];

  const categories = [
    { id: 'all', name: 'All Equipment', icon: '🎒' },
    { id: 'paragliding', name: 'Paragliding', icon: '🪂' },
    { id: 'camping', name: 'Camping', icon: '🏕️' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? gearItems 
    : gearItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = gearItems.find(i => i.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/mountain-forest.jpeg')`
         }}>
      
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">Klangon Adventure</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-sky-300 transition-colors font-medium">Home</Link>
              <Link to="/paragliding" className="text-white hover:text-sky-300 transition-colors font-medium">Paragliding</Link>
              <Link to="/rent-gear" className="text-sky-300 font-medium">Rent Gear</Link>
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {getTotalItems() > 0 && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rent Adventure Gear</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional-grade equipment for your outdoor adventures. All gear is sanitized and inspected before rental.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Category Filter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-sky-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gear Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-12 bg-white/20">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white/80 text-sm ml-1">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white">
                        <span className="text-2xl font-bold">${item.price}</span>
                        <span className="text-white/70">/day</span>
                      </div>
                      <div className="text-white/70 text-sm">
                        {item.availability > 0 ? (
                          <span className="text-green-400">✓ {item.availability} available</span>
                        ) : (
                          <span className="text-red-400">Out of stock</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      {cart[item.id] > 0 ? (
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                          >
                            -
                          </button>
                          <span className="text-white font-semibold">{cart[item.id]}</span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                            disabled={cart[item.id] >= item.availability}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          disabled={item.availability === 0}
                          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4">Rental Summary</h3>
              
              {Object.keys(cart).length === 0 ? (
                <p className="text-white/70 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = gearItems.find(i => i.id === parseInt(itemId));
                      if (!item) return null;
                      
                      return (
                        <div key={itemId} className="flex justify-between items-center text-white">
                          <div>
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-white/70 text-xs">${item.price}/day × {quantity}</div>
                          </div>
                          <div className="font-semibold">${item.price * quantity}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="border-t border-white/20 pt-4 mb-6">
                    <div className="flex justify-between items-center text-white text-lg font-semibold">
                      <span>Total per day:</span>
                      <span>${getTotalPrice()}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    Proceed to Checkout
                  </button>
                </>
              )}

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3">Rental Info</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p>• Minimum rental: 1 day</p>
                  <p>• Free delivery for 3+ days</p>
                  <p>• 24/7 support included</p>
                  <p>• All gear sanitized & inspected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Klangon Adventure</h3>
              <p className="text-white/70">
                Your premier destination for paragliding and outdoor adventure gear in Desa Klangon.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-white/70 hover:text-white transition-colors">Home</Link>
                <Link to="/paragliding" className="block text-white/70 hover:text-white transition-colors">Paragliding</Link>
                <Link to="/rent-gear" className="block text-white/70 hover:text-white transition-colors">Rent Gear</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-white/70">
                <p>📍 Desa Klangon, Indonesia</p>
                <p>📞 +62 XXX XXX XXXX</p>
                <p>✉️ info@klangon-adventure.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">&copy; 2025 Klangon Adventure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RentGearPage;
