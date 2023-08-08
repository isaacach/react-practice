/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronDown } from 'react-icons/hi';

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  Accordion.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      })
    ).isRequired
  }

  const handleClick = (nextIndex) => {
    if (nextIndex === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(nextIndex);
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = isExpanded ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />;

    return (
      <div key={item.id}>
        <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
          {item.title}
          <span>{icon}</span>
          </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });
  return <div className='border-x border-t rounded'>{renderedItems}</div>;
}
