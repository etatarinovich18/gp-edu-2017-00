'use strict';

export class MinAgeValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const minAge = attr.minAge;

        let currentDate = new Date();
        let dateOfBirth;
        let age;

        ngModel.$validators.checkAge = (modelValue, viewValue) => {
            let isAgeValid = false;

            scope.$watch(() => {
                return ngModel.$viewValue;
            }, () => {
                if (ngModel.$viewValue) {
                    let isDateFilledOutCompletely = (ngModel.$viewValue.day && ngModel.$viewValue.month) && ngModel.$viewValue.year;

                    if (isDateFilledOutCompletely) {
                        dateOfBirth = new Date(ngModel.$viewValue.year, ngModel.$viewValue.month - 1, ngModel.$viewValue.day);
                        age = currentDate.getFullYear() - dateOfBirth.getFullYear();

                        isAgeValid = (age >= minAge) ? true : false;
                    }
                }
            }, true);

            return isAgeValid;
        };
    }
}
