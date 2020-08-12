'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('username',10)
      table.string('type',60)
      table.integer('quantity', 120).notNullable()
      table.integer('price', 10).notNullable()
      table.string('detail',60)
      table.string('code',60)
      table.string('nameproduct',60).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
