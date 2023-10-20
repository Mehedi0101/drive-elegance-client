import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ScrollToTop from "../utils/scrollToTop";

const MainLayout = () => {

    const {dark} = useContext(AuthContext);

    return (
        <div className={`max-w-screen-2xl mx-auto font-jost ${dark ? 'bg-[#202124]' : 'bg-white'}`}>
            <ScrollToTop />
            <Header></Header>
            <div className="min-h-[70vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;