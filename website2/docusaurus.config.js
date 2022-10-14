module.exports={
  "title": "The Structural Simulation Toolkit",
  "tagline": "Using the supercomputers of today to build the supercomputers of tomorrow",
  "url": "https://sstsimulator.github.io",
  "baseUrl": "/sst-website/",
  "organizationName": "sstsimulator",
  "projectName": "sst-website",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "users": [
      {
        "caption": "User1",
        "image": "/img/docusaurus.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
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
          "editUrl": "https://github.com/sstsimulator/sst-website/edit/master/docs/",
          "path": "../docs",
          "sidebarPath": "./sidebars.json"
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
    ]
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
          "to": "docs/guides/external/projectDriver",
          "label": "Guides",
          "position": "left"
        },
        {
          "to": "docs/cpp/component/constructor",
          "label": "SST-Core API",
          "position": "left"
        },
        {
          "to": "docs/guides/external/projectDriver",
          "label": "Configuration",
          "position": "left"
        },
        {
          "to": "docs/elements/ember/QuickStart",
          "label": "Elements",
          "position": "left"
        },
        {
          "to": "docs/tools/commandLine/sst-info",
          "label": "Tools",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        }
      ]
    },
    "image": "img/sst-logo-small.png",
    "footer": {
      "style" : "dark",
      "links": [],
      "copyright": "Copyright © 2022 SST",
      "logo": {
        "src": "img/sst-logo-small.png"
      }
    },
    //"algolia": {
    //  "apiKey": "53f2da5fc13d9dd966072e5a21cf7883",
    //  "indexName": "sst-simulator"
    //}
  }
}
