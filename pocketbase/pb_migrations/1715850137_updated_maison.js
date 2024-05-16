/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s6cn89f2xc02nmq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0e5badj",
    "name": "id_agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2s33ejpcpmeh3lc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s6cn89f2xc02nmq")

  // remove
  collection.schema.removeField("m0e5badj")

  return dao.saveCollection(collection)
})
