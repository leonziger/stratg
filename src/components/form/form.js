import { maskInput } from 'vanilla-text-mask';
import $ from "jquery";


const phoneMask = ['+','9','7', '2', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

export function mask(inputElement) {
    return maskInput({
      inputElement,
      mask: phoneMask,
      showMask: true
    });
};

$('[type=tel]').focus(function(){
  mask(this);
})
