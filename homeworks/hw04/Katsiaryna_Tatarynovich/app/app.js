import angular from 'angular';
import ngMessages from 'angular-messages';
import ngUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { ReduxDirective } from './directives/ReduxDirective.js';
import { IntervalValidatorDirective } from './directives/IntervalValidatorDirective.js';
import { MaxLengthValidatorDirective } from './directives/MaxLengthValidatorDirective.js';
import { MinLengthValidatorDirective } from './directives/MinLengthValidatorDirective.js';
import { PatternValidatorDirective } from './directives/PatternValidatorDirective.js';
import { OnlyNumberDirective } from './directives/OnlyNumberDirective.js';
import { FormatInputDirective } from './directives/FormatInputDirective.js';
import { MinAgeValidatorDirective } from './directives/MinAgeValidatorDirective.js';
import { CorrectDateValidatorDirective } from './directives/CorrectDateValidatorDirective.js';

import pageComponent from './components/page/pageComponent.js';
import moneyInputComponent from './components/input/moneyInputComponent.js';
import passwordInputComponent from './components/input/passwordInputComponent.js';
import cardComponent from './components/cards/cardComponent.js';
import dateOfBirthComponent from './components/dateOfBirth/dateOfBirthComponent.js';

import { rootReducer } from './reducers';

angular
    .module('app', [
        ngMessages,
        ngRedux,
        ngUiRouter
    ])
    .config(($ngReduxProvider) => {
        $ngReduxProvider
            .createStoreWith(rootReducer, [logger, thunk]);

    })

    .component('page', pageComponent)
    .component('moneyInput', moneyInputComponent)
    .component('passwordInput', passwordInputComponent)
    .component('card', cardComponent)
    .component('dateOfBirth', dateOfBirthComponent)

    .directive('reduxDirective', ReduxDirective)
    .directive('interval', IntervalValidatorDirective)
    .directive('maxLength', MaxLengthValidatorDirective)
    .directive('minLength', MinLengthValidatorDirective)
    .directive('customPattern', PatternValidatorDirective)
    .directive('onlyNumber', OnlyNumberDirective)
    .directive('formatInput', ['$filter', FormatInputDirective])
    .directive('minAge', MinAgeValidatorDirective)
    .directive('correctDate', CorrectDateValidatorDirective);
