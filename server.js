const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3000
app.prepare().then(() => {
    const server = new Koa()
    const router = new Router();

    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: 'a',
            query: { id }
        })
        ctx.respond = false
    })
    router.get('/test/b/:id', async(ctx) => {
        const id = ctx.params.id || 0;
        await handle(ctx.req, ctx.res, {
            pathname: '/test/b',
            query: { id }
        })
    })

    server.use(router.routes())

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(PORT, () => {
        console.log(`runing on: http://localhost:${PORT}`)
    })
})