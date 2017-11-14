class dateOfBirthController {
    constructor() {
        this.valueDateOfBirth = {
            day: '',
            month: '',
            year: ''
        }
    }

    writeValueOfInput(nameOfInput, value) {
        switch (nameOfInput) {
            case 'dayOfBirth':
                this.valueDateOfBirth.day = value;
                break;
            case 'monthOfBirth':
                this.valueDateOfBirth.month = value;
                break;
            case 'yearOfBirth':
                this.valueDateOfBirth.year = value;
                break;
        }
    }

    updateDateOfBirthView(element) {
        element.$parent.formFilter.dateOfBirth.$setViewValue(this.valueDateOfBirth);
    }
}

const dateOfBirthComponent = {
    templateUrl: 'app/components/dateOfBirth/dateOfBirthTemplate.html',
    controller: dateOfBirthController
};

export default dateOfBirthComponent;
