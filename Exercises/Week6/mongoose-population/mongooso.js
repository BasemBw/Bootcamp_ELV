const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/Exercises", { useNewUrlParser: true })

const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
  })
  
  const reviewSchema = new Schema({ 
    book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
    reviewText: String,
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
  })

const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


let b1 = new Book({
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    reviews: []
})

let c1 = new Critic({
    name: "William Jeffery",
    reviews: []
})

let r1 = new Review({
    book: b1,
    critic: c1,
    reviewText: "Excellent Book"
})


/* b1.reviews.push(r1)
c1.reviews.push(r1)

b1.save()
c1.save()
r1.save() */

/* Review.find({},function(err,result){
  console.log(result)
})
 */
/* Review.find({}).populate("book critic").exec(function(err,result){
  console.log(result[1])
}) */

/* Review.findOne({})
    .populate('book')
    .exec(function (err, reviews) {
        console.log(reviews)
    }) */

    Review.findOne({})
    .populate({
        path: 'book',
        populate: {
            path: 'reviews',
            populate: {
              path:'book critic'
            }
        }
    })
    .exec(function (err, reviews) {
        console.log(reviews.book.reviews[0].book.title)
    })
    