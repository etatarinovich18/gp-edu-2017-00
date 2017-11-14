'use strict';

export class CorrectDateValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        let currentDate = new Date();
        let isDateOfBirthValid = false;

        scope.$watch(() => {
            return ngModel.$viewValue;
        }, () => {
            if (ngModel.$viewValue) {
                if ((ngModel.$viewValue.day && ngModel.$viewValue.month) && ngModel.$viewValue.year) {
                    let dateOfBirth = new Date(ngModel.$viewValue.year, ngModel.$viewValue.month - 1, ngModel.$viewValue.day);

                    isDateOfBirthValid = (!isNaN(dateOfBirth) && (dateOfBirth.getDate() == ngModel.$viewValue.day && dateOfBirth.getMonth() + 1 == ngModel.$viewValue.month && dateOfBirth.getFullYear() == ngModel.$viewValue.year)) ? true : false;

                    ngModel.$setValidity('correctDate', isDateOfBirthValid);
                }
            }
        }, true);
    }
}
