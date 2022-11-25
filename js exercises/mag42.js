let magiciansNames = ["sank", "frank", "tim", "jack"];

function make_great(magicians) {
    magicians.forEach((mag, i) => {
        magiciansNames[i] = `The great ${mag}`
    })

    return magiciansNames
}

console.log(make_great(magiciansNames));