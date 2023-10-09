import {FcApproval } from "react-icons/fc";
import { useLoaderData, useParams } from "react-router-dom";


const Services = () => {
  const details = useLoaderData();
  console.log(details)
  const { id } = useParams();
  const idInt = parseInt(id);

  const serviceDetail = details.find(detail => detail.id === idInt);
  console.log(serviceDetail)


  return (
    <div>

   <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 container mx-auto my-10">
   <div className="card  col-span-2 bg-base-100 shadow-xl ">
          <h2 className="text-xl md:text-3xl text-cyan-800 font-bold text-center py-5">
            {serviceDetail.name}

          </h2>
          <figure><img src={serviceDetail.image} /></figure>
          <div className="card-body">

            <p>{serviceDetail.description}</p>
            <div className="card-actions justify-start mt-10">

              <div className="badge ">Related Service:</div>
              <div className="badge badge-outline text-yellow-500">{serviceDetail.related_services.name}</div>
            </div>
            <div className="card-actions justify-end ">
              <button className="btn btn-info text-white ">price: ${serviceDetail.price}</button>
            </div>
          </div>
        </div>
    <div className=" mt-0 md:mt-20 ml-6 md:ml-20 ">
      
      <h1 className="text-2xl font-bold  text-center">Key Features</h1>
      <hr />
      <ul >
      {serviceDetail.key_features.map((feature, index) => (
              <li className="ml-10 mt-4 flex items-center gap-1"
               key={index}> <FcApproval></FcApproval> {feature}</li>
            ))}
      </ul>
    
  
    </div>
   </div>
  </div>
    
  );
};

export default Services;