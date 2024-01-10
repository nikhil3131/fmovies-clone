function notFound(req,res){
    res.status(404).send("route doesnot exists")
}

module.exports = notFound