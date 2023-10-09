import { useLoaderData } from "react-router-dom";

const Testimonials = () => {
    const testimonials = useLoaderData();
   
    return (
        <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-center ">Client Appriciation</h1>
        <hr className="w-56 mb-10 mx-auto mt-1"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[270px] md:w-[600px] lg:w-[900px] mx-auto">
        {
            testimonials.map(testimonial =>
             <div className="w-64 border-2 rounded-2xl  shadow-xl flex flex-col items-center py-3 px-5 space-y-3"
              key ={testimonial.id}>
                <h2 className="text-xl font-semibold text-yellow-700">{testimonial.testimonials[0].client_name}</h2>
                <p className="text-center ">{testimonial.testimonials[0].quote}</p>
            </div>)
        }
        </div>
        </div>
    );
};

export default Testimonials;