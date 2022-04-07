/* ------------------------------------------------------------------------------
@name: Countdown
@description: Countdown
--------------------------------------------------------------------------------- */
const Countdown = (() => {

  handleRunCountdown
  const handleRunCountdown = () => {
    const _date = $('.js-countdown').attr('data-date');
    $('.js-countdown').countdown(_date, function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="sale__countdown__item"><p class="sale__countdown__num">%d<p class="sale__countdown__txt">Hari</p></p></div>'
        + '<div class="sale__countdown__item"><p class="sale__countdown__num">%H<p class="sale__countdown__txt">Jam</p></p></div>'
        + '<div class="sale__countdown__item"><p class="sale__countdown__num">%M<p class="sale__countdown__txt">Menit</p></div>'
        + '<div class="sale__countdown__item"><p class="sale__countdown__num">%S<p class="sale__countdown__txt">Detik</p>'));
    });
  }

  // init
  const init = () => {
    handleRunCountdown();
  }

  return {
    init
  }

})();

export default Countdown;