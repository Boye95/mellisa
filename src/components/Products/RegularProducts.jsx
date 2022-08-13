import React from 'react'

export default function RegularProducts({data1, data2}) {
  return (
    <div>
        <div className='products__box'>
        {data1.map(({ prodImg, name, price }, index) => {
          return (
            <div className='products__product' key={index}>
              <div className='products__image'>
                <img src={prodImg} alt='product' />
              </div>
              <div className='products__info'>
                <h5 className='products__name'>{name}</h5>
                <p className='products__price'>{price}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='products__box'>
        {data2.map(({ prodImg, name, price }, index) => {
          return (
            <div className='products__product' key={index}>
              <div className='products__image'>
                <img src={prodImg} alt='product' />
              </div>
              <div className='products__info'>
                <h5 className='products__name'>{name}</h5>
                <p className='products__price'>{price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
