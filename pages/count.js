// demo for learning react-hooks
import React, {useState,useEffect,useReducer} from 'react'
import {Button} from 'antd'
function Count() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <div>
                <Button onClick={() => setCount(c => c+1)}>
                    加1
                </Button>
            </div>
            <div>
                count = {count}
            </div>
        </div>
    )
}

export default Count