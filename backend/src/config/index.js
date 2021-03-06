require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  youtubeAPI: {
    search: "https://www.googleapis.com/youtube/v3/search",
    videos: "https://www.googleapis.com/youtube/v3/videos",
  },
};
