import App,{Container} from 'next/app'  
import '../styles/globals.css'
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
  return(
       <Component {...pageProps} >
       </Component>
  )
}

export default MyApp
