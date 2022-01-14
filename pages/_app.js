
import '../styles/globals.css'
import "antd/dist/antd.css"
import AppLayout from '../components/Layout'
import App,{Container} from 'next/app'
function MyApp({ Component, pageProps }) {
  return(
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  )
}

export default MyApp
