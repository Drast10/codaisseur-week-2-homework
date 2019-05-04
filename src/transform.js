function groupAdultsByAgeRange(peoples) {
     let result = {};
     result=peoples.filter((people) => {
        return people.age >= 18;
    }).reduce((acc, people) => {
        //console.log(people)
        if (people.age <= 20 && people.age >= 18) {
            if (!acc["20 and younger"]) {
                acc["20 and younger"] = []
            }
            acc['20 and younger'].push(people);
        }
        else if (people.age >= 21 && people.age <= 30) {
            if (!acc["21-30"]) {
                acc["21-30"] = []
            }
            acc["21-30"].push(people);
        }
        else if (people.age >= 31 && people.age <= 40) {
            if (!acc["31-40"]) {
                acc["31-40"] = []
            }
            acc["31-40"].push(people);
        }
        else if (people.age >= 41 && people.age <= 50) {
            if (!acc["41-50"]) {
                acc["41-50"] = []
            }
            acc["41-50"].push(people);
        } else  {
            if (!acc["51 and older"]) {
                acc["51 and older"] = []
            }
            acc["51 and older"].push(people);
        }
      //  console.log(acc)
        return acc;

    }, {})
//console.log(obj)


    return result;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange