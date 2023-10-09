

const Gallery = ({gallery}) => {
    return (
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-64 h-[180px]" src={gallery.galleryImage}/></figure>
  <div className="card-body">
    <h2 className="card-title">{gallery.eventName}</h2>
    <p>{gallery.details}</p>
 
  </div>
</div>
    );
};

export default Gallery;