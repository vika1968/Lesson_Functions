console.log("------------ Starting ------------------");
console.log("------------ Define our variables ------------------");
var animalTypes = ["dog", "cat", "mouse", "ant", "fish"];
var arr = [];
var arrSpecificAnim = [];
var animalName = "";
var animalCount = Math.round(Math.random() * (25 - 5)) + 5;
var arrUnigueIDs = [];
var RandomAnimalType = "";
//---- Generate Unique IDs of animals ----
console.log("------------ 1. Generate Unique IDs of animals ------------------");
//function GenerateUniqueIDs(quantity: number, max: number){
// OR arrow function   
var GenerateUniqueIDs = function (quantity, max) {
    if (quantity == null || quantity == 0) {
        throw new Error("The quantity can't be empty or <= 0.");
    }
    else if (max == null || max <= 0) {
        throw new Error("The max number can't be empty or <= 0.");
    }
    else if (quantity > max) {
        throw new Error("The quantity can't be > max.");
    }
    else {
        var arr_1 = [];
        while (arr_1.length < quantity) {
            var candidateInt = Math.floor(Math.random() * max) + 1;
            if (arr_1.indexOf(candidateInt) == -1)
                arr_1.push(candidateInt);
        }
        return (arr_1);
    }
};
//---- Run the GenerateUniqueIDs function with error tracking ----
try {
    arrUnigueIDs = GenerateUniqueIDs(animalCount, 30);
    console.log("Our array has " + arrUnigueIDs.length + " unique IDs");
    console.log(arrUnigueIDs);
}
catch (error) {
    console.log(error.message);
}
//---- Generate valid age of animals ----
console.log("------------ 2. Generate valid age of animals ------------------");
var GenerateValidAgeOfAnimal = function (animalType) {
    if (animalType == null || animalType.length == 0) {
        throw new Error("The type of animal can't be empty.");
    }
    if (!animalTypes.includes(animalType)) { // includes doesn't work in this compiler version 
        throw new Error("The type of animal can only be 'dog' or 'cat' or 'mouse' or 'ant' or 'fish'.");
    }
    else {
        var validAge = 0;
        if (animalType == "fish") {
            validAge = Math.round(Math.random() * (5 - 2)) + 3;
        }
        else if (animalType == "dog") {
            validAge = Math.round(Math.random() * (16 - 8)) + 8;
        }
        else if (animalType === "mouse") {
            validAge = Math.round(Math.random() * (3 - 1)) + 1;
        }
        else if (animalType === "ant") {
            validAge = Math.round(Math.random() * (2 - 1)) + 1;
        }
        else if (animalType === "cat") {
            validAge = Math.round(Math.random() * (18 - 12)) + 12;
        }
        return validAge;
    }
};
//---- Create an array of specific animal types -----
console.log("------------ 3. Create full array of animals ------------------");
var CreateArrayOfAnimals = function () {
    var outArray = [];
    for (var i = 0; i < animalCount; i++) {
        animalName = "";
        var lenghtAnimalName = Math.round(Math.random() * (5 - 3)) + 3;
        for (var j = 0; j < lenghtAnimalName; j++) {
            animalName += String.fromCharCode(Math.round(Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0))) + "a".charCodeAt(0));
        }
        var arrAnimalTypes = Math.round(Math.random() * (4));
        outArray[i] =
            {
                id: arrUnigueIDs[i],
                name: animalName,
                age: GenerateValidAgeOfAnimal(animalTypes[arrAnimalTypes]),
                type: animalTypes[arrAnimalTypes]
            };
    }
    return outArray;
};
try {
    arr = CreateArrayOfAnimals();
    console.log("We got an array with " + arr.length + " elements (animals).");
    console.log(arr);
}
catch (error) {
    console.log(error.message);
}
//---- Create an array of one type of animal ----
console.log("----------- 4. Create an array of one type of animal ------------------");
var CreateArrOfSpecificAnimalType = function (animalType, inputArray) {
    if (inputArray === void 0) { inputArray = []; }
    if (animalType == null || animalType.length == 0) {
        throw new Error("The animal type can't be empty.");
    }
    else if (inputArray == null || inputArray.length == 0) {
        throw new Error("The array of anymals can't be empty.");
    }
    else {
        var outArraySpecificAnimalType = [];
        var index = 0;
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i].type == animalType) {
                outArraySpecificAnimalType[index] = inputArray[i];
                index += 1;
            }
        }
        return outArraySpecificAnimalType;
    }
};
try {
    RandomAnimalType = animalTypes[Math.round(Math.random() * (4))];
    arrSpecificAnim = CreateArrOfSpecificAnimalType(RandomAnimalType, arr);
    console.log("-----------We created an array of : '" + RandomAnimalType + "s' only. ------------------");
    console.log(arrSpecificAnim);
}
catch (error) {
    console.log(error.message);
}
//---- Update the data of 1 animal in the array ----
console.log("----------- 5. Update the data of 1 animal in the array ------------------");
console.log(" The animal with ID number " + arr[animalCount - 3].id + " will be updated.");
var UpdateArrOfAnimals = function (animalToBeChanged, name, age, type, inputArray) {
    if (inputArray === void 0) { inputArray = []; }
    if (inputArray == null || inputArray.length == 0) {
        throw new Error("The array can't be empty.");
    }
    else if (animalToBeChanged == null || animalToBeChanged.id <= 0) {
        throw new Error("The updated anymal can't be empty or ID identifier <= 0.");
    }
    else {
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i].id == animalToBeChanged.id) {
                inputArray[i].name = name;
                inputArray[i].age = age;
                inputArray[i].type = type;
                break;
            }
        }
        return inputArray;
    }
};
console.log("-----------We show an updated array. ------------------");
try {
    console.log(UpdateArrOfAnimals(arr[animalCount - 3], "Nika", 9, "dog", arr));
}
catch (error) {
    console.log(error.message);
}
//---- Remove 1 animal from the array by ID number----
console.log("----------- 6. Remove 1 animal from the array by ID number ------------------");
var RemoveAnimalbyID = function (animalToRemoved, inputArray) {
    if (inputArray === void 0) { inputArray = []; }
    if (inputArray == null || inputArray.length == 0) {
        throw new Error("The array can't be empty.");
    }
    else if (animalToRemoved == null || animalToRemoved.id <= 0) {
        throw new Error("The updated anymal can't be empty or ID identifier <= 0.");
    }
    else {
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i].id === animalToRemoved.id) {
                console.log("The id to remove is: " + animalToRemoved.id);
                inputArray.splice(i, 1);
            }
        }
        return inputArray;
    }
};
console.log("-----------We show an array with removed animal by ID number. ------------------");
try {
    var remArray = RemoveAnimalbyID(arr[3], arr);
    console.log(remArray);
}
catch (error) {
    console.log(error.message);
}
//---- Remove 1 animal from array by Name----
console.log("----------- 7. Remove 1 animal from array by name ------------------");
var RemoveAnimalbyName = function (animalToRemoved, inputArray) {
    if (inputArray === void 0) { inputArray = []; }
    if (inputArray == null || inputArray.length == 0) {
        throw new Error("The array can't be empty.");
    }
    else if (animalToRemoved == null || animalToRemoved.name == null) {
        throw new Error("The removed anymal or name can't empty.");
    }
    else {
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i].name === animalToRemoved.name) {
                console.log("The name of animal to be removed is: " + animalToRemoved.name);
                inputArray.splice(i, 1);
            }
        }
        return inputArray;
    }
};
console.log("-----------We show an array with removed animal by name. ------------------");
try {
    console.log(RemoveAnimalbyName(arr[3], arr));
}
catch (error) {
    console.log(error.message);
}
