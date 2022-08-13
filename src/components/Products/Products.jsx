import './Products.scss'
import product1 from '../../assets/products/1.png'
import product2 from '../../assets/products/2.png'
import product3 from '../../assets/products/3.png'
import product4 from '../../assets/products/4.png'
import product5 from '../../assets/products/5.png'
import product6 from '../../assets/products/6.png'
import MobileProducts from './MobileProducts'

const data1 = [
  {
    prodImg: product1,
    name: 'CLAYMORE',
    price: '$40'
  },
  {
    prodImg: product2,
    name: 'DAYMORE',
    price: '$80'
  },
  {
    prodImg: product3,
    name: 'MAYMORE',
    price: '$50'
  }
]

const data2 = [
  {
    prodImg: product4,
    name: 'SAYMORE',
    price: '$40'
  },
  {
    prodImg: product5,
    name: 'MIAMORE',
    price: '$80'
  },
  {
    prodImg: product6,
    name: 'ARMMORE',
    price: '$50'
  }
]

const Products = () => {
  return (
    <section className='container products'>
      <h3 className='products__header'>OUR PRODUCTS</h3>
      <MobileProducts data1={data1} data2={data2} />
      {/* <div className='products__box'>
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
      </div> */}
    </section>
  )
}

export default Products
