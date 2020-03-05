const lib = require("./lib");

main();

async function main() {
  const startDate = new Date("Feb 28, 2020");
  const endDate = new Date();
  const recent = await lib.byDateRange(startDate, endDate);
  console.log(recent);
}
