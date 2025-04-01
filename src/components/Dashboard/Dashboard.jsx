import { ImEqualizer2 } from "react-icons/im";
const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] h-[300px;] p-8 text-center ">
            <h1 className="text-white text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-200 my-4 ">Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to  the coolest accessories, we have it all!</p>
           
           <button class="btn mr-3  ">Cart</button>
           <button class="btn btn-outline  text-white">Wishlist</button>
            </div>

            <div className="shadow-sm flex justify-between mt-8 ">

                <h3 className="my-3 font-bold lg:text-2xl mt-2  " >Cart</h3>

                <div className="flex justify-end">
                <p className="mr-4 my-2 lg:my-1 lg:text-2xl font-bold">Total cost :</p>
                 <button class="btn btn-outline  rounded-full  px-2 w-30 mr-3 btn-primary">Sort by Price <ImEqualizer2></ImEqualizer2> </button>
                 <button class="btn rounded-full text-white px-2 bg-[#9538E2]">Purchase</button>
      
                </div>
            </div>



        </div>

        
    );
};

export default Dashboard;