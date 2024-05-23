import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <section className="main-section">
      <img src='https://s3-alpha-sig.figma.com/img/840a/d98c/a31a6973220aae2e4bf5f2ccefcd5514?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTWpG2GKFHTJ3OkxzrWzsbrT9MmIKC4CZMeM8brbXE9RLds~h9Bwb4Iqe2v7vaz8XzZejEOWNXWvC~Nj9HO8ENOTFg7pd37s5nmyGkSSt5ieRAv6N5qp4WxPl1~~u~tpmbtOHZrViy9W-yRmthu~CHDJTWaOzAXyEkJMmGYJ6rDmTJAAByrVO-EJeC3drWabALlGF4APxMSgzU11gxWQ~Adx68IWFJPAOxwHf17eA2tOkrj9XkU22J3-GZFI2njYGIhtmw78JDxqzoTmsWsTy4jnbTWpu40x6-DN4uDrhPFED9u5FrHVoUnBwnOwmu0xDeU-IXbfkdHbfjOtZMDh~w__' />
      <div className="overlay">
        <div className='circle-container'>
          <div className='circle-container2'>
          
          <div className='first'>

          </div>

          <div>
          <h1>Automate your </h1>
           <h1>pre-sales</h1>
           
           <div className='font-p'>
           <a className='orange-font'>Recently received $2 million</a><a className='font-w'> in seed funding.</a>
           </div>
           <button className="cta-button">START A CONVERSATION</button>
          </div>

          <div className='mini-circle'>
            <p>Book a 30</p>
            <p>minutes meeting</p>
            <p> with us</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
