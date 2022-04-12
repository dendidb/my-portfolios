/* ------------------------------------------------------------------------------
@name: About Us
@description: About Us
--------------------------------------------------------------------------------- */

// --- utilities
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
      id: 'email',
      validation: {
        required: true,
        email: true
      }
    },
    {
      id: 'phone',
      validation: {
        required: true,
        phone: true
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
  
  // --- AboutUs
  const AboutUs = (() => {
  
    // Handle Run Validation
    const handleRunValidation = () => {
      Validation.config(ElementEvents, ElementSelector);
    }
  
    // Handle Click Validation
    const handleClickValidation = () => {
      $('button[type="submit"]').on('click', (e) => {
        $.each(ElementSelector, (i, v) => {
          $('#'+v.id).blur();
        });
  
        if ($('.error').length > 0) {
          e.preventDefault();
        }
      });
    }
  
    // Handle Click Success Alert
    const handleClickAlert = () => {
      $('.js-alert-message').on('click', (e) => {
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
            title: 'Message has been sent!',
            text: 'Thank you. Have a nice day!',
            icon: 'success',
            confirmButtonColor: '#5f9e5f',
            confirmButtonText: 'Close',
            confirmButtonColor: '#5f9e5f',
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
      handleRunValidation();
      handleClickValidation();
      handleClickAlert();
    }
  
    // --- return
    return {
      init
    }
  
  })();
  
  export default AboutUs;
  