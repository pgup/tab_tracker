// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {})

    History.associate = function (models) {
      History.belongsTo(models.User) //i did models.Users got error
      History.belongsTo(models.Song)
    }

    return History
  }
  