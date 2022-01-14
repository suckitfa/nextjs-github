import {useCallback, useState} from 'react'
import { Layout, Input,Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
import {GithubOutlined,UserOutlined} from '@ant-design/icons'
import Container from './Container';

const githubIconStyle = {
    color:'white',
    fontSize:40,
    paddingTop:10,
    marginRight:20,
    display:'inline-block'
}
const inputStyle = {
    display:'inline-block',
    height:64,
}
const footerStyle = {
    textAlign:'center'
}
 const AppLayout = ({children}) =>{
    const [search,setSearch] = useState('')

    const handleSearchChange = useCallback((event)=>{
        setSearch(event.target.value)
    },[])

    const handleOnSearch = useCallback( () => {

    })
    return (
    <Layout>
        <Header>
            <div className="header-inner">
                <div className="header-left" >
                    <div className="logo" >
                         <GithubOutlined style={githubIconStyle}/>
                    </div>
                    <div style={inputStyle}>
                        <Input.Search 
                        placeholder="搜索仓库" 
                        value={search}
                        onChange={handleSearchChange}
                        onSearch={handleOnSearch}
                        />
                    </div>
                </div>
                <div className="header-right">
                    <div className="user">
                        <Avatar size={40} icon={<UserOutlined />}/>
                    </div>
                </div>
            </div>
        </Header>
        <Container>
            <Content>{children}</Content>
        </Container>
        <Footer style={footerStyle}>
            Develop by Bob @
            <a href="mailto:tangbob171@gmail.com">Bob@gmail.com</a>
        </Footer>
        <style jsx>
        {`
            {/* 里面的元素左右开始牌 */}
            .header-inner {
                display:flex;
                justify-content: space-between;
            }           
            {/* 让里面的元素从左到右排列 */}
            .header-left {
                dispaly: flex;
                justify-content: flex-start;
            }
            .logo {
                display:inline-block;
                dispaly:'inline-block',
                height:64px,
                width:40px
            }
            `}
        </style>
        {/*全局的样式 */}
        <style>
            {
                `
                body {
                    height:100%;
                }
                div#__next {
                    height:100%;
                }
                .ant-layout {
                    height:100%;
                }
                `
            }
        </style>
    </Layout>
    )
}

export default AppLayout;