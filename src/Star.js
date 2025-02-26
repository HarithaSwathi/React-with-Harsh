const Star = (props) => {
    return (<>
        <span> - {props.rating}</span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
    </>);
}

export default Star;