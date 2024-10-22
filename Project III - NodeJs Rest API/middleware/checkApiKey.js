require('dotenv').config();

exports.checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    console.log("Received API Key:", apiKey); // Log the received API key
    console.log("Expected API Key:", process.env.API_KEY); // Log the expected API key
    
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(403).json({ error: "Forbidden: Invalid API Key" });
    }
};
