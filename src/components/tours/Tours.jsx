import Tour from "./tour/Tour";


let Tours = (props) => {
    let travelDestinations = props.data.map((ele) => <Tour data={ele}></Tour>);
return (
    <>
    {travelDestinations}
    </>
);
}

export default Tours;