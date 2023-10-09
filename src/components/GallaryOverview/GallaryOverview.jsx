import { useLoaderData, useParams } from "react-router-dom";
import Gallery from "../Gallery/Gallery";


const GallaryOverview = () => {
    const galleries = useLoaderData();

    
    return (
        <div>
           <h1 className="text-2xl md:text-3xl font-semibold text-center text-white"> Our Memory</h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                galleries.map(gallery =><Gallery
                key ={gallery.id}
                gallery = {gallery}
                ></Gallery>)
            }
           </div>
        </div>
    );
};

export default GallaryOverview;