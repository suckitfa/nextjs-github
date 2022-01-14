import React from 'react'
import initializeStore from '../store/store'
const isServer = typeof window === 'undefined'
const _NEXT_REDUX_STORE_ = '_NEXT_REDUX_STORE_'


function getOrCreateStore(initialState) {
    if(isServer) {
        // 服务端每次执行，重新创建一个
        return initializeStore(initialState)
    }
    
    if(!window[_NEXT_REDUX_STORE_]) {
        window[_NEXT_REDUX_STORE_] = initializeStore(initialState)
    }
    return window[_NEXT_REDUX_STORE_]
}


export default (Comp) => {
    class withReduxApp extends React.Component {
        constructor(props) {
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }

        render() {
            const {Component,pageProps, ... rest}  = this.props
            return (
                <Comp 
                    {... rest}
                    Component={Component}
                    pageProps={pageProps}
                    reduxStore={this.reduxStore}
                />
            )
        }
    }
    withReduxApp.getInitialProps = async ctx => {
        let reduxStore
        if(isServer) {
            const {ctx: {req}} = ctx
            const {session} = req
            if(session && session.userInfo) {
                reduxStore = getOrCreateStore({
                    user:sesssion.userInfo
                })
            } else {
                reduxStore = getOrCreateStore()
            }
        } else {
            reduxStore = getOrCreateStore()
        }
        ctx.reduxStore = reduxStore
        let appProps = {}
        if(typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(ctx)
        }
        return {
            ...appProps,
            initializeState:reduxStore.getState()
        }
    }

    return withReduxApp
}