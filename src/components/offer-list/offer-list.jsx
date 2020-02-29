import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';


class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this._handleOfferCardMouseOver = this._handleOfferCardMouseOver.bind(this);
  }

  _handleOfferCardMouseOver(offer) {
    this.setState({
      activeOffer: offer,
    });
  }

  render() {
    const {offers, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => (
          <OfferCard
            key={`${i}-${offer.title}`}
            offer={offer}
            onMouseOver={this._handleOfferCardMouseOver}
            onTitleClick={onOfferTitleClick}
          />
        ))}
      </div>
    );
  }
}


OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default OfferList;
