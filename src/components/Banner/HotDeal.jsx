import Marquee from "react-fast-marquee";


const HotDeal = () => {
    return (
<div className="flex gap-3"> 
    <p className="px-2 md:px-4 py-2 rounded-full w-32 bg-yellow-500 text-white">Hot Deal</p>
<Marquee pauseOnHover = {true} speed = {50}>
          <p className="mr-12 text-yellow-500 font-bold text-lg">Big deal is going on! 5% Discount on booking services before this month ends!!! </p>
          <p  className="mr-12 text-yellow-500 font-bold text-lg">Big deal is going on! 5% Discount on booking services before this month ends!!! </p>
          <p  className="mr-12 text-yellow-500 font-bold text-lg">Big deal is going on! 5% Discount on booking services before this month ends!!! </p>
         </Marquee>
</div>
    );
};

export default HotDeal;