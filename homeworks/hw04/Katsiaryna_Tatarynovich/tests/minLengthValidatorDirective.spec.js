describe('Min length validator directive', () => {
    let suite = {};
    let form;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));

    beforeAll(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" data-min-length = "2" name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    afterAll(() => {
        suite.element.remove();
        suite = null;
    });

    it('valid should be false if the length of input\'s value less then the min length', () => {
        form.input.$setViewValue('1');
        expect(form.input.$valid).toEqual(false);
    });

    it('valid should be true if the length of input\'s value more then the min length', () => {
        form.input.$setViewValue('11');
        expect(form.input.$valid).toEqual(true);
        form.input.$setViewValue('11111111111111111111');
        expect(form.input.$valid).toEqual(true);
    });
});
