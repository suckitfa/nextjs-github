import App,{Container} from 'next/app'  
import '../styles/globals.css'
import "antd/dist/antd.css"
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return(
       <Component {...pageProps} >
       </Component>
  )
}

export default MyApp
