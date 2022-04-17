/* ------------------------------------------------------------------------------
@name: Blog
@description: Blog
--------------------------------------------------------------------------------- */

const Blog = (() => {

  // --- handleCheckHeight
  const setHeight = () => {
    handleResetHeight();
    let _height = 0;
    $('.blog__list .blog__item').each((i, e) => {
      if (_height < $(e).find('.blog__txt').height()) {
        _height = $(e).find('.blog__txt').height();
      }
    });
    $('.blog__txt').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.blog__txt').attr('style');
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.blog__txt').removeAttr('style');
    }
  }

  // init
  const init = () => {
    setHeight();
  }

  return {
    init,
    checkHeight: setHeight
  }

})();

export default Blog
