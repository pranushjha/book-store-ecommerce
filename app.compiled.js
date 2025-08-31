"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Simple React app without complex routing
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;

// Sample book data
var SAMPLE_BOOKS = [{
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Classic Literature",
  description: "A classic American novel exploring themes of decadence, excess, and the American Dream in the Jazz Age",
  price: 12.99,
  discountPrice: 9.99,
  stock: 15,
  rating: 4.2,
  reviews: 1247,
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
  featured: true,
  bestseller: true
}, {
  id: 2,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  category: "Classic Literature",
  description: "A gripping tale of racial injustice and childhood innocence in the American South",
  price: 14.99,
  discountPrice: 11.99,
  stock: 23,
  rating: 4.6,
  reviews: 2156,
  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
  featured: true,
  bestseller: false
}, {
  id: 3,
  title: "1984",
  author: "George Orwell",
  category: "Science Fiction",
  description: "A dystopian social science fiction novel about totalitarian control and surveillance",
  price: 13.99,
  discountPrice: 10.99,
  stock: 18,
  rating: 4.4,
  reviews: 3421,
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  featured: false,
  bestseller: true
}, {
  id: 4,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  category: "Classic Literature",
  description: "A romantic novel of manners following Elizabeth Bennet and Mr. Darcy",
  price: 11.99,
  discountPrice: 8.99,
  stock: 31,
  rating: 4.3,
  reviews: 1987,
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
  featured: true,
  bestseller: false
}, {
  id: 5,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  category: "Young Adult",
  description: "The magical adventure that started it all - Harry's first year at Hogwarts",
  price: 16.99,
  discountPrice: 13.99,
  stock: 45,
  rating: 4.8,
  reviews: 8765,
  image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=300&h=400&fit=crop",
  featured: true,
  bestseller: true
}, {
  id: 6,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  category: "Epic Fantasy",
  description: "The epic tale of Frodo's quest to destroy the One Ring",
  price: 24.99,
  discountPrice: 19.99,
  stock: 27,
  rating: 4.7,
  reviews: 5432,
  image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
  featured: true,
  bestseller: true
}, {
  id: 7,
  title: "Dune",
  author: "Frank Herbert",
  category: "Science Fiction",
  description: "A science fiction masterpiece set on the desert planet Arrakis",
  price: 18.99,
  discountPrice: 15.99,
  stock: 21,
  rating: 4.5,
  reviews: 3127,
  image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
  featured: false,
  bestseller: true
}, {
  id: 8,
  title: "The Handmaid's Tale",
  author: "Margaret Atwood",
  category: "Contemporary Fiction",
  description: "A dystopian novel exploring themes of power, identity, and resistance",
  price: 17.99,
  discountPrice: 14.99,
  stock: 19,
  rating: 4.1,
  reviews: 2765,
  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
  featured: true,
  bestseller: false
}];
var CATEGORIES = [{
  id: 1,
  name: "Fiction",
  description: "Imaginative works of literature",
  bookCount: 4
}, {
  id: 2,
  name: "Science Fiction",
  description: "Futuristic and speculative fiction",
  bookCount: 2
}, {
  id: 3,
  name: "Fantasy",
  description: "Magical and mythical adventures",
  bookCount: 2
}, {
  id: 4,
  name: "Classic Literature",
  description: "Timeless literary works",
  bookCount: 3
}, {
  id: 5,
  name: "Young Adult",
  description: "Books for teenage readers",
  bookCount: 1
}, {
  id: 6,
  name: "Contemporary Fiction",
  description: "Modern literary fiction",
  bookCount: 1
}];

// Utility Functions
var formatPrice = function formatPrice(price) {
  return "$".concat(price.toFixed(2));
};
var renderStars = function renderStars(rating) {
  var fullStars = Math.floor(rating);
  var stars = [];
  for (var i = 0; i < fullStars; i++) {
    stars.push(React.createElement('span', {
      key: i,
      className: 'star'
    }, '★'));
  }
  if (rating % 1 !== 0) {
    stars.push(React.createElement('span', {
      key: 'half',
      className: 'star'
    }, '☆'));
  }
  var remaining = 5 - stars.length;
  for (var _i = 0; _i < remaining; _i++) {
    stars.push(React.createElement('span', {
      key: "empty-".concat(_i),
      className: 'star',
      style: {
        color: '#ddd'
      }
    }, '☆'));
  }
  return stars;
};

