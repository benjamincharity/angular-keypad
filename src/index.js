import { KeypadConfig } from './keypad.provider';
import { KeypadDirective } from './keypad.directive';

angular.module('bc.AngularKeypad', [])
    .provider('bcKeypadConfig', KeypadConfig)
    .directive('bcKeypad', KeypadDirective)
;

