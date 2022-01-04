import Link from 'next/link'
import {Button} from 'antd'
import {withRouter} from 'next/router';
import Comp from '../components/comp';
import dynamic from 'next/dynamic'

function A({router,name,time}) {
    return(
        <div>
            <div>time: {time}</div>
            <div>
                <span>id: {router.query.id}</span>
            </div>
            <div>
                <Comp><span>{name}</span></Comp>
            </div>
            <div>
                <Link href="/">
                    <Button className='text'>Back to Index: {router.query.id}</Button>
                </Link>
            </div>
            <style jsx>
                {`.text {
                    color:blue;
                }`}
            </style>
        </div>
    )
}

// g
// A.getInitialProps = async (ctx) => {
//     const moment = await import('moment')
//     const p = new Promise(resolve=>{
//             setTimeout(()=>{
//                 resolve({
//                     name: "bob",
//                     time: moment(Date.now() - 60*1000 * 60).fromNow()
//                 })
//             },1000)
//     })
//     return await p;
// }

 export default withRouter(A);