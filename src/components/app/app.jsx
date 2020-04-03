import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';

// foo

const Page = {
  MAIN: `main`,
  OFFER: `offer`,
};


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: Page.MAIN,
      selectedOffer: null,
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      currentPage: Page.OFFER,
      selectedOffer: offer,
    });
  }

  _renderApp() {
    const {offers} = this.props;
    const {currentPage, selectedOffer} = this.state;

    switch (currentPage) {
      case Page.MAIN:
        return (
          <Main
            offers={offers}
            onOfferTitleClick={this._handleOfferTitleClick}
          />
        );
      case Page.OFFER:
        return (
          <Offer
            offer={selectedOffer}
          />
        );
    }

    return null;
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-main">
            <Main
              offers={offers}
              onOfferTitleClick={this._handleOfferTitleClick}
            />
          </Route>
          <Route exact path="/dev-offer">
            <Offer
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  offers: PropTypes.array.isRequired,
};


export default App;
