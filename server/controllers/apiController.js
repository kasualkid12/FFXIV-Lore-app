const { private_key } = require('../config');

const apiController = {};

apiController.getLore = async (req, res, next) => {
  const { query } = req.body
  try {
    const response = await fetch(`https://xivapi.com/lore?string=${query}&columns=Text,Data&page=1&private_key=${private_key}`);
    const data = await response.json()
    res.locals.lore = data
    console.log(data)
    return next()
  }
  catch(err) {
    return next({
      log: 'Error in apiController.getLore' + err,
      message: {
        err: 'An error occured, check server logs'
      }
    })
  }
}

module.exports = apiController;