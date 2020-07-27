import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: Date
}, {
    timestamps: {createdAt: true, updatedAt: true},
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            /* Altera o retorno, bem legal, troca _id por id */
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false,
})

const PostsModel = Mongoose.model('Posts', schema)
export default PostsModel
