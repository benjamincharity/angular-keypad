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
	
	var _keypad2 = __webpack_require__(4);
	
	angular.module('bc.AngularKeypad', []).provider('bcKeypadConfig', _keypad.KeypadConfig).directive('bcKeypad', _keypad2.KeypadDirective);

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
	
	var _submit = __webpack_require__(3);
	
	var _submit2 = _interopRequireDefault(_submit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeypadConfig = exports.KeypadConfig = function () {
	
	    // Define defaults
	    function KeypadConfig() {
	        _classCallCheck(this, KeypadConfig);
	
	        this.keypadDefaults = {
	
	            // The array of numbers that makes up the keypad
	            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], // eslint-disable-line no-magic-numbers
	
	            // By default there is no max length
	            // Integer
	            maxLength: null,
	
	            // Plug'N'Play button types
	            types: ['backspace', 'submit'],
	
	            backspaceTemplate: _backspace2.default,
	            submitTemplate: _submit2.default
	
	        };
	    }
	
	    _createClass(KeypadConfig, [{
	        key: '$get',
	        value: function $get() {
	            return this.keypadDefaults;
	        }
	
	        /**
	         * Set a custom backspace button template
	         * NOTE: $templateCache is not available yet so we save the template and the controller will
	         * handle overwriting the default template
	         *
	         * @param {String} template
	         */
	
	    }, {
	        key: 'setBackspaceTemplate',
	        value: function setBackspaceTemplate(template) {
	            this.keypadDefaults.customBackspaceTemplate = template;
	        }
	
	        /**
	         * Set a custom submit button template
	         * NOTE: $templateCache is not available yet so we save the template and the controller will
	         * handle overwriting the default template
	         *
	         * @param {String} template
	         */
	
	    }, {
	        key: 'setSubmitTemplate',
	        value: function setSubmitTemplate(template) {
	            this.keypadDefaults.customSubmitTemplate = template;
	        }
	
	        /**
	         * Overwrite the max length
	         *
	         * @param {Integer} length
	         */
	
	    }, {
	        key: 'setMaxLength',
	        value: function setMaxLength(length) {
	            this.keypadDefaults.maxLength = parseInt(length, 10);
	        }
	    }]);
	
	    return KeypadConfig;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/backspace.svg';
	var html = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> <svg width=130px height=130px viewBox=\"0 0 130 130\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <title>delete</title> <desc></desc> <defs></defs> <g id=backspace-empty sketch:type=MSArtboardGroup> <path d=\"M98.1635781,41.9259943 C96.9114531,40.6610795 95.316625,40 93.5136719,40 L51.625,40 C48.2073906,40 45.4772969,41.3355114 43.5100937,44.0399148 L28,64.9911932 L43.525,85.8048295 L43.5503125,85.837642 L43.5761875,85.8705966 C44.5470625,87.1284091 45.6045625,88.1008523 46.8091563,88.7707386 C48.2335469,89.5630682 49.8538281,90 51.625,90 L93.53125,90 C97.2143594,90 100,86.8384943 100,83.0397727 L100,46.6761364 C100,44.8549716 99.4158437,43.190767 98.1635781,41.9259943 L98.1635781,41.9259943 Z M95.5,83.0397727 C95.5,84.2950284 94.7739531,85.4545455 93.53125,85.4545455 L51.625,85.4545455 C49.4921406,85.4545455 48.2031719,84.5076705 47.125,83.1107955 L33.625,65 L47.125,46.7559659 C48.4609375,44.909375 50.1016094,44.5454545 51.625,44.5454545 L93.4609375,44.5454545 C94.7036406,44.5454545 95.5,45.4208807 95.5,46.6761364 L95.5,83.0397727 L95.5,83.0397727 Z M86.1402813,75.8390625 C86.3551563,76.0535511 86.4738438,76.3450284 86.4738438,76.650142 C86.4738438,76.9556818 86.3551563,77.2471591 86.1402813,77.4607955 L83.0714219,80.5723011 C82.8499375,80.7975852 82.5616563,80.9090909 82.271125,80.9090909 C81.9798906,80.9090909 81.6892188,80.7975852 81.4702656,80.5723011 L70.7504219,69.7113636 L60.0305781,80.5723011 C59.8114844,80.7975852 59.5208125,80.9090909 59.2297188,80.9090909 C58.9391875,80.9090909 58.6507656,80.7975852 58.4292813,80.5723011 L55.3602813,77.4607955 C55.1455469,77.2471591 55.0265781,76.9556818 55.0265781,76.650142 C55.0265781,76.3450284 55.1455469,76.0535511 55.3602813,75.8390625 L66.1231563,65 L55.331875,54.162358 C54.8894688,53.7144886 54.8894688,52.9872159 55.331875,52.5392045 L58.3984844,49.4257102 C58.6116719,49.2110795 58.8979844,49.0909091 59.1994844,49.0909091 C59.5021094,49.0909091 59.7885625,49.2112216 59.9997813,49.4257102 L70.7502813,60.1548295 L81.5006406,49.4257102 C81.7121406,49.2110795 81.9985938,49.0909091 82.3012188,49.0909091 C82.6025781,49.0909091 82.8888906,49.2112216 83.1020781,49.4257102 L86.1686875,52.5392045 C86.6110938,52.9870739 86.6110938,53.7143466 86.1686875,54.162358 L75.377125,65 L86.1402813,75.8390625 L86.1402813,75.8390625 Z\" sketch:type=MSShapeGroup></path> </g> </svg> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/submit.svg';
	var html = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> <svg width=130px height=130px viewBox=\"0 0 130 130\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <title>Submit</title> <desc></desc> <defs></defs> <g id=Page-1 stroke-width=1 fill-rule=evenodd> <g id=Artboard-2> <g id=icon transform=\"translate(33.000000, 33.000000)\"> <path d=\"M31.9982857,0 C18.3532857,0 6.70485714,8.54342857 2.10385714,20.5714286 L7.05228571,20.5714286 C8.39457143,17.6451429 10.2604286,14.95 12.6048571,12.6054286 C17.7852857,7.42471429 24.6727143,4.57142857 31.9982857,4.57142857 C39.3248571,4.57142857 46.2131429,7.42471429 51.3941429,12.6055714 C56.5752857,17.7864286 59.4285714,24.6741429 59.4285714,32 C59.4285714,39.3264286 56.5752857,46.2144286 51.3944286,51.395 C46.2134286,56.5755714 39.325,59.4285714 31.9982857,59.4285714 C24.6724286,59.4285714 17.785,56.5755714 12.6047143,51.3951429 C10.2601429,49.0505714 8.39428571,46.3551429 7.05171429,43.4285714 L2.10357143,43.4285714 C6.70442857,55.4572857 18.353,64 31.9984286,64 C49.6718571,64 64,49.6735714 64,32 C64,14.3282857 49.6718571,0 31.9982857,0 L31.9982857,0 Z\" id=Shape></path> <polygon id=submit points=\"24.9804286 41.6975714 28.2128571 44.93 41.1428571 32 28.2128571 19.07 24.9802857 22.3025714 32.3921429 29.7142857 0 29.7142857 0 34.2857143 32.3921429 34.2857143\"></polygon> </g> </g> </g> </svg> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeypadDirective = KeypadDirective;
	
	var _keypad = __webpack_require__(5);
	
	var _keypad2 = __webpack_require__(10);
	
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
	            bcLeftButton: '@',
	            bcRightButton: '@',
	            bcLeftButtonMethod: '&',
	            bcRightButtonMethod: '&',
	            bcEmptyBackspaceMethod: '&'
	        },
	        templateUrl: _keypad3.default,
	        controller: _keypad.KeypadController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeypadController = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _backspaceLeft = __webpack_require__(6);
	
	var _backspaceLeft2 = _interopRequireDefault(_backspaceLeft);
	
	var _backspaceRight = __webpack_require__(7);
	
	var _backspaceRight2 = _interopRequireDefault(_backspaceRight);
	
	var _submitLeft = __webpack_require__(8);
	
	var _submitLeft2 = _interopRequireDefault(_submitLeft);
	
	var _submitRight = __webpack_require__(9);
	
	var _submitRight2 = _interopRequireDefault(_submitRight);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeypadController = exports.KeypadController = function () {
	    KeypadController.$inject = ["$rootScope", "$templateCache", "bcKeypadConfig"];
	    function KeypadController($rootScope, $templateCache, bcKeypadConfig) {
	        'ngInject';
	
	        _classCallCheck(this, KeypadController);
	
	        this.$rootScope = $rootScope;
	        this.$templateCache = $templateCache;
	        this.bcKeypadConfig = bcKeypadConfig;
	
	        this._activate();
	    }
	
	    _createClass(KeypadController, [{
	        key: '_activate',
	        value: function _activate() {
	            // If anything other than a string was bound, overwrite with an empty string
	            if (!angular.isString(this.bcNumberModel)) {
	                this.bcNumberModel = '';
	            }
	
	            this.templates = {
	                backspaceRight: _backspaceRight2.default,
	                backspaceLeft: _backspaceLeft2.default,
	                submitRight: _submitRight2.default,
	                submitLeft: _submitLeft2.default
	            };
	
	            // The numbers that make up the keypad
	            this.numbers = this.bcKeypadConfig.numbers.slice();
	
	            // Pull the last number off of the array so that we can inject it outside of the ng-repeat
	            this.lastNumber = this.numbers.splice(this.numbers.length - 1, 1)[0];
	
	            // Set the max length
	            this.bcMaxLength = this.bcMaxLength || this.bcKeypadConfig.maxLength;
	
	            this._setCustomTemplates();
	        }
	
	        /**
	         * Add the selected number to the number string
	         *
	         * @param {String} number
	         */
	
	    }, {
	        key: 'setNumber',
	        value: function setNumber(number) {
	            // If a max length is defined, verify we have not yet reached it
	            if (!this.bcMaxLength || this.bcNumberModel.length < this.bcMaxLength) {
	                this.bcNumberModel += number;
	            }
	        }
	
	        /**
	         * Delete the last number from the number model
	         */
	
	    }, {
	        key: 'backspace',
	        value: function backspace() {
	            // If at least one number exists
	            if (this.bcNumberModel.length > 0) {
	                this.bcNumberModel = this.bcNumberModel.substring(0, this.bcNumberModel.length - 1);
	            } else {
	                // If backspace was hit when the model is already empty
	                this.bcEmptyBackspaceMethod();
	            }
	        }
	
	        /**
	         * Actions for the LEFT button
	         *
	         * @param {Object} $event
	         * @param {String} type
	         */
	
	    }, {
	        key: 'leftButtonTrigger',
	        value: function leftButtonTrigger($event, type) {
	            if (type && type === 'backspace') {
	                this.backspace();
	            }
	
	            // Call the bound method
	            this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
	        }
	
	        /**
	         * Actions for the RIGHT button
	         *
	         * @param {Object} $event
	         * @param {String} type
	         */
	
	    }, {
	        key: 'rightButtonTrigger',
	        value: function rightButtonTrigger($event, type) {
	            if (type && type === 'backspace') {
	                this.backspace();
	            }
	
	            // Call the bound method
	            this.bcRightButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
	        }
	
	        /**
	         * Determine the correct template for the left button
	         *
	         * @param {String} side
	         * @return {String} template
	         */
	
	    }, {
	        key: 'keyTemplate',
	        value: function keyTemplate(type, side) {
	            // If the button type matches one of the plug'n'play types
	            if (this.bcKeypadConfig.types.indexOf(type) >= 0) {
	                return this.templates[type + side];
	            } else {
	                return;
	            }
	        }
	
	        /**
	         * Overwrite templates if any custom templates were set in the provider
	         */
	
	    }, {
	        key: '_setCustomTemplates',
	        value: function _setCustomTemplates() {
	
	            if (this.bcKeypadConfig.customSubmitTemplate) {
	                var path = this.bcKeypadConfig.submitTemplate;
	                this.$templateCache.put(path, this.bcKeypadConfig.customSubmitTemplate);
	            }
	
	            if (this.bcKeypadConfig.customBackspaceTemplate) {
	                var _path = this.bcKeypadConfig.backspaceTemplate;
	                this.$templateCache.put(_path, this.bcKeypadConfig.customBackspaceTemplate);
	            }
	        }
	    }]);
	
	    return KeypadController;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/templates/backspace-left.html';
	var html = "<button class=\"bc-keypad__key-button bc-keypad__key-button--backspace\" data-ng-click=\"vm.leftButtonTrigger($event, vm.bcLeftButton)\" angular-ripple aria-role=Backspace> <ng-include src=\" vm.bcKeypadConfig.backspaceTemplate \"></ng-include> </button> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/templates/backspace-right.html';
	var html = "<button class=\"bc-keypad__key-button bc-keypad__key-button--backspace\" data-ng-click=\"vm.rightButtonTrigger($event, vm.bcRightButton)\" angular-ripple aria-role=Backspace> <ng-include src=\" vm.bcKeypadConfig.backspaceTemplate \"></ng-include> </button> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/templates/submit-left.html';
	var html = "<button class=\"bc-keypad__key-button bc-keypad__key-button--submit\" data-ng-click=\"vm.leftButtonTrigger($event, vm.bcLeftButton)\" angular-ripple aria-role=Submit> <ng-include src=\" vm.bcKeypadConfig.submitTemplate \"></ng-include> </button> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/templates/submit-right.html';
	var html = "<button class=\"bc-keypad__key-button bc-keypad__key-button--submit\" data-ng-click=\"vm.rightButtonTrigger($event, vm.bcRightButton)\" angular-ripple aria-role=Submit> <ng-include src=\" vm.bcKeypadConfig.submitTemplate \"></ng-include> </button> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-keypad/src/templates/keypad.html';
	var html = "<div class=bc-keypad> <div class=bc-keypad__key data-ng-repeat=\"number in ::vm.numbers track by number\"> <button class=bc-keypad__key-button data-ng-click=vm.setNumber(number) angular-ripple aria-role=\"{{ ::number }}\"> {{ ::number }} </button> </div> <div class=\"bc-keypad__key bc-keypad__key--left\"> <ng-include src=\"vm.keyTemplate(vm.bcLeftButton, 'Left')\"></ng-include> </div> <div class=\"bc-keypad__key bc-keypad__key--center\"> <button class=bc-keypad__key-button data-ng-click=vm.setNumber(vm.lastNumber) angular-ripple> {{ ::vm.lastNumber }} </button> </div> <div class=\"bc-keypad__key bc-keypad__key--right\"> <ng-include src=\"vm.keyTemplate(vm.bcRightButton, 'Right')\"></ng-include> </div> </div> ";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-keypad.js.map