import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Catalog from '../catalog/catalog.jsx';


const PageMain = ({onOfferTitleClick}) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Catalog
        onOfferTitleClick={onOfferTitleClick}
      />
    </div>
  );
};


PageMain.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default memo(PageMain);
