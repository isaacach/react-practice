import PropTypes from 'prop-types';

export default function Accordion({ items }) {

  Accordion.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      })
    ).isRequired
  }

  const renderedItems = items.map((item, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
