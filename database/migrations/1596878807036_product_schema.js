'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('username',10).notNullable().unique()
      table.string('type',60).notNullable()
      table.integer('quantity', 120).notNullable()
      table.integer('price', 10).notNullable()
      table.string('detail',60).notNullable()
      table.string('code',60).notNullable()
      table.string('name-product',60).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
