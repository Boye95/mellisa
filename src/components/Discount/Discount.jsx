import './Discount.scss'
import discount1 from '../../assets/discount/1.png'
import discount2 from '../../assets/discount/2.png'

const Discount = () => {
  return (
    <section className='container discount'>
      <div className='discountbox box1'>
        <img src={discount1} alt='discount' className='discounts__image' />
        <div className='discounts__info'>
          <h5 className='discount__header'>GET 20% DISCOUNT OFF COMBO PACK</h5>
          <p className='discount__text'>
            Lorem Ipsum is simply dummy text of the nd typesettley of type and
            scrambled it to make a type specimen book. It has survidus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className='discountbox box2'>
        <div className='discounts__info'>
          <h5 className='discount__header'>GET 20% DISCOUNT OFF COMBO PACK</h5>
          <p className='discount__text'>
            Lorem Ipsum is simply dummy text of the nd typesettley of type and
            scrambled it to make a type specimen book. It has survidus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <button>Buy Now</button>
        </div>
        <img src={discount2} alt='discount' className='discounts__image' />
      </div>
    </section>
  )
}

export default Discount