// Book Card Component
var BookCard = function BookCard(_ref) {
  var _React2;
  var book = _ref.book,
    onAddToCart = _ref.onAddToCart,
    onViewDetails = _ref.onViewDetails;
  return React.createElement('div', {
    className: 'book-card',
    onClick: function onClick() {
      return onViewDetails(book);
    }
  }, React.createElement('img', {
    src: book.image,
    alt: book.title,
    className: 'book-card__image',
    loading: 'lazy'
  }), React.createElement('div', {
    className: 'book-card__content'
  }, React.createElement('h3', {
    className: 'book-card__title'
  }, book.title), React.createElement('p', {
    className: 'book-card__author'
  }, "by ".concat(book.author)), React.createElement('div', {
    className: 'book-card__rating'
  }, (_React2 = React).createElement.apply(_React2, ['div', {
    className: 'book-card__stars'
  }].concat(_toConsumableArray(renderStars(book.rating)))), React.createElement('span', null, "(".concat(book.reviews, ")"))), React.createElement('div', {
    className: 'book-card__price'
  }, React.createElement('span', {
    className: 'book-card__current-price'
  }, formatPrice(book.discountPrice)), book.price !== book.discountPrice && React.createElement('span', {
    className: 'book-card__original-price'
  }, formatPrice(book.price))), React.createElement('div', {
    className: 'book-card__actions'
  }, React.createElement('button', {
    className: 'btn btn--primary btn--sm',
    onClick: function onClick(e) {
      e.stopPropagation();
      onViewDetails(book);
    }
  }, 'View Details'), React.createElement('button', {
    className: 'btn btn--secondary btn--sm',
    onClick: function onClick(e) {
      e.stopPropagation();
      onAddToCart(book);
    }
  }, 'Add to Cart'))));
};

// Header Component
var Header = function Header(_ref2) {
  var cartCount = _ref2.cartCount,
    currentUser = _ref2.currentUser,
    onNavigate = _ref2.onNavigate,
    onSearch = _ref2.onSearch,
    onLogout = _ref2.onLogout;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    mobileMenuOpen = _useState4[0],
    setMobileMenuOpen = _useState4[1];
  var handleSearch = function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };
  return React.createElement('header', {
    className: 'header'
  }, React.createElement('div', {
    className: 'header__content'
  }, React.createElement('a', {
    href: '#',
    className: 'header__logo',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('home');
    }
  }, 'BookHaven'), React.createElement('form', {
    className: 'header__search',
    onSubmit: handleSearch
  }, React.createElement('input', {
    type: 'text',
    placeholder: 'Search books...',
    className: 'header__search-input form-control',
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  }), React.createElement('button', {
    type: 'submit',
    className: 'header__search-btn'
  }, '🔍')), React.createElement('nav', {
    className: 'header__nav'
  }, React.createElement('a', {
    href: '#',
    className: 'header__nav-link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('books');
    }
  }, 'Books'), React.createElement('a', {
    href: '#',
    className: 'header__nav-link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('categories');
    }
  }, 'Categories'), currentUser ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    className: 'header__nav-link'
  }, "Hello, ".concat(currentUser.name)), React.createElement('button', {
    onClick: onLogout,
    className: 'btn btn--outline btn--sm'
  }, 'Logout')) : React.createElement('a', {
    href: '#',
    className: 'header__nav-link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('auth');
    }
  }, 'Login')), React.createElement('button', {
    className: 'header__cart',
    onClick: function onClick() {
      return onNavigate('cart');
    }
  }, '🛒', cartCount > 0 && React.createElement('span', {
    className: 'header__cart-badge'
  }, cartCount))));
};

