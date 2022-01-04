import Link from "next/link"
import { Button } from "antd"
export default ({children}) =>{
    <div>
        <header>
        <Link href="/a?id=1" as="/a/id/1">
            <Button>Index A</Button>
        </Link>
        <Link href="/test/b?id=1" as="/test/b/id/1">
            <Button>Index B</Button>
        </Link>
    </header>
    {children}
    </div>
}