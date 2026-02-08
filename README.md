# PlayBox - Gaming Lounge Booking Platform

![PlayBox Logo](https://img.shields.io/badge/PlayBox-Gaming%20Platform-6C5CE7?style=for-the-badge&logo=gamepad&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎮 Overview

PlayBox is India's first gaming lounge booking platform that allows users to discover nearby gaming stores, book PS5/Xbox/PC gaming slots by the hour, and organize epic gaming parties with friends.

## ✨ Features

- 🎯 **Store Discovery** - Find gaming lounges near you with advanced filters
- 📅 **Slot Booking** - Reserve your gaming time in advance
- 🎉 **Party Mode** - Organize group gaming sessions
- 💳 **Secure Payments** - Safe payment processing with Razorpay/Stripe
- 📱 **Mobile-Responsive** - Seamless experience across all devices
- 🎨 **Gaming Aesthetics** - Dark theme with neon purple/cyan accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project:

```bash
cd playbox-app
```

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```text
playbox-app/
├── app/                      # Next.js app router pages
│   ├── page.tsx             # Landing page
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── stores/              # Store listing page
│   └── globals.css          # Global styles & theme
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Loader.tsx
│   │   ├── Toast.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── auth/                # Authentication components
│   ├── store/               # Store-related components
│   └── booking/             # Booking components
├── hooks/                   # Custom React hooks
├── services/                # API services
└── utils/                   # Utility functions
```

## 🎨 Design System

### Color Palette

```css
Primary:   #6C5CE7 (Neon Purple)
Secondary: #00CEC9 (Cyan)
Background: #0F172A (Dark)
Surface:   #1E293B (Lighter Dark)
Text:      #FFFFFF (White)
Accent:    #A78BFA (Light Purple)
```

### Typography

- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular/Medium)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API Client**: Axios
- **Authentication**: JWT (planned)
- **Payments**: Razorpay/Stripe (planned)

## 📄 Available Pages

- `/` - Landing page with hero, features, and how-it-works
- `/login` - User authentication
- `/register` - New user registration
- `/stores` - Browse and filter gaming stores

## 🔮 Upcoming Features

- [ ] Store details page with time slot selection
- [ ] Booking flow with payment integration
- [ ] User dashboard
- [ ] Party booking interface
- [ ] Admin panel for store owners
- [ ] Backend API integration
- [ ] Real-time availability updates

## 🎯 Development Guidelines

### Component Rules

- All components must be reusable
- No inline CSS - use Tailwind utility classes
- Props should be clearly typed with TypeScript
- Follow the gaming theme color palette

### Performance

- Lazy load pages and components where appropriate
- Optimize images
- Minimize heavy animations
- Use memoization for expensive operations

### Accessibility

- Maintain proper color contrast ratios
- Support keyboard navigation
- Include ARIA labels where required
- Use readable font sizes (min 16px)

## 📝 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 🤝 Contributing

This project follows strict UI/UX guidelines. Please reference the design documents in the root directory:

- `PlayBox_PRD.md`
- `PlayBox_Frontend_Guidelines.md`
- `PlayBox_Implementation_Plan.md`

## 📄 License

Copyright © 2026 PlayBox. All rights reserved.

## 🎮 Happy Gaming

Built with ❤️ for gamers, by gamers.
