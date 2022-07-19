import css from './button.module.css'
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
    return (
        <div className={css.btnComponent} >
            <button className={css.btnLoadMore} type="button" onClick={onClick}>Load More</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};