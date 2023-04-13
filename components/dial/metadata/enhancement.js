function makeDial(dial) {
  var dialOffsetWidth = dial.offsetWidth
  var dialOffsetLeft = dial.offsetLeft + dial.offsetParent.offsetLeft
  var input = dial.querySelector("input")
  var handle = dial.querySelector(".spectrum-Dial-handle")
  var min = -45
  var max = 225
  function onMouseDown(e, sliderHandle) {
    window.addEventListener("mouseup", onMouseUp)
    window.addEventListener("mousemove", onMouseMove)
    document.body.classList.add("u-isGrabbing")
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener("mouseup", onMouseUp)
    window.removeEventListener("mousemove", onMouseMove)
    document.body.classList.remove("u-isGrabbing")
  }
  function onMouseMove(e, sliderHandle) {
    var x = Math.max(Math.min(e.x - dialOffsetLeft, dialOffsetWidth), 0)
    var percent = (x / dialOffsetWidth) * 100

    var deg = percent * 0.01 * (max - min) + min
    handle.style.transform = "rotate(" + deg + "deg" + ")"
  }

  if (!dial.classList.contains("is-disabled")) {
    dial.addEventListener("mousedown", onMouseDown)
  }
}

function enhanceAll() {
  Array.prototype.forEach.call(
    document.querySelectorAll(".spectrum-Dial"),
    makeDial(dial)
  )
}

window.addEventListener("PageFastLoaded", enhanceAll)
window.addEventListener("DOMContentLoaded", enhanceAll)
