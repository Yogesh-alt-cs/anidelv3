import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { Redis } from '@upstash/redis'

const app = new Hono()

// CORS middleware
app.use('*', cors())

// Optional Redis cache
let redis
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
  })
}

// Route example
app.get('/api/search', async (c) => {
  const q = c.req.query('q')
  const url = `https://hianime.do/search?keyword=${encodeURIComponent(q)}`
  const res = await fetch(url)
  const text = await res.text()

  if (redis) {
    await redis.set(`search:${q}`, text, { ex: 3600 })
  }

  return c.text(text)
})

// Health check route (important for Render)
app.get('/', (c) => c.text('Anidel backend is running'))

const port = process.env.PORT || 3000

serve({
  fetch: app.fetch,
  port: port
})

