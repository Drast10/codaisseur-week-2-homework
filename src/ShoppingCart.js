
class ShoppingCart {

    constructor() {
        this.items = [];
    }

    getItems() {
        //console.log('getItems'+this.items)
        return this.items;
    }
    addItem(itemName, quantity, price) {
        let item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.items.push(item)

    }
    clear() {
        this.items = []
    }
    total() {
        let totalSum = this.items.reduce((totalvalue, currentItem) => {
            //console.log('Accum:', totalvalue)
            //console.log('current:',currentItem)
            let itemPrice = currentItem.quantity * currentItem.pricePerUnit
            //console.log(result)
            // console.log(totalvalue + result)
            return totalvalue + itemPrice
        }, 0)
        return totalSum
    }

}
let cart = new ShoppingCart()
cart.getItems()
cart.addItem('dress', 1, 20.80)
cart.getItems()
cart.clear()
cart.getItems()

module.exports = ShoppingCart