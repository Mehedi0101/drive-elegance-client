import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Slider = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setSliderData(data.slice(0,3)));
    },[])

    console.log(sliderData);

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${sliderData?.[0]?.image})` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">{sliderData?.[0]?.name}</h1>
                                <p className="mb-5 md:text-base text-sm">{sliderData?.[0]?.description.slice(0,200)}...</p>
                                <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Show Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${sliderData?.[1]?.image})` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">{sliderData?.[1]?.name}</h1>
                                <p className="mb-5 md:text-base text-sm">{sliderData?.[1]?.description.slice(0,200)}...</p>
                                <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Show Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${sliderData?.[2]?.image})` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">{sliderData?.[2]?.name}</h1>
                                <p className="mb-5 md:text-base text-sm">{sliderData?.[2]?.description.slice(0,200)}...</p>
                                <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Show Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;