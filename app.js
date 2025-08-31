// Simple React app without complex routing
const { useState, useEffect } = React;

// Sample book data
const SAMPLE_BOOKS = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

const CATEGORIES = [
  {id: 1, name: "Fiction", description: "Imaginative works of literature", bookCount: 4},
  {id: 2, name: "Science Fiction", description: "Futuristic and speculative fiction", bookCount: 2},
  {id: 3, name: "Fantasy", description: "Magical and mythical adventures", bookCount: 2},
  {id: 4, name: "Classic Literature", description: "Timeless literary works", bookCount: 3},
  {id: 5, name: "Young Adult", description: "Books for teenage readers", bookCount: 1},
  {id: 6, name: "Contemporary Fiction", description: "Modern literary fiction", bookCount: 1}
];

// Utility Functions
const formatPrice = (price) => `$${price.toFixed(2)}`;

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(React.createElement('span', { key: i, className: 'star' }, '★'));
  }
  
  if (rating % 1 !== 0) {
    stars.push(React.createElement('span', { key: 'half', className: 'star' }, '☆'));
  }
  
  const remaining = 5 - stars.length;
  for (let i = 0; i < remaining; i++) {
    stars.push(React.createElement('span', { key: `empty-${i}`, className: 'star', style: { color: '#ddd' } }, '☆'));
  }
  
  return stars;
};

// Book Card Component
const BookCard = ({ book, onAddToCart, onViewDetails }) => {
  return React.createElement('div', { className: 'book-card', onClick: () => onViewDetails(book) },
    React.createElement('img', {
      src: book.image,
      alt: book.title,
      className: 'book-card__image',
      loading: 'lazy'
    }),
    React.createElement('div', { className: 'book-card__content' },
      React.createElement('h3', { className: 'book-card__title' }, book.title),
      React.createElement('p', { className: 'book-card__author' }, `by ${book.author}`),
      React.createElement('div', { className: 'book-card__rating' },
        React.createElement('div', { className: 'book-card__stars' }, ...renderStars(book.rating)),
        React.createElement('span', null, `(${book.reviews})`)
      ),
      React.createElement('div', { className: 'book-card__price' },
        React.createElement('span', { className: 'book-card__current-price' }, formatPrice(book.discountPrice)),
        book.price !== book.discountPrice && 
          React.createElement('span', { className: 'book-card__original-price' }, formatPrice(book.price))
      ),
      React.createElement('div', { className: 'book-card__actions' },
        React.createElement('button', { 
          className: 'btn btn--primary btn--sm',
          onClick: (e) => {
            e.stopPropagation();
            onViewDetails(book);
          }
        }, 'View Details'),
        React.createElement('button', {
          className: 'btn btn--secondary btn--sm',
          onClick: (e) => {
            e.stopPropagation();
            onAddToCart(book);
          }
        }, 'Add to Cart')
      )
    )
  );
};

// Header Component
const Header = ({ cartCount, currentUser, onNavigate, onSearch, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return React.createElement('header', { className: 'header' },
    React.createElement('div', { className: 'header__content' },
      React.createElement('a', { 
        href: '#', 
        className: 'header__logo',
        onClick: (e) => { e.preventDefault(); onNavigate('home'); }
      }, 'BookHaven'),
      
      React.createElement('form', { className: 'header__search', onSubmit: handleSearch },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Search books...',
          className: 'header__search-input form-control',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value)
        }),
        React.createElement('button', { type: 'submit', className: 'header__search-btn' }, '🔍')
      ),

      React.createElement('nav', { className: 'header__nav' },
        React.createElement('a', { 
          href: '#', 
          className: 'header__nav-link',
          onClick: (e) => { e.preventDefault(); onNavigate('books'); }
        }, 'Books'),
        React.createElement('a', { 
          href: '#', 
          className: 'header__nav-link',
          onClick: (e) => { e.preventDefault(); onNavigate('categories'); }
        }, 'Categories'),
        currentUser 
          ? React.createElement('div', { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
              React.createElement('span', { className: 'header__nav-link' }, `Hello, ${currentUser.name}`),
              React.createElement('button', { onClick: onLogout, className: 'btn btn--outline btn--sm' }, 'Logout')
            )
          : React.createElement('a', { 
              href: '#', 
              className: 'header__nav-link',
              onClick: (e) => { e.preventDefault(); onNavigate('auth'); }
            }, 'Login')
      ),

      React.createElement('button', {
        className: 'header__cart',
        onClick: () => onNavigate('cart')
      },
        '🛒',
        cartCount > 0 && React.createElement('span', { className: 'header__cart-badge' }, cartCount)
      )
    )
  );
};

