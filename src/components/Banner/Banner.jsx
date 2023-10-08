import HotDeal from "./HotDeal";


const Banner = () => {
    return (
        <div className="w-[90%] mx-auto lg:container">


           
            <div className="hero min-h-[400px] lg:min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/s5D7J23/ballroom-corp-resized-1024x458.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">We <span className="text-blue-400">create</span> ,
                            <br /> You <span className="text-yellow-500">celebrate!</span></h1>
                        <p className="mb-5 mt-5 md:mt-10">jahan's Evento is a event management company that gives solutons to your corporate events. Let us help you create your desired events from scratch, according to your choice and preferences</p>
                        <HotDeal></HotDeal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;