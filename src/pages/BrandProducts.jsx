import bmw from "../assets/bmw.jpg";
import star from "../assets/star.png";
import Slider from "../components/brandProducts/Slider";

const BrandProducts = () => {
    return (
        <>
            <Slider></Slider>
            <div className='md:mx-10 mx-5'>
                <div className='mt-28'>
                    <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-10">Products</h2>
                    <div className='grid gap-y-20'>
                        <div className='flex items-center flex-col md:flex-row-reverse gap-x-10 gap-y-7'>
                            <div className='w-full md:w-1/2'>
                                <img src={bmw} alt="" />
                            </div>
                            <div className='w-full md:w-1/2 md:text-left text-center'>
                                <h3 className="text-2xl lg:text-3xl font-semibold">BMW series 3</h3>
                                <p className='text-lg lg:text-xl mt-5 text-primary font-bold'>Sedan</p>
                                <p className='text-lg lg:text-xl mt-5 text-dark2'><span className='font-bold text-dark1'>Manufacturer:</span> BMW</p>
                                <p className='text-lg lg:text-xl mt-2 text-dark2'><span className='text-dark1 font-bold'>Price:</span> $3000000</p>
                                <div className='flex items-center gap-2 mt-5 md:justify-normal justify-center'>
                                    <img className='w-5' src={star} alt="" />
                                    <p className='font-bold text-primary text-base lg:text-lg'>3.98</p>
                                </div>
                                <div className='flex gap-5 text-lg lg:text-xl mt-5'>
                                    <button className='px-5 py-2 border-2 border-primary bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Details</button>
                                    <button className='px-5 py-2 border-2 border-primary bg-transparent rounded text-primary active:scale-95 transition-transform w-full font-medium mb-3'>Update</button>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center flex-col md:flex-row gap-x-10 gap-y-7'>
                            <div className='w-full md:w-1/2'>
                                <img src={bmw} alt="" />
                            </div>
                            <div className='w-full md:w-1/2 md:text-left text-center'>
                                <h3 className="text-2xl lg:text-3xl font-semibold">BMW series 3</h3>
                                <p className='text-lg lg:text-xl mt-5 text-primary font-bold'>Sedan</p>
                                <p className='text-lg lg:text-xl mt-5 text-dark2'><span className='font-bold text-dark1'>Manufacturer:</span> BMW</p>
                                <p className='text-lg lg:text-xl mt-2 text-dark2'><span className='text-dark1 font-bold'>Price:</span> $3000000</p>
                                <div className='flex items-center gap-2 mt-5 md:justify-normal justify-center'>
                                    <img className='w-5' src={star} alt="" />
                                    <p className='font-bold text-primary text-base lg:text-lg'>3.98</p>
                                </div>
                                <div className='flex gap-5 text-lg lg:text-xl mt-5'>
                                    <button className='px-5 py-2 border-2 border-primary bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Details</button>
                                    <button className='px-5 py-2 border-2 border-primary bg-transparent rounded text-primary active:scale-95 transition-transform w-full font-medium mb-3'>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandProducts;