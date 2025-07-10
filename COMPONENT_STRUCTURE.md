# Component├── components/ # Reusable React components

│ ├── index.ts # Component exports
│ ├── Header.tsx # Navigation header component
│ ├── Hero.tsx # Hero section component
│ ├── Review.tsx # Event review section component
│ ├── Prize.tsx # Prize fund section component
│ ├── RegisterButton.tsx # Registration button component
│ ├── RegistrationDialog.tsx # Registration modal dialog
│ └── RegistrationForm.tsx # Registration form with validation
├── constants/ # Application constants
│ └── index.ts # Event data, prize data, registration URLs
├── schemas/ # Zod validation schemas
│ └── registration.ts # Registration form validation schema
└── types/ # TypeScript type definitions
└── index.ts # Shared interfaces
This project has been refactored to follow React best practices with a clean component architecture.

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.css              # Global styles with custom fonts
├── components/            # Reusable React components
│   ├── index.ts          # Component exports
│   ├── Header.tsx        # Navigation header component
│   ├── Hero.tsx          # Hero section component
│   ├── Review.tsx        # Event review section component
│   ├── Prize.tsx         # Prize fund section component
│   └── RegisterButton.tsx # Registration button component
├── constants/            # Application constants
│   └── index.ts          # Event data, prize data, registration URLs
└── types/               # TypeScript type definitions
    └── index.ts         # Shared interfaces

```

### RegistrationDialog

- Radix UI powered modal dialog
- Custom animations and backdrop blur
- Accessible design with proper ARIA attributes
- Responsive design for mobile and desktop

### RegistrationForm

- React Hook Form integration with Zod validation
- Real-time form validation with error messages
- Ukrainian language support for all fields
- Styled form inputs with focus states

### RegisterButton

- Standalone registration button component
- Uses centralized URL constants
- Accessible design with proper aria-label
- Consistent styling and hover effects

### Prize

- Prize fund information with different competition rounds
- Reusable PrizeCard component for each prize tier
- Dynamic data rendering from constants

## Components

### Header

- Fixed navigation bar with logos and links
- Responsive design for mobile and desktop
- Links to DoraHacks registration

### Hero

- Main landing section with title and description
- Background images and decorative elements
- Event introduction and overview

### Review

- Event details in structured cards
- Registration information
- Reusable InfoCard component for consistent styling

## Features

- **TypeScript**: Full type safety with proper interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Fonts**: Unbounded and Montserrat fonts properly configured
- **Component Separation**: Each component in its own file for maintainability
- **Constants**: Centralized data management
- **Accessibility**: Proper alt text and semantic HTML
- **Form Validation**: Zod schema validation with React Hook Form
- **Modal Dialogs**: Radix UI components with custom animations

## Improvements Made

1. **Separated components** into individual files for better maintainability
2. **Added TypeScript interfaces** for type safety
3. **Centralized constants** to avoid code duplication
4. **Improved accessibility** with better alt text and semantic elements
5. **Added hover effects** for better user interaction
6. **Consistent code formatting** and structure
7. **Reusable InfoCard component** to avoid repetition
