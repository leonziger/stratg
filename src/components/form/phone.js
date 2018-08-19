import $ from 'jquery';
import { maskInput } from 'vanilla-text-mask';


const phoneMask = ['+','7', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export default {
  mask(element) {
    return maskInput({
      inputElement: element,
      mask: phoneMask,
      showMask: true
    });
  }
};
