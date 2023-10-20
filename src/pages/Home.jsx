import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import OurTeam from "../components/home/OurTeam";
import Services from "../components/home/Services";

const Home = () => {
    document.title = 'DriveElegance';
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;