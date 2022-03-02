import Tour from "../tours/tour/Tour";
import { useParams } from "react-router-dom";


let TourDetails = (props) => {

    let { id } = useParams();

    let filtered = props.data.filter(ele => ele.id == id)

    return (
        <div>
          <img
            src={filtered[0].image}
            alt={`destination ${filtered[0].name} preview`}
          />
          <div className="data">
            <h1 className="name">{filtered[0].name}</h1>
            <h1 className="price">{`${filtered[0].price}$`}</h1>
            <p>{filtered[0].info}</p>
          </div>
        </div>
      );


}

export default TourDetails;