// Homepage Component
const Homepage = ({ books, categories, onAddToCart, onViewDetails, onNavigate }) => {
  const featuredBooks = books.filter(book => book.featured);
  const bestsellerBooks = books.filter(book => book.bestseller);

  return React.createElement('div', null,
    React.createElement('section', { className: 'hero' },
      React.createElement('div', { className: 'hero__content' },
        React.createElement('h1', { className: 'hero__title' }, 'Welcome to BookHaven'),
        React.createElement('p', { className: 'hero__subtitle' }, 'Discover your next favorite book from our curated collection'),
        React.createElement('button', { 
          className: 'btn btn--primary btn--lg',
          onClick: () => onNavigate('books')
        }, 'Browse Books')
      )
    ),

    React.createElement('section', { className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'section__header' },
          React.createElement('h2', { className: 'section__title' }, 'Featured Books'),
          React.createElement('p', { className: 'section__subtitle' }, 'Handpicked selections from our editors')
        ),
        React.createElement('div', { className: 'grid grid--4' },
          ...featuredBooks.slice(0, 4).map(book =>
            React.createElement(BookCard, { 
              key: book.id, 
              book,
              onAddToCart,
              onViewDetails
            })
          )
        )
      )
    ),

    React.createElement('section', { className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'section__header' },
          React.createElement('h2', { className: 'section__title' }, 'Browse by Category'),
          React.createElement('p', { className: 'section__subtitle' }, 'Find books in your favorite genres')
        ),
        React.createElement('div', { className: 'grid grid--3' },
          ...categories.slice(0, 6).map(category =>
            React.createElement('div', {
              key: category.id,
              className: 'category-card',
              onClick: () => onNavigate('books')
            },
              React.createElement('h3', { className: 'category-card__name' }, category.name),
              React.createElement('p', null, category.description),
              React.createElement('p', { className: 'category-card__count' }, `${category.bookCount} books`)
            )
          )
        )
      )
    ),

    React.createElement('section', { className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'section__header' },
          React.createElement('h2', { className: 'section__title' }, 'Bestsellers'),
          React.createElement('p', { className: 'section__subtitle' }, 'Most popular books among our readers')
        ),
        React.createElement('div', { className: 'grid grid--4' },
          ...bestsellerBooks.slice(0, 4).map(book =>
            React.createElement(BookCard, { 
              key: book.id, 
              book,
              onAddToCart,
              onViewDetails
            })
          )
        )
      )
    )
  );
};

