import './Products.scss'
import product1 from '../../assets/products/1.png'
import product2 from '../../assets/products/2.png'
import product3 from '../../assets/products/3.png'
import product4 from '../../assets/products/4.png'
import product5 from '../../assets/products/5.png'
import product6 from '../../assets/products/6.png'
import MobileProducts from './MobileProducts'
import RegularProducts from './RegularProducts'

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
      <RegularProducts data1={data1} data2={data2} />
      <MobileProducts data1={data1} data2={data2} />
    </section>
  )
}

export default Products