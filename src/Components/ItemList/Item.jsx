import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
        <div className="col-md-4 mb-4">
            <Link to={"/item/" + item.id}>
            <div className="card border-0">
                <img src={item.img} alt={item.title} className="img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-secondary text-center">{item.title}</h5>
                        <p className="item-price text-secondary text-center"><b>${item.price}</b></p>
                    </div>
            </div>
             </Link>
        </div>
  )
};

export default Item;