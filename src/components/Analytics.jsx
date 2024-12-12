import Laptop from '../assets/laptop.jpg'
export const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-xl'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Streamline your operations with centralized data analytics. Manage, analyze, and visualize data effortlessly to make informed decisions, boost efficiency, and drive growth across your organization with a unified solution.</p>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get Started</button>
                </div>
            </div>
        </div>
    )
}