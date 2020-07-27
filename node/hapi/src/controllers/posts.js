import Boom from 'boom'

class PostsController {

    constructor(Posts) {
        this.Posts = Posts;
    }

    async find(request) {
        const {id} = request.params
        const query = {}

        if (id) query._id = id

        try {
            const posts = await this.Posts.find(query)
            return {posts}
        } catch (error) {
            return Boom.badRequest('Failed to find user')
        }
    }

    async create(request, h) {
        try {
            const user = new this.Users(request.payload)
            await user.save()
            return h.response().code(201)
        } catch (error) {
            return Boom.badRequest(error)
        }
    }

    async update(request, h) {

        const {id} = request.params

        /*
        * request.payload, { new: true }
        * O Joi verificando se está tudo OK
        */

        try {
            const updatedUser = await this.Users.findOneAndUpdate(
                {_id: id},
                request.payload, {
                    new: true,
                }
            );

            if (updatedUser) {
                return h.response().code(200)
            }

            return Boom.badRequest('Could not update the user')
        } catch (error) {
            return Boom.badRequest(error)
        }
    }

    async delete(request) {
        const {id} = request.params
        console.log(id)
        return Boom.notImplemented()
    }
}

export default PostsController
