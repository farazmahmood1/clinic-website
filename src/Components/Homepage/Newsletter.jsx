import React from 'react'

const Newsletter = () => {
  return (
    <div>
            <section className="bg-primary">
      <div className="bg-holder bg-size" style={{backgroundImage: 'url(assets/img/gallery/cta-bg.png)', backgroundPosition: 'center right', marginTop: '-8.125rem', backgroundSize: 'contain'}}>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fw-bold text-light">Get an update every week</h2>
            <p className="text-soft-primary">Livedoc was created in order to improve the patient experience. <br />Providing world-class tests, and a wide range of other services.</p>
          </div>
          <div className="col-lg-6">
            <h5 className="mb-3 text-soft-primary">SUBSCRIBE TO NEWSLETTER </h5>
            <form className="row gx-2 gy-2 align-items-center">
              <div className="col">
                <div className="input-group-icon">
                  <label className="visually-hidden" htmlFor="inputEmailCta">Address</label>
                  <input className="form-control form-livedoc-control form-cta-control text-soft-primary" id="inputEmailCta" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="d-grid gap-3 col-sm-auto">
                <button className="btn btn-lg btn-light rounded-3 px-5 py-3" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Newsletter