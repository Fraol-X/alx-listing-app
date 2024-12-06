import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded shadow-lg p-4">
      <img src={imageUrl} alt={title} className="w-[379px] h-[255px] object-cover rounded-[16.5px]" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
};

export default Card;
