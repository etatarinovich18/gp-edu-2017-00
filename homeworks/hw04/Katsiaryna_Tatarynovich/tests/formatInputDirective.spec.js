describe('Format input directive', () => {
    let suite = {};
    let form;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));

    beforeAll(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" data-format-input name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    afterAll(() => {
        suite.element.remove();
        suite = null;
    });

    it('should format input\'s value on blur into a numeric format as the decimal separator and include comma', () => {
        form.input.$setViewValue('111111');
        angular.element(suite.element[0][0]).triggerHandler('blur');
        expect(form.input.$viewValue).toEqual('111,111');
    });

    it('should format input\'s value on focus from numeric format with comma to numeric string without it', () => {
        form.input.$setViewValue('111111');
        angular.element(suite.element[0][0]).triggerHandler('blur');
        angular.element(suite.element[0][0]).triggerHandler('focus');
        expect(form.input.$viewValue).toEqual('111111');
    });
});
