import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";
import sellImg from "../Pages/assets/sell.jpg";

class Sell extends React.Component {
  // Invoked after the component rerendered. Ie after render function executed and after updation of state or props.
  componentDidUpdate() {
    console.log("Componet Did update");
  }

  // invoked before the component rerendered. IE before render function executed and after updation of state or props.
  componentWillUpdate() {
    console.log("Component Will upate");
  }

  // To avoid rerendering based on conditions. IF return false the component will not rerender.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("state", nextState);
    console.log("props", nextProps);
    return true;
  }

  // Invoked once before the render function is executed for the first time.
  componentWillMount() {
    console.log("Component will Mount");
  }

  // Invoked once after the render function is executed for the first time.
  componentDidMount() {
    console.log("Component Did Mount");
  }

  // Invoked before the component is finally unmounted from the DOM.
  componentWillUnmount() {
    console.log("Componet will un mount");
  }

  render() {
    return (
      <Fragment>
        <Banner title="Sell" class="bg-1"></Banner>
        <section className="privacy-policy page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Sell</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <img className="img-fluid center-block" src={sellImg} alt="" />
              </div>
              <div className="col-md-5">
                <p>
                  You looking for the right buyer to sell your car, Getting a
                  low price? Leave it to us, ANIL LUXURY CARS will buy your car for the
                  best price and we make sure your car gets into right buyer. We
                  assure you will get your name transfer copy within 90 days
                  from the date of sale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Sell;
