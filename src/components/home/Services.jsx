import { useContext } from "react";
import { BsTools } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiGasCanFill } from "react-icons/pi";
import { AuthContext } from "../../providers/AuthProvider";

const Services = () => {
    const {dark} = useContext(AuthContext);
    return (
        <div className="md:px-10 px-5 mt-28 select-none">
            <h2 className={`md:text-4xl text-3xl font-bold text-center ${dark ? 'text-white' : 'text-black'} mb-10`}>Additional Services</h2>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between ${dark ? 'text-white' : 'text-dark1'}`}>
                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <BsTools className="text-6xl text-primary mx-auto hover:scale-105 transition-transform"/>
                    <h3 className="text-center text-3xl mt-5 font-semibold">Service and Maintenance</h3>
                    <p className={`text-center mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Our dedicated team of automotive experts is committed to ensuring your vehicle&apos;s peak performance. From routine maintenance to complex diagnostics and repairs, we offer a comprehensive range of services. Trust us to keep your car running smoothly and reliably, so you can enjoy worry-free journeys on the road.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <MdMiscellaneousServices className="text-7xl text-primary mx-auto hover:scale-105 transition-transform"/>
                    <h3 className="text-center text-3xl mt-5 font-semibold">Parts and Accessories</h3>
                    <p className={`text-center mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Explore a wide selection of high-quality automotive parts and accessories to repair, or customize your vehicle. Whether you&apos;re a DIY enthusiast or need professional installation, our catalog includes genuine components. We provide everything you need to personalize your ride with confidence.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <PiGasCanFill className="text-6xl text-primary mx-auto hover:scale-105 transition-transform"/>
                    <h3 className="text-center text-3xl mt-5 font-semibold">Energy and Fuel Services</h3>
                    <p className={`text-center mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>We&apos;re at the forefront of eco-friendly energy and fuel services for modern vehicles. Our offerings include electric vehicle charging stations and access to alternative fuels like natural gas and hydrogen. Join us in reducing your environmental footprint and embrace a cleaner, sustainable future for your transportation needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;