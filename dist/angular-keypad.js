(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-keypad", [], factory);
	else if(typeof exports === 'object')
		exports["angular-keypad"] = factory();
	else
		root["angular-keypad"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keypad = __webpack_require__(1);
	
	angular.module('bc.AngularKeypad', []).directive('bcKeypad', _keypad.KeypadDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	KeypadDirective.$inject = ["$rootScope"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeypadDirective = KeypadDirective;
	
	var _keypad = __webpack_require__(2);
	
	var _keypad2 = __webpack_require__(3);
	
	var _keypad3 = _interopRequireDefault(_keypad2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a keypad
	 *
	 * @param {String} numberModel : '77043'
	 * @param {Bool} isVisible : true
	 * @param {Integer} maxLength : 10
	 * @param {String} color : light|dark
	 * @return {Element} <div.keypad>
	 */
	function KeypadDirective($rootScope) {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {
	            numberModel: '=',
	            isVisible: '=?',
	            maxLength: '@',
	            theme: '@'
	        },
	
	        /*
	         *bindToController: {},
	         */
	        templateUrl: _keypad3.default,
	        link: linkFunction,
	        controller: _keypad.KeypadController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     * TODO: How much can we move to the controller?
	     * TODO: Remove magic numbers
	     * TODO: Move items to provider
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	
	        /* eslint-disable no-magic-numbers */
	
	        // Expose numbers to build out keypad
	        $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	
	        /* eslint-enable no-magic-numbers */
	
	        // Expose functions
	        $scope.setNumber = setNumber;
	        $scope.deleteNumber = deleteNumber;
	
	        // Check for visibility on scope and set to true if undefined
	        if (angular.isUndefined($scope.isVisible)) {
	            $scope.isVisible = true;
	        }
	
	        // Add the theme class
	        $element.addClass('keypad--' + $scope.theme);
	
	        /**
	         * Set tapped number
	         * TODO: If $scope.numberModel doesn't exist it throws error. How to handle?
	         *
	         * @param {String} number
	         */
	        function setNumber(number) {
	
	            if (!$scope.maxLength || $scope.numberModel.length < $scope.maxLength) {
	
	                $scope.numberModel += number;
	            }
	        }
	
	        /**
	         * Delete last number
	         */
	        function deleteNumber() {
	
	            var length = $scope.numberModel.length;
	
	            // If at least one number exists
	            if (length) {
	
	                $scope.numberModel = $scope.numberModel.substring(0, length - 1);
	            } else {
	
	                // TODO: Expose something via two-way binding rather than using $emit
	                $rootScope.$emit('KeypadGoBack');
	            }
	        }
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeypadController = exports.KeypadController = function () {
	    function KeypadController() {
	        'ngInject';
	
	        _classCallCheck(this, KeypadController);
	
	        this._activate();
	    }
	
	    _createClass(KeypadController, [{
	        key: '_activate',
	        value: function _activate() {}
	    }]);
	
	    return KeypadController;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/keypad.html';
	var html = "<div class=keypad data-ng-show=isVisible> <button class=keypad__button data-ng-repeat=\"number in numbers\" data-ng-click=setNumber(number) angular-ripple> {{ ::number }} </button> <button class=\"keypad__button keypad__button--delete\" data-ng-click=deleteNumber() angular-ripple data-ng-include=\" 'assets/icons/backspace-empty.svg' \"></button> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-keypad.js.map