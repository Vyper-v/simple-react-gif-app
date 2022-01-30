import PropTypes from 'prop-types';

import Gif from './Gif';
import { useFetchGifs } from '../hooks/useFechGifs';
import './GifLayout.css'

const GifLayout = ({category}) => {
  const {data:images,loading} = useFetchGifs(category);

  return (
  <div className='grid autoLayout gap-2'>
    { loading && <p className='text-center'>Loading...</p> }
    { images.map( (img) =>  <Gif key={img.id} {...img}/> ) }
  </div>
  );
};

GifLayout.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifLayout;
