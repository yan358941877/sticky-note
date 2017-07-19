var Waterfall = (function () {
  var temp 
  function render(id) {
    temp = id
    var $container = $(id),
      totalWidth = $container.width(),
      $items = $container.children(),
      width = 240,
      columnNum = Math.floor(totalWidth / width),
      shareRest = (totalWidth - columnNum * width) / columnNum,
      columnsHeight = new Array(columnNum)
    columnsHeight.fill(0)
    for (var i = 0, len = $items.length; i < len; i++) {
      var minHeight = Math.min.apply(null, columnsHeight)
      var minIndex = columnsHeight.indexOf(minHeight)
      if (minIndex == 0) {
        $items.eq(i).css({ "left": width * minIndex + shareRest / 2 + "px", "top": minHeight + "px" })
      } else {
        $items.eq(i).css({ "left": width * minIndex + shareRest * minIndex + shareRest / 2 + "px", "top": minHeight + "px" })
      }
      columnsHeight[minIndex] += $items.eq(i).innerHeight()
    }
  }

  $(window).on('resize', function(){
    render(temp)
  })

  return {
    init: render
  }
})()

module.exports = Waterfall