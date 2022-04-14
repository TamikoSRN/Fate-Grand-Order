const axios = require("axios");

const getSingularityInfo = async () => {
  const api = await axios.get(
    "https://api.atlasacademy.io/export/NA/nice_war.json"
  );

  const singularityInfo = await api.data.map((el) => {
    return {
        id: el.id,
        age: el.age,
        name: el.name,
        originalLongName: el.originalLongName,
        banner: el.banner,
        headerImage: el.headerImage,
        bgm: {
            id: el.id,
            name: el.name,
            audioAsset: el.audioAsset,
        }
    };
  });
  return singularityInfo;
};

module.exports = {
    getSingularityInfo,
  };