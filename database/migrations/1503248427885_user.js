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
      table.string('fname', 60).notNullable()
      table.string('lname', 60).notNullable()
      table.integer('age', 2).notNullable()
      table.string('address', 120).notNullable()
      table.date('birthday', 20).notNullable()
      table.integer('tel', 10).notNullable()
      
      
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
