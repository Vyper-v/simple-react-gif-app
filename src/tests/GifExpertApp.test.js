import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";
describe("app test", () => {
  test("should be rendered", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should show categories list", () => {
    const categories = ["Dragon Ball Z", "One Piece"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifLayout").length).toBe(categories.length); 
  });
});
