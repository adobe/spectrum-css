function animateCircleLoaders() {
  var value = 0
  setInterval(function () {
    var loaders = document.querySelectorAll(
      ".spectrum-CircleLoader:not(spectrum-CircleLoader--indeterminate)"
    )
    if (loaders.length) {
      changeLoaders(loaders, value++)
      if (value >= 100) {
        value = 0
      }
    }
  }, 500)
}

function changeLoaders(nodeList, value) {
  Array.prototype.slice.call(nodeList).forEach(function (loader) {
    changeLoader(loader, value)
  })
}

function changeLoader(loader, value, submask1, submask2) {
  submask1 =
    submask1 || loader.querySelector(".spectrum-CircleLoader-fillSubMask1")
  submask2 =
    submask2 || loader.querySelector(".spectrum-CircleLoader-fillSubMask2")
  var angle
  if (value > 0 && value <= 50) {
    angle = -180 + (value / 50) * 180
    submask1.style.transform = "rotate(" + angle + "deg)"
    submask2.style.transform = "rotate(-180deg)"
  } else if (value > 50) {
    angle = -180 + ((value - 50) / 50) * 180
    submask1.style.transform = "rotate(0deg)"
    submask2.style.transform = "rotate(" + angle + "deg)"
  }
}


animateCircleLoaders();