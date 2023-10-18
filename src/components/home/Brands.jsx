import { useLoaderData } from "react-router-dom";

const Brands = () => {
    const brands = useLoaderData();
    console.log(brands);

    return (
        <div className="md:px-10 px-5 mt-28">
            <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-10 select-none">Top Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-between">
                {
                    brands.map(brand =>
                        <div className="shadow-slate-500 shadow-md border border-slate-300 px-10 py-5 rounded-lg hover:bg-[#1b1b1bd2] hover:text-white hover:border-transparent active:scale-95 cursor-pointer transition-transform" key={brand.id}>
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