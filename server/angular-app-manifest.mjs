
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/portfolio",
    "route": "/Program%20Files/Git/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15559, hash: '1c548401bc463a073aeef24821bc30e96bec0db7fc1030000027c7c3c111d28c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: 'ca0eab35f8928eb715e455b14795526fff14cd6a3f8d66d9ad1e258a1900fe1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-I7ZPY5LW.css': {size: 16675, hash: '08tOt3BDJjY', text: () => import('./assets-chunks/styles-I7ZPY5LW_css.mjs').then(m => m.default)}
  },
};
