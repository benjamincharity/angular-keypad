describe('KeypadController', () => {
    let $compile;
    let $rootScope;

    // Include the module
    beforeEach(angular.mock.module('bc.AngularKeypad'));

    // Inject
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    describe('first test', () => {

        it('should be successful!', () => {
            expect(true).toBe(true);
        });

    });

});

