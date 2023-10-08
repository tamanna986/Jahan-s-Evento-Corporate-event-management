import HotDeal from "./HotDeal";


const Banner = () => {
    return (
        <div className="w-[90%] mx-auto lg:container">


           
            <div className="hero min-h-[400px] lg:min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/s5D7J23/ballroom-corp-resized-1024x458.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-[300px] md:max-w-[500px] lg:max-w-[700px] mx-auto text-white ">
                        <h1 className="mb-5 text-3xl md:text-5xl  "> Precision in <span className="text-blue-400">Planning,</span> 
                            <br /> Excellence in <span className="text-yellow-500">Execution!</span></h1>
                              
                        <p className="mb-5 mt-5 md:mt-10">Jahan's Evento is a event management company that gives solutons to your corporate events. Let us help you create your desired events from scratch, according to your choice and preferences</p>
                        <HotDeal></HotDeal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;