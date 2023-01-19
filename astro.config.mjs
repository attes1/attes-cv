import { defineConfig } from 'astro/config';

// https://astro.build/config
import vanillaExtract from 'astro-vanilla-extract';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vanillaExtract(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
