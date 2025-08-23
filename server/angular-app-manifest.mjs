
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15539, hash: 'd370100d6e04ebdac65703223f6dbd04c2caddac2ea730ab767d67d7ea9d1fd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '4434e538c9131030aebf06acff5cc87daf17749885ab8401914495b676cd7e60', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 387805, hash: 'be40b1fbebf9d5eecd949c018e30aa06f27d3eb7bb6d6421128ecb02b016791e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I7ZPY5LW.css': {size: 16675, hash: '08tOt3BDJjY', text: () => import('./assets-chunks/styles-I7ZPY5LW_css.mjs').then(m => m.default)}
  },
};
