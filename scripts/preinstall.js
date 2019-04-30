const { spawn } = require("child_process");

const isWindows = process.platform === "win32";
const where = isWindows ? "where" : "which";

function assertCommandExists(commandName) {
  return new Promise((resolve, reject) => {
    const spawned = spawn(where, [commandName], {
      encoding: "utf8"
    });
    spawned.on("close", exitCode => {
      if (exitCode) {
        reject(commandName);
      } else {
        console.log(`${commandName}: installed`);
        resolve();
      }
    });
    spawned.on("error", err => reject(err));
  });
}

async function main() {
  try {
    await assertCommandExists("python");
    await assertCommandExists("node-pre-gyp");
    console.log();
  } catch (failedCommand) {
    console.error(`Command [${failedCommand}] is not globally installed.`);
    console.error(`Try using \`yarn global add ${failedCommand}\`.`);
    console.error();
    process.exit(1);
  }
}

main();
