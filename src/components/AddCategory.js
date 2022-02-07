import React,{useState} from 'react';
import PropTypes from 'prop-types';


function AddCategory({ setCategories }) {
  const [value, setValue] = useState('');
  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value !== ''){
      setCategories(categs => [value,...categs]);
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input className="p-1 outline-1" type="text" placeholder='Type something...' value={value} onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};


export default AddCategory;
