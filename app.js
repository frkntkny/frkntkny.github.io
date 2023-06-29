// removee the class container in the div id divShow1 if the uesr comes from mobil device

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow1");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";
  //get the id link1
  const link1 = document.getElementById("link1");
  link1.style.fontSize = "2.7rem";
  link1.style.color = "white";
  link1.style.borderColor = "white";
  link1.style.height = "70px";

}

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow2");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";

  //get the id link2
  const link2 = document.getElementById("link2");
  link2.style.fontSize = "2.7rem";
  link2.style.color = "white";
  link2.style.borderColor = "white";
  link2.style.height = "70px";

}

if (/Mobi/.test(navigator.userAgent)) {
  const divShow1 = document.getElementById("divShow3");
  divShow1.classList.remove("container");
  divShow1.style.width = "95%";
  divShow1.style.margin = "0 auto";
  divShow1.style.fontSize = "2.7rem";

  //get the id link3
  const link3 = document.getElementById("link3");
  link3.style.fontSize = "2.7rem";
  link3.style.color = "white";
  link3.style.borderColor = "white";
  link3.style.height = "70px";

}
