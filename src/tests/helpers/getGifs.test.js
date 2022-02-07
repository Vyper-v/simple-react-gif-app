import getGifs from "../../helpers/getGifs";

describe('getGifs tests', () => {
  const category = "Monster";
  test('should be return 10 elements', async() => {
    const limit = 10;
    const gifs = await getGifs(category,limit);
    expect(gifs.length).toBe(limit);
  });
  
});
