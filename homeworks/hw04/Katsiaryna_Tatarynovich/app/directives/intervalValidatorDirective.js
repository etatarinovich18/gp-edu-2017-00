'use strict';

export class IntervalValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const interval = attr.interval;
        const arrInterval = interval.slice(1, interval.length - 1).split(',');

        ngModel.$validators.intervalCheck = (modelValue, viewValue) => {
            let isInValidValue = ngModel.$isEmpty(modelValue) ||
                ((Number(modelValue.split(',').join('')) <= Number(arrInterval[1])) &&
                (Number(modelValue.split(',').join('')) >= Number(arrInterval[0])));

            return isInValidValue;
        };
    }
}
