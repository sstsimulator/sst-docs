module.exports={
  "title": "The Structural Simulation Toolkit",
  "tagline": "Using the supercomputers of today to build the supercomputers of tomorrow",
  "url": "https://sstsimulator.github.io",
  "baseUrl": "/sst-docs/",
  "organizationName": "sstsimulator",
  "projectName": "sst-docs",
  "deploymentBranch": "gh-pages",
  "trailingSlash": false,
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/sst-logo-small.png",
  "customFields": {
    "users": [
    ],
    "repoUrl": "https://github.com/sstsimulator/sst-core"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/sstsimulator/sst-docs/edit/master/docs/",
          "path": "../docs",
          "sidebarPath": "./sidebars.js"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/customTheme.css')]
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ],
  ],
  "themeConfig": {
    "navbar": {
      "style" : "primary",
      "title": "The Structural Simulation Toolkit",
      "logo": {
        "src": "img/sst-logo-small.png"
      },
      "items": [
        {
          "href": "https://sstsimulator.github.io",
          "label": "Main",
          "position": "left"
        },
        {
          "to": "docs/guides/runningSST",
          "label": "Guides",
          "position": "left",
          sidebarId: 'guides',

        },
        {
          "to": "docs/core/component/introduction",
          "label": "SST-Core API",
          "position": "left",
          sidebarId: 'core',
        },
        {
          "to": "docs/config/",
          "label": "Configuration",
          "position": "left",
          sidebarId: 'config',
        },
        {
          "to": "docs/elements/ember/QuickStart",
          "label": "Elements",
          "position": "left",
          sidebarId: 'elements',
        },
        {
          "to": "docs/tools/commandLine/sst-info",
          "label": "Tools",
          "position": "left",
          sidebarId: 'tools',
        },
        {
          "to": "help",
          "label": "Help",
          "position": "left"
        }
      ]
    },
    "image": "img/sst-logo-small.png",
    "footer": {
      "style" : "dark",
      "links": [],
      "copyright": "Copyright © 2023 SST",
      "logo": {
        "src": "img/sst-logo-small.png"
      }
    },
    "algolia": {
      "appId": "B6IFEXV9WE",
      "apiKey": "21b099cfb417d9b97f19045cc7c20cfe",
      "indexName": "sst-simulator",
      "placeholder": "Search Docs (not working yet)"
    }
  }
}
