import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// ✅ Health check (ADD HERE)
app.get('/health', (req, res) => {
  res.send('OK');
});

// Helper function to read products
const getProducts = () => {
  const dataPath = path.join(__dirname, 'data', 'products.json');
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(rawData);
};

// API Endpoint to get products with optional filtering and sorting
app.get('/api/products', (req, res) => {
  try {
    let products = getProducts();
    const { category, type, sort } = req.query;

    // Filter by Category
    if (category) {
      // Allow multiple categories comma separated e.g. ?category=Men,Women
      const categories = category.split(',').map(c => c.trim().toLowerCase());
      products = products.filter(p => categories.includes(p.category.toLowerCase()));
    }

    // Filter by Type
    if (type) {
      // Allow multiple types comma separated e.g. ?type=Topwear,Bottomwear
      const types = type.split(',').map(t => t.trim().toLowerCase());
      products = products.filter(p => types.includes(p.type.toLowerCase()));
    }

    // Sort
    if (sort) {
      if (sort === 'price_asc') {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === 'price_desc') {
        products.sort((a, b) => b.price - a.price);
      }
      // 'relevant' or no sort will maintain default order
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
