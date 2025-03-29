import { Link } from "react-router-dom";

const Gadget = ({gadget}) => {
    const{product_image,product_title,price,product_id} =gadget;

    return (
      <div className="card p-6 bg-base-100  shadow-lg">
  <figure className="bg-gray-100 rounded-2xl py-8">
    <img
      src={product_image}
      alt="product_title"
       className="h-[166px]"
    />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
    <p> Price : {price}</p>
    <div className="card-actions">
      <Link to={`./cardDetiles/${product_id}`}><button className="btn btn-outline  btn-primary">View Details</button></Link>
    </div>
  </div>
</div>

    );
};

export default Gadget;