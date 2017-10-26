'use strict';

export class MinLengthValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const minLength = attr.minLength;

        ngModel.$validators.minLength = (modelValue, viewValue) => {
            return ngModel.$isEmpty(modelValue) || (modelValue.length >= minLength);
        };
    }
}
