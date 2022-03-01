const Tours = (props) => {
return(
<>
{
props.data.map((ele) => {
    return (
        <div>
        <hr />
        <h1>{ele.name}</h1>
        <img src={ele.image} alt={`A tour in ${ele.name}`} />
        <hr />
        </div>
    )
})
}
</>
)
};
export default Tours;