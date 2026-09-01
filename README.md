# 🌿 EcoTrack — Local Waste Management & Recycling Tracker

## Project Description

**EcoTrack** is a community-focused web application that addresses the real-world problem of inconsistent waste management awareness at the local level. Many neighborhoods struggle with unclear collection schedules, a lack of information about nearby recycling centers, and no easy way for residents to track their personal environmental impact.

EcoTrack solves this by providing:

- 📅 **Waste Collection Schedule** — Searchable schedule showing when general waste, recyclables, and organic waste are collected in your neighborhood.
- 📍 **Recycling Center Directory** — A list of local drop-off points with accepted categories, operating hours, and directions.
- 📊 **Personal Impact Tracker** — Log your recycling activities, track total weight diverted from landfills, and see energy-saving equivalents.

By centralizing this information in one intuitive dashboard, EcoTrack empowers residents to make informed decisions about waste disposal and encourages sustainable habits within the community.

---

## Target Audience

This application is built for:

- **Local residents** who want to stay informed about waste collection schedules in their neighborhood.
- **Environmentally conscious individuals** looking to track and improve their recycling habits.
- **Community leaders** who want to promote sustainability and proper waste management practices.
- **Families and students** seeking an easy-to-use tool for responsible waste disposal.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 5 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Shadcn/UI (Radix UI primitives) |
| **Icons** | Lucide React |
| **Routing** | React Router DOM 7 |
| **Animations** | Framer Motion |
| **Notifications** | Sonner |
| **Data Persistence** | Browser localStorage |
| **Package Manager** | Bun |

---

## Project Structure

```
src/
├── App.tsx                    # Main app with routing
├── main.tsx                   # Entry point
├── index.css                  # Global styles & theme variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Responsive navigation bar
│   │   └── Footer.tsx         # Site footer
│   └── ui/                    # Shadcn/UI components
├── pages/
│   ├── Dashboard.tsx          # Landing page with hero & quick stats
│   ├── Schedule.tsx           # Waste collection schedule (searchable)
│   ├── RecyclingMap.tsx       # Recycling center directory
│   └── Tracker.tsx            # Personal impact tracker (localStorage)
├── data/
│   └── mockData.ts            # Mock schedules, centers & image URLs
├── hooks/
│   └── use-mobile.ts          # Mobile detection hook
└── lib/
    └── utils.ts               # Utility functions (cn helper)
```

---

## Setup Instructions

Follow these steps to run the project locally:

### Prerequisites

- **Node.js** (v18 or higher)
- **Bun** (recommended) or **npm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ecotrack.git
   cd ecotrack
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Start the development server:**
   ```bash
   # Using Bun
   bun run dev

   # Or using npm
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

---

## Features

### 🏠 Dashboard
- Hero section with call-to-action buttons
- Quick stats cards showing next pickup, nearby center, and personal impact
- Educational section about the importance of recycling

### 📅 Collection Schedule
- Search by street name or neighborhood
- Color-coded waste types (General, Recyclables, Organic)
- Waste sorting guidelines section

### 📍 Recycling Centers
- Directory of local drop-off points
- Categories accepted at each location
- Operating hours display
- "Get Directions" functionality

### 📊 Impact Tracker
- Form to log recycled items (name, category, weight)
- Real-time statistics (total weight, item count, energy saved)
- Persistent storage via localStorage (data survives page refreshes)
- Delete individual log entries

---

## Scope & Problem Domain

- **Level:** Local (Community/Neighborhood)
- **Problem:** Lack of centralized information for local waste schedules and recycling options, leading to improper disposal and missed collection days.
- **Solution:** A unified, user-friendly platform that consolidates waste management information and incentivizes recycling through personal impact tracking.

---

## License

This project is open source and available for educational purposes.

---

*Built with ❤️ for a cleaner, greener community.*
