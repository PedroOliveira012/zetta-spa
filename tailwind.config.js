/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/about/about.vue',
    'src/components/contact/contact-info.vue',
    'src/components/contact/map-component.vue',
    'src/components/home/partner-section.vue',
    'src/components/home/photo-carousel.vue',
    'src/components/home/products-sections.vue',
    'src/components/panels/panels.vue',
    'src/components/projects/projects.vue',
    'src/components/robots/robots.vue',
    'src/components/app-footer.vue',
    'src/components/cta-component.vue',
    'src/components/navbar.vue',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slide: 'slide 2s forwards',
      },
      screens:{
        'xs':'360px'
      }
    },
  },
  plugins: [],
}

