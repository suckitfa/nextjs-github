const Redis = require('ioredis')

const redis = new Redis({
    port: 6379,
    localhost: "127.0.0.1",
})

async function testRedis() {
    const keys = await redis.keys("*")
    console.log(keys)
    console.log(await redis.get('session:sessionId'))
    const res = await redis.setex('testex', 10, '11111')
    console.log('res = ', res)
}

testRedis()