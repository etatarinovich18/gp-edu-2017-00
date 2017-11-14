'use strict';

export class MinAgeValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const minAge = attr.minAge;

        let currentDate = new Date();
        let isAgeValid = false;

        scope.$watch(() => {
            return ngModel.$viewValue;
        }, () => {
            if (ngModel.$viewValue) {
                if ((ngModel.$viewValue.day && ngModel.$viewValue.month) && ngModel.$viewValue.year) {
                    let dateOfBirth = new Date(ngModel.$viewValue.year, ngModel.$viewValue.month - 1, ngModel.$viewValue.day);
                    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
                    isAgeValid = (age >= minAge) ? true : false;

                    ngModel.$setValidity('minAge', isAgeValid);
                }
            }
        }, true);
    }
}
