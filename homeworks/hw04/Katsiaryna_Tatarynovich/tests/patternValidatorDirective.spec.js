describe('Pattern validator directive', () => {
    let suite = {};
    let form;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));

    beforeAll(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" custom-pattern="[0-9]{0, 2}" name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    afterAll(() => {
        suite.element.remove();
        suite = null;
    });

    it('valid should be false if the input\'s value is not suitable', () => {
        form.input.$setViewValue('aaaa');
        expect(form.input.$valid).toEqual(false);
    });

    it('valid should be true if the input\'s value is suitable', () => {
        form.input.$setViewValue('22');
        expect(form.input.$valid).toEqual(false);
        form.input.$setViewValue('1');
        expect(form.input.$valid).toEqual(false);
    });
});
