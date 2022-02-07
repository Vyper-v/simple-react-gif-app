import { AddCategory } from "../../components";
import {shallow} from 'enzyme';


const simulateInputChange = (wrapper,inputSelector,newValue) =>{
  const input = wrapper.find(inputSelector);
  input.simulate('change',{target:{value:newValue}})
  return wrapper.find(inputSelector);
}

describe('AddCategory Component tests', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

  beforeEach(()=>{
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  })

  test('should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('input field should be change', () => {
    const value = "Hello";
    const inputValue = simulateInputChange(wrapper,'input',value);
    expect(inputValue.prop('value')).toBe(value);
  });

  test('setCategories should not be called without input', () => {
    // simulateInputChange(wrapper,'input',""); reset input
    wrapper.simulate('submit',{ preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('setCategories should be called and cleared the input', () => {
    const testValue = "overwatch";
    let input = simulateInputChange(wrapper,'input',testValue);
    wrapper.simulate('submit',{preventDefault(){}})
    input = wrapper.find('input');
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(input.prop('value')).toBe('');
  });
  
  
  
  
});
