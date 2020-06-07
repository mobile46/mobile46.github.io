$(function() {

  var sidebarUtil = (function() {
    const ATTR_DISPLAY = "sidebar-display";
    var isExpanded = false;
    var body = $('body');

    return {
      toggle: function() {
        if (isExpanded == false) {
          body.attr(ATTR_DISPLAY, '');
        } else {
          body.removeAttr(ATTR_DISPLAY);
        }

        isExpanded = !isExpanded;
      }
    }

  })();

  $("#sidebar-trigger").click(sidebarUtil.toggle);

  $('#mask').click(sidebarUtil.toggle);

});
