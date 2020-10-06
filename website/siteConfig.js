/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '前端成长计划', // Title for your website.
  tagline: 'frontEnd growth plan',
  url: 'https://GaryHjy.github.io', // Your website URL
  baseUrl: '/frontEnd-growth-plan/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // github地址
  githubUrl: 'https://github.com/GaryHjy',
  // Used for publishing and more
  projectName: 'frontEnd-growth-plan',
  organizationName: 'GaryHjy',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'html/getting-started', label: 'HTML'},
    {doc: 'css/css1', label: 'CSS'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: '关于'},
    {blog: true, label: 'Blog'},
    { href: 'https://github.com/GaryHjy', label: 'GitHub' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    // primaryColor: '#3c2282',
    primaryColor: '#007fff',
    secondaryColor: '#2a175b',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} GaryHjy`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // js主题用于代码块中的语法高亮显示。
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  // 在这里添加将放置在<script>标签中的自定义脚本。
  // scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // 在类别下展开/折叠链接和子类别
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // 显示文档上一个贡献者的名字。
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // 显示文档的最近更新时间。
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/GaryHjy/frontEnd-growth-plan',
};

module.exports = siteConfig;
