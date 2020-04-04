import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PageMain from '../page-main/page-main.jsx';
import PageOffer from '../page-offer/page-offer.jsx';


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
    const {offers, reviews} = this.props;
    const {currentPage, selectedOffer} = this.state;

    switch (currentPage) {
      case Page.MAIN:
        return (
          <PageMain
            offers={offers}
            onOfferTitleClick={this._handleOfferTitleClick}
          />
        );
      case Page.OFFER:
        return (
          <PageOffer
            offer={selectedOffer}
            reviews={reviews}
          />
        );
    }

    return null;
  }

  render() {
    const {offers, reviews} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-main">
            <PageMain
              offers={offers}
              onOfferTitleClick={this._handleOfferTitleClick}
            />
          </Route>
          <Route exact path="/dev-offer">
            <PageOffer
              offer={offers[0]}
              reviews={reviews}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};


export default App;
