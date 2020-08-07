'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profile', (table) => {
      table.increments()
      table.integer("age")
      table.string("name")
      // table.string("lastname")
      table.timestamps()
    })
  }

  down () {
    this.drop('profile')
  }
}

module.exports = ProfileSchema
