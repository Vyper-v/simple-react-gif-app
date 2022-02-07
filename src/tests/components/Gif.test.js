import {Gif} from '../../components/index';
// import getGifs from '../../helpers/getGifs';
import {shallow} from 'enzyme';

describe('Gif Component tests', () => {
  const title = 'Test';
  const url = 'https://picsum.photos/200/300';
  const wrapper = shallow(<Gif title={title} url={url} />);
  
  

  test('should be rendered correctly', async () => {
    // const category = 'Overwatch';
    // const gifData = await getGifs(category)
    expect(wrapper).toMatchSnapshot();
  });

  test('should have span with text', () => {
    const span = wrapper.find('span').text().trim();
    expect(span).toBe(title);
  });

  test('should have image', () => {
    const img = wrapper.find('img');
    const {src,alt} = img.props();
  
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should have a class "flex"', () => {
    const {className} = wrapper.props();
    expect(className.includes("flex")).toBe(true);
  });
  
  
  
  
});
