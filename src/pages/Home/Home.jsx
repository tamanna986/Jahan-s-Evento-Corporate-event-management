import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    const [gallery, setGallery] = useState([])
    const services = useLoaderData();
    console.log(services)



    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))

    }, [])
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <div className="bg-[url('https://i.ibb.co/ScTLgzN/Corporate-Events.jpg')] bg-cover bg-no-repeat mt-20 px-6">
                <div className="w-56 mx-auto ">
                    <h1 className=" text-2xl md:text-3xl font-semibold text-center pt-10 text-white ">Our Services</h1>
                    <hr className="w-36  pb-10 text-yellow-300  " />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <div>
                <div className="my-20  ">


                    <h1 className="text-2xl md:text-3xl font-semibold text-center ">Our Achieved memory</h1>
                    <hr className="w-56 mb-10 mx-auto" />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-[400px] lg:w-[700px] mx-auto">

                        {
                            gallery.map(image =>
                                <div key={image.id}>
                                    <img className="w-56 h-36"  src={image.galleryImage} />
                                </div>)
                        }
                    </div>
                    <div className="w-32 mx-auto my-10"><p className="p-2 bg-blue-400 text-white w-32 text-center rounded-full"><Link to='/gallery'>See More</Link></p></div>
                </div>
            </div>

            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;