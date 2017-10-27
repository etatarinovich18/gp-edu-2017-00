describe('Only number directive', () => {
    let suite = {};
    let form;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));

    beforeAll(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" data-only-number name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    afterAll(() => {
        suite.element.remove();
        suite = null;
    });

    it('result should be only number', () => {
        let inputValue = ['aaaa', '111111', '111111sss', 'sdsd111111', '.111111'];
        let rightResultOfInput = ['', '111111', '111111', '111111', '111111'];

        inputValue.forEach((current, index) => {
            suite.element[0][0].value = current;
            angular.element(suite.element[0][0]).triggerHandler('input');
            expect(suite.element[0][0].value).toEqual(rightResultOfInput[index]);
        });
    });
});
