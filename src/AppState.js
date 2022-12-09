import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Blogger.js').Blogger[]} */
  blogs: [],
  /** @type {import('./models/Blogger.js').Blogger[]} */
  activeBlogs: [],
  /** @type {import('./models/Account.js').Account} */
  activeProfile: null,
  // myBlogs: [],
})
