import { KeypadConfig } from './keypad.provider';
import { KeypadDirective } from './keypad.directive';

angular.module('bc.AngularKeypad', [])
    .provider('KeypadConfig', KeypadConfig)
    .directive('bcKeypad', KeypadDirective)
;

