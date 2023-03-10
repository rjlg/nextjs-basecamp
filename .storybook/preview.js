import { themes } from '@storybook/theming'
import '@/styles/globals.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    classTarget: 'html',
    darkClass: 'dark',
    stylePreview: true,
  },
}
