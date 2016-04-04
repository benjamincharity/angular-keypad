import { KeypadConfigProvider } from './keypad.provider';
import { KeypadDirective } from './keypad.directive';

angular.module('bc.AngularKeypad', [])
    .provider('AngularKeypadConfig', KeypadConfigProvider)
    .directive('bcKeypad', KeypadDirective)
;

