import './Deal.css'

const Deal = () => {
  return (
    <section id="deal">
        <div className="deal-container container">
          <div className="deal-left">
            <img src='/banner.png' alt='' />
          </div>
          <div className="deal-right">
            <h4>#Winter Collection Sale!</h4>
            <h1>Flat 60% OFF</h1>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
    </section>
  )
}

export default Deal