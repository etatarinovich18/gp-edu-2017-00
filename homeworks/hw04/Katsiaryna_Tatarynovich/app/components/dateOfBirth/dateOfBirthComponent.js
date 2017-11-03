class dateOfBirthController {
    constructor() {
        console.log(this);
    }
}

const dateOfBirthComponent = {
    templateUrl: 'app/components/dateOfBirth/dateOfBirthTemplate.html',
    controller: dateOfBirthController,
    // bindings: {
    //     setPriceFieldStatus: '&'
    // }
};

export default dateOfBirthComponent;
