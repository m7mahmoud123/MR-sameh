


let listVideo = document.querySelectorAll(".video-list .vid")
let mainVideo = document.querySelector(".main-video iframe")
let title = document.querySelector(".main-video .title")

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove("active"));
        video.classList.add("active")
        if (video.classList.contains("active")) {
            let src = video.children[0].getAttribute("src");
            mainVideo.src = src
            let text = video.children[1].innerHTML;
            title.innerHTML = text
        }
    }
})



let end = document.getElementsByClassName("end")[0]
let endinput = document.getElementsByClassName("end-input")[0]
let secure = document.getElementsByClassName("secure")[0]

window.onload = function () {
    document.getElementsByClassName("gallary-container")[0].classList.add("hack")
}

end.onclick = function () {


    if (endinput.value == localStorage.getItem("code")) {
        document.getElementsByClassName("gallary-container")[0].classList.remove("hack")
        secure.style.display = "none"
    }


    else {

        document.getElementById("warn").style.display = "block"
    }

}