// Homepage Component
var Homepage = function Homepage(_ref3) {
  var _React3, _React4, _React5;
  var books = _ref3.books,
    categories = _ref3.categories,
    onAddToCart = _ref3.onAddToCart,
    onViewDetails = _ref3.onViewDetails,
    onNavigate = _ref3.onNavigate;
  var featuredBooks = books.filter(function (book) {
    return book.featured;
  });
  var bestsellerBooks = books.filter(function (book) {
    return book.bestseller;
  });
  return React.createElement('div', null, React.createElement('section', {
    className: 'hero'
  }, React.createElement('div', {
    className: 'hero__content'
  }, React.createElement('h1', {
    className: 'hero__title'
  }, 'Welcome to BookHaven'), React.createElement('p', {
    className: 'hero__subtitle'
  }, 'Discover your next favorite book from our curated collection'), React.createElement('button', {
    className: 'btn btn--primary btn--lg',
    onClick: function onClick() {
      return onNavigate('books');
    }
  }, 'Browse Books'))), React.createElement('section', {
    className: 'section'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'section__header'
  }, React.createElement('h2', {
    className: 'section__title'
  }, 'Featured Books'), React.createElement('p', {
    className: 'section__subtitle'
  }, 'Handpicked selections from our editors')), (_React3 = React).createElement.apply(_React3, ['div', {
    className: 'grid grid--4'
  }].concat(_toConsumableArray(featuredBooks.slice(0, 4).map(function (book) {
    return React.createElement(BookCard, {
      key: book.id,
      book: book,
      onAddToCart: onAddToCart,
      onViewDetails: onViewDetails
    });
  })))))), React.createElement('section', {
    className: 'section'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'section__header'
  }, React.createElement('h2', {
    className: 'section__title'
  }, 'Browse by Category'), React.createElement('p', {
    className: 'section__subtitle'
  }, 'Find books in your favorite genres')), (_React4 = React).createElement.apply(_React4, ['div', {
    className: 'grid grid--3'
  }].concat(_toConsumableArray(categories.slice(0, 6).map(function (category) {
    return React.createElement('div', {
      key: category.id,
      className: 'category-card',
      onClick: function onClick() {
        return onNavigate('books');
      }
    }, React.createElement('h3', {
      className: 'category-card__name'
    }, category.name), React.createElement('p', null, category.description), React.createElement('p', {
      className: 'category-card__count'
    }, "".concat(category.bookCount, " books")));
  })))))), React.createElement('section', {
    className: 'section'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'section__header'
  }, React.createElement('h2', {
    className: 'section__title'
  }, 'Bestsellers'), React.createElement('p', {
    className: 'section__subtitle'
  }, 'Most popular books among our readers')), (_React5 = React).createElement.apply(_React5, ['div', {
    className: 'grid grid--4'
  }].concat(_toConsumableArray(bestsellerBooks.slice(0, 4).map(function (book) {
    return React.createElement(BookCard, {
      key: book.id,
      book: book,
      onAddToCart: onAddToCart,
      onViewDetails: onViewDetails
    });
  })))))));
};

// Books Catalog Component
var BooksCatalog = function BooksCatalog(_ref4) {
  var _React6, _React7;
  var books = _ref4.books,
    categories = _ref4.categories,
    onAddToCart = _ref4.onAddToCart,
    onViewDetails = _ref4.onViewDetails;
  var _useState5 = useState(books),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredBooks = _useState6[0],
    setFilteredBooks = _useState6[1];
  var _useState7 = useState({
      category: '',
      priceMin: '',
      priceMax: '',
      rating: '',
      search: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    filters = _useState8[0],
    setFilters = _useState8[1];
  useEffect(function () {
    var filtered = _toConsumableArray(books);
    if (filters.search) {
      filtered = filtered.filter(function (book) {
        return book.title.toLowerCase().includes(filters.search.toLowerCase()) || book.author.toLowerCase().includes(filters.search.toLowerCase());
      });
    }
    if (filters.category) {
      filtered = filtered.filter(function (book) {
        return book.category === filters.category;
      });
    }
    if (filters.priceMin) {
      filtered = filtered.filter(function (book) {
        return book.discountPrice >= parseFloat(filters.priceMin);
      });
    }
    if (filters.priceMax) {
      filtered = filtered.filter(function (book) {
        return book.discountPrice <= parseFloat(filters.priceMax);
      });
    }
    if (filters.rating) {
      filtered = filtered.filter(function (book) {
        return book.rating >= parseFloat(filters.rating);
      });
    }
    setFilteredBooks(filtered);
  }, [filters, books]);
  var handleFilterChange = function handleFilterChange(key, value) {
    setFilters(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, value));
    });
  };
  var clearFilters = function clearFilters() {
    setFilters({
      category: '',
      priceMin: '',
      priceMax: '',
      rating: '',
      search: ''
    });
  };
  return React.createElement('div', {
    className: 'container section'
  }, React.createElement('div', {
    className: 'section__header'
  }, React.createElement('h1', {
    className: 'section__title'
  }, 'Book Catalog'), React.createElement('p', {
    className: 'section__subtitle'
  }, "".concat(filteredBooks.length, " books found"))), React.createElement('div', {
    className: 'filters'
  }, React.createElement('h3', {
    className: 'filters__title'
  }, 'Filters'), React.createElement('div', {
    className: 'grid grid--4'
  }, React.createElement('div', {
    className: 'filters__group'
  }, React.createElement('label', {
    className: 'filters__label'
  }, 'Search'), React.createElement('input', {
    type: 'text',
    className: 'form-control',
    placeholder: 'Search books...',
    value: filters.search,
    onChange: function onChange(e) {
      return handleFilterChange('search', e.target.value);
    }
  })), React.createElement('div', {
    className: 'filters__group'
  }, React.createElement('label', {
    className: 'filters__label'
  }, 'Category'), (_React6 = React).createElement.apply(_React6, ['select', {
    className: 'form-control',
    value: filters.category,
    onChange: function onChange(e) {
      return handleFilterChange('category', e.target.value);
    }
  }, React.createElement('option', {
    value: ''
  }, 'All Categories')].concat(_toConsumableArray(categories.map(function (cat) {
    return React.createElement('option', {
      key: cat.id,
      value: cat.name
    }, cat.name);
  }))))), React.createElement('div', {
    className: 'filters__group'
  }, React.createElement('label', {
    className: 'filters__label'
  }, 'Price Range'), React.createElement('div', {
    className: 'price-range'
  }, React.createElement('input', {
    type: 'number',
    placeholder: 'Min $',
    className: 'form-control',
    value: filters.priceMin,
    onChange: function onChange(e) {
      return handleFilterChange('priceMin', e.target.value);
    }
  }), React.createElement('input', {
    type: 'number',
    placeholder: 'Max $',
    className: 'form-control',
    value: filters.priceMax,
    onChange: function onChange(e) {
      return handleFilterChange('priceMax', e.target.value);
    }
  }))), React.createElement('div', {
    className: 'filters__group'
  }, React.createElement('button', {
    className: 'btn btn--outline btn--full-width',
    onClick: clearFilters
  }, 'Clear Filters')))), (_React7 = React).createElement.apply(_React7, ['div', {
    className: 'grid grid--4'
  }].concat(_toConsumableArray(filteredBooks.map(function (book) {
    return React.createElement(BookCard, {
      key: book.id,
      book: book,
      onAddToCart: onAddToCart,
      onViewDetails: onViewDetails
    });
  })))));
};

