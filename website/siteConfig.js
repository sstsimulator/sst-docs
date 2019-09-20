/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'The Structural Simulation Toolkit' /* title for your website */,
  tagline: 'Using the supercomputers of today to build the supercomputers of tomorrow',
  //url: 'https://your-docusaurus-test-site.com' /* your website url */,
  //baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://sstsimulator.github.io',
  baseUrl: '/sst-website/',

  // Used for publishing and more
  projectName: 'sst-website',
  organizationName: 'sstsimulator',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://sstsimulator.github.io', label: 'Main'},
    {doc: 'guides/external/projectDriver', label: 'Guides'},
    {doc: 'cpp/component/registerClock', label: 'C++ API'},
    {doc: 'projectDriver/sst/component', label: 'Project Driver'},
    {doc: 'tools/commandLine/sst-info', label: 'Tools'},
    {page: 'help', label: 'Help'},
   // {blog: true, label: 'Blog'},
  ],

  editUrl: 'https://github.com/sstsimulator/sst-website/edit/master/docs/',

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/sst-logo-small.png',
  footerIcon: 'img/sst-logo-small.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  /* Was 2E8555 */
    /*secondaryColor: '#205C3B',*/
  colors: {
    primaryColor: '#005376',
    secondaryColor: '#003359',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' SST',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/sst-logo-small.png',
  twitterImage: 'img/sst-logo-small.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/sstsimulator/sst-core',
};

module.exports = siteConfig;
