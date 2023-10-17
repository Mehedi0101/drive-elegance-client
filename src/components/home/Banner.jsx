const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/banner-img.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Explore, Learn, and Drive</h1>
                    <p className="mb-5 md:text-base text-sm">Embark on a journey where your love for cars meets endless discovery. Explore the world of automobiles, learn the intricacies of mechanics, and get behind the wheel to experience the thrill of driving.</p>
                    <button className="bg-[#cc4316] px-5 py-2 rounded active:scale-95 transition-transform font-medium">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;