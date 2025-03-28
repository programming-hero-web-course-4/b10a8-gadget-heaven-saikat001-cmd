
const Footer = () => {
    return (
        <footer className=" bg-slate-100  mt-10 p-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold ">Gadget Heaven</h1>
                <p className="text-gray-600 my-4">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div class="divider"></div>
       <div className="footer mx-auto flex justify-around">
       <nav>
          <h6 className=" text-xl text-black font-semibold">Services</h6>
          <a className="text-gray-700">Product Support</a>
          <a className="text-gray-700">Order Tracking</a>
          <a className="text-gray-700">Shipping & Delivery</a>
          <a className="text-gray-700">Returns</a>
        </nav>
        <nav>
          <h6 className="text-xl text-black font-semibold">Company</h6>
          <a className="text-gray-700">About us</a>
          <a className="text-gray-700">Careers</a>
          <a className="text-gray-700">Contact</a>
     
        </nav>
        <nav>
          <h6 className="text-xl text-black font-semibold">Legal</h6>
          <a className="text-gray-700">Terms of Service </a>
          <a className="text-gray-700">Privacy Policy</a>
          <a className="text-gray-700">Cookie Policy</a>
        </nav>
       </div>
      </footer>
    );
};

export default Footer;