document.getElementById("down").onclick = function ()
{
    window.location="https://www.mediafire.com/file/zfb1yblkv5crlzx/The_Cursed_Pack.zip/file"
};
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });