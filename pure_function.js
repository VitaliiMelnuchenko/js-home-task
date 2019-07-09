let age = enterYourAge();
isAccessPermitted(age);
let extra = isExtraEnable(age);
choiseCar(extra);

function enterYourAge() {
    return prompt('Type your age:');
}

function isAccessPermitted(age) {
    if (age < 18) {
        throw new Error('You are not permitted to enter');
    } else {
        console.log('Welcome!');
    }
}

function isExtraEnable(age) {
    if (age > 18) {
        return prompt('You want to rent a car? -> Type yes');
    }
}

function choiseCar(extra) {
    let cars = ['A', 'B', 'C', 'D'];
    if (extra === 'yes') {
        console.log(cars);
    }
}