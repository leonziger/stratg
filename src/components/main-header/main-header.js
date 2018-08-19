import $ from 'jquery';
import vex from 'vex-js';
import phone from '../form/phone';


$('.main-header__contacts-button').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=callback]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
    afterOpen: function () {
      $('[type=tel]').focus(function(){
        phone.mask(this);
      })
    }
  });
});
