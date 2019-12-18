const greeter = (name = 'user', age) => {
    console.log('Hello ' + name);
}

greeter('Diego')
greeter()

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

const product = {
    label: 'Red notebook',
    stock: 201,
}

transaction('order')
transaction('order', product)