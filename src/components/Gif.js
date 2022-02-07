import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({title,url}) => {
  return <div className='flex flex-col justify-center items-baseline rounded overflow-hidden shadow shadow-lime-500 bg-lime-200 text-lime-700 transition-all'>
    <img className='object-cover w-full h-[20rem]' src={url} alt={title} />
    <span className='text-lg p-4 flex-auto'>{title}</span>
  </div>;
};

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Gif;
