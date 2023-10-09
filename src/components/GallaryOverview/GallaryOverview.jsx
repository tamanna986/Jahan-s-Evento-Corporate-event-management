import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";




const GallaryOverview = () => {
 
    const galleries = useLoaderData();


    return (
        <div className="mx-auto container mb-20" >
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-yellow-600 mt-10"> Our Memory</h1>
            <hr className="w-56 mb-10 mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >

                {
                    galleries.map(gallery => <Gallery
                        key={gallery.id}
                        gallery={gallery}
                    ></Gallery>)
                }
            </div>
        </div>
    );
};

export default GallaryOverview;