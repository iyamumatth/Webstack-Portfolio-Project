import React from "react";

const PropertyCard = (props) => {
  return (
    <div className="bg-zinc-800 rounded-[50px] rounded-tr-none  hover:border-2 border-zinc-400 duration-300">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-[50px] rounded-tr-none h-60 overflow-hidden ">
        <img className="w-full object-cover" src={props.img} alt=" property-img" />
      </div>
      <div className="px-6 pb-4 ">
        <p className="text-right font-semibold">{props.price}</p>
        <div className="flex justify-between pt-2">
          <p>{props.purpose}</p>
          <p>
            {props.state}
          </p>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;