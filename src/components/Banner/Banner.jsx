import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="h-[694px] rounded-lg -mt-20  bg-[#9538E2]" >
           <div className="text-center p-26" >
           <h1 className="lg:text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="my-4 text-gray-200 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="btn my-4 rounded-full text-[#9538E2]  px-10 bg-white">Shop Now</button>
           </div>
        </div>
 <div className='shadow-2xl w-2/3 mx-auto border-3 border-white p-5 -mt-24 md:-mt-56 rounded-3xl backdrop-blur-2xl'>
 <img className=' rounded-2xl  ' src={banner} alt="" />
 </div>

        </div>
    );
};

export default Banner;