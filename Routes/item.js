const { getitems, getItem, addItem } = require("../controller/items")

const Item = {
    type: 'object',
    properties:{
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

// Options to get items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getitems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

const postItem = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string'}
            }

        },
        response: {
            201: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: addItem
}

function itemRoutes(fastify, options, done) {

    fastify.post('/items', postItem)
    fastify.get('/items', getItemsOpts )
    fastify.get('/item/:id', getItemOpts)
    done()
}

module.exports = itemRoutes