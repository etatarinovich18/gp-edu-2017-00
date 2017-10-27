'use strict';

export class OnlyNumberDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        element.on('input', () => {
            let onlyNumberValue = ngModel.$viewValue.replace(/[^0-9]/g, '');

            ngModel.$setViewValue(onlyNumberValue);
            ngModel.$render();
        });
    }
}
