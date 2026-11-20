import { readFile } from "fs";

// JavaScript heeft 1 thread
// hoe kan async uberhaupt werken??

console.log("start");

// readFile("./boek.txt", "utf8", (err, content) => {
//   console.log("content:", content);
// });

setTimeout(() => {
    console.log('heeyyy timeout hier')
});


for (let i = 0; i < 100_000; i++) {
    console.log('i:', i);
}



console.log("eind");
