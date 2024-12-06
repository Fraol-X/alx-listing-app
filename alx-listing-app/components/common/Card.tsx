import React from 'react';
import Button from './Button';
import { FaStar } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { PiBathtubFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  rating?: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, rating}) => {
  return (
    <div className="border rounded shadow-lg p-4">
      <img src={imageUrl} alt={title} className="w-[379px] h-[255px] object-cover rounded-[16.5px]" />
      <Button />

      <div className="flex justify-between ">

        <div>
          <h2 className="text-[#161117] text-[22px] font-semibold ">{title}</h2>
          <p className="text-[#929292] text-[17px]">{description}</p>
        </div>

        <div className="flex gap-1 mt-2">
          <FaStar className="text-yellow-500 w-[18.82px] h-[18.85px]" />
          <p className="text-[17px]">{rating}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <IoIosBed />
          <PiBathtubFill />
          <IoPeopleSharp />
        </div>
        <div>
          <p>$2,450/n</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
