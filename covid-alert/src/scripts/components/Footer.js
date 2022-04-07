/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

// --- Footer
const Footer = ( () => {

  const _width = 767.98;

  // handle padding bottom
  const handleFooterSticky = () => {
    const _footer = $('.footer').innerHeight();

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  }

  const init = () => {
    handleFooterSticky();
  }

  return {
    init,
    footerSticky: handleFooterSticky
  }
})();

export default Footer;
