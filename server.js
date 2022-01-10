// server.js
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3000
let index = 0
// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.keys = ['shit develop github App']
  const SESSION_CONFIG = {
    key:'jid',
  }
  server.use(session(SESSION_CONFIG,server))

  server.use(async (ctx,next) => {
      if(!ctx.session.user) {
        ctx.session.user = {
          name:'shit',
          age:18
        }
      } else {
        console.log('session is ',ctx.session)
      }
      await next()
  })
  // start
  // 利用koa-router去把/a/1这种格式的路由
  // 代理到/a?id=1去，这样就不会404了
  router.get('/a/:id', async ctx => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: {
        id
      }
    })
    ctx.respond = false
  })
  server.use(router.routes())
  // end

  server.use(async (ctx, next) => {
    ctx.cookies.set('id',index ++)
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
})