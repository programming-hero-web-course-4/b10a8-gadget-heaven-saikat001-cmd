import Banner from '../../assets/error-2.jpg'
const ErrorPage = () => {
    return (
        <div className='mx-auto flex justify-center'>
             <p className='mt-24 mr-6 text-4xl font-bold'>Status : </p>
            <img  className='h-[400px] mt-24 ' src={Banner} alt="" />
        </div>
    );
};

export default ErrorPage;