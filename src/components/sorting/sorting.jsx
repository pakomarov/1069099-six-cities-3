import React, {memo} from 'react';
import PropTypes from 'prop-types';
import withPopupLogic from '../../hocs/with-popup-logic/with-popup-logic.js';


const SortTypeToText = {
  'popular': `Popular`,
  'price-low-to-high': `Price: low to high`,
  'price-high-to-low': `Price: high to low`,
  'rating-high-to-low': `Top rated first`,
};


const Sorting = ({
  sortTypes,
  selectedSortType,
  onSortTypeSelect,
  isOpened,
  onViewChange,
  containerRef,
}) => {
  return (
    <form
      ref={containerRef}
      className="places__sorting" action="#" method="get"
      onClick={() => onViewChange()}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {SortTypeToText[selectedSortType] ? SortTypeToText[selectedSortType] : selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpened ? ` places__options--opened` : ``}`}>
        {sortTypes.map((sortType) => (
          <li
            key={sortType}
            className={`places__option${sortType === selectedSortType ? ` places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => onSortTypeSelect(sortType)}
          >{SortTypeToText[sortType] ? SortTypeToText[sortType] : sortType}</li>
        ))}
      </ul>
    </form>
  );
};


Sorting.propTypes = {
  sortTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSortType: PropTypes.string.isRequired,
  onSortTypeSelect: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onViewChange: PropTypes.func.isRequired,
  containerRef: PropTypes.any,
};


export {Sorting};
export default withPopupLogic(memo(Sorting));
