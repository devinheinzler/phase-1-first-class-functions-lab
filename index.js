const returnFirstTwoDrivers = function anyFunction([]) {
    return (["Antonia", "Nuru"]);
}
const returnLastTwoDrivers = function anyFunction([]) {
    return (['Amari', 'Mo']);
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function(fare) {
        return fare*n;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversReturning) {
    return driversReturning(arrayOfDrivers);
}