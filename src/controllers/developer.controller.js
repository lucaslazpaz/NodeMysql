'use stricts'

const Developer = require('./../models/developer.model')

exports.findById = (req, res) => {
  Developer.findById(req.params.id, (err, developer) => {
    if (err) {
      res.send(err)
    }
    res.json(developer)
  })
}

exports.findAll = (req, res) => {
  Developer.findAll((err, developer) => {
    if (err) {
      res.send(err)
    }
    res.send(developer)
  });
}

exports.create = (req, res) => {
  const new_developer = new Developer(req.body)

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: 'Please provide all required fields'
    })
  } else {
    Developer.create(new_developer, (err, developer) => {
      if (err) {
        res.send(err)
        console.error(err)
      }
      res.json({
        error: false,
        message: 'Developer added successfully',
        data: developer
      })
    })
  }
}

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: 'Please provide all required fields'
    })
  } else {
    Developer.update(req.params.id, new Developer(req.body), (err, developer) => {
      if (err) {
        res.send(err)
      }
      res.json({
        error: false,
        message: 'Developer successfully updated'
      })
    })
  }
}

exports.delete = (req, res) => {
  Developer.delete(req.params.id, (err, developer) => {
    if (err) {
      res.send(err)
    }
    res.json({
      error: false,
      message: 'Developer successfully deleted'
    })
  })
}