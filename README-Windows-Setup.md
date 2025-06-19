# Klangon Adventure - Windows 11 Setup Guide

## Prerequisites

### 1. Install Node.js
- Download and install **Node.js LTS** (v18 or higher) from [nodejs.org](https://nodejs.org/)
- This will automatically install npm
- Verify installation by opening Command Prompt and running:
  ```cmd
  node --version
  npm --version
  ```

## Setup Instructions

### 1. Navigate to Project Directory
Open **Command Prompt** or **PowerShell** as Administrator and navigate to the project folder:
```cmd
cd path\to\klangon-adventure
```

### 2. Install Dependencies
Install all required dependencies using npm:
```cmd
npm install
```

### 3. Start Development Server
Run the development server:
```cmd
npm run dev
```

The website will be available at: `http://localhost:5173`

## Available Scripts

### Development
```cmd
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Structure
```
klangon-adventure/
├── src/
│   ├── components/
│   │   ├── HomePage.tsx       # Landing page with hero section
│   │   ├── BookingPage.tsx    # Paragliding booking interface
│   │   └── RentGearPage.tsx   # Equipment rental catalog
│   ├── App.tsx                # Root component with routing
│   └── main.tsx              # Entry point
├── public/
│   └── images/               # All website images
│       ├── paragliding-landscape.jpeg
│       ├── paragliding-helmet.jpg
│       ├── camping-tent.jpeg
│       └── ... (more gear images)
├── package.json              # Dependencies
└── vite.config.ts           # Vite configuration
```

## Page Navigation
- **Home Page** (`/`) - Landing page with hero section and company features
- **Paragliding Page** (`/paragliding`) - Flight booking with calendar and time slots
- **Rent Gear Page** (`/rent-gear`) - Equipment rental with shopping cart

## Features

### 🏠 Home Page
- ✅ Stunning hero section with paragliding imagery
- ✅ Feature highlights (Safety First, Premium Experience, Flexible Booking)
- ✅ Call-to-action buttons for booking and gear rental
- ✅ Professional footer with company information

### 🪂 Paragliding Booking Page
- ✅ Interactive calendar for date selection
- ✅ Cinema-style time slot booking with availability counters
- ✅ Real-time booking summary with quantity and pricing
- ✅ Step-by-step booking process

### 🎒 Rent Gear Page
- ✅ Complete equipment rental catalog
- ✅ Category filtering (All Equipment, Paragliding, Camping)
- ✅ Shopping cart functionality with quantity controls
- ✅ Real-time rental summary and pricing
- ✅ Equipment ratings and availability status

### 🎨 Design & Navigation
- ✅ Consistent modern UI with Sky Blue, Forest Green, and Orange theme
- ✅ Responsive design for all screen sizes
- ✅ Smooth navigation between all pages
- ✅ Professional typography (Montserrat/Lato fonts)

## Troubleshooting

### If you get permission errors:
- Run Command Prompt as Administrator
- Or use PowerShell with appropriate execution policy

### If dependencies fail to install:
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rmdir /s node_modules`
- Reinstall: `npm install`

### If port 5173 is in use:
- The server will automatically find another available port
- Check the terminal output for the correct URL

## Production Build
To create a production build:
```cmd
npm run build
```
The built files will be in the `dist/` folder.
