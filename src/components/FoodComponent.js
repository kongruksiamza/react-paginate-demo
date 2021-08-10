const FoodComponent = ({food})=>{
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-image">
                    <img src={food.image_url} alt={food.foodName}/>
                </div>
            </div>
            <div className="title">{food.foodName}</div>
        </div>
    )
}

export default FoodComponent