// Books Catalog Component
const BooksCatalog = ({ books, categories, onAddToCart, onViewDetails }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filters, setFilters] = useState({
    category: '',
    priceMin: '',
    priceMax: '',
    rating: '',
    search: ''
  });

  useEffect(() => {
    let filtered = [...books];

    if (filters.search) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(book => book.category === filters.category);
    }

    if (filters.priceMin) {
      filtered = filtered.filter(book => book.discountPrice >= parseFloat(filters.priceMin));
    }

    if (filters.priceMax) {
      filtered = filtered.filter(book => book.discountPrice <= parseFloat(filters.priceMax));
    }

    if (filters.rating) {
      filtered = filtered.filter(book => book.rating >= parseFloat(filters.rating));
    }

    setFilteredBooks(filtered);
  }, [filters, books]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: '', priceMin: '', priceMax: '', rating: '', search: '' });
  };

  return React.createElement('div', { className: 'container section' },
    React.createElement('div', { className: 'section__header' },
      React.createElement('h1', { className: 'section__title' }, 'Book Catalog'),
      React.createElement('p', { className: 'section__subtitle' }, `${filteredBooks.length} books found`)
    ),

    React.createElement('div', { className: 'filters' },
      React.createElement('h3', { className: 'filters__title' }, 'Filters'),
      React.createElement('div', { className: 'grid grid--4' },
        React.createElement('div', { className: 'filters__group' },
          React.createElement('label', { className: 'filters__label' }, 'Search'),
          React.createElement('input', {
            type: 'text',
            className: 'form-control',
            placeholder: 'Search books...',
            value: filters.search,
            onChange: (e) => handleFilterChange('search', e.target.value)
          })
        ),
        React.createElement('div', { className: 'filters__group' },
          React.createElement('label', { className: 'filters__label' }, 'Category'),
          React.createElement('select', {
            className: 'form-control',
            value: filters.category,
            onChange: (e) => handleFilterChange('category', e.target.value)
          },
            React.createElement('option', { value: '' }, 'All Categories'),
            ...categories.map(cat =>
              React.createElement('option', { key: cat.id, value: cat.name }, cat.name)
            )
          )
        ),
        React.createElement('div', { className: 'filters__group' },
          React.createElement('label', { className: 'filters__label' }, 'Price Range'),
          React.createElement('div', { className: 'price-range' },
            React.createElement('input', {
              type: 'number',
              placeholder: 'Min $',
              className: 'form-control',
              value: filters.priceMin,
              onChange: (e) => handleFilterChange('priceMin', e.target.value)
            }),
            React.createElement('input', {
              type: 'number',
              placeholder: 'Max $',
              className: 'form-control',
              value: filters.priceMax,
              onChange: (e) => handleFilterChange('priceMax', e.target.value)
            })
          )
        ),
        React.createElement('div', { className: 'filters__group' },
          React.createElement('button', { 
            className: 'btn btn--outline btn--full-width', 
            onClick: clearFilters 
          }, 'Clear Filters')
        )
      )
    ),

    React.createElement('div', { className: 'grid grid--4' },
      ...filteredBooks.map(book =>
        React.createElement(BookCard, { 
          key: book.id, 
          book,
          onAddToCart,
          onViewDetails
        })
      )
    )
  );
};

// Book Details Modal
const BookDetailsModal = ({ book, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!book) return null;

  const handleAddToCart = () => {
    onAddToCart(book, quantity);
    alert(`Added ${quantity} copy(ies) of "${book.title}" to cart!`);
    onClose();
  };

  return React.createElement('div', { className: 'modal' },
    React.createElement('div', { className: 'modal__content' },
      React.createElement('div', { className: 'modal__header' },
        React.createElement('h2', null, 'Book Details'),
        React.createElement('button', { 
          className: 'modal__close',
          onClick: onClose
        }, '×')
      ),
      
      React.createElement('div', { className: 'product-detail' },
        React.createElement('div', null,
          React.createElement('img', {
            src: book.image,
            alt: book.title,
            className: 'product-detail__image'
          })
        ),

        React.createElement('div', { className: 'product-detail__content' },
          React.createElement('h1', { className: 'product-detail__title' }, book.title),
          React.createElement('p', { className: 'product-detail__author' }, `by ${book.author}`),
          
          React.createElement('div', { className: 'product-detail__rating' },
            React.createElement('div', { className: 'book-card__stars' }, ...renderStars(book.rating)),
            React.createElement('span', null, `${book.rating} (${book.reviews} reviews)`)
          ),

          React.createElement('div', { className: 'product-detail__price' },
            React.createElement('span', { className: 'product-detail__current' }, formatPrice(book.discountPrice)),
            book.price !== book.discountPrice && 
              React.createElement('span', { className: 'product-detail__original' }, formatPrice(book.price))
          ),

          React.createElement('p', { className: 'product-detail__description' }, book.description),

          React.createElement('div', { className: 'quantity-selector' },
            React.createElement('label', null, 'Quantity:'),
            React.createElement('button', {
              className: 'quantity-btn',
              onClick: () => setQuantity(Math.max(1, quantity - 1))
            }, '-'),
            React.createElement('input', {
              type: 'number',
              value: quantity,
              min: 1,
              max: book.stock,
              className: 'form-control quantity-input',
              onChange: (e) => setQuantity(Math.max(1, Math.min(book.stock, parseInt(e.target.value) || 1)))
            }),
            React.createElement('button', {
              className: 'quantity-btn',
              onClick: () => setQuantity(Math.min(book.stock, quantity + 1))
            }, '+')
          ),

          React.createElement('button', {
            className: 'btn btn--primary btn--lg btn--full-width',
            onClick: handleAddToCart
          }, 'Add to Cart')
        )
      )
    )
  );
};

