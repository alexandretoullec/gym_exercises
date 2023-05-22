export const exerciseOption = {
    
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': 'c40a48e90amsh27a16b1bf10f4d7p159fc6jsn8c1d9e3e9e0b',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const fetchData = async (url,options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data
}


export const youtubeOptions = {
  method: 'GET',
    
  headers: {
    'X-RapidAPI-Key': 'c40a48e90amsh27a16b1bf10f4d7p159fc6jsn8c1d9e3e9e0b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};