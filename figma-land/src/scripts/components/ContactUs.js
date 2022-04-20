/* ------------------------------------------------------------------------------
@name: Contact Us
@description: Contact Us
--------------------------------------------------------------------------------- */

// --- utillities

import {
  Validation
} from 'utilities';

// Form Validation
const ElementSelector = [
  {
    id: 'name',
    validation: {
      required: true
    }
  },
  {
    id: 'contactEmail',
    validation: {
      required: true,
      email: true
    }
  },
  {
    id: 'message',
    validation: {
      required: true
    }
  },
];
const ElementEvents = ['input', 'blur'];

// --- Contact Us
const ContactUs = (() => {

  // Handle Run Validation
  const handleRunValidation = () => {
    Validation.config(ElementEvents, ElementSelector);
  }

  // Handle Click Success Alert
  const handleClickAlert = () => {
    $('.js-alert-contact, js-contact').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#'+v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        const swalWithBootstrapButton = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn--confirm btn--popup mr-12 w-100',
          },
          buttonsStyling: false
        });
        swalWithBootstrapButton.fire({
          title: 'Message sent',
          text: 'We will reply to your message soon',
          icon: 'success',
          confirmButtonColor: '#458ff6',
          confirmButtonText: 'Close',
          confirmButtonColor: '#458ff6',
          width: 500,
          padding: '22px',
          textMargin: '24px',
        });
      }
    });
  }

  // --- init
  const init = () => {
    handleClickAlert();
    handleRunValidation();
  }

  // --- return
  return {
    init
  }

})();

export default ContactUs;
