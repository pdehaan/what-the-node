const util = require("util");

const _orderBy = require("lodash.orderby");
const $nodeVersionData = require("node-version-data");
const nodeVersionData = util.promisify($nodeVersionData);

module.exports = {
  nodeVersionData,
  recentNodeVersions,
  byDateRange
};

async function recentNodeVersions(count = 10) {
  const versions = await nodeVersionData();
  return _orderBy(versions, ["date"], ["desc"]).slice(0, count);
}

async function byDateRange(startDate, endDate=new Date()) {
  const versions = await nodeVersionData();
  const filtered = versions.filter(version => {
    const versionDate = new Date(version.date);
    return versionDate >= startDate && versionDate <= endDate;
  });
  return _orderBy(filtered, ["date"], ["desc"]);
}
