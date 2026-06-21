//import fs from "node:fs/promises";

// show how-to-use screen if given no arguments
if (process.argv.length < 3) {
    console.log(
        "HOW TO USE:\n",
        "   makescript <FILENAME>.js"
    );
    process.exit(0);
}

const filedir = process.argv[2];
import(`../${filedir}`).then(build).catch((err) => {
    console.error(err);
});

/**
 * Build project using the build script provided
 * @param {Object} buildScript build script module
 * @throws if build can't be completed and/or failed
 */
function build(buildScript) {
    validateSources(buildScript.sources);
    console.log(buildScript.sources);
    console.log(buildScript.binaryDirectory);
    console.log(buildScript.programArguments);
}

/**
 * Validates sources
 * @param {string[]} sources list of source files
 * @throws Error object if sources could not be validated
 */
function validateSources(sources) {
    if (typeof sources === "undefined") 
        throw new Error("Sources not given in file: "+filedir);
}



