const { google } = require("googleapis");

/**
 * Returns all tags
 * @param req
 * @param res
 */
exports.getSearch = async (req, res) => {
  try {    
    let parameters = {
      key: process.env.YOUTUBE_TOKEN,
      part: "snippet",
      q: req.params.keyword,
      maxResults: req?.query?.maxResults,
    };
    if (!!req?.query?.pageKey && req?.query?.pageKey !== 'null') parameters.pageToken = req.query.pageKey;
    let response = await google.youtube("v3").search.list(parameters);
    return res.status(200).send(response);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
};
