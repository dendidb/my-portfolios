/* ------------------------------------------------------------------------------
@name: Subscribe
@description: Subscribe
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Validation
} from 'utilities';

// Form Validation
const ElementSelector = [
  {
    id: 'email',
    validation: {
      required: true,
      email: true
    }
  },
];
const ElementEvents = ['input', 'blur'];

// --- Subscribe
const Subscribe = (() => {

  // Handle Run Validation
  const handleRunValidation = () => {
    Validation.config(ElementEvents, ElementSelector);
  }

  // Handle Click Success Alert
  const handleClickAlert = () => {
    $('.js-alert-subscribe').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#'+v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        const swalWithBootstrapButton = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn--primary btn--popup mr-12 w-100',
          },
          buttonsStyling: false
        })
        swalWithBootstrapButton.fire({
          title: 'Berhasil!',
          text: 'Terima kasih telah subscribe. Kami akan selalu mengirim kabar terbaru kepada Anda',
          icon: 'success',
          confirmButtonColor: '#0d0d2b',
          confirmButtonText: 'Tutup',
          confirmButtonColor: '#0d0d2b',
          width: 500,
          height: 800,
          width: 550,
          padding: '22px',
          textMargin: '24px',
        })
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

export default Subscribe;