// Shopping Cart Component
const ShoppingCart = ({ cart, onUpdateCart, onRemoveFromCart, onNavigate, currentUser }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (!currentUser) {
      alert('Please login to proceed to checkout');
      onNavigate('auth');
      return;
    }
    onNavigate('checkout');
  };

  if (cart.length === 0) {
    return React.createElement('div', { className: 'container section text-center' },
      React.createElement('h2', null, 'Your cart is empty'),
      React.createElement('p', null, 'Discover amazing books and add them to your cart'),
      React.createElement('button', { 
        className: 'btn btn--primary',
        onClick: () => onNavigate('books')
      }, 'Browse Books')
    );
  }

  return React.createElement('div', { className: 'container section' },
    React.createElement('h1', { className: 'section__title' }, 'Shopping Cart'),
    
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' } },
      React.createElement('div', null,
        ...cart.map(item =>
          React.createElement('div', { key: item.id, className: 'cart-item' },
            React.createElement('img', {
              src: item.image,
              alt: item.title,
              className: 'cart-item__image'
            }),
            React.createElement('div', { className: 'cart-item__details' },
              React.createElement('h3', { className: 'cart-item__title' }, item.title),
              React.createElement('p', { className: 'cart-item__author' }, `by ${item.author}`),
              React.createElement('p', { className: 'cart-item__price' }, formatPrice(item.discountPrice))
            ),
            React.createElement('div', { className: 'cart-item__actions' },
              React.createElement('div', { className: 'quantity-selector' },
                React.createElement('button', {
                  className: 'quantity-btn',
                  onClick: () => onUpdateCart(item.id, item.quantity - 1)
                }, '-'),
                React.createElement('span', { style: { padding: '0 12px' } }, item.quantity),
                React.createElement('button', {
                  className: 'quantity-btn',
                  onClick: () => onUpdateCart(item.id, item.quantity + 1)
                }, '+')
              ),
              React.createElement('button', {
                className: 'btn btn--outline btn--sm',
                onClick: () => onRemoveFromCart(item.id)
              }, 'Remove')
            )
          )
        )
      ),

      React.createElement('div', { className: 'cart-summary' },
        React.createElement('h2', { className: 'cart-summary__title' }, 'Order Summary'),
        React.createElement('div', { className: 'cart-summary__item' },
          React.createElement('span', null, 'Subtotal:'),
          React.createElement('span', null, formatPrice(getTotalPrice()))
        ),
        React.createElement('div', { className: 'cart-summary__item' },
          React.createElement('span', null, 'Shipping:'),
          React.createElement('span', null, 'FREE')
        ),
        React.createElement('div', { className: 'cart-summary__item cart-summary__total' },
          React.createElement('span', null, 'Total:'),
          React.createElement('span', null, formatPrice(getTotalPrice()))
        ),
        React.createElement('button', {
          className: 'btn btn--primary btn--full-width btn--lg',
          onClick: handleCheckout
        }, currentUser ? 'Proceed to Checkout' : 'Login to Checkout')
      )
    )
  );
};

// Auth Component
const AuthForm = ({ onLogin, onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
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

    setTimeout(() => {
      const userData = {
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

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return React.createElement('div', { className: 'auth-container' },
    React.createElement('div', { className: 'auth-form' },
      React.createElement('h2', { className: 'auth-form__title' }, isLogin ? 'Login' : 'Sign Up'),
      
      React.createElement('form', { onSubmit: handleSubmit },
        !isLogin && React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Full Name'),
          React.createElement('input', {
            type: 'text',
            name: 'name',
            className: 'form-control',
            value: formData.name,
            onChange: handleInputChange,
            required: !isLogin
          })
        ),
        
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            className: 'form-control',
            value: formData.email,
            onChange: handleInputChange,
            required: true
          })
        ),
        
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Password'),
          React.createElement('input', {
            type: 'password',
            name: 'password',
            className: 'form-control',
            value: formData.password,
            onChange: handleInputChange,
            required: true
          })
        ),
        
        !isLogin && React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Confirm Password'),
          React.createElement('input', {
            type: 'password',
            name: 'confirmPassword',
            className: 'form-control',
            value: formData.confirmPassword,
            onChange: handleInputChange,
            required: !isLogin
          })
        ),
        
        React.createElement('button', {
          type: 'submit',
          className: 'btn btn--primary btn--full-width',
          disabled: loading
        }, loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up'))
      ),
      
      React.createElement('div', { className: 'auth-form__toggle' },
        isLogin ? "Don't have an account? " : "Already have an account? ",
        React.createElement('span', {
          className: 'auth-form__link',
          onClick: () => setIsLogin(!isLogin)
        }, isLogin ? 'Sign Up' : 'Login')
      )
    )
  );
};