// Book Details Modal
var BookDetailsModal = function BookDetailsModal(_ref5) {
  var _React8;
  var book = _ref5.book,
    onClose = _ref5.onClose,
    onAddToCart = _ref5.onAddToCart;
  var _useState9 = useState(1),
    _useState0 = _slicedToArray(_useState9, 2),
    quantity = _useState0[0],
    setQuantity = _useState0[1];
  if (!book) return null;
  var handleAddToCart = function handleAddToCart() {
    onAddToCart(book, quantity);
    alert("Added ".concat(quantity, " copy(ies) of \"").concat(book.title, "\" to cart!"));
    onClose();
  };
  return React.createElement('div', {
    className: 'modal'
  }, React.createElement('div', {
    className: 'modal__content'
  }, React.createElement('div', {
    className: 'modal__header'
  }, React.createElement('h2', null, 'Book Details'), React.createElement('button', {
    className: 'modal__close',
    onClick: onClose
  }, '×')), React.createElement('div', {
    className: 'product-detail'
  }, React.createElement('div', null, React.createElement('img', {
    src: book.image,
    alt: book.title,
    className: 'product-detail__image'
  })), React.createElement('div', {
    className: 'product-detail__content'
  }, React.createElement('h1', {
    className: 'product-detail__title'
  }, book.title), React.createElement('p', {
    className: 'product-detail__author'
  }, "by ".concat(book.author)), React.createElement('div', {
    className: 'product-detail__rating'
  }, (_React8 = React).createElement.apply(_React8, ['div', {
    className: 'book-card__stars'
  }].concat(_toConsumableArray(renderStars(book.rating)))), React.createElement('span', null, "".concat(book.rating, " (").concat(book.reviews, " reviews)"))), React.createElement('div', {
    className: 'product-detail__price'
  }, React.createElement('span', {
    className: 'product-detail__current'
  }, formatPrice(book.discountPrice)), book.price !== book.discountPrice && React.createElement('span', {
    className: 'product-detail__original'
  }, formatPrice(book.price))), React.createElement('p', {
    className: 'product-detail__description'
  }, book.description), React.createElement('div', {
    className: 'quantity-selector'
  }, React.createElement('label', null, 'Quantity:'), React.createElement('button', {
    className: 'quantity-btn',
    onClick: function onClick() {
      return setQuantity(Math.max(1, quantity - 1));
    }
  }, '-'), React.createElement('input', {
    type: 'number',
    value: quantity,
    min: 1,
    max: book.stock,
    className: 'form-control quantity-input',
    onChange: function onChange(e) {
      return setQuantity(Math.max(1, Math.min(book.stock, parseInt(e.target.value) || 1)));
    }
  }), React.createElement('button', {
    className: 'quantity-btn',
    onClick: function onClick() {
      return setQuantity(Math.min(book.stock, quantity + 1));
    }
  }, '+')), React.createElement('button', {
    className: 'btn btn--primary btn--lg btn--full-width',
    onClick: handleAddToCart
  }, 'Add to Cart')))));
};

