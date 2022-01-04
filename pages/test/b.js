import Comp from '../../components/comp'
import React,{useState,useEffect,useReducer} from 'react'
// 类组件
// class MyCount extends React.Component {
//     state = {
//         count:0
//     }
//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState({count:this.state.count+1})
//         }, (1000));
//     }
//     componentWillUnmount() {
//         if(this.interval) {
//             clearInterval(this.interval)
//         }
//     }
//     render() {
//         return <div>count = {this.state.count}</div>
//     }
// }

// HOOKs 写法
// function MyCountFunc() {
//     const [count,setCount] = useState(0)
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(c => c+1)
//         },1000)
//         return () => clearInterval(interval)
//     },[])
//     return <div>{count}</div>
// }

function MyCountFunc() {
    const [count,dispatchCount] = useReducer(countReducer,0)
    useEffect(() => {
        const interval = setInterval(() => {
            dispatchCount({type:"add"})
        },1000)
        return () => clearInterval(interval)
    },[])
    return <div>{count}</div>
}
function countReducer(state,action) {
    switch (action.type) {
        case 'add':
            return state + 1
            break
        case 'minus':
            return state - 1
            break;
        default:
            return state
            break;
    }
}

 const B = () => <Comp><MyCount /></Comp>
 export default MyCountFunc;