import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';
import compressor from 'astro-compressor';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tu-app.0x7ff.xyz',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    pagefind(),
    AstroPWA({
      includeAssets: ['favicon.ico'],
      registerType: 'autoUpdate',

      manifest: {
        short_name: 'ТУ - София',
        name: 'Технически Университет',
        description: 'Технически Университет - София',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        display_override: ['fullscreen', 'minimal-ui'],
        background_color: '#0F0F0F',
        theme_color: '#0F0F0F',
        categories: ['education', 'documentation', 'university'],
        orientation: 'natural',
        dir: 'ltr',
        lang: 'bg',
        related_applications: [
          {
            platform: 'Приложение',
            url: 'https://tu-sofia-pwa.0x7ff.xyz/manifest.webmanifest'
          }
        ],
        screenshots: [
          {
            label: 'Прилочение',
            src: '/screenshots/application-wide.webp',
            sizes: '1200x800',
            type: 'image/webp',
            form_factor: 'wide'
          },

          {
            label: 'Прилочение',
            src: '/screenshots/application-narrow.webp',
            sizes: '800x1200',
            type: 'image/webp',
            form_factor: 'narrow'
          }
        ],
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\//]
      },
      experimental: {
        directoryAndTrailingSlashHandler: true
      }
    }),
    sitemap(),
    robotsTxt({
      sitemap: true
    }),
    icon(),
    react(),
    compressor()
  ]
});
