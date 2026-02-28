/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // red-700
        background: "var(--color-background)", // white
        foreground: "var(--color-foreground)", // gray-900
        primary: {
          DEFAULT: "var(--color-primary)", // red-700
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // brown-700
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-50
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // yellow-600
          foreground: "var(--color-accent-foreground)", // gray-900
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-900
        },
        success: {
          DEFAULT: "var(--color-success)", // green-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // yellow-400
          foreground: "var(--color-warning-foreground)", // gray-900
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        trust: {
          DEFAULT: "var(--color-trust)", // blue-800
          foreground: "var(--color-trust-foreground)", // white
        },
        surface: {
          DEFAULT: "var(--color-surface)", // gray-50
          foreground: "var(--color-surface-foreground)", // gray-900
        },
        'text-primary': "var(--color-text-primary)", // gray-900
        'text-secondary': "var(--color-text-secondary)", // gray-500
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "pulse-soft": "pulse-soft 2s infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'morocco': '0 4px 12px rgba(200, 16, 46, 0.08)',
        'morocco-lg': '0 12px 24px rgba(200, 16, 46, 0.15)',
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevation': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-morocco': 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        'gradient-hero': 'linear-gradient(rgba(200,16,46,0.3), transparent)',
      },
    },
  },
  plugins: [],
}