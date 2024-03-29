import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Brands = () => {
    const brands = useLoaderData();
    const navigate = useNavigate();
    const {dark} = useContext(AuthContext);

    const handleBrand = name => {
        navigate(`/brands/${name}`);
    }

    return (
        <div className="md:px-10 px-5 mt-28">
            <h2 className={`md:text-4xl text-3xl font-bold text-center ${dark ? 'text-white' : 'text-black'} mb-10 select-none`}>Top Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-between">
                {
                    brands.map(brand =>
                        <div onClick={() => handleBrand(brand.name)} className={`${dark ? 'shadow-[#1b1c1f] border-[#2b2d30] hover:bg-[#42424259] text-white' : 'shadow-slate-500 border-slate-300 hover:bg-[#1b1b1b91] text-dark1'} shadow-md border px-10 py-5 rounded-lg hover:text-white hover:border-transparent active:scale-95 cursor-pointer transition-transform`} key={brand.id}>
                            <div className="h-40 flex justify-center items-center">
                                <img className="max-h-full mx-auto select-none" src={brand.image} alt="" />
                            </div>
                            <h3 className="text-center text-3xl mt-5 font-semibold select-none">{brand.name}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Brands;