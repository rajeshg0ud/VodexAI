import React from 'react';
import './Sales.css';

const SalesAgentPage = () => {
  return (
    <div className="sales-agent-page">
      <header className="header">
        <div className="logo">YOUR SITE</div>
      </header>
      <div className="content">
        <h1>
          Get 2x Revenue With <span>Gen A.I. Powered</span>
        </h1>
        <h1>
          <span>Sales Agent</span> To Your Customers
        </h1>
        <p>
          Connect with 10,000 customers in 1 hour with real-time data insights, revolutionizing business outreach with AI-human synergy.
        </p>
        <div className="cta-buttons">
          <button>VISIT OUR WEBSITE</button>
          <button>BOOK A MEETING</button>
        </div>
        <div className="voicebot-section">
          <h2>Sales</h2>
          <div className='img-container'>
            <img src='https://s3-alpha-sig.figma.com/img/3f6e/fdf9/983d4d6ffb869706db1166ecd78298d0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PfH1M2BhU8R558ZfUlAd97GcHk8uwBFpblCEOHN6f5ujl7VOl6cCVdcUx9B4Mx7gR5isQ9YT8b13ANxmvO6JUS2cewA6RkWjje37Xa6i2oVezLSuc1~97eUxXMzxaZVLsx6lC~ErkEcP4LFRqVSemEYa9IBuihEzHq1ETfTYDNd0flWPLyK5Jr1ooKjY7TyvuFOot-jDUf-9sUMbJ8i9tcDK8XUQ3c~rR1OgYsG5RUmtDYBnKulJ4Vm32jnkQ14NkYrgTcxq7yVq~TtW22H1ajDI-h21G3wn3zeFqYzIRNCAGz~1CULLQyyLAD~tLVN4Tgn2CBXTeitYZLVH~~ZmBQ__' alt="Voicebot" />
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="email" placeholder="Mobile" />
              <button type="submit">Request A Call Back</button>
            </form>
          </div>
          <h2>Agent</h2>
        </div>
      </div>
    </div>
  );
};

export default SalesAgentPage;
