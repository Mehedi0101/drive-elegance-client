import Proptypes from "prop-types";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Product = ({ product,index }) => {
    const { _id, name, image, brand, type, price, rating } = product;
    const navigate = useNavigate();
    const {dark} = useContext(AuthContext);

    const handleDetails = (id) => {
        navigate(`/product-details/${id}`);
    }

    const handleUpdate = (id) => {
        navigate(`/product-update/${id}`);
    }

    return (
        <div>
            <div className={`flex items-center flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse' } gap-x-10 gap-y-7`}>
                <div className='w-full md:w-1/2'>
                    <img src={image} alt="" />
                </div>
                <div className='w-full md:w-1/2 md:text-left text-center'>
                    <h3 className={`text-2xl lg:text-3xl font-semibold ${dark ? 'text-white' : 'text-dark1'}`}>{name}</h3>
                    <p className='text-lg lg:text-xl mt-5 text-primary font-bold'>{type}</p>
                    <p className={`text-lg lg:text-xl mt-5 ${dark ? 'text-[#ffffffbe]' : 'text-dark2'}`}><span className={`${dark ? 'text-white' : 'text-dark1'} font-bold`}>Manufacturer:</span> {brand}</p>
                    <p className={`text-lg lg:text-xl mt-2 ${dark ? 'text-[#ffffffbe]' : 'text-dark2'}`}><span className={`${dark ? 'text-white' : 'text-dark1'} font-bold`}>Price:</span> ${price}</p>
                    <div className='flex items-center gap-2 mt-5 md:justify-normal justify-center'>
                        <img className='w-5' src={star} alt="" />
                        <p className='font-bold text-primary text-base lg:text-lg'>{rating}</p>
                    </div>
                    <div className='flex gap-5 text-lg lg:text-xl mt-5'>
                        <button onClick={() => handleDetails(_id)} className='px-5 py-2 border-2 border-primary bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Details</button>
                        <button onClick={() => handleUpdate(_id)} className='px-5 py-2 border-2 border-primary bg-transparent rounded text-primary active:scale-95 transition-transform w-full font-medium mb-3'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: Proptypes.object.isRequired,
    index: Proptypes.number.isRequired
}

export default Product;