function getRedisSessionId(sid) {
    return `ssid:${sid}`
}

class RedisSessionStore {
    constructor(client) {
        this.client = client;
    }
    // 获取redis中存储的数据
    async get(sid) {
        console.log('get session',sid)
        const id = getRedisSessionId(sid)
        const data = await this.client.get(id)
        if(!data) {
            return null
        } 

        try {
            const result = JSON.parse(data)
            return result
        }catch(e) {
            console.log(e)
        }
    }

    // 在redis数据库中存储session数据
    /**
     * @param
    */
    async set(sid,sval,ttl) {
        console.log('set session',sid)
        const id = getRedisSessionId(sid)
        // redis数据库中存入的是
        if(typeof ttl === 'number') {
            ttl = Math.ceil(ttl/1000)
        }
        try {
            const sessionString = JSON.stringify(sval)
            if(ttl) {
                await this.client.setex(id,ttl,sessionString)
            } else {
                await this.client.set(id,sessionString)
            }
        }catch(e) {
            console.log(e)
        }
    }

    /**
     * 
    */
    async destroy(sid) {
        console.log('destroy session',sid)
        const id = getRedisSessionId(sid)
        await this.client.del(id)
    }
}

module.exports = RedisSessionStore