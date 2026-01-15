# Product Dashboard

A dynamic product dashboard built with React, featuring product filtering, conditional styling, and remove functionality with full test coverage.

## Features

- Display a list of products with name, price, and availability status
- Filter products by: All, In Stock, or Out of Stock
- Conditional styling for out-of-stock products
- Remove products from the dashboard
- Fully tested with Jest and React Testing Library

## Project Structure

```
lab-product-dashboard/
├── src/
│   ├── __tests__/
│   │   └── indexTest.test.jsx    # Test suite
│   ├── components/
│   │   ├── ProductCard.jsx       # Individual product card component
│   │   └── ProductList.jsx       # List of product cards
│   ├── styles/
│   │   └── ProductCard.module.css # CSS Modules styling
│   ├── App.jsx                   # Main app component with state
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── db.json                       # JSON database (for future API)
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
└── jest.config.js                # Jest configuration
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd lab-product-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Running the Tests

This project includes comprehensive tests using Jest and React Testing Library.

### Run tests once:
```bash
npm test
```

### Run tests in watch mode (for development):
```bash
npm run test:watch
```

### Test Coverage

The test suite includes:
- ✅ Renders product dashboard title
- ✅ Displays all products initially
- ✅ Applies conditional styling for out-of-stock products
- ✅ Removes product from the dashboard when "Remove" button is clicked

## Git Commands

### Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

### Push to GitHub:
```bash
git remote add origin <your-repository-url>
git push origin main
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **CSS Modules** - Component-scoped styling
- **Material UI** - UI components

## Additional Scripts

```bash
# Run JSON server (mock API)
npm run server

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

