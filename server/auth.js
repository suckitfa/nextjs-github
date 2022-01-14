const axios = require('axios')
const config = require('../config')
const {client_id,client_secret,request_token_url} = config.github

const auth = async(ctx,next) => {
    const code = ctx.query.code 
    if(!code) {
        ctx.body = 'code not exsist'
        return 
    }
    const result = await axios({
        method:"POST",
        url:request_token_url,                
        data:{
            code,
            client_id,
            client_secret
        },
        headers:{
            Accept:'application/json'
        }
    })

    if(result.status === 200 && (result.data && ! result.data.error)) {
        const {data} = result
        // 写入session
        ctx.session.gethubAuth = data
        const {access_token,token_type} = data
        const userInfoResp = await axios({
            method:'get',
            url:'https://api.github.com/user',
            headers: {
                'Authorization':`${token_type} ${access_token}`
            }
        })
        ctx.session.userInfo = userInfoResp.data
        ctx.redirect('/')
    } else {
        ctx.respond = false
        ctx.body = `request for token failed: ${result.data.error}`
    }
}



module.exports = auth