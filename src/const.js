const OfferType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

const SortType = {
  POPULAR: `popular`,
  PRICE_LOW_TO_HIGH: `price-low-to-high`,
  PRICE_HIGH_TO_LOW: `price-high-to-low`,
  RATING_HIGH_TO_LOW: `rating-high-to-low`,
};

const SORT_TYPES = [
  SortType.POPULAR,
  SortType.PRICE_LOW_TO_HIGH,
  SortType.PRICE_HIGH_TO_LOW,
  SortType.RATING_HIGH_TO_LOW
];

const DEFAULT_SORT_TYPE = SortType.POPULAR;

const ICON_SIZE = [30, 30];

const MAX_IMAGE_COUNT = 6;

const MAX_NEARBY_OFFER_COUNT = 3;

const MAX_REVIEW_COUNT = 10;


export {
  OfferType,
  SortType,
  SORT_TYPES,
  DEFAULT_SORT_TYPE,
  ICON_SIZE,
  MAX_IMAGE_COUNT,
  MAX_NEARBY_OFFER_COUNT,
  MAX_REVIEW_COUNT,
};
