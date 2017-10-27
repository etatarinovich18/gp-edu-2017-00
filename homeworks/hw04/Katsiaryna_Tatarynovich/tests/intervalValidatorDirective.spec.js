describe('Interval validator directive', () => {
    let suite = {};
    let form;

    angular.mock.module.sharedInjector();

    beforeAll(angular.mock.module('app'));

    beforeAll(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" data-interval = "[12, 1000000]" name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    afterAll(() => {
        suite.element.remove();
        suite = null;
    });

    it('valid should be false if input\'s value more then max intelval value', () => {
        form.input.$setViewValue('1000001');
        expect(form.input.$valid).toEqual(false);
    });

    it('valid should be false if input\'s value less then min intelval value', () => {
        form.input.$setViewValue('11');
        expect(form.input.$valid).toEqual(false);
    });

    it('valid should be true if input\'s value belongs to the interval', () => {
        form.input.$setViewValue('999999');
        expect(form.input.$valid).toEqual(true);
        form.input.$setViewValue('12');
        expect(form.input.$valid).toEqual(true);
        form.input.$setViewValue('1000000');
        expect(form.input.$valid).toEqual(true);
    });
});
