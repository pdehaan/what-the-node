#!/usr/bin/env node

const lib = require("./lib");

main();

async function main(count = process.env.COUNT || 5) {
  try {
    let releases = await lib.recentNodeVersions(count);
    releases.forEach(release => {
      const version = release.version.padStart(10, " ");
      const date = new Date(release.date).toLocaleDateString([], {
        dateStyle: "long"
      });
      const security = release.security ? "SECURITY RELEASE" : "";
      const lts = release.lts ? `LTS (${release.lts})` : "";
      console.log(`${version}\t${date}\t${lts}\t${security}`);
    });
  } catch (err) {
    console.error(err.message);
    process.exit = 1;
  }
}
