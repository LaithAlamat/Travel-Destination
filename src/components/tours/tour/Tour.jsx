import { Link } from "react-router-dom";

const Tour = (props) => {
  
    return (
        <Link to={`/${props.data.id}`} key={props.data.id}>
        
        <h1>{props.data.name}</h1>
        <img src={props.data.image} alt={`A tour in ${props.data.name}`} />
        <hr />
        </Link>
    )
    };
    export default Tour;







