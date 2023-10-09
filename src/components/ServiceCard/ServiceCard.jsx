import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {
    const { name, description, price,image , id } = service;
    return (
        <div>
            
            <div className="card  glass ">
                <figure>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    {/* <h2 className="font-bold text center text-xl text-white" >{name}</h2> */}
                    <div className="flex gap-2">
                    <h2 className="font-bold text center text-xl text-white" >{name}</h2>
                    <div><p className="bg-yellow-400 p-1 rounded-full   ">${price}</p></div>
                    </div>
   
                    {
                        description.length>110? 
                        <p className="text-white">{description.slice(0,110)}.....</p>
                        :
                        <p className="text-white">{description}</p>
                    }
                    {/* <p className="text-yellow-400">Price: $ {price}</p> */}
<Link to = {`/service/${id}`}>
<div className="card-actions ">
                        <button className="btn btn-outline btn-info rounded-md w-full text-white">View details</button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;