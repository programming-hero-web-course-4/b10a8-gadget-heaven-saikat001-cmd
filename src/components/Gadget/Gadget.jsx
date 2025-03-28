
const Gadget = ({gadget}) => {
    const{product_image,product_title,price} =gadget;

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
      <button className="btn btn-outline  btn-primary">View Details</button>
    </div>
  </div>
</div>

    );
};

export default Gadget;