'use strict'

const dbConn = require('../../config/db.config')

var Developer = function(developer) {
  this.first_name = developer.first_name;
  this.last_name = developer.last_name;
  this.email = developer.email;
  this.phone = developer.phone;
  this.knowledge = developer.knowledge;
  this.experiences = developer.experiences;
  this.created_at = new Date();
  this.updated_at = new Date();
}

Developer.findById = (id, result) => {
  dbConn.query('SELECT * FROM developers WHERE id=?', [id], (err, res) => {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

Developer.findAll = (result) => {
  dbConn.query('SELECT * FROM developers', (err, res) => {
    if (err) {
      console.log(err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
};

Developer.create = (newDev, result) => {
  dbConn.query('INSERT INTO developers set ?', newDev, (err,res) => {
    if (err) {
      console.log(err)
      result(null, err)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

Developer.update = (id, dev, result) => {
  dbConn.query('UPDATE developers SET first_name=?, last_name=?, email=?, phone=?,knowledge=?, experiences=? WHERE id=?',
  [ 
    dev.first_name,
    dev.last_name,
    dev.email,
    dev.phone,
    dev.knowledge,
    dev.experiences,
    id
  ], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

Developer.delete = (id, result) => {
  dbConn.query('DELETE FROM developers WHERE id=?', [id], function(err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}


module.exports = Developer;
