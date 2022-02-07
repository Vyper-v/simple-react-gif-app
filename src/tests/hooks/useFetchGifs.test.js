import { useFetchGifs } from "../../hooks/useFechGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('first', () => {
  test('debe retornar el estado inicial', async () => {
    const {result , waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
    const {data,loading} = result.current;
    await waitForNextUpdate({timeout:2000});

    expect(Array.isArray(data)).toBe(true);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe retornar un arreglo de imagenes y el estado de loading en false', async () => {
    const {result , waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate({timeout:2000});
    const {data,loading} = result.current;
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(3);
    expect(loading).toBe(false);
  });
  
});