// Shopping Cart Component
var ShoppingCart = function ShoppingCart(_ref6) {
  var _React9;
  var cart = _ref6.cart,
    onUpdateCart = _ref6.onUpdateCart,
    onRemoveFromCart = _ref6.onRemoveFromCart,
    onNavigate = _ref6.onNavigate,
    currentUser = _ref6.currentUser;
  var getTotalPrice = function getTotalPrice() {
    return cart.reduce(function (total, item) {
      return total + item.discountPrice * item.quantity;
    }, 0);
  };
  var handleCheckout = function handleCheckout() {
    if (!currentUser) {
      alert('Please login to proceed to checkout');
      onNavigate('auth');
      return;
    }
    onNavigate('checkout');
  };
  if (cart.length === 0) {
    return React.createElement('div', {
      className: 'container section text-center'
    }, React.createElement('h2', null, 'Your cart is empty'), React.createElement('p', null, 'Discover amazing books and add them to your cart'), React.createElement('button', {
      className: 'btn btn--primary',
      onClick: function onClick() {
        return onNavigate('books');
      }
    }, 'Browse Books'));
  }
  return React.createElement('div', {
    className: 'container section'
  }, React.createElement('h1', {
    className: 'section__title'
  }, 'Shopping Cart'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px'
    }
  }, (_React9 = React).createElement.apply(_React9, ['div', null].concat(_toConsumableArray(cart.map(function (item) {
    return React.createElement('div', {
      key: item.id,
      className: 'cart-item'
    }, React.createElement('img', {
      src: item.image,
      alt: item.title,
      className: 'cart-item__image'
    }), React.createElement('div', {
      className: 'cart-item__details'
    }, React.createElement('h3', {
      className: 'cart-item__title'
    }, item.title), React.createElement('p', {
      className: 'cart-item__author'
    }, "by ".concat(item.author)), React.createElement('p', {
      className: 'cart-item__price'
    }, formatPrice(item.discountPrice))), React.createElement('div', {
      className: 'cart-item__actions'
    }, React.createElement('div', {
      className: 'quantity-selector'
    }, React.createElement('button', {
      className: 'quantity-btn',
      onClick: function onClick() {
        return onUpdateCart(item.id, item.quantity - 1);
      }
    }, '-'), React.createElement('span', {
      style: {
        padding: '0 12px'
      }
    }, item.quantity), React.createElement('button', {
      className: 'quantity-btn',
      onClick: function onClick() {
        return onUpdateCart(item.id, item.quantity + 1);
      }
    }, '+')), React.createElement('button', {
      className: 'btn btn--outline btn--sm',
      onClick: function onClick() {
        return onRemoveFromCart(item.id);
      }
    }, 'Remove')));
  })))), React.createElement('div', {
    className: 'cart-summary'
  }, React.createElement('h2', {
    className: 'cart-summary__title'
  }, 'Order Summary'), React.createElement('div', {
    className: 'cart-summary__item'
  }, React.createElement('span', null, 'Subtotal:'), React.createElement('span', null, formatPrice(getTotalPrice()))), React.createElement('div', {
    className: 'cart-summary__item'
  }, React.createElement('span', null, 'Shipping:'), React.createElement('span', null, 'FREE')), React.createElement('div', {
    className: 'cart-summary__item cart-summary__total'
  }, React.createElement('span', null, 'Total:'), React.createElement('span', null, formatPrice(getTotalPrice()))), React.createElement('button', {
    className: 'btn btn--primary btn--full-width btn--lg',
    onClick: handleCheckout
  }, currentUser ? 'Proceed to Checkout' : 'Login to Checkout'))));
};

