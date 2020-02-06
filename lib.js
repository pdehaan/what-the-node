const util = require("util");

const _orderBy = require("lodash.orderby");
const $nodeVersionData = require("node-version-data");
const nodeVersionData = util.promisify($nodeVersionData);

module.exports = { nodeVersionData, recentNodeVersions };

async function recentNodeVersions(count = 10) {
  const versions = await nodeVersionData();
  return _orderBy(versions, ["date"], ["desc"]).slice(0, count);
}
