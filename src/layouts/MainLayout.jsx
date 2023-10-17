import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto font-jost">
            <Header></Header>
            <div className="min-h-[70vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;