import $ from 'jquery';

$(function(){
  $('.motivation-form').on('submit', function(e){
    e.preventDefault();

    const form1 = $(this);
    const name1 = form1.find('[name="name"]');
    const phone1 = form1.find('[name="phone"]');
    const company1 = form1.find('[name="company"]');
    const form2 = $('.contact-us__form');
    const name2 = form2.find('[name="name"]');
    const phone2 = form2.find('[name="phone"]');
    const company2 = form2.find('[name="company"]');

    name2.val(name1.val());
    phone2.val(phone1.val());
    company2.val(company1.val());

    $('html, body').animate({
      scrollTop: $('.contact-us').offset().top
    }, 1000);
  });
});






