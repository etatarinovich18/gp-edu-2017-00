import 'angular';
import 'angular-mocks/angular-mocks';
import '../app/app';

let testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
