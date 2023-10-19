import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
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
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/0K5yvxt/banner-img.jpg")` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Explore, Learn, and Drive</h1>
                                <p className="mb-5 md:text-base text-sm">Embark on a journey where your love for cars meets endless discovery. Explore the world of automobiles, learn the intricacies of mechanics, and get behind the wheel to experience the thrill of driving.</p>
                                <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Read More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/bmw.jpg")` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">BMW Series 3</h1>
                                <p className="mb-5 md:text-base text-sm">Embark on a journey where your love for cars meets endless discovery. Explore the world of automobiles, learn the intricacies of mechanics, and get behind the wheel to experience the thrill of driving.</p>
                                <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Show details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;