import React from 'react';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  subtitle: string;
  price: string;
  buttonText: string;
}

const Slide: React.FC<PropsType> = ({
  img,
  title,
  subtitle,
  price,
  buttonText,
}) => {
  return (
    <div className='relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl'>
      {/* Full-width banner image */}
      <Image
        src={img}
        alt={title}
        fill
        className='object-cover'
        quality={100}
        priority
      />
      
      {/* Content container aligned to left with padding */}
      <div className='relative z-10 h-full flex items-center'>
        <div className='ml-4 md:ml-8 lg:ml-12 xl:ml-16 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg space-y-3 md:space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>{title}</h2>
          <p className='text-base md:text-lg text-gray-700'>{subtitle}</p>
          <p className='text-xl md:text-2xl font-semibold text-amber-600'>{price}</p>
          <button className='bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition duration-300'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;