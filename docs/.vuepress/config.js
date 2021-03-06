const { description } = require('../../package')

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'App Manager Docs',
      description: description,      
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Документация App Manager',
      description: description,      
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: '/AppManager/',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    logo: '/icon.png',
    locales: {
      '/': {
        selectText: 'Languages',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Instructions',
            link: '/guide/',
          },
          {
            text: 'Changelog',
            link: '/changelog',
          },
          {
            text: 'F-Droid',
            link: 'https://f-droid.org/packages/io.github.muntashirakon.AppManager'
          },
          {
            text: 'Source Code',
            link: 'https://github.com/MuntashirAkon/AppManager'
          },
        ],
        sidebar: [
          {
            title: 'Instructions',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/adb-over-tcp',
              '/guide/main-page',
              '/guide/app-details-page',
              '/guide/one-click-ops-page',
              '/guide/exodus-page',
              '/guide/shared-pref-editor-page',
              '/guide/settings-page',
              '/guide/backup-restore',
            ]
          },
          {
            title: 'Frequently Asked Questions',
            path: '/faq',
            collapsable: false,
            children: [
              '/faq/app-components',
              '/faq/adb',
              '/faq/misc',
            ]
          },
          {
            title: 'Technical Information',
            path: '/tech',
            collapsable: false,
            children: [
              '/tech/AppOps',
              '/tech/rules-specification',
            ]
          },
        ],
      },
      '/ru/': {
        selectText: 'Языки',
        // text for the language dropdown
        selectText: 'Языки',
        // label for this locale in the language dropdown
        label: 'Русский',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Языки',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'Доступен новый контент.',
            buttonText: 'Обновить',
          }
        },
        nav: [
          {
            text: 'Инструкции',
            link: '/ru/guide/',
          },
          {
            text: 'Список изменений',
            link: '/ru/changelog',
          },
          {
            text: 'F-Droid',
            link: 'https://f-droid.org/packages/io.github.muntashirakon.AppManager'
          },
          {
            text: 'Исходный код',
            link: 'https://github.com/MuntashirAkon/AppManager'
          },
        ],
        sidebar: [
          {
            title: 'Инструкции',
            collapsable: false,
            children: [
              '/ru/guide/',
              '/ru/guide/adb-over-tcp',
              '/ru/guide/main-page',
              '/ru/guide/app-details-page',
              '/ru/guide/one-click-ops-page',
              '/ru/guide/exodus-page',
              '/ru/guide/shared-pref-editor-page',
              '/ru/guide/settings-page',
            ]
          },
          {
            title: 'Часто задаваемые вопросы',
            path: '/ru/faq',
            collapsable: false,
            children: [
              '/ru/faq/app-components',
              '/ru/faq/misc',
            ]
          },
          {
            title: 'Техническая информация',
            path: '/ru/tech',
            collapsable: false,
            children: [
              '/ru/tech/AppOps',
              '/ru/tech/rules-specification',
            ]
          },
        ],
      },
    },
  },
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
