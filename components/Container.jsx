const style = {
    width:'100%',
    maxWidth:1200,
    marginLeft:'auto',
    marginRight:'auto'
}
 const Container = ({children}) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Container