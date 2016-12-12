var data = require('../products.json')

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array

function getItemsCount (itemData) {
  return itemData.items.length
}

 * Define and use your functions here

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data))

*/

function getItems (objectData) {
  return objectData
}

// console.log(getItems(data.items))

function getItemsByBrand (items, brand) {
  var result = []
  for (var i = 0; i < items.length; i++) {
    if (items[i]['product']['brand'] === brand) {
      var add = getItems(items[i])
      result.push(add)
    }
  }
  return result
}

// console.log(getItemsByBrand(data.items, 'Panasonic'))

function getItemsByAuthor (items, author) {
  var result = []
  for (var j = 0; j < items.length; j++) {
    if (items[j]['product']['author']['name'].includes(author)) {
      var add = getItems(items[j])
      result.push(add)
    }
  }
  return result
}

// console.log(getItemsByAuthor(data.items, 'eBay'))

function getAvailableProducts (items) {
  var result = []
  for (var k = 0; k < items.length; k++) {
    for (var l = 0; l < items[k]['product']['inventories'].length; l++) {
      if (items[k]['product']['inventories'][l]['availability'] === 'inStock') {
        var add = getItems(items[k])
        result.push(add)
      }
    }
  }
  return result
}

// console.log(getAvailableProducts(data.items))

// console.log(getItemsByBrand(data.items, 'Sony'))
// console.log(getAvailableProducts(getItemsByBrand(data.items, 'Sony')))
// console.log(getAvailableProducts(getItemsByAuthor(data.items, 'Adorama Camera')))
// console.log(getItemsByAuthor(getItemsByBrand(data.items, 'Nikon'), 'eBay'))
