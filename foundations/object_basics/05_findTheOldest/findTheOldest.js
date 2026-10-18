function getAge (death, birth){
    if(!death){
        death = new Date().getFullYear();
    }

    return death - birth;
}



const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let currentAge = getAge(person.yearOfDeath, person.yearOfBirth);
        let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);

        if (currentAge > oldestAge){
            return person;
        } else {
            return oldest;
        }
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;

    // const people = [
    //   {
    //     name: "Carly",
    //     yearOfBirth: 1942,
    //     yearOfDeath: 1970,
    //   },
    //   {
    //     name: "Ray",
    //     yearOfBirth: 1962,
    //     yearOfDeath: 2011,
    //   },
    //   {
    //     name: "Jane",
    //     yearOfBirth: 1912,
    //     yearOfDeath: 1941,
    //   },
    // ]