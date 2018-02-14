// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {})

    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User) //i did models.Users got error
      Bookmark.belongsTo(models.Song)
    }

    return Bookmark
  }
  