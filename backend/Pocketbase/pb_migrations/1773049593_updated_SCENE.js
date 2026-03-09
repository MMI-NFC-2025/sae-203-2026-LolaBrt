/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3849032577")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3932066198",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_loc_scene",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3849032577")

  // remove field
  collection.fields.removeById("file3932066198")

  return app.save(collection)
})
