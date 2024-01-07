import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { SITE } from './src/utils/config.ts';
// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,

  integrations: [
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    service: squooshImageService(),
  },
});
