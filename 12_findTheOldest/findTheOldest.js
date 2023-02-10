const findTheOldest = function(people) {
    people.forEach(person => {
        if ('yearOfDeath' in person === true){
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else {
            person['age'] = new Date().getFullYear() - person.yearOfBirth;
        }
    });
    people.sort((a,b) => (a.age > b.age) ? -1 : 1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
