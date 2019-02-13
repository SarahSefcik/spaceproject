module.exports = function (sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
};