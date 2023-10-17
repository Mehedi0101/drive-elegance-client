import { NavLink } from "react-router-dom";
import logo from "../../assets/DriveElegance-logos_white.png";
import "./styles/header.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const links = <>
        <NavLink onClick={() => setShowMenu(false)} to='/'>Home</NavLink>
        <NavLink onClick={() => setShowMenu(false)} to='/add-product'>Add Product</NavLink>
        <NavLink onClick={() => setShowMenu(false)} to='/my-cart'>My Cart</NavLink>
    </>;

    return (
        <>
            {/* large device */}
            <div className="hidden lg:flex items-center justify-between px-10 bg-[#3d3d3d] text-white">
                <div>
                    <img className="w-80 h-20 object-cover" src={logo} alt="" />
                </div>
                <div className="flex items-center gap-28 font-medium">
                    <div className="flex gap-10 text-lg">
                        {
                            links
                        }
                    </div>
                    <div>
                        <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform">Login</button>
                    </div>
                </div>
            </div>

            {/* medium device */}
            <div className="hidden md:flex items-center justify-between lg:hidden bg-[#3d3d3d] text-white px-10">
                <div className="flex items-center">
                    <FiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl" />
                    <img className="w-60 h-14 object-cover" src={logo} alt="" />
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-14 bg-[#3d3d3dd3] px-8 py-5 rounded space-y-3`}>
                    {
                        links
                    }
                </div>
                <div>
                    <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform">Login</button>
                </div>
            </div>

            {/* small device */}
            <div className="flex md:hidden items-center justify-between lg:hidden bg-[#3d3d3d] text-white px-5">
                <div className="flex items-center">
                    <FiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl" />
                    <img className="w-60 h-16 object-cover" src={logo} alt="" />
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-16 bg-[#3d3d3dd3] px-8 py-5 rounded space-y-3`}>
                    {
                        links
                    }
                    <button onClick={() => setShowMenu(!showMenu)} className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform">Login</button>
                </div>
            </div>
        </>
    );
};

export default Header;