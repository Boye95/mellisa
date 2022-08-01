import './Best.scss'

const Best = () => {
  return (
    <section className='container best'>
      <div className='best__header'>
        <h1>BEST SELLERS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy tex
          Ipsum.
        </p>
      </div>
      <div className='best__products'>
        <div className='best__product'>
            <img src='' alt='' />
            <div className='name__tag'>
                <h2>ORIMORE</h2>
                <p>$40</p>
            </div>
        </div>
        <div className='best__product'>
            <img src='' alt='' />
            <div className='name__tag'>
                <h2>ORIMORE</h2>
                <p>$40</p>
            </div>
        </div>
        <div className='best__product'>
            <img src='' alt='' />
            <div className='name__tag'>
                <h2>ORIMORE</h2>
                <p>$40</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Best
