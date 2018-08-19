import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/localization/messages_ru';
import './phone';

$.validator.setDefaults({
  debug: true,
  submitHandler(form){
    console.log(form);
    // toastr.success('Вы успешно подписаны на рассылку');
  },
  errorElement: 'div',
  errorPlacement(error, element) {
    const placement = $($(element).data('msg-container'));

    if (placement.length) {
      placement.text($(error).text());
    } else {
      error.insertAfter(element);
    }
  },
  success: 'valid'
});
