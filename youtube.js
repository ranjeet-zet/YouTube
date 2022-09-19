////
// document.querySelector("#body").addEventListener("load", auto);
////

function onfill() {
  let A = document.querySelector("#search").value;
  let id;
  if (id) {
    clearTimeout(id);
  }
  //   link = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${A}&key=AIzaSyCbGnfuX_5hKKz3C1m5SKOG0B2eKRHWjOg`;
  link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${A}&key=AIzaSyCx_bFbe5c3A8Ikbt1EjH9TE2P2gAS0iCs`;
  id = setTimeout(function () {
    fetch(link)
      .then((ele) => {
        return ele.json();
      })
      .then((ele) => {
        console.log(ele.items);
        display(ele.items);
      })
      .catch((ele) => {
        console.log("error");
      });
  }, 1000);
}

let Arr = JSON.parse(localStorage.getItem("play")) || [];
function auto() {
  let GET = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCx_bFbe5c3A8Ikbt1EjH9TE2P2gAS0iCs`;
  fetch(GET)
    .then((ele) => {
      return ele.json();
    })
    .then((ele) => {
      console.log(ele.items);
      display(ele.items);
    })
    .catch((ele) => {
      console.log("error");
    });
}
////
function searchvideo() {
  let A = document.querySelector("#search").value;
  //   link = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${A}&key=AIzaSyCbGnfuX_5hKKz3C1m5SKOG0B2eKRHWjOg`;
  link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${A}&key=AIzaSyCx_bFbe5c3A8Ikbt1EjH9TE2P2gAS0iCs`;
  fetch(link)
    .then((ele) => {
      return ele.json();
    })
    .then((ele) => {
      console.log(ele.items);
      display(ele.items);
    })
    .catch((ele) => {
      console.log("error");
    });
}

function display(data) {
  let C = 0;
  let Main = document.querySelector("#contant");
  Main.innerHTML = null;
  data.forEach((ele) => {
    let Div = document.createElement("div");
    Div.setAttribute("class", "video");

    C++;
    let image = document.createElement("img");
    image.src = ele.snippet.thumbnails.high.url;

    let Tital = document.createElement("h3");
    Tital.innerText = ele.snippet.title;

    let Chanel = document.createElement("p");
    Chanel.innerText = ele.snippet.channelTitle;

    let ViewTime = document.createElement("p");
    ViewTime.innerText = `&{} . &{}`;
    document.querySelector("title").innerText = `(${C}) Sasta YouTube`;

    Div.addEventListener("mouseover", function () {
      onmousefun(Div);
    });
    Div.addEventListener("mouseout", function () {
      mousefun(Div, image, Tital, Chanel);
    });
    Div.addEventListener("click", function () {
      Arr = [];
      Arr.push(ele);
      localStorage.setItem("play", JSON.stringify(Arr));
      window.location.href = "./player.html";
    });

    Div.append(image, Tital, Chanel);

    Main.append(Div);
  });
}
//////
function onmousefun(Div) {
  //
  // Div.innerHTML = null;
  // Iframe = document.createElement("iframe");
  // Iframe.src = `https://www.youtube.com/embed/1tEj-G5WxNw?controls=0`;
  // Iframe.setAttribute("allow", "autoplay");
  // // Iframe.setAttribute("allow", "picture-in-picture");
  // Div.append(Iframe);
}

///
function mousefun(Div, image, Tital, Chanel) {}

///
{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/1tEj-G5WxNw?controls=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
}
