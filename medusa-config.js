import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

console.log(">>> DATABASE_URL:", process.env.DATABASE_URL)

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
  workflows: false,
  stock_location: false,
  inventory: false,
  product: false,
  sales_channel: false,
  fulfillment: false,
  pricing: false,
  tax: false,
  payment: false,
  cart: false,
  order: false,
  customer: false,
  api_key: false,
  shipping: false,
  store: false,
  promotion: false,
  region: false,
  currency: false,
  notification: false,
  user: false,
  return: false,
  swap: false,
  claim: false,
  gift_card: false,
  publishable_api_key: false,
  discount: false,
  price_list: false,
  price_set: false,
  auth: false,
  // if you face more issues, try disabling these too:
  batch_job: false,
  upload: false,
},
})
