//import fs from "node:fs/promises";

// show how-to-use screen if given no arguments
if (process.argv.length < 3) {
    console.log(
        "HOW TO USE:\n",
        "   makescript <FILENAME>.js"
    );
    process.exit(0);
}


const filename = process.argv[2];
import(`../${filename}`).then((mod) => {
    console.log(mod.sources);
});



