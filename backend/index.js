require('dotenv').config({path: '../.env'});
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 5000;
const baseURL = 'https://youtube.googleapis.com/youtube/v3';
const watch_url = 'https://www.youtube.com/watch?v=';
const api_key = process.env.API_KEY;

app.use(cors());


// this func accesses youtube video categories and return a list of titles
async function getCategories(){
  try {
    const url = `${baseURL}/videoCategories?part=snippet&hl=en&regionCode=SA&key=${api_key}`;
    const response = await axios.get(url);

    const list = response.data.items.map(item => {
      return {
        id: item.id,
        title: item.snippet.title.toLowerCase(),

      }
    });

    return list;

  } catch (error) {
    console.error(error);
  }
}

// select the titles and return a new array with only selected options
async function selectCategoriesId(opt1, opt2, opt3) {

  try {
    const selections = await getCategories();
    const videoID = selections.filter(obj => obj.title == opt1 || obj.title == opt2 || obj.title == opt3);
    return videoID;
  } catch (error) {
    console.error(error);
  }
}

// retrieve the videos by their video categories ids, and return three links to those videos
async function retrieveVideos(opt1, opt2, opt3) {
  try {
    const categoriesList = await selectCategoriesId(opt1, opt2, opt3);
    let searchedVideos = null;
    let ids = null;
    for (let i = 0; i < categoriesList.length; i++) {
      searchedVideos = await axios.get(`${baseURL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=3&regionCode=SA&videoCategoryId=${categoriesList[i].id}&key=${api_key}`);
      ids = searchedVideos.data.items.map(id => id.id);

    }

    const data = ids.map(link => `${watch_url}${link}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}


app.get('/', async (req, res) => {
 
  const vids = await retrieveVideos("gaming");
  
  
  res.json({links: vids})
  
})

app.listen(port, () => {
  console.log(`Altaley server is listening on port: [${port}]`)
})