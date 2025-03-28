import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] =useState([]);
    useEffect(()=>{
        fetch('./gadgetData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
        },[])
    return (
        <div>
            <h2 className="text-4xl p-6 font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            <section className="md:flex gap-4">
                <div className="shadow-xl grid grid-cols-1 rounded-lg gap-5 h-[556px] p-10">
                <button className="btn btn-outline btn-primary">All Product</button>
                <button className="btn btn-outline btn-primary">Laptops</button>
                <button className="btn btn-outline btn-primary">Phones</button>
                <button className="btn btn-outline btn-primary">Accessories</button>
                <button className="btn btn-outline btn-primary">Iphone</button>
                <button className="btn btn-outline btn-primary">MacBook</button>
                <button className="btn btn-outline btn-primary">Smart Watches</button>
                </div>
            <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                {
                    gadgets.map(gadget =><Gadget key={gadget.product_id} gadget={gadget} ></Gadget>)
                }

           </div>
            </section>
        </div>
    );
};

export default Gadgets;