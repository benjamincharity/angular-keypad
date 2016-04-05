import { KeypadConfigProvider } from './keypad.provider';
import { KeypadDirective } from './keypad.directive';

angular.module('bc.AngularKeypad', [])
    .provider('KeypadConfig', KeypadConfigProvider)
    .directive('bcKeypad', KeypadDirective)
;

