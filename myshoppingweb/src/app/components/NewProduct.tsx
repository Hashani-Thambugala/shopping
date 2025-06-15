import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router' 

const NewproductData = [
  {
    id: 1,
    img: '/product1.jpg',
    title: 'Luxury Bag',
    subtitle: 'Pink Luxury Bag',
    rating: 4.5,
    price: '$29.99',
    buttonText: 'Add to Cart',
  },
  {
    id: 2,
    img: '/product2.jpg',
    title: 'Sunglass',
    subtitle: 'Summer fit',
    rating: 4.0,
    price: '$39.99',
    buttonText: 'Add to Cart',
  },
  {
    id: 3,
    img: '/product3.jpg',
    title: 'Shoes',
    subtitle: 'Unisex Sneakers',
    rating: 4.8,
    price: '$49.99',
    buttonText: 'Add to Cart',
  },
  {
    id: 4,
    img: '/product4.jpg',
    title: 'Wrist Watch',
    subtitle: 'Manual watch',
    rating: 4.2,
    price: '$59.99',
    buttonText: 'Add to Cart',
  },
  {
    id: 5,
    img: '/product5.jpg',
    title: 'Necklace',
    subtitle: 'Crystal Necklace',
    rating: 4.6,
    price: '$69.99',
    buttonText: 'Add to Cart',
  },
  {
    id: 6,
    img: '/product6.jpg',
    title: 'Hawaiian Hat',
    subtitle: 'Beach Style',
    rating: 4.7,
    price: '$79.99',
    buttonText: 'Add to Cart',
  },
];

const NewProduct = () => {
  const router = useRouter() // Initialize the router

  const handleAddToCart = (productId, e) => {
    e.preventDefault() // Prevent default button behavior
    e.stopPropagation() // Prevent event bubbling
    // Here you would typically add to cart logic
    console.log(`Product ${productId} added to cart`)
  }

  const navigateToProduct = (productId) => {
    router.push(`/products/${productId}`) // Navigate to product detail page
  }

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8'> 
      <div className='container mx-auto pt-16'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {NewproductData.map((product) => (
            <div 
              key={product.id} 
              className='group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100 cursor-pointer'
              onClick={() => navigateToProduct(product.id)}
            >
              {/* Product Image */}
              <div className='relative aspect-square'>
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-200'
                  sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw'
                />
                {/* Rating Badge */}
                <div className='absolute top-1 right-1 bg-white/90 backdrop-blur-sm rounded-full px-1.5 py-0.5 text-xs font-semibold flex items-center shadow-xs'>
                  ⭐ {product.rating}
                </div>
              </div>
              
              {/* Product Info */}
              <div className='p-3'>
                <div className='mb-1'>
                  <h3 className='text-sm font-semibold text-gray-800 line-clamp-1'>{product.title}</h3>
                  <p className='text-xs text-gray-500 line-clamp-1'>{product.subtitle}</p>
                </div>
                
                <div className='flex justify-between items-center'>
                  <span className='text-sm font-bold text-pink-500'>{product.price}</span>
                  <button 
                    onClick={(e) => handleAddToCart(product.id, e)}
                    className='text-xs bg-pink-400 hover:bg-pink-500 text-white font-medium py-1.5 px-3 rounded-full transition-colors duration-200'
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProduct