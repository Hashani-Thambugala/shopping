"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slideData = [
    {
      id: 0,
      img: '/sale.jpg',
      title: 'Sales Offer',
      subtitle: 'Get the best deals on your favorite products',
      price: '$99.99',
      buttonText: 'Shop Now',
    },
    {
      id: 1,
      img: '/banner4.jpg',
      title: 'New Arrivals',
      subtitle: 'Discover the latest trends in fashion',
      price: '$79.99',
      buttonText: 'Explore Now',
    },
    {
      id: 2,
      img: '/banner7.jpg',
      title: 'Exclusive Deals',
      subtitle: 'Limited time offers just for you',
      price: '$59.99',
      buttonText: 'Grab Now',
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-20">
      <div className='container mx-auto pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((slide) => (
            <div key={slide.id} className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 0}
              />
              <div className="relative h-full flex flex-col items-end justify-center  p-8 text-white">
                <div className="max-w-md">
                  <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-xl mb-4">{slide.subtitle}</p>
                  <p className="text-2xl font-semibold mb-6">{slide.price}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;