// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  document.addEventListener("click", e => {
    const targetElement = e.target

    if (document.querySelector(".menu__item.open") && !targetElement.closest(".menu__item.open")) {
      document.querySelector(".menu__item.open").classList.remove("open")
    }

    if (targetElement.closest(".menu__link") && htmlTag.closest(".touch")) {
      let menuItem = targetElement.closest(".menu__item")

      if (targetElement.closest(".menu__item.open")) {
        menuItem.classList.remove("open")
        return
      }
      if (document.querySelector(".menu__item.open") && !targetElement.closest(".menu__item.open")) {
        document.querySelector(".menu__item.open").classList.remove("open")
        menuItem.classList.add("open")
        return
      }
      if (!targetElement.closest(".menu__item.open")) {
        menuItem.classList.add("open")
        if (!targetElement.closest("._spoller-init")) {
          e.preventDefault()
          console.log("1")
        }
      }
      // if (targetElement.closest('.menu__item')) {
      //     menuItem.classList.remove('open')
      // }
    }
    ////

    if (document.querySelector(".language.open-language") && !targetElement.closest(".language")) {
      document.querySelector(".language.open-language").classList.toggle("open-language")
    }
    if (targetElement.closest(".language")) {
      targetElement.closest(".language").classList.toggle("open-language")
    }

    //////
  })

  let videoBlock = document.querySelector("section.video")

  if (videoBlock) {
    let video = videoBlock.querySelector("video")
    video.pause()
    // let playPauseBtn = videoBlock.querySelector(".video__button")

    video.addEventListener("click", function () {
      if (video.paused) {
        video.play()
        videoBlock.classList.add("playing")
      } else {
        video.pause()
        videoBlock.classList.remove("playing")
      }
    })
  }
}
