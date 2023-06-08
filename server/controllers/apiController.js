const apiController = {};

apiController.getLore = async (req, res, next) => {
  const { query, pageNum } = req.body
  try {
    const response = await fetch(`https://xivapi.com/lore?string=${query}&columns=Text,Data&page=${pageNum}&private_key=${process.env.PRIVATE_KEY}`);
    const data = await response.json()
    res.locals.lore = data
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