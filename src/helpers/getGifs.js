async function getGifs(category,limit=3){
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  const {data} = await response.json();
  const cleanData = data.map( img  => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  return cleanData;
}

export default getGifs;