const HelloComponent = function(props) {
    console.log(props);
    return (
        <div>{props.name}</div>
    )
}

export default HelloComponent;