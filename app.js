// removee the class container in the div id divShow1 if the uesr comes from mobil device

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow1");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";
}

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow2");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";
}

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow3");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";
}