// Auth Component
var AuthForm = function AuthForm(_ref7) {
  var onLogin = _ref7.onLogin,
    onNavigate = _ref7.onNavigate;
  var _useState1 = useState(true),
    _useState10 = _slicedToArray(_useState1, 2),
    isLogin = _useState10[0],
    setIsLogin = _useState10[1];
  var _useState11 = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    formData = _useState12[0],
    setFormData = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!formData.email || !formData.password) {
      alert('Please fill in all required fields');
      setLoading(false);
      return;
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setLoading(false);
      return;
    }
    setTimeout(function () {
      var userData = {
        id: Date.now(),
        name: formData.name || formData.email.split('@')[0],
        email: formData.email,
        isAdmin: formData.email === 'admin@bookhaven.com'
      };
      onLogin(userData);
      setLoading(false);
      onNavigate('home');
    }, 1000);
  };
  var handleInputChange = function handleInputChange(e) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };
  return React.createElement('div', {
    className: 'auth-container'
  }, React.createElement('div', {
    className: 'auth-form'
  }, React.createElement('h2', {
    className: 'auth-form__title'
  }, isLogin ? 'Login' : 'Sign Up'), React.createElement('form', {
    onSubmit: handleSubmit
  }, !isLogin && React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Full Name'), React.createElement('input', {
    type: 'text',
    name: 'name',
    className: 'form-control',
    value: formData.name,
    onChange: handleInputChange,
    required: !isLogin
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Email'), React.createElement('input', {
    type: 'email',
    name: 'email',
    className: 'form-control',
    value: formData.email,
    onChange: handleInputChange,
    required: true
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Password'), React.createElement('input', {
    type: 'password',
    name: 'password',
    className: 'form-control',
    value: formData.password,
    onChange: handleInputChange,
    required: true
  })), !isLogin && React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Confirm Password'), React.createElement('input', {
    type: 'password',
    name: 'confirmPassword',
    className: 'form-control',
    value: formData.confirmPassword,
    onChange: handleInputChange,
    required: !isLogin
  })), React.createElement('button', {
    type: 'submit',
    className: 'btn btn--primary btn--full-width',
    disabled: loading
  }, loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up')), React.createElement('div', {
    className: 'auth-form__toggle'
  }, isLogin ? "Don't have an account? " : "Already have an account? ", React.createElement('span', {
    className: 'auth-form__link',
    onClick: function onClick() {
      return setIsLogin(!isLogin);
    }
  }, isLogin ? 'Sign Up' : 'Login'))));
};

// Checkout Component
var CheckoutForm = function CheckoutForm(_ref8) {
  var _React0;
  var cart = _ref8.cart,
    onOrderComplete = _ref8.onOrderComplete,
    onNavigate = _ref8.onNavigate,
    currentUser = _ref8.currentUser;
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = useState({
      firstName: '',
      lastName: '',
      email: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) || '',
      address: '',
      city: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    formData = _useState18[0],
    setFormData = _useState18[1];
  var getTotalPrice = function getTotalPrice() {
    return cart.reduce(function (total, item) {
      return total + item.discountPrice * item.quantity;
    }, 0);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(function () {
      onOrderComplete();
      setLoading(false);
      alert('Order placed successfully!');
      onNavigate('home');
    }, 2000);
  };
  var handleInputChange = function handleInputChange(e) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };
  if (!currentUser) {
    return React.createElement('div', {
      className: 'container section text-center'
    }, React.createElement('h2', null, 'Please login to checkout'), React.createElement('button', {
      className: 'btn btn--primary',
      onClick: function onClick() {
        return onNavigate('auth');
      }
    }, 'Go to Login'));
  }
  return React.createElement('div', {
    className: 'checkout-container'
  }, React.createElement('div', null, React.createElement('h1', {
    className: 'section__title'
  }, 'Checkout'), React.createElement('form', {
    onSubmit: handleSubmit
  }, React.createElement('div', {
    className: 'checkout-section'
  }, React.createElement('h2', {
    className: 'checkout-section__title'
  }, 'Shipping Information'), React.createElement('div', {
    className: 'grid grid--2'
  }, React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'First Name'), React.createElement('input', {
    type: 'text',
    name: 'firstName',
    className: 'form-control',
    value: formData.firstName,
    onChange: handleInputChange,
    required: true
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Last Name'), React.createElement('input', {
    type: 'text',
    name: 'lastName',
    className: 'form-control',
    value: formData.lastName,
    onChange: handleInputChange,
    required: true
  }))), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Email'), React.createElement('input', {
    type: 'email',
    name: 'email',
    className: 'form-control',
    value: formData.email,
    onChange: handleInputChange,
    required: true
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Address'), React.createElement('input', {
    type: 'text',
    name: 'address',
    className: 'form-control',
    value: formData.address,
    onChange: handleInputChange,
    required: true
  }))), React.createElement('div', {
    className: 'checkout-section'
  }, React.createElement('h2', {
    className: 'checkout-section__title'
  }, 'Payment Information'), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Card Number'), React.createElement('input', {
    type: 'text',
    name: 'cardNumber',
    className: 'form-control',
    placeholder: '1234 5678 9012 3456',
    value: formData.cardNumber,
    onChange: handleInputChange,
    required: true
  })), React.createElement('div', {
    className: 'grid grid--2'
  }, React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'Expiry Date'), React.createElement('input', {
    type: 'text',
    name: 'expiryDate',
    className: 'form-control',
    placeholder: 'MM/YY',
    value: formData.expiryDate,
    onChange: handleInputChange,
    required: true
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', {
    className: 'form-label'
  }, 'CVV'), React.createElement('input', {
    type: 'text',
    name: 'cvv',
    className: 'form-control',
    placeholder: '123',
    value: formData.cvv,
    onChange: handleInputChange,
    required: true
  })))), React.createElement('button', {
    type: 'submit',
    className: 'btn btn--primary btn--full-width btn--lg',
    disabled: loading
  }, loading ? 'Processing Order...' : "Place Order - ".concat(formatPrice(getTotalPrice()))))), (_React0 = React).createElement.apply(_React0, ['div', {
    className: 'cart-summary'
  }, React.createElement('h2', {
    className: 'cart-summary__title'
  }, 'Order Summary')].concat(_toConsumableArray(cart.map(function (item) {
    return React.createElement('div', {
      key: item.id,
      className: 'cart-summary__item'
    }, React.createElement('span', null, "".concat(item.title, " (").concat(item.quantity, "x)")), React.createElement('span', null, formatPrice(item.discountPrice * item.quantity)));
  })), [React.createElement('div', {
    className: 'cart-summary__item cart-summary__total'
  }, React.createElement('span', null, 'Total:'), React.createElement('span', null, formatPrice(getTotalPrice())))])));
};

