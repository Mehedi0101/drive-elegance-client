import { useLoaderData, useNavigate } from "react-router-dom";
import star from "../assets/star.png";
import { BsCart3 } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const ProductDetails = () => {
    const { _id, name, image, brand, type, price, rating, description } = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(`/brands/${brand}`);
    }

    return (
        <div className="md:px-10 px-5 mt-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className='w-full md:w-1/2'>
                    <h3 className="text-2xl lg:text-3xl font-semibold md:text-left text-center">{name}</h3>
                    <p className='text-lg lg:text-xl mt-5 text-primary font-bold'><span className='font-bold text-dark1'>Type:</span> {type}</p>
                    <p className='text-lg lg:text-xl mt-5 text-dark2'><span className='font-bold text-dark1'>Manufacturer:</span> {brand}</p>
                    <p className='text-lg lg:text-xl mt-5 text-dark2'><span className='text-dark1 font-bold'>Price:</span> ${price}</p>
                    <div className='flex items-center gap-2 mt-5'>
                        <img className='w-5' src={star} alt="" />
                        <p className='font-bold text-primary text-base lg:text-lg'>{rating}</p>
                    </div>
                    <button className="bg-primary text-white px-10 max-w-full py-2 rounded font-medium mt-6 active:scale-95 transition-transform text-lg flex items-center gap-2"><BsCart3 className="text-xl" />Add to Cart</button>
                </div>
                <img className="w-full md:w-1/2" src={image} alt="" />
            </div>
            <p className="text-lg font font-medium mt-10 text-dark2 text-justify">{description}</p>
            <button onClick={handleGoBack} className="text-primary flex items-center gap-2 text-lg font-medium mt-5 active:scale-95"><BiArrowBack />Go Back</button>
        </div>
    );
};

export default ProductDetails;