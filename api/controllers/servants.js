const axios = require("axios");

const getServantsInfo = async () => {
  const api = await axios.get(
    "https://api.atlasacademy.io/export/NA/nice_servant_lore.json"
  );

  const servantsInfo = await api.data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      className: el.className,
      rarity: el.rarity,
      lvMax: el.lvMax,
      extraAssets: {
        charaGraph: {
          ascension: el.extraAssets.charaGraph.ascension,
          costume: el.extraAssets.charaGraph.costume,
        },
        faces: {
          ascension: el.extraAssets.faces.ascension,
          costume: el.extraAssets.faces.costume,
        },
        spriteModel: {
          ascension: el.extraAssets.spriteModel.ascension,
          costume: el.extraAssets.spriteModel.costume,
        },
      },
      noblePhantasms: {
        name: el.noblePhantasms.name,
        card: el.noblePhantasms.card,
        icon: el.noblePhantasms.icon,
      },
    };
  });
  return servantsInfo;
};

module.exports = {
  getServantsInfo,
};