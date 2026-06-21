import fs from "node:fs/promises";
import { exec } from "node:child_process";

// show how-to-use screen if given no arguments
if (process.argv.length < 3) {
    console.log(
        "HOW TO USE:\n",
        "   makescript <FILENAME>.js"
    );
    process.exit(0);
}

let fileDir = `./${process.argv[2]}`;
try {
    await fs.access(fileDir);
} catch {
    try {
        fileDir = `../${process.argv[2]}`;
        await fs.access(fileDir);
    } catch {
        console.log(`could not find path ${fileDir}`)
        process.exit(1);
    }
}

import(fileDir).then(build).catch((err) => {
    console.log(fileDir);
    console.error(err);
});

/**
 * Build project using the build script provided
 * @param {object} buildScript build script module
 * @throws if build can't be completed and/or failed
 */
async function build(buildScript) {
    validateSources(buildScript.sources);
    //console.log(buildScript.sources);
    //console.log(buildScript.binaryDirectory);
    //console.log(buildScript.programArguments);

    const workingDir = `${fileDir}../`;
    const accessDir = `${workingDir}/${buildScript.binaryDirectory}`;

    try {
        fs.access(accessDir);
    } catch {
        console.log("creating binary directory ...");
        await fs.mkdir(accessDir);
    }

    exec(`${buildScript.compiler} ${buildScript.sources.join(" ")} -o ${buildScript.binaryDirectory}/${buildScript.binaryName}`);
}

/**
 * Validates sources
 * @param {string[]} sources list of source files
 * @throws Error object if sources could not be validated
 */
function validateSources(sources) {
    if (typeof sources === "undefined") 
        throw new Error("Sources not given in file: "+fileDir);
}