// Checkout Component
const CheckoutForm = ({ cart, onOrderComplete, onNavigate, currentUser }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: currentUser?.email || '',
    address: '',
    city: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      onOrderComplete();
      setLoading(false);
      alert('Order placed successfully!');
      onNavigate('home');
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!currentUser) {
    return React.createElement('div', { className: 'container section text-center' },
      React.createElement('h2', null, 'Please login to checkout'),
      React.createElement('button', {
        className: 'btn btn--primary',
        onClick: () => onNavigate('auth')
      }, 'Go to Login')
    );
  }

  return React.createElement('div', { className: 'checkout-container' },
    React.createElement('div', null,
      React.createElement('h1', { className: 'section__title' }, 'Checkout'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'checkout-section' },
          React.createElement('h2', { className: 'checkout-section__title' }, 'Shipping Information'),
          React.createElement('div', { className: 'grid grid--2' },
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'First Name'),
              React.createElement('input', {
                type: 'text',
                name: 'firstName',
                className: 'form-control',
                value: formData.firstName,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Last Name'),
              React.createElement('input', {
                type: 'text',
                name: 'lastName',
                className: 'form-control',
                value: formData.lastName,
                onChange: handleInputChange,
                required: true
              })
            )
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Email'),
            React.createElement('input', {
              type: 'email',
              name: 'email',
              className: 'form-control',
              value: formData.email,
              onChange: handleInputChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Address'),
            React.createElement('input', {
              type: 'text',
              name: 'address',
              className: 'form-control',
              value: formData.address,
              onChange: handleInputChange,
              required: true
            })
          )
        ),

        React.createElement('div', { className: 'checkout-section' },
          React.createElement('h2', { className: 'checkout-section__title' }, 'Payment Information'),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Card Number'),
            React.createElement('input', {
              type: 'text',
              name: 'cardNumber',
              className: 'form-control',
              placeholder: '1234 5678 9012 3456',
              value: formData.cardNumber,
              onChange: handleInputChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'grid grid--2' },
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Expiry Date'),
              React.createElement('input', {
                type: 'text',
                name: 'expiryDate',
                className: 'form-control',
                placeholder: 'MM/YY',
                value: formData.expiryDate,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'CVV'),
              React.createElement('input', {
                type: 'text',
                name: 'cvv',
                className: 'form-control',
                placeholder: '123',
                value: formData.cvv,
                onChange: handleInputChange,
                required: true
              })
            )
          )
        ),

        React.createElement('button', {
          type: 'submit',
          className: 'btn btn--primary btn--full-width btn--lg',
          disabled: loading
        }, loading ? 'Processing Order...' : `Place Order - ${formatPrice(getTotalPrice())}`)
      )
    ),

    React.createElement('div', { className: 'cart-summary' },
      React.createElement('h2', { className: 'cart-summary__title' }, 'Order Summary'),
      ...cart.map(item =>
        React.createElement('div', { key: item.id, className: 'cart-summary__item' },
          React.createElement('span', null, `${item.title} (${item.quantity}x)`),
          React.createElement('span', null, formatPrice(item.discountPrice * item.quantity))
        )
      ),
      React.createElement('div', { className: 'cart-summary__item cart-summary__total' },
        React.createElement('span', null, 'Total:'),
        React.createElement('span', null, formatPrice(getTotalPrice()))
      )
    )
  );
};

