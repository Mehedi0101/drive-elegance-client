import { useContext } from "react";
import teammate1 from "../../assets/teammate-1.jpg";
import teammate2 from "../../assets/teammate-2.jpg";
import teammate3 from "../../assets/teammate-3.jpg";
import teammate4 from "../../assets/teammate-4.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const OurTeam = () => {

    const {dark} = useContext(AuthContext);

    return (
        <div className="md:px-10 px-5 mt-28">
            <h2 className={`md:text-4xl text-3xl font-bold text-center ${dark ? 'text-white' : 'text-black'} mb-10 select-none`}>Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 justify-between">
                <div className="py-5 rounded-lg">
                    <img className="w-28 rounded-full mx-auto" src={teammate1} alt="" />
                    <h3 className={`text-center text-2xl mt-5 font-semibold ${dark ? 'text-[#fff]' : 'text-dark1' }`}>Lucas Turner</h3>
                    <h4 className="text-primary text-center text-sm mt-2 font-medium">General Manager</h4>
                    <p className={`text-justify mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Lucas Turner, a dynamic leader with a passion for the automotive industry, serves as the General Manager of our esteemed automotive company. With years of experience, Lucas is dedicated to driving excellence in every facet of our operations.</p>
                </div>

                <div className="py-5 rounded-lg">
                    <img className="w-28 rounded-full mx-auto" src={teammate2} alt="" />
                    <h3 className={`text-center text-2xl mt-5 font-semibold ${dark ? 'text-[#fff]' : 'text-dark1' }`}>Andre Mitchell</h3>
                    <h4 className="text-primary text-center text-sm mt-2 font-medium">Research Engineer</h4>
                    <p className={`text-justify mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Andre Mitchell is our visionary Research Engineer at the heart of automotive innovation. With a keen eye for breakthroughs, he propels our company forward with cutting-edge technologies and vehicle advancements, shaping the future of mobility.</p>
                </div>

                <div className="py-5 rounded-lg">
                    <img className="w-28 rounded-full mx-auto" src={teammate3} alt="" />
                    <h3 className={`text-center text-2xl mt-5 font-semibold ${dark ? 'text-[#fff]' : 'text-dark1' }`}>Lily Sullivan</h3>
                    <h4 className="text-primary text-center text-sm mt-2 font-medium">Marketing Manager</h4>
                    <p className={`text-justify mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Lily Sullivan, our Marketing Manager, is the creative force steering our brand&apos;s success in the automotive world. With a talent for strategy and storytelling, she crafts compelling narratives that drive our company&apos;s vision and connect with our customers.</p>
                </div>

                <div className="py-5 rounded-lg">
                    <img className="w-28 rounded-full mx-auto" src={teammate4} alt="" />
                    <h3 className={`text-center text-2xl mt-5 font-semibold ${dark ? 'text-[#fff]' : 'text-dark1' }`}>Marcus Walker</h3>
                    <h4 className="text-primary text-center text-sm mt-2 font-medium">Service Advisor</h4>
                    <p className={`text-justify mt-3 ${dark ? 'text-[#ffffffc0]' : 'text-dark2'}`}>Marcus Walker, our Service Advisor, is the friendly face that ensures your vehicle gets top-notch care. With a passion for automobiles and a commitment to customer satisfaction, Marcus helps you navigate service needs with ease and confidence.</p>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;