describe('Only number directive', () => {
    let suite = {};
    let form;
    let triggerEvent = (elem, type) => {
        let event = suite.$document[0].createEvent('Event');
        event.initEvent(type);
        elem.dispatchEvent(event);
    };

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(($compile, $rootScope) => {
        suite.scope = $rootScope.$new();
        suite.element = angular.element('<form name="form"><input data-ng-model="value" data-only-number name="input"/></form>');
        suite.element = $compile(suite.element)(suite.scope);
        suite.scope.$digest();
        form = suite.scope.form;
    }));

    it('should be only number', () => {
        form.input.$setViewValue('aaaa');
        // form.input.triggerHandler('input');
        // triggerEvent(form.input, 'input');
        // suite.scope.$digest();
            // form.input;
        // debugger;

        expect(form.input.$viewValue).toEqual('');
    });
});
