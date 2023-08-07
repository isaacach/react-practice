import PropTypes from 'prop-types';
import className from 'classnames';

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

  const classes = className({
    'bg-blue-500 border-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4': primary,
    'bg-gray-500 border-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4': secondary,
    'bg-green-500 border-green-700 hover:bg-green-700 text-white font-bold py-2 px-4': success,
    'bg-yellow-500 border-yellow-700 hover:bg-yellow-700 text-white font-bold py-2 px-4': warning,
    'bg-red-500 border-red-700 hover:bg-red-700 text-white font-bold py-2 px-4': danger,
    'border-2': outline,
    'rounded-full': rounded
  });




  return (
    <button className={classes}>{children}</button>
  )
}