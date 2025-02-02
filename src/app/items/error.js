"use client" ;

const ErrorPage = ({error,reset}) => {
    console.log(error)
    return (
        <div>
           <h1 className='text-center text-red-600 my-5 text-xl'>Something Went Wrong</h1>
           <p className='text-center text-red-600 my-5 text-xl'>{error.message}</p>
           <div onClick={() => reset()} className="text-center"><button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Try again</button></div>
           
        </div>
    );
};

export default ErrorPage;