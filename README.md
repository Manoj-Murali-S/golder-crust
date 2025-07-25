# Golden Crust Bakery - Modern Cloud Kitchen Website

A comprehensive, modern bakery website built with Next.js 15, featuring a cloud kitchen concept with delivery services, interactive menu, cart functionality, and beautiful UI/UX design.

## Features

### Core Functionality

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark/Light Mode** - Theme toggle with smooth transitions and cookie persistence
- **Interactive Menu** - Advanced filtering, search, and infinite scroll
- **Shopping Cart** - Persistent cart with WhatsApp integration
- **Order Customization** - Special instructions and quantity management
- **Visual Feedback** - Smooth animations and loading states


### Pages & Sections

- **Homepage** - Hero section with auto-rotating specials, featured products, behind-the-scenes
- **Menu Page** - Complete product catalog with advanced filtering
- **Cloud Kitchen** - Service information, delivery areas, and contact details
- **Reviews** - Customer testimonials with rating breakdown and submission form
- **Process Page** - Educational content about baking process and quality standards


### Advanced Features

- **Auto-Rotating Specials** - Dynamic daily deals with smooth transitions
- **Cart Animations** - Visual feedback when adding/removing items
- **Quantity Controls** - Smart button states that adapt based on cart contents
- **WhatsApp Integration** - Direct ordering through WhatsApp with cart summary
- **Parallax Effects** - Smooth scrolling animations throughout the site
- **Filter Toggle** - Mobile-optimized collapsible filters


## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter + Playfair Display
- **Theme**: next-themes
- **State Management**: React Context API
- **TypeScript**: Full type safety


## Project Structure

```plaintext
golden-crust-bakery/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── cloud-kitchen/
│   │   └── page.tsx
│   ├── reviews/
│   │   └── page.tsx
│   └── process/
│       └── page.tsx
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── todays-special.tsx
│   ├── featured-products.tsx
│   ├── behind-the-scenes.tsx
│   ├── about-section.tsx
│   ├── testimonials-preview.tsx
│   ├── menu-content.tsx
│   ├── reviews-content.tsx
│   ├── cart-provider.tsx
│   ├── whatsapp-button.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn


### Installation

1. **Clone the repository**


```shellscript
git clone <your-repo-url>
cd golden-crust-bakery
```

2. **Install dependencies**


```shellscript
npm install
# or
yarn install
```

3. **Run the development server**


```shellscript
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)


## Customization Guide

### Brand Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  // Primary orange theme
  orange: {
    50: '#fff7ed',
    500: '#f97316',
    600: '#ea580c',
    // ... add your brand colors
  }
}
```

### Content Updates

#### Menu Items

Edit `components/menu-content.tsx`:

```typescript
const menuItems = [
  {
    id: 1,
    name: "Your Product Name",
    description: "Product description",
    price: 9.99,
    category: "Category",
    image: "/your-image.jpg",
    dietary: ["vegan", "gluten-free"], // optional
    popular: true // optional
  },
  // ... add more items
]
```

#### Business Information

Update contact details in:

- `components/footer.tsx`
- `app/cloud-kitchen/page.tsx`
- `components/whatsapp-button.tsx`


#### WhatsApp Integration

Replace the phone number in:

```typescript
// components/whatsapp-button.tsx
const whatsappUrl = `https://wa.me/7358878515?text=${encodeURIComponent(message)}`
```

### Images

Replace placeholder images with your actual product photos:

- Use high-quality images (recommended: 300x300px for products)
- Update image paths in component files
- Consider using Next.js Image component for optimization


## Key Components

### Cart Provider

Manages global cart state with localStorage persistence:

```typescript
// Usage in any component
const { state, dispatch } = useCart()

// Add item to cart
dispatch({
  type: "ADD_ITEM",
  payload: { id, name, price, category, image, quantity, notes }
})
```

### Theme Toggle

Provides dark/light mode switching:

```typescript
// Automatic system theme detection
// Smooth transitions between themes
// Persistent user preference
```

### Menu Filtering

Advanced filtering system:

- Category filters (Breads, Cakes, Pastries, Beverages)
- Dietary filters (Vegan, Gluten-free)
- Search functionality
- Mobile-optimized collapsible filters


## Mobile Optimization

- **Responsive Grid** - Adapts from 1 to 4 columns based on screen size
- **Touch-Friendly** - Large touch targets for mobile interactions
- **Collapsible Filters** - Mobile-specific filter toggle
- **Optimized Navigation** - Mobile hamburger menu
- **Fast Loading** - Optimized images and lazy loading


## Animation Features

### Cart Interactions

- Scale animation when adding items
- Color transition (orange → green)
- Success feedback with checkmark
- Smooth quantity controls


### Page Transitions

- Parallax backgrounds
- Fade-in animations
- Smooth scrolling
- Hover effects on cards


### Performance

- CSS-only animations where possible
- Respects user's motion preferences
- Optimized for 60fps performance


## Configuration

### Environment Variables

Create `.env.local` for any API keys or configuration:

```plaintext
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_BUSINESS_NAME="Golden Crust Bakery"
```

### Build Configuration

The project is configured for:

- Static export capability
- Image optimization
- Font optimization
- CSS purging for production


## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically


### Other Platforms

```shellscript
# Build for production
npm run build

# Start production server
npm start
```

## Design System

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Gradient Text**: Orange gradient for headings


### Color Palette

- **Primary**: Orange (`#ea580c`)
- **Secondary**: Amber (`#f59e0b`)
- **Success**: Green (`#10b981`)
- **Background**: Dynamic (light/dark mode)


### Components

- **Cards**: Glass morphism effect with backdrop blur
- **Buttons**: Consistent orange theme with hover states
- **Badges**: Category and dietary indicators
- **Forms**: Styled inputs with focus states


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Check the documentation above
- Review component code for implementation details
- Test all features in both light and dark modes
- Ensure mobile responsiveness


## Updates & Maintenance

### Regular Updates

- Update dependencies monthly
- Test new Next.js versions
- Monitor performance metrics
- Update content and images


### Feature Additions

The codebase is structured to easily add:

- New menu categories
- Additional payment methods
- Customer accounts
- Order tracking
- Loyalty programs


---

**Built with ❤️ for fresh baked goods lovers**