import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifLayout from './components/GifLayout';

function GifExpertApp(  ){
  const [categories, setCategories] = useState(["Overwatch"]);

  function handleAdd(category){
    setCategories([category,...categories]);
  }

  return (
    <div className='bg-lime-100 divide-y-2'>
      <div className=' container mx-auto divide-y divide-neutral-500 divide-dashed'>
        <h2 className='text-4xl mb-8 leading-normal'>GifExpertApp</h2>
        <div className='flex justify-between px-2 py-4'>
          <AddCategory setCategories={handleAdd}/>
        </div>
      </div>
      <div className="container mx-auto space-y-2">
      { categories.map( category => <GifLayout key={category} category={category}/>) }
      </div>
        
    </div>
  );
}

export default GifExpertApp;