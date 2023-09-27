import axios from 'axios'

const searchImages= async (term)=>{
   const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID FAXa9r1bmyQZi8wjC2WR7TAXtEBJ2RGvD8qnunTbd5Y'
        },
        params:{
            query: term,
        },
    });
    return response.data.results;

};

export default searchImages;