// Categories Page
var CategoriesPage = function CategoriesPage(_ref9) {
  var _React1;
  var categories = _ref9.categories,
    onNavigate = _ref9.onNavigate;
  return React.createElement('div', {
    className: 'container section'
  }, React.createElement('div', {
    className: 'section__header'
  }, React.createElement('h1', {
    className: 'section__title'
  }, 'Book Categories'), React.createElement('p', {
    className: 'section__subtitle'
  }, 'Explore books by genre and category')), (_React1 = React).createElement.apply(_React1, ['div', {
    className: 'grid grid--3'
  }].concat(_toConsumableArray(categories.map(function (category) {
    return React.createElement('div', {
      key: category.id,
      className: 'category-card',
      onClick: function onClick() {
        return onNavigate('books');
      }
    }, React.createElement('h3', {
      className: 'category-card__name'
    }, category.name), React.createElement('p', null, category.description), React.createElement('p', {
      className: 'category-card__count'
    }, "".concat(category.bookCount, " books available")));
  })))));
};

// Footer Component
var Footer = function Footer(_ref0) {
  var onNavigate = _ref0.onNavigate;
  return React.createElement('footer', {
    className: 'footer'
  }, React.createElement('div', {
    className: 'footer__content'
  }, React.createElement('div', {
    className: 'footer__section'
  }, React.createElement('h3', {
    className: 'footer__title'
  }, 'BookHaven'), React.createElement('p', null, 'Your trusted online bookstore for discovering amazing books and authors.'), React.createElement('p', null, '📧 contact@bookhaven.com'), React.createElement('p', null, '📞 1-800-BOOKS-NOW')), React.createElement('div', {
    className: 'footer__section'
  }, React.createElement('h4', {
    className: 'footer__title'
  }, 'Quick Links'), React.createElement('a', {
    href: '#',
    className: 'footer__link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('books');
    }
  }, 'All Books'), React.createElement('a', {
    href: '#',
    className: 'footer__link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('categories');
    }
  }, 'Categories'), React.createElement('a', {
    href: '#',
    className: 'footer__link',
    onClick: function onClick(e) {
      e.preventDefault();
      onNavigate('cart');
    }
  }, 'Shopping Cart'))), React.createElement('div', {
    className: 'footer__bottom'
  }, React.createElement('p', null, '© 2025 BookHaven. All rights reserved. Made with ❤️ for book lovers.')));
};

