import GifLayout from "../../components/GifLayout";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFechGifs";
jest.mock("../../hooks/useFechGifs");

describe("GifLayout", () => {
  const category = "One Punch";

  test("should rendered", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifLayout category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imagenes con useFetchGifhs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifLayout category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("Gif").length).toBe(gifs.length);
  });
});
