'use strict';

export class MinAgeDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const minAge = attr.minAge;
        const dayOfBirth = scope.formFilter.dayOfBirth.viewValue;
        const monthOfBirth = scope.formFilter.monthOfBirth.viewValue;
        const yearOfBirth = scope.formFilter.yearOfBirth.viewValue;
        const dateOfBirth = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dateOfBirth.getFullYear();

        ngModel.$validators.checkAge = (modelValue, viewValue) => {
            let isValid = false;

            if (dayOfBirth & monthOfBirth & yearOfBirth) {
                isValid = element[0].children[2].on('blur', () => {
                    console.log('blur');
                    // if (age >= minAge) {
                    //     return true;
                    // } else {
                    //     return false;
                    // }
                });
            }

            return isValid;
        };
    }
}
