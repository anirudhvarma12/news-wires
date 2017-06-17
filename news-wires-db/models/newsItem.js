const NewsItem = (sequelize, DataTypes) => {
  return sequelize.define('NewsItem', {
    url: {
      comment: 'The url where the news item can be accessed',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: true
      }
    },
    headline: {
      comment: "The headline of the news item", // FIXME useless
      type: DataTypes.STRING,
      allowNull: false
    },
    newsSourceId: {
      comment: "FK to NewsSource",
      type: DataTypes.INTEGER,
      allowNull: false,
      model: 'news_source',
      key: 'id'
    }
  });
};

NewsItem.associate = function (models) {
  models.NewsItem.belongsTo(models.NewsSource, {foreignKey: 'newsSourceId'});
};

module.exports = NewsItem;
