/* ------------------------------------------------------------------------------
@name: InputForm
@description: InputForm
--------------------------------------------------------------------------------- */


// --- InputForm
const InputForm = (() => {

  // --- handleClickDropdown
  const handleClickDropdown = () => {
    // handle click dropdown
    $('.fi-dropdown').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (_this.parents('.fi-row').hasClass('fi-dropdown--show')) {
        _this.parents('.fi-row').removeClass('fi-dropdown--show');
      } else {
        _this.parents('.fi-row').addClass('fi-dropdown--show');
      }
    });

    // --- handle click body
    $('body').on('click', (e) => {
      if ($('.fi-dropdown').parents('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-dropdown').parents('.fi-row').removeClass('fi-dropdown--show');
      }
    });

    // stop progation
    $('body').on('click', '.fi-dropdown', (e) => {
      e.stopPropagation();
    });

  }

  // --- handleKeyupDropdown
  const handleKeyupDropdown = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.fi-dropdown').parents('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-row').removeClass('fi-dropdown--show');
      }
    });
  }

  // handleSelectDropdown
  const handleSelectDropdown = () => {
    $('.fi-dropdown-item').on('click', (e) => {
      const _this = $(e.currentTarget);
      const _val = _this.attr('data-value');
      const _text = _this.text();

      _this.parents('.fi-dropdown').find('.fi-dropdown__input').attr('value', _val);
      _this.parents('.fi-dropdown').find('.fi-dropdown__text').text(_text);
    });
  }

  // --- init
  const init = () => {
    handleClickDropdown();
    handleKeyupDropdown();
    handleSelectDropdown();
  }

  // --- return
  return {
    init
  }

})();

export default InputForm;

