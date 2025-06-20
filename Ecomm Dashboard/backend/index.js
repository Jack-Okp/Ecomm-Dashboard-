const express = require('express');
const app = express();
const port = 3000;

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Eco-Friendly Bamboo Toothbrush', price: 5.99, quantity: 150, status: 'Active' },
    { id: 2, name: 'Organic Cotton T-Shirt', price: 25.00, quantity: 200, status: 'Active' },
    { id: 3, name: 'Reusable Water Bottle', price: 12.50, quantity: 100, status: 'Active' },
    { id: 4, name: 'Natural Soy Candle', price: 18.00, quantity: 75, status: 'Active' },
    { id: 5, name: 'Recycled Paper Notebook', price: 8.75, quantity: 120, status: 'Active' },
    { id: 6, name: 'Sustainable Yoga Mat', price: 35.00, quantity: 50, status: 'Active' },
    { id: 7, name: 'Biodegradable Phone Case', price: 15.00, quantity: 80, status: 'Active' },
    { id: 8, name: 'Upcycled Denim Tote Bag', price: 22.00, quantity: 60, status: 'Active' },
    { id: 9, name: 'Plant-Based Cleaning Kit', price: 45.00, quantity: 40, status: 'Active' },
    { id: 10, name: 'Ethically Sourced Coffee Beans', price: 14.99, quantity: 90, status: 'Active' }
  ];
  res.json(products);
});

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, name: 'Ethan Harper', email: 'ethan.harper@email.com', registrationDate: '2023-01-15', orders: 5 },
    { id: 2, name: 'Olivia Bennett', email: 'olivia.bennett@email.com', registrationDate: '2023-02-20', orders: 3 },
     { id: 3, name: 'Noah Carter', email: 'noah.carter@email.com', registrationDate: '2023-03-10', orders: 7 },
    { id: 4, name: 'Ava Morgan', email: 'ava.morgan@email.com', registrationDate: '2023-04-05', orders: 2 },
    { id: 5, name: 'Liam Foster', email: 'liam.foster@email.com', registrationDate: '2023-05-12', orders: 4 },
    { id: 6, name: 'Isabella Reed', email: 'isabella.reed@email.com', registrationDate: '2023-06-18', orders: 6 },
    { id: 7, name: 'Jackson Hayes', email: 'jackson.hayes@email.com', registrationDate: '2023-07-22', orders: 1 },
    { id: 8, name: 'Sophia Coleman', email: 'sophia.coleman@email.com', registrationDate: '2023-08-08', orders: 8 },
    { id: 9, name: 'Aiden Brooks', email: 'aiden.brooks@email.com', registrationDate: '2023-09-14', orders: 3 },
    { id: 10, name: 'Chloe Jenkins', email: 'chloe.jenkins@email.com', registrationDate: '2023-10-20', orders: 5 }
  ];
  res.json(customers);
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
