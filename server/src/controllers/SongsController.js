const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.creat(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurd trying to create the songs'
      })
    }
  }
}
