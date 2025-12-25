import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
				'xl': '1280px',
				'lg': '1024px',
				'md': '768px',
				'sm': '640px'

			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				geist: ['Geist', 'sans-serif'],
				aeonik: ['Aeonik', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				kalahari: {
					'brown-primary': 'hsl(var(--kalahari-brown-primary))',
					'brown-secondary': 'hsl(var(--kalahari-brown-secondary))',
					'brown-tertiary': 'hsl(var(--kalahari-brown-tertiary))',
					'dark': 'hsl(var(--kalahari-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function(api: PluginAPI) {
			api.addComponents({
				'.keen-slider:not([data-keen-slider-disabled])': {
					'-webkit-touch-callout': 'none',
					'-webkit-tap-highlight-color': 'transparent',
					'align-content': 'flex-start',
					'display': 'flex',
					'overflow': 'hidden',
					'position': 'relative',
					'touch-action': 'pan-y',
					'-webkit-user-select': 'none',
					'-moz-user-select': 'none',
					'user-select': 'none',
					'-khtml-user-select': 'none',
					'width': '100%',
				},
				'.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide': {
					'min-height': '100%',
					'overflow': 'hidden',
					'position': 'relative',
					'width': '100%',
				},
			});
		},
	],
} satisfies Config;
