'use strict';

export class OnlyNumberDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const updateView = (value) => {
            ngModel.$viewValue = value;
            ngModel.$render();
        };

        element.on('input', () => {
            let onlyNumberValue = ngModel.$viewValue.replace(/[^0-9]/g, '');
            
            updateView(onlyNumberValue);
        });
    }
}
