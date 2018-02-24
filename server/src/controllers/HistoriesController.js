const { History, Song, User } = require('../models')
const _ = require('lodash')
//endpoint to get the bookmark
module.exports = {
  async index(req, res) {
    try {


      const {userId } = req.query
      
      const histories = await History.findAll({
        where: {
            UserId: userId

        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {}, 
          history.Song, 
          history
        ))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body
     
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create history object'
      })
    }
  }
  
}

/*

const {Bookmark,} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },

  async post (req, res) {
    try {
      const userId = req.user.id
      console.log("1")
      const {songId} = req.body
      console.log("2")
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log("3")
      if (bookmark) {
        console.log("4")
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      console.log("5")
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      console.log("6")
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },

  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}


*/