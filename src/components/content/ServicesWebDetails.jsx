import "./servicesWebDetails.scss";

export default function ServicesWebDetails() {
  return (
    <div className="plans">
      <div className="plan-box">
        <div className="plan-options">
          <p className="plan-name">Personlig</p>
          <div className="plan-price">
            Fra &nbsp;<strong>6 999</strong>,-
          </div>
          {/* <ul className="plan-details">
            <li>1 sub-domain</li>
            <li>
              <strong>10</strong> email addresses
            </li>
            <li>
              <strong>Unlimited</strong> Bandwidth
            </li>
            <li>
              <strong>20GB</strong> Storage
            </li>
            <li>Support Ads</li>
            <li>Shared Hosting</li>
            <li>
              <strong>24/7</strong> Customer Support
            </li>
          </ul> */}
        </div>
      </div>

      <div className="plan-box">
        <div className="plan-options">
          <p className="plan-name">Profesjonell</p>
          <div className="plan-price">
            Fra &nbsp;<strong>11 999</strong> ,-
          </div>
          {/* <ul className="plan-details">
            <li>
              <strong>FREE</strong> custom domain
            </li>
            <li>
              <strong>Unlimited</strong> email addresses
            </li>
            <li>
              <strong>Unlimited</strong> Bandwidth
            </li>
            <li>
              <strong>100GB</strong> Storage
            </li>
            <li>
              <strong>No Support Ads</strong>
            </li>
            <li>
              <strong>24/7</strong> Customer Support
            </li>
          </ul> */}

          <a className="button" href="#/">
            Choose
          </a>
        </div>
      </div>

      <div className="plan-box">
        <div className="plan-options">
          <p className="plan-name">Nettbutikk</p>
          <div className="plan-price">
            Fra &nbsp;<strong>15 999</strong>,-
          </div>
          {/* <ul className="plan-details">
            <li>
              <strong>FREE</strong> custom domain
            </li>
            <li>
              <strong>Unlimited</strong> email addresses
            </li>
            <li>
              <strong>Unlimited</strong> Bandwidth
            </li>
            <li>
              <strong>200GB</strong> Storage
            </li>
            <li>
              <strong>No Support Ads</strong>
            </li>
            <li>
              <strong>Quick Install</strong> Apps (WordPress, etc)
            </li>
            <li>
              <strong>VPS Hosting</strong>
            </li>
            <li>
              <strong>24/7</strong> Customer Support
            </li>
          </ul> */}

          <a className="button" href="#/">
            Choose
          </a>
        </div>
      </div>
    </div>
  );
}
