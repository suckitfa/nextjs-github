export default (Comp) => {
    return function TestHOCComp(props) {
        returun(
            <Comp {...props}/>
        )
    }
}