// Main App Component
var App = function App() {
  var _useState19 = useState('home'),
    _useState20 = _slicedToArray(_useState19, 2),
    currentPage = _useState20[0],
    setCurrentPage = _useState20[1];
  var _useState21 = useState([]),
    _useState22 = _slicedToArray(_useState21, 2),
    cart = _useState22[0],
    setCart = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    currentUser = _useState24[0],
    setCurrentUser = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedBook = _useState26[0],
    setSelectedBook = _useState26[1];
  var _useState27 = useState(SAMPLE_BOOKS),
    _useState28 = _slicedToArray(_useState27, 1),
    books = _useState28[0];
  var _useState29 = useState(CATEGORIES),
    _useState30 = _slicedToArray(_useState29, 1),
    categories = _useState30[0];

  // Load saved data on mount
  useEffect(function () {
    try {
      var savedCart = localStorage.getItem('bookhaven_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      var savedUser = localStorage.getItem('bookhaven_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save cart to localStorage
  useEffect(function () {
    try {
      localStorage.setItem('bookhaven_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cart]);

  // Save user to localStorage
  useEffect(function () {
    try {
      if (currentUser) {
        localStorage.setItem('bookhaven_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('bookhaven_user');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }, [currentUser]);
  var handleAddToCart = function handleAddToCart(book) {
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    setCart(function (prevCart) {
      var existingItem = prevCart.find(function (item) {
        return item.id === book.id;
      });
      if (existingItem) {
        return prevCart.map(function (item) {
          return item.id === book.id ? _objectSpread(_objectSpread({}, item), {}, {
            quantity: item.quantity + quantity
          }) : item;
        });
      } else {
        return [].concat(_toConsumableArray(prevCart), [_objectSpread(_objectSpread({}, book), {}, {
          quantity: quantity
        })]);
      }
    });
  };
  var handleUpdateCart = function handleUpdateCart(id, quantity) {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(function (prevCart) {
      return prevCart.map(function (item) {
        return item.id === id ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: quantity
        }) : item;
      });
    });
  };
  var handleRemoveFromCart = function handleRemoveFromCart(id) {
    setCart(function (prevCart) {
      return prevCart.filter(function (item) {
        return item.id !== id;
      });
    });
  };
  var handleNavigate = function handleNavigate(page) {
    setCurrentPage(page);
    setSelectedBook(null);
  };
  var handleViewDetails = function handleViewDetails(book) {
    setSelectedBook(book);
  };
  var handleLogin = function handleLogin(userData) {
    setCurrentUser(userData);
  };
  var handleLogout = function handleLogout() {
    setCurrentUser(null);
    setCurrentPage('home');
  };
  var handleSearch = function handleSearch(query) {
    setCurrentPage('books');
  };
  var handleOrderComplete = function handleOrderComplete() {
    setCart([]);
  };
  var getCartCount = function getCartCount() {
    return cart.reduce(function (total, item) {
      return total + item.quantity;
    }, 0);
  };
  var renderCurrentPage = function renderCurrentPage() {
    switch (currentPage) {
      case 'books':
        return React.createElement(BooksCatalog, {
          books: books,
          categories: categories,
          onAddToCart: handleAddToCart,
          onViewDetails: handleViewDetails
        });
      case 'categories':
        return React.createElement(CategoriesPage, {
          categories: categories,
          onNavigate: handleNavigate
        });
      case 'cart':
        return React.createElement(ShoppingCart, {
          cart: cart,
          onUpdateCart: handleUpdateCart,
          onRemoveFromCart: handleRemoveFromCart,
          onNavigate: handleNavigate,
          currentUser: currentUser
        });
      case 'auth':
        return React.createElement(AuthForm, {
          onLogin: handleLogin,
          onNavigate: handleNavigate
        });
      case 'checkout':
        return React.createElement(CheckoutForm, {
          cart: cart,
          onOrderComplete: handleOrderComplete,
          onNavigate: handleNavigate,
          currentUser: currentUser
        });
      default:
        return React.createElement(Homepage, {
          books: books,
          categories: categories,
          onAddToCart: handleAddToCart,
          onViewDetails: handleViewDetails,
          onNavigate: handleNavigate
        });
    }
  };
  return React.createElement('div', {
    className: 'app'
  }, React.createElement(Header, {
    cartCount: getCartCount(),
    currentUser: currentUser,
    onNavigate: handleNavigate,
    onSearch: handleSearch,
    onLogout: handleLogout
  }), React.createElement('main', null, renderCurrentPage()), selectedBook && React.createElement(BookDetailsModal, {
    book: selectedBook,
    onClose: function onClose() {
      return setSelectedBook(null);
    },
    onAddToCart: handleAddToCart
  }), React.createElement(Footer, {
    onNavigate: handleNavigate
  }));
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
  try {
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
  } catch (error) {
    console.error('Error rendering app:', error);
  }
});
