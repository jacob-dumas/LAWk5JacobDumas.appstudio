let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(quoteString.toUpperCase())

let authorString = "- Henry Ford"
let completeString = quoteString.concat(authorString)

let found = completeString.includes("Henry")
if (found)
    console.log("Henry was in completeString")
else
    console.log("Henry was not in completeString")