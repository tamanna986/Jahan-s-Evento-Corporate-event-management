import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";



const Home = () => {
    const services = useLoaderData();
    console.log(services)
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

        </div>
    );
};

export default Home;