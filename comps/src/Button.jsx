import PropTypes from 'prop-types';

export default function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {

  Button.propTypes = {
    children: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    checkVariationValidity: ({ primary, secondary, success, warning, danger }) => {
      const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
      if (count > 1) {
        return new Error(
          `Invalid prop, you can only use one variation at a time.`
        );
      }
    }
  }

  


  return (
    <button>{children}</button>
  )
}