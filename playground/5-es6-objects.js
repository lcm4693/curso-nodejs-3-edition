// Object property shorthand 

const name = 'Andrew';
const userAge = 27

const user = {
    // name: name,
    name,
    age: userAge,
    location: 'Rio de Janeiro'
}

console.log(user)

// Object edstructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    tax: 4.2
}

//Cria variáveis a partir dos valores de product
const {label:productLabel, stock, rating, tax = 5} = product

//Foi criada uma variável productLabel com o valor de label em product
console.log(productLabel)
console.log(stock)

//Essa variável não existe no product, logo virá undefined
console.log(rating)

//A variável criada existe em product, dessa forma, ela usa o valor do objeto.
//Caso não existisse, seria usado o valor padrão de 5 definido na linha 26
console.log(tax)

const transaction = (type, { label, stock}) => {
    console.log(type, label, stock)
}


transaction('order', product)