import { useLoaderData } from "react-router-dom";
import SingleFaq from "./SingleFaq/SingleFaq";


const Faq = () => {
    const faqs = useLoaderData();
    
    return (
        <div className="container mx-auto mb-20">
       <h1 className="text-2xl md:text-3xl font-semibold text-center text-cyan-700 ">FAQ</h1>
        <hr className="w-56 mb-10 mx-auto"/>
        <div className="ml-10 md:ml-24 lg:ml-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                faqs.map(faq => <SingleFaq
                key = {faq.id}
                faq ={faq}
                
                ></SingleFaq>)
            }
        </div>


            <div>

            </div>
        </div>
        </div>
    );
};

export default Faq;