exports.checkApi = (req, res, next) => {
	console.log("this is a text from the middleware")
	next()
}
