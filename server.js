// server.js
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const Redis = require('ioredis')
const RedisSessionStore  = require('./server/session-store')
// 创建redisclient
const redis = new Redis()
const auth = require('./server/auth')
const PORT = 3000

// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  // session 配置
  server.keys = ['shit develop github App']
  const SESSION_CONFIG = {
    key:'jid',
    store:new RedisSessionStore(redis)
  }

  // 使用koa-session中间件
  server.use(session(SESSION_CONFIG,server))

  // github auth
  router.get('/auth',auth)
  
  
  router.get('/delete/user', async ctx => {
      ctx.session = null;
      // 会调用destory
      ctx.body = 'delete user session'
  })

  router.get('/api/user/info',async ctx => {
    const user = ctx.session.userInfo;
    console.log('user = ',user)
    if(!user) {
      ctx.status = 401
      ctx.body = 'Need Login'
    } else {
      ctx.body = user
      ctx.set('Content-Type','application/json')
    }
  })  

  router.get('/a/:id', async ctx => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: {
        id
      }
    });
    // bypass Koa's built-in
    ctx.respond = false
  })
  server.use(router.routes())
  // end

  server.use(async (ctx, next) => {
    console.log('session  =',ctx.session)
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
})