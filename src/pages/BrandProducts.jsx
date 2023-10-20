import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/brandProducts/Slider";
import Product from "../components/brandProducts/Product";

const BrandProducts = () => {
    const products = useLoaderData();
    document.title = `${products?.[0].brand || 'Products'}`;
    return (
        <>
            <Slider></Slider>
            <div className='md:mx-10 mx-5'>
                {
                    products.length === 0
                        ?
                        <div className="mt-28 h-[30vh] flex flex-col items-center justify-center">
                            <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-5">No Product Found</h2>
                            <Link to='/'><button className="bg-[#cc4316] text-white px-5 py-2 rounded active:scale-95 transition-transform font-medium">Home</button></Link>
                        </div>
                        :
                        <div className='mt-28'>
                            <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-10">Products</h2>
                            <div className='grid gap-y-20'>
                                {
                                    products.map((product, index) => <Product key={product._id} product={product} index={index}></Product>)
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    );
};

export default BrandProducts;