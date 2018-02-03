module.exports = {

    getPosts(req,res){
        res.status(200).send(req.store.posts)
    },
    addPost(req,res){
        var newPost = req.body
        var postId = req.store.posts.length
        store.posts.push(newPost)
        res.status(201).send({postId:postId})
    },
    updatePost(req,res){
        req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.body] , req.body)
        res.status(200).send(req.store.posts[req.params.postId])
    },
    removePost(req,res){
        req.store.posts.splice(req.params.postId,1)
        res.status(204).send()
    }
}