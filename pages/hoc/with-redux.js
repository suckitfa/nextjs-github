import createStore from '../store/store'

const isServer = typeof window === 'undefined'
const _NEXT_REDUX_STORE = '_NEXT_REDUX_STORE'

function getOrCreateStore(initialState) {
    if(isServer) {
        return createStore(initialState)
    }

    if(!window[_NEXT_REDUX_STORE]) {
        window[_NEXT_REDUX_STORE] = createStore(initialState)
    }
    return window[_NEXT_REDUX_STORE]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default Comp => {
    class WithReduxApp extends React.Component {
        constructor(props) {
            super(props)
            this.reduxStore = getOrCreateStore(props.intialReduxState)
        }
        render() {
            const {Component,pageProps,...rest} = this.props;
            if(pageProps) {
                pageProps.test = '123'
            }
            return (
            <Comp 
                Component={Component} 
                pageProps={pageProps} 
                {...rest}
                reduxStore={this.reduxStore}
            />)
        }
    }

    WithReduxApp.getInitialProps = async (ctx) => {
        const reduxStore = getOrCreateStore()
        ctx.reduxStore = reduxStore
        let appProps = {}
        if(typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps
        }
        return {
            ...appProps,
            intialReduxState:reduxStore.getState()
        }
    }
    return TestHocComp;
} 