// Categories Page
const CategoriesPage = ({ categories, onNavigate }) => {
  return React.createElement('div', { className: 'container section' },
    React.createElement('div', { className: 'section__header' },
      React.createElement('h1', { className: 'section__title' }, 'Book Categories'),
      React.createElement('p', { className: 'section__subtitle' }, 'Explore books by genre and category')
    ),
    React.createElement('div', { className: 'grid grid--3' },
      ...categories.map(category =>
        React.createElement('div', {
          key: category.id,
          className: 'category-card',
          onClick: () => onNavigate('books')
        },
          React.createElement('h3', { className: 'category-card__name' }, category.name),
          React.createElement('p', null, category.description),
          React.createElement('p', { className: 'category-card__count' }, `${category.bookCount} books available`)
        )
      )
    )
  );
};

// Footer Component
const Footer = ({ onNavigate }) => {
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'footer__content' },
      React.createElement('div', { className: 'footer__section' },
        React.createElement('h3', { className: 'footer__title' }, 'BookHaven'),
        React.createElement('p', null, 'Your trusted online bookstore for discovering amazing books and authors.'),
        React.createElement('p', null, '📧 contact@bookhaven.com'),
        React.createElement('p', null, '📞 1-800-BOOKS-NOW')
      ),
      React.createElement('div', { className: 'footer__section' },
        React.createElement('h4', { className: 'footer__title' }, 'Quick Links'),
        React.createElement('a', { 
          href: '#', 
          className: 'footer__link',
          onClick: (e) => { e.preventDefault(); onNavigate('books'); }
        }, 'All Books'),
        React.createElement('a', { 
          href: '#', 
          className: 'footer__link',
          onClick: (e) => { e.preventDefault(); onNavigate('categories'); }
        }, 'Categories'),
        React.createElement('a', { 
          href: '#', 
          className: 'footer__link',
          onClick: (e) => { e.preventDefault(); onNavigate('cart'); }
        }, 'Shopping Cart')
      )
    ),
    React.createElement('div', { className: 'footer__bottom' },
      React.createElement('p', null, '© 2025 BookHaven. All rights reserved. Made with ❤️ for book lovers.')
    )
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books] = useState(SAMPLE_BOOKS);
  const [categories] = useState(CATEGORIES);

  // Load saved data on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('bookhaven_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      
      const savedUser = localStorage.getItem('bookhaven_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bookhaven_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cart]);

  // Save user to localStorage
  useEffect(() => {
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

  const handleAddToCart = (book, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity }];
      }
    });
  };

  const handleUpdateCart = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedBook(null);
  };

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const handleSearch = (query) => {
    setCurrentPage('books');
  };

  const handleOrderComplete = () => {
    setCart([]);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'books':
        return React.createElement(BooksCatalog, {
          books,
          categories,
          onAddToCart: handleAddToCart,
          onViewDetails: handleViewDetails
        });
      case 'categories':
        return React.createElement(CategoriesPage, {
          categories,
          onNavigate: handleNavigate
        });
      case 'cart':
        return React.createElement(ShoppingCart, {
          cart,
          onUpdateCart: handleUpdateCart,
          onRemoveFromCart: handleRemoveFromCart,
          onNavigate: handleNavigate,
          currentUser
        });
      case 'auth':
        return React.createElement(AuthForm, {
          onLogin: handleLogin,
          onNavigate: handleNavigate
        });
      case 'checkout':
        return React.createElement(CheckoutForm, {
          cart,
          onOrderComplete: handleOrderComplete,
          onNavigate: handleNavigate,
          currentUser
        });
      default:
        return React.createElement(Homepage, {
          books,
          categories,
          onAddToCart: handleAddToCart,
          onViewDetails: handleViewDetails,
          onNavigate: handleNavigate
        });
    }
  };

  return React.createElement('div', { className: 'app' },
    React.createElement(Header, {
      cartCount: getCartCount(),
      currentUser,
      onNavigate: handleNavigate,
      onSearch: handleSearch,
      onLogout: handleLogout
    }),
    React.createElement('main', null,
      renderCurrentPage()
    ),
    selectedBook && React.createElement(BookDetailsModal, {
      book: selectedBook,
      onClose: () => setSelectedBook(null),
      onAddToCart: handleAddToCart
    }),
    React.createElement(Footer, { onNavigate: handleNavigate })
  );
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  try {
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
  } catch (error) {
    console.error('Error rendering app:', error);
  }
});