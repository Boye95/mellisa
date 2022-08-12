import './Best.scss'
import Best1 from '../../assets/bestsellers/1.png'
import Best2 from '../../assets/bestsellers/2.png'
import Best3 from '../../assets/bestsellers/3.png'

const Best = () => {
  return (
    <section className='container best'>
      <div className='best__header'>
        <h1>BEST SELLERS</h1>
        <p>
          <span>Lorem Ipsum is simply dummy text of the printing </span>
          <span>and typesetting industry. Lorem Ipsum has been </span>
          <span>the industry's standard dummy tex Ipsum.</span>
        </p>
      </div>
      <div className='best__content'>
        <div className='best__products'>
          <div className='best__product'>
            <img src={Best1} alt='' />
            <div className='name__tag'>
              <h2>ORIMORE</h2>
              <p>$40</p>
            </div>
          </div>
          <div className='best__product'>
            <img src={Best2} alt='' />
            <div className='name__tag'>
              <h2>ORIMORE</h2>
              <p>$40</p>
            </div>
          </div>
          <div className='best__product'>
            <img src={Best3} alt='' />
            <div className='name__tag'>
              <h2>ORIMORE</h2>
              <p>$40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Best
