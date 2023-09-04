const productsData = [
  {
    _id: 1,
    name: 'Airpods wireless Bluetooth headphone',
    image:
      'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Experience the freedom of wireless audio with the Airpods. These sleek headphones deliver high-quality sound and feature easy Bluetooth connectivity. With their comfortable fit and long battery life, they are perfect for music lovers on the go.',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.9,
    countInStock: 10,
    rating: 3.5,
    numReviews: 12,
    isFeatured: true,
  },
  {
    _id: 2,
    name: 'Smartwatch with Heart Rate Monitor',
    image:
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    description:
      'Stay connected and monitor your health with this advanced smartwatch. It features a built-in heart rate monitor, GPS, and a variety of fitness tracking capabilities. With its sleek design and intuitive interface, this smartwatch is perfect for active individuals.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 199.99,
    countInStock: 7,
    rating: 4.2,
    numReviews: 8,
    isFeatured: true,
  },
  {
    _id: 3,
    name: 'Wireless Bluetooth Speaker',
    image: '/images/sony.jpg',
    description:
      'Take your music anywhere with this portable wireless speaker. It offers crisp and clear sound quality with powerful bass. The speaker is compatible with various devices and features a long-lasting battery, making it perfect for outdoor adventures or gatherings.',
    brand: 'JBL',
    category: 'Electronics',
    price: 59.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 22,
    isFeatured: true,
  },
  {
    _id: 4,
    name: 'Leather Messenger Bag',
    image:
      'https://images.unsplash.com/photo-1505892458649-41be8480bb4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    description:
      'Carry your essentials in style with this sleek leather messenger bag. It features multiple compartments to keep your belongings organized and a comfortable adjustable strap. Whether for work or travel, this bag combines functionality and elegance.',
    brand: "Levi's",
    category: 'Fashion',
    price: 79.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 10,
    isFeatured: true,
  },
  {
    _id: 5,
    name: 'Cotton T-Shirt',
    image:
      'https://images.unsplash.com/photo-1542193810-9007c21cd37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Get comfortable and stylish with this classic cotton t-shirt. It is made from soft and breathable fabric, perfect for everyday wear. With its timeless design and range of colors, this t-shirt is a wardrobe staple for any season.',
    brand: 'H&M',
    category: 'Fashion',
    price: 19.99,
    countInStock: 20,
    rating: 4.0,
    numReviews: 15,
    isFeatured: true,
  },
  {
    _id: 6,
    name: 'Durable Hiking Backpack',
    image:
      'https://images.unsplash.com/photo-1600019248002-f4c4898f739b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    description:
      'Embark on your outdoor adventures with this durable hiking backpack. It features ample storage space, comfortable shoulder straps, and water-resistant material. Designed to withstand rugged conditions, this backpack is an essential companion for hikers and travelers.',
    brand: 'The North Face',
    category: 'Outdoor',
    price: 129.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 17,
    isFeatured: false,
  },
  {
    _id: 7,
    name: 'Professional DSLR Camera',
    image:
      'https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Capture stunning photos with this professional DSLR camera. It offers advanced features, high-resolution image quality, and interchangeable lenses for creative possibilities. Whether you are a photography enthusiast or a professional, this camera delivers exceptional results.',
    brand: 'Canon',
    category: 'Electronics',
    price: 1499.99,
    countInStock: 2,
    rating: 4.9,
    numReviews: 25,
    isFeatured: false,
  },
  {
    _id: 8,
    name: 'Stainless Steel Watch',
    image:
      'https://images.unsplash.com/photo-1661030418924-52142661241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Add a touch of elegance to your wrist with this stainless steel watch. It features a sleek design, reliable quartz movement, and a durable stainless steel strap. Suitable for any occasion, this watch is a timeless accessory that complements your style.',
    brand: 'Citizen',
    category: 'Fashion',
    price: 249.99,
    countInStock: 8,
    rating: 4.3,
    numReviews: 11,
    isFeatured: false,
  },
];

module.exports = productsData;
