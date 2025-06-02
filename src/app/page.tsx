'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const flowers = [
    { id: 1, name: 'Red Rose Bouquet', price: 29.99, image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500' },
    { id: 2, name: 'Sunflower Glow', price: 24.99, image: 'https://images.unsplash.com/photo-1470509037663-253af7f753a1?w=500' },
    { id: 3, name: 'Lily Elegance', price: 34.99, image: 'https://images.unsplash.com/photo-1521866213910-a6c6f01192e3?w=500' },
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed! Thank you for joining our newsletter.');
    setEmail('');
  };

  // Load Kommunicate widget
  useEffect(() => {
    (function(d, m){
      var kommunicateSettings = {
        "appId": "YOUR_KOMMUNICATE_APP_ID", // Replace with your Kommunicate App ID
        "popupWidget": true,
        "automaticChatOpenOnNavigation": false,
        "whatsAppWidget": true // Enable WhatsApp widget
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      <Head>
        <title>Bloom & Blossom - Flower Shop</title>
        <meta name="description" content="Beautiful flowers for every occasion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-rose-600 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bloom & Blossom</h1>
          <ul className="flex space-x-6">
            <li><Link href="#home" className="hover:text-rose-200">Home</Link></li>
            <li><Link href="#flowers" className="hover:text-rose-200">Flowers</Link></li>
            <li><Link href="#about" className="hover:text-rose-200">About</Link></li>
            <li><Link href="#contact" className="hover:text-rose-200">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518893494013-481c0c8c36f9?w=1920"
            alt="Flower background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50"
          />
        </div>
        <div className="relative text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Fresh Flowers, Endless Love</h2>
          <p className="text-xl mb-6">Discover our stunning collection for every occasion</p>
          <Link
            href="#flowers"
            className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Flowers */}
      <section id="flowers" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">Featured Bouquets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={flower.image}
                alt={flower.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
                <p className="text-rose-600 mb-4">${flower.price.toFixed(2)}</p>
                <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-rose-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-rose-800">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            At Bloom & Blossom, we believe flowers bring joy and love to every moment. Our team is dedicated to
            crafting beautiful arrangements with the freshest blooms, sourced from local growers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center mb-6 text-gray-700">
            Subscribe to our newsletter or chat with us on WhatsApp for instant support!
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
            <button
              onClick={handleSubmit}
              className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700 transition"
            >
              Subscribe
            </button>
          </div>
          <p className="text-center mt-6 text-gray-700">
            Chat with us: <a href="https://wa.me/8376898325" className="text-rose-600 hover:underline">WhatsApp</a>
          </p>
          <p className="text-center text-gray-700">
            Call us: <a href="tel:+1234567890" className="text-rose-600 hover:underline">+1 (234) 567-890</a>
          </p>
          <p className="text-center text-gray-700">
            Email: <a href="mailto:info@bloomblossom.com" className="text-rose-600 hover:underline">info@bloomblossom.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Bloom & Blossom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}