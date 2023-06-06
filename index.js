const { readJSONFile, writeJSONFile } = require("./src/helpers")

const { index, show } = require("./src/animalsController")
//console.log("List of arguments for this process.argv", process.argv)
//console.log("Our proces Object:", process)

const inform = console.log

function run() {

    inform("Welcome to our Animals App! 🐢")

    let animals = readJSONFile("data", "animals.json")
    console.log("Here is the data read:", animals)


    const action = process.argv[2];
    const animal = process.argv[3];

    let writeToFile = false; //Have we done an Action that will "write" to our JSON File

    switch (action) {

        case "index":
            const animalsView = index(animals);
            inform(animalsView, action);
            break;

        case "show":
            const animalViewShow = show(animals, animal);
            inform(animalViewShow);
            break;

        case "create":
            updatedAnimals = create(animals, animal);
            writeToFile = true;
            break;

        case "update":
            updatedAnimals = edit(animals, animal, process.arg[4]);
            writeToFile = true;
            break;

        case "destroy":
            updatedAnimals = destroy(animals, animal)
            writeToFile = true;
            break;

        case "score":
            const score = animals.reduce((acc, curr) => acc + curr.points, 0);
            inform("Current score", score);
            break;

        default:
            inform("Hey, we can't do that Fam :(");
    }
}

run()

//npm start and node index.js