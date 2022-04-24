import PropTypes from 'prop-types';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './ProductReviews.css';

class ProductReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      evaluation: [],
      rating: 0,
    };
  }

  componentDidMount() {
    this.onLoadProductReviews();
  }

  onLoadProductReviews = () => {
    const {
      match: { params },
    } = this.props;
    const evaluation = JSON.parse(localStorage.getItem(params.id));
    if (evaluation) {
      this.setState({
        evaluation,
      });
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { email, message, rating, evaluation } = this.state;
    const rate = { email, message, rating };
    this.setState(
      {
        evaluation: [...evaluation, rate],
        email: '',
        message: '',
        rating: 0,
      },
      this.storageEvaluations,
    );
  };

  storageEvaluations = () => {
    const {
      match: { params },
    } = this.props;
    const { evaluation } = this.state;
    localStorage.setItem(params.id, JSON.stringify(evaluation));
    this.onLoadProductReviews();
  };

  render() {
    const { email, message, rating, evaluation } = this.state;
    const maxRating = 5;
    return (
      <aside className="ProductReviews">
        <h2>Avalie esse produto</h2>
        <form>
          <section className="infoContainer">
            <label htmlFor="product-detail-email">
              <input
                className="email"
                name="email"
                type="email"
                value={ email }
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </label>
            <ol className="ProductReviews-rating-container">
              {[...Array(maxRating)].map((_, i) => {
                const index = i + 1;
                return (
                  <li key={ index }>
                    <label
                      htmlFor={ `${index}-${rating}` }
                      className="ProductReviews-rating-label"
                    >
                      <input
                        id={ `${index}-${rating}` }
                        type="radio"
                        name="rating"
                        value={ index }
                        onChange={ this.handleChange }
                      />
                      <span>
                        {rating >= i + 1 ? <FaStar /> : <FaRegStar />}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ol>
          </section>
          <label htmlFor="message">
            <textarea
              value={ message }
              name="message"
              placeholder="Mensagem (opcional)"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSubmit }
            disabled={
              email.length === 0 || message.length === 0 || rating === 0
            }
          >
            Avaliar
          </button>
        </form>
        <section className="container">
          {!evaluation.length ? (
            <p className="ProductReviews-noreview">
              Este produto ainda não tem avaliações
            </p>
          ) : (
            evaluation.map((item, i) => (
              <section className="ProductReviews-review" key={ i }>
                <div className="info">
                  <h4>{item.email}</h4>
                  <ol>
                    {[...Array(maxRating)].map((_, index) => (
                      <li key={ index }>
                        <span className="Review-score">
                          {index + 1 <= Number(item.rating) ? (
                            <FaStar />
                          ) : (
                            <FaRegStar />
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
                <p>{item.message}</p>
              </section>
            ))
          )}
        </section>
      </aside>
    );
  }
}

ProductReviews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductReviews;
