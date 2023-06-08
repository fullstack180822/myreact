const Rainbow = (WrappedComponent) => {
    return (props) => (
        <div style={{background: 'pink'}}>
        <p>High Order Component</p>
        <WrappedComponent {...props} rainbow_color='yellow' />
        </div>)
}

export default Rainbow;