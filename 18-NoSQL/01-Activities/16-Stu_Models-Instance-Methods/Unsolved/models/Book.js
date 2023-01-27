const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mangoose.bookSchema({
name: { type: String, required: true},
totalStock: Number,
lastAccessed: {type: Date, default: Date.now },
})

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function (){
  console.log('what is this', this.title

  )
} 

// TODO: Create a model named `Book`

// TODO: Create a new instance of the model

// TODO: Call the custom instance method on the instance

module.exports = Book;
