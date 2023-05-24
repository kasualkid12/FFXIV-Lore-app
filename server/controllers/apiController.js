const { private_key } = require('../config');

const apiController = {};

apiController.getLore = async (req, res, next) => {
  try {
    const response = await fetch(`https://xivapi.com/lore?string=legendary&columns=Text,Data&page=2&private_key=${private_key}`);
    const data = await response.json()
    console.log(data)
    res.locals.lore = 'nothing yet'
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