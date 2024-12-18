import React from 'react';
import Button from './Button';
import { FaStar } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { PiBathtubFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  rating?: number;
  details?: {
    beds: number;
    baths: number;
    capacity: string;
    pricePerNight: string;
  };
}

const Card: React.FC<CardProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageUrl = "https://via.placeholder.com/379x255",
  rating = 0,
  details = {
    beds: 0,
    baths: 0,
    capacity: "N/A",
    pricePerNight: "$0",
  },
}) => {
  return (
    <div className="border rounded shadow-lg p-4">
      <img 
        src={imageUrl} 
        alt={`Image of ${title}`} 
        className="w-[379px] h-[255px] object-cover rounded-[16.5px]" 
      />
      <Button />

      <div className="flex justify-between mt-4">
        <div>
          <h2 className="text-[#161117] text-[22px] font-semibold">{title}</h2>
          <p className="text-[#929292] text-[17px]">{description}</p>
        </div>
        {rating > 0 && (
          <div className="flex gap-1 mt-2">
            <FaStar className="text-yellow-500 w-[18.82px] h-[18.85px]" />
            <p className="text-[17px]">{rating}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-[17.36px]">
        <div className="flex gap-4 text-[#929292]">
          <div className="flex items-center gap-2">
            <IoIosBed />
            <p>{details.beds}</p>
          </div>
          <div className="flex items-center gap-2">
            <PiBathtubFill />
            <p>{details.baths}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoPeopleSharp />
            <p>{details.capacity}</p>
          </div>
        </div>
        <div>
          <p className="text-[#161117] font-bold">{details.pricePerNight}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
