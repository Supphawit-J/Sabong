'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username',10).notNullable().unique()
      table.string('email', 60).notNullable().unique()
      table.string('password', 16).notNullable()
      table.string('fname', 60)
      table.string('lname', 60)
      table.integer('age', 2)
      table.string('address', 120)
      table.date('birthday', 20)
      table.integer('tel', 10)
      
      
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
