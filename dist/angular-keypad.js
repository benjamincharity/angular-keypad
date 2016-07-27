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
	
	var _keypad2 = __webpack_require__(3);
	
	angular.module('bc.AngularKeypad', []).provider('KeypadConfig', _keypad.KeypadConfig).directive('bcKeypad', _keypad2.KeypadDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeypadConfig = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backspace = __webpack_require__(2);
	
	var _backspace2 = _interopRequireDefault(_backspace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeypadConfig = exports.KeypadConfig = function () {
	
	    // Define defaults
	    function KeypadConfig() {
	        _classCallCheck(this, KeypadConfig);
	
	        // This should be a .svg
	        this.backspaceTemplate = _backspace2.default;
	
	        // By default there is no max length
	        // Integer
	        this.maxLength = null;
	
	        /* eslint-disable no-magic-numbers */
	
	        // Define the array of numbers that makes up the keypad
	        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	
	        /* eslint-enable no-magic-numbers */
	    }
	
	    _createClass(KeypadConfig, [{
	        key: '$get',
	        value: function $get() {
	            return this;
	        }
	    }]);
	
	    return KeypadConfig;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/backspace.svg';
	var html = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> <svg width=130px height=130px viewBox=\"0 0 130 130\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns> <title>delete</title> <desc></desc> <defs></defs> <g id=backspace-empty sketch:type=MSArtboardGroup fill=#000000> <path d=\"M98.1635781,41.9259943 C96.9114531,40.6610795 95.316625,40 93.5136719,40 L51.625,40 C48.2073906,40 45.4772969,41.3355114 43.5100937,44.0399148 L28,64.9911932 L43.525,85.8048295 L43.5503125,85.837642 L43.5761875,85.8705966 C44.5470625,87.1284091 45.6045625,88.1008523 46.8091563,88.7707386 C48.2335469,89.5630682 49.8538281,90 51.625,90 L93.53125,90 C97.2143594,90 100,86.8384943 100,83.0397727 L100,46.6761364 C100,44.8549716 99.4158437,43.190767 98.1635781,41.9259943 L98.1635781,41.9259943 Z M95.5,83.0397727 C95.5,84.2950284 94.7739531,85.4545455 93.53125,85.4545455 L51.625,85.4545455 C49.4921406,85.4545455 48.2031719,84.5076705 47.125,83.1107955 L33.625,65 L47.125,46.7559659 C48.4609375,44.909375 50.1016094,44.5454545 51.625,44.5454545 L93.4609375,44.5454545 C94.7036406,44.5454545 95.5,45.4208807 95.5,46.6761364 L95.5,83.0397727 L95.5,83.0397727 Z M86.1402813,75.8390625 C86.3551563,76.0535511 86.4738438,76.3450284 86.4738438,76.650142 C86.4738438,76.9556818 86.3551563,77.2471591 86.1402813,77.4607955 L83.0714219,80.5723011 C82.8499375,80.7975852 82.5616563,80.9090909 82.271125,80.9090909 C81.9798906,80.9090909 81.6892188,80.7975852 81.4702656,80.5723011 L70.7504219,69.7113636 L60.0305781,80.5723011 C59.8114844,80.7975852 59.5208125,80.9090909 59.2297188,80.9090909 C58.9391875,80.9090909 58.6507656,80.7975852 58.4292813,80.5723011 L55.3602813,77.4607955 C55.1455469,77.2471591 55.0265781,76.9556818 55.0265781,76.650142 C55.0265781,76.3450284 55.1455469,76.0535511 55.3602813,75.8390625 L66.1231563,65 L55.331875,54.162358 C54.8894688,53.7144886 54.8894688,52.9872159 55.331875,52.5392045 L58.3984844,49.4257102 C58.6116719,49.2110795 58.8979844,49.0909091 59.1994844,49.0909091 C59.5021094,49.0909091 59.7885625,49.2112216 59.9997813,49.4257102 L70.7502813,60.1548295 L81.5006406,49.4257102 C81.7121406,49.2110795 81.9985938,49.0909091 82.3012188,49.0909091 C82.6025781,49.0909091 82.8888906,49.2112216 83.1020781,49.4257102 L86.1686875,52.5392045 C86.6110938,52.9870739 86.6110938,53.7143466 86.1686875,54.162358 L75.377125,65 L86.1402813,75.8390625 L86.1402813,75.8390625 Z\" sketch:type=MSShapeGroup></path> </g> </svg>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeypadDirective = KeypadDirective;
	
	var _keypad = __webpack_require__(4);
	
	var _keypad2 = __webpack_require__(5);
	
	var _keypad3 = _interopRequireDefault(_keypad2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a keypad
	 *
	 * @param {String} numberModel : '77043'
	 * @param {Integer} maxLength : 10
	 * @return {Element} <div.keypad>
	 */
	function KeypadDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcNumberModel: '=',
	            bcMaxLength: '@',
	            bcLeftButtonMethod: '&',
	            bcRightButtonMethod: '&'
	        },
	        templateUrl: _keypad3.default,
	        controller: _keypad.KeypadController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeypadController = exports.KeypadController = function () {
	    KeypadController.$inject = ["$rootScope", "KeypadConfig"];
	    function KeypadController($rootScope, KeypadConfig) {
	        'ngInject';
	
	        _classCallCheck(this, KeypadController);
	
	        this.$rootScope = $rootScope;
	        this.KeypadConfig = KeypadConfig;
	
	        this._activate();
	    }
	
	    _createClass(KeypadController, [{
	        key: '_activate',
	        value: function _activate() {
	            // If anything other than a string was bound, overwrite with an empty string
	            if (!angular.isString(this.bcNumberModel)) {
	                this.bcNumberModel = '';
	            }
	
	            // Expose backspace svg template to dom
	            this.backspaceTemplate = this.KeypadConfig.backspaceTemplate;
	
	            // The numbers that make up the keypad
	            this.numbers = this.KeypadConfig.numbers;
	
	            // Pull the last number off of the array so that we can inject it outside of the ng-repeat
	            this.lastNumber = this.numbers.splice(this.numbers.length - 1, 1);
	
	            // Set the max length
	            this.bcMaxLength = this.bcMaxLength || this.KeypadConfig.maxLength;
	        }
	
	        /**
	         * Add the selected number to the number string
	         *
	         * @param {String} number
	         */
	
	    }, {
	        key: 'setNumber',
	        value: function setNumber(number) {
	
	            if (!this.bcMaxLength || this.bcNumberModel.length < this.bcMaxLength) {
	                this.bcNumberModel += number;
	            }
	        }
	
	        /**
	         * Delete the last number from the number string
	         */
	
	    }, {
	        key: 'deleteNumber',
	        value: function deleteNumber() {
	            var length = this.bcNumberModel.length;
	
	            // If at least one number exists
	            if (length > 0) {
	                this.bcNumberModel = this.bcNumberModel.substring(0, length - 1);
	            } else {
	                // TODO: Expose something via two-way binding rather than using $emit
	                this.$rootScope.$emit('KeypadGoBack');
	            }
	        }
	    }, {
	        key: 'leftButtonTrigger',
	        value: function leftButtonTrigger($event, numbers) {
	            console.log('in leftButtonTrigger', $event, this.bcNumberModel);
	            this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
	        }
	    }, {
	        key: 'rightButtonTrigger',
	        value: function rightButtonTrigger($event, numbers) {
	            console.log('in rightButtonTrigger', $event, this.bcNumberModel);
	
	            this.bcRightButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
	        }
	    }]);
	
	    return KeypadController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/keypad.html';
	var html = "<div class=bc-keypad> <button class=bc-keypad__button data-ng-repeat=\"number in ::vm.numbers track by number\" data-ng-click=vm.setNumber(number) angular-ripple> {{ ::number }} </button> <button class=bc-keypad__button data-ng-click=\"vm.leftButtonTrigger($event, vm.bcNumbersModel)\" angular-ripple>LEFT</button> <button class=bc-keypad__button data-ng-click=vm.setNumber(vm.lastNumber) angular-ripple> {{ ::vm.lastNumber }} </button> <button class=\"bc-keypad__button bc-keypad__button--backspace\" data-ng-click=\"vm.rightButtonTrigger($event, vm.bcNumbersModel)\" angular-ripple data-ng-include=vm.backspaceTemplate></button> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-keypad.js.map