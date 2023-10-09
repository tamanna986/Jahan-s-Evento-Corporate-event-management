import { CiLocationOn } from "react-icons/ci";


const Gallery = ({ gallery }) => {
  return (
    <div className="mx-2">
      <div className="card  md:card-side bg-base-100 shadow-xl " data-aos="flip-left">
        <figure><img className="w-[600px] md:w-56 h-[300px] md:h-[300px]" src={gallery.galleryImage} /></figure>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title">{gallery.eventName}</h2>
          <p>{gallery.details}.</p>
          <div className="badge badge-outline text-yellow-500 flex gap-3"><CiLocationOn></CiLocationOn>{gallery.location}</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;