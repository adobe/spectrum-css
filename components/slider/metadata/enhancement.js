function makeDoubleSlider(slider) {
  var tracks = slider.querySelectorAll(".spectrum-Slider-track")
  var leftTrack = tracks[0]
  var middleTrack = tracks[1]
  var rightTrack = tracks[2]
  var handles = slider.querySelectorAll(".spectrum-Slider-handle")
  var leftHandle = handles[0]
  var rightHandle = handles[1]

  var handle = null
  function onMouseDown(e, sliderHandle) {
    if (e.target.classList.contains("spectrum-Slider-handle")) {
      handle = e.target
      window.addEventListener("mouseup", onMouseUp)
      window.addEventListener("mousemove", onMouseMove)
      document.body.classList.add("u-isGrabbing")
    }
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener("mouseup", onMouseUp)
    window.removeEventListener("mousemove", onMouseMove)
    document.body.classList.remove("u-isGrabbing")
    handle = null
  }
  function onMouseMove(e, sliderHandle) {
    if (!handle) {
      return
    }

    var sliderOffsetWidth = slider.offsetWidth
    var sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft

    var x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0)
    var percent = (x / sliderOffsetWidth) * 100

    if (isRTL()) {
      percent = 100 - percent
    }

    if (handle === leftHandle) {
      if (percent < parseFloat(rightHandle.style[toggleRTL("left", "right")])) {
        handle.style[toggleRTL("left", "right")] = percent + "%"
        handle.style[toggleRTL("right", "left")] = "auto"
        leftTrack.style.width = percent + "%"
      }
    } else {
      if (percent > parseFloat(leftHandle.style[toggleRTL("left", "right")])) {
        handle.style[toggleRTL("left", "right")] = percent + "%"
        handle.style[toggleRTL("right", "left")] = "auto"
        rightTrack.style.width = 100 - percent + "%"
      }
    }
    middleTrack.style[toggleRTL("left", "right")] =
      leftHandle.style[toggleRTL("left", "right")]
    middleTrack.style[toggleRTL("right", "left")] =
      100 - parseFloat(rightHandle.style[toggleRTL("left", "right")]) + "%"
  }

  function init() {
    if (isRTL()) {
      leftHandle.style.right = leftHandle.style.left
      leftHandle.style.left = leftHandle.style.right
      rightHandle.style.right = rightHandle.style.left
      rightHandle.style.left = rightHandle.style.right
    }

    // Set initial track position
    var startPercent = parseFloat(leftHandle.style[toggleRTL("left", "right")])
    var endPercent = parseFloat(rightHandle.style[toggleRTL("left", "right")])
    leftTrack.style.width = startPercent + "%"
    middleTrack.style[toggleRTL("left", "right")] = startPercent + "%"
    middleTrack.style[toggleRTL("right", "left")] = 100 - endPercent + "%"
    rightTrack.style.width = 100 - endPercent + "%"

    if (!slider.classList.contains("is-disabled")) {
      slider.addEventListener("mousedown", onMouseDown)
    }
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === "dir") {
        init()
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true, //configure it to listen to attribute changes
  })

  init()
}

function makeSlider(slider) {
  var tracks = slider.querySelectorAll(".spectrum-Slider-track")
  var leftTrack = tracks[0]
  var rightTrack = tracks[1]
  var handles = slider.querySelectorAll(".spectrum-Slider-handle")
  var handle = handles[0]
  var isColor = slider.classList.contains("spectrum-Slider--color")
  var fill = slider.querySelector(".spectrum-Slider-fill")

  if (handles.length > 1) {
    makeDoubleSlider(slider)
    return
  }

  var buffers = slider.querySelectorAll(".spectrum-Slider-buffer")
  if (buffers.length) {
    var leftBuffer = buffers[0]
    var rightBuffer = buffers[1]
    var bufferedAmount =
      parseInt(handle.style[toggleRTL("left", "right")], 10) +
      parseInt(rightBuffer.style.width, 10)
  }

  function onMouseDown(e, sliderHandle) {
    window.addEventListener("mouseup", onMouseUp)
    window.addEventListener("mousemove", onMouseMove)
    handle.classList.add("is-dragged")
    // to move by merely clicking on the track
    onMouseMove(e)
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener("mouseup", onMouseUp)
    window.removeEventListener("mousemove", onMouseMove)
    handle.classList.remove("is-dragged")
  }
  function onMouseMove(e, sliderHandle) {
    var sliderOffsetWidth = slider.offsetWidth
    var sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft

    var x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0)
    var percent = (x / sliderOffsetWidth) * 100

    if (isRTL()) {
      percent = 100 - percent
    }

    if (leftTrack && rightTrack && !isColor) {
      leftTrack.style.width = percent + "%"
      rightTrack.style.width = 100 - percent + "%"
    }

    handle.style[toggleRTL("left", "right")] = percent + "%"
    handle.style[toggleRTL("right", "left")] = "auto"

    if (buffers.length) {
      if (percent >= bufferedAmount) {
        // Hide the right buffer
        rightBuffer.style.width = 0
        rightBuffer.style.left = "auto"
        rightBuffer.style.right = "auto"

        // This disgusting calculation takes into account the pretty gap
        var bufferStyle = window.getComputedStyle(leftBuffer)
        var handleGap = parseInt(
          bufferStyle[toggleRTL("paddingRight", "paddingLeft")],
          10
        )
        var handlePosition =
          toggleRTL(
            handle.offsetLeft,
            handle.parentElement.offsetWidth - handle.offsetLeft
          ) +
          handle.offsetWidth / 2
        var bufferMaxWidth = handlePosition

        // The left buffer is offset by the gap and some margin, so we have to add that back to make it actually hit the desired value
        var bufferOffset =
          parseInt(bufferStyle[toggleRTL("marginLeft", "marginRight")], 10) * -1
        var actualMiddle =
          handle.parentElement.offsetWidth / 2 + bufferOffset + handleGap

        // Keep the left buffer to account for the nasty gaps
        leftBuffer.style.width = Math.min(bufferMaxWidth, actualMiddle) + "px"
      } else {
        leftBuffer.style.width = percent + "%"
        rightBuffer.style.width = "auto"
        rightBuffer.style[toggleRTL("left", "right")] = percent + "%"
        rightBuffer.style[toggleRTL("right", "left")] =
          100 - bufferedAmount + "%"
      }
    }

    if (fill) {
      fill.style[toggleRTL("left", "right")] =
        (percent < 50 ? percent : 50) + "%"
      fill.style.width = (percent < 50 ? 50 - percent : percent - 50) + "%"
      if (percent > 50) {
        fill.classList.add("spectrum-Slider-fill--right")
      } else {
        fill.classList.remove("spectrum-Slider-fill--right")
      }
    }
  }
  function init() {
    if (isRTL()) {
      handle.style.right = handle.style.left
      handle.style.left = handle.style.right
      if (fill) {
        fill.style.right = fill.style.left
        fill.style.left = fill.style.right
      }

      if (buffers.length) {
        var oldRightRight = rightBuffer.style.right
        rightBuffer.style.right = rightBuffer.style.left
        rightBuffer.style.left = oldRightRight
        var oldLeftRight = leftBuffer.style.right
        leftBuffer.style.right = leftBuffer.style.left
        leftBuffer.style.left = oldLeftRight
      }

      if (tracks.length) {
        // Flip colors
        if (tracks[0].style.background) {
          tracks[0].style.background = tracks[0].style.background.replace(
            "right",
            "left"
          )
        }
      }
    }

    // Set initial track position
    var percent = parseInt(handle.style[toggleRTL("left", "right")], 10)
    if (leftTrack && rightTrack && !isColor) {
      leftTrack.style.width = percent + "%"
      rightTrack.style.width = 100 - percent + "%"
    }

    if (!slider.classList.contains("is-disabled")) {
      slider.addEventListener("mousedown", onMouseDown)
    }
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === "dir") {
        init()
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true, //configure it to listen to attribute changes
  })

  init()
}
function enhanceAll() {
  Array.prototype.forEach.call(
    document.querySelectorAll(".spectrum-Slider"),
    function (slider) {
      makeSlider(slider)
    }
  )
}

window.addEventListener("PageFastLoaded", enhanceAll)
window.addEventListener("DOMContentLoaded", enhanceAll)
