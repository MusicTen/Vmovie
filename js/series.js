/**
 * Created by 17654 on 2018/5/2.
 */
var head_nav = document.getElementById("head_nav");
var head_as = head_nav.children
for (var i = 1; i < head_as.length; i++) {
  head_as[i].firstElementChild.onmouseover = function () {
    this.className = "header_current"
  }
  head_as[i].firstElementChild.onmouseout = function () {
    this.className = ""
  }
}

var Client = document.getElementById("Client");
var download = document.getElementById("download");
Client.onmouseover = function () {
  download.style.display = "block";
  download.style.zIndex = 1;
  this.className = "header_current"
}
Client.onmouseout = function () {
  download.style.display = "none";
  this.className = ""
}

var nav_ul = document.getElementById("nav_ul");
var nav_as = nav_ul.children
for (var i = 0; i < nav_as.length; i++) {
  nav_as[i].firstElementChild.onmouseover = function () {
    this.className = 'nav_current'
  };
  nav_as[i].firstElementChild.onmouseout = function () {
    this.className = 'none';
  }
}

var inp = document.getElementById("inp");
inp.onfocus = function () {
  this.style.boxShadow = "0 0 9px 1px #e2e2e2"
}
inp.onblur = function () {
  this.style.boxShadow = ""
}

var nav = document.getElementById("nav");
var threeBtn = document.getElementById("threeBtn");
window.onscroll = function () {
  var scrollTop = window.pageYoffset || document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 28) {
    nav.className = 'nav nav_fixed';
    //nav.style.zIndex = 10;
  } else {
    nav.className = 'nav'
  }
  if (scrollTop !== 0) {
    threeBtn.style.display = 'block';
  } else {
    threeBtn.style.display = 'none';
  }
}

var update = document.getElementById("update");
for (var i = 1; i < update.children.length; i++) {
  update.children[i].onmouseover = function () {
    this.style.cursor = 'pointer'
  }
}


var state = document.getElementsByClassName('state');
var login = document.querySelector(".login_cover");
for (var i = 0; i < state.length; i++) {
  state[i].firstElementChild.onmouseover = function () {
    this.innerText = '开始追'
  }
  state[i].firstElementChild.onmouseout = function () {
    this.innerText = '追剧'
  }
  state[i].firstElementChild.onclick = function () {
    login.style.display = 'block'
  }
}
var register = document.getElementById("register");
register.onclick = function () {
  login.style.display = 'block';
};
//var logLog = document.getElementById("logLog");
//logLog.onclick = function () {
//  login.style.display = 'block';
//};
var close = document.getElementById("close");
close.onclick = function () {
  login.style.display = 'none';
};


var model = document.getElementById("model");
var imgs = model.getElementsByTagName("img")
for (var i = 0; i < imgs.length; i++) {
  imgs[i].onmouseover = function () {
    this.style.opacity = 0.8
  }
  imgs[i].onmouseout = function () {
    this.style.opacity = 1
  }
}

var movie = document.getElementsByClassName("movie");
var shade = document.getElementsByClassName("shade")
var video = document.querySelectorAll("video")
for (var i = 0; i < movie.length; i++) {
  movie[i].index = i
  movie[i].onmouseover = function () {
    for (var j = 0; j < shade.length; j++) {
      shade[this.index].style.zIndex = 0
    }
  }
  movie[i].onmouseout = function () {
    for (var j = 0; j < shade.length; j++) {
      shade[this.index].style.zIndex = -1
    }
  }
  movie[i].onclick = function () {
    this.firstElementChild.style.zIndex = 2
  }
}
for (var i = 0; i < video.length; i++) {
  video[i].onclick = function () {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
}


var pagenum = document.getElementById("pagenum");
var lis = pagenum.children;
for (var i = 1; i < lis.length - 1; i++) {
  lis[i].index = i;
  lis[i].firstElementChild.onmouseover = function () {
    this.parentNode.className = 'li_current';
  }
  lis[i].firstElementChild.onmouseout = function () {
    this.parentNode.className = ''
  }
}
lis[lis.length - 1].firstElementChild.onmouseover = function () {
  this.style.backgroundColor = '#ccc'
}
lis[lis.length - 1].firstElementChild.onmouseout = function () {
  this.style.backgroundColor = ''
}


var link = document.getElementById("link");
for (var i = 0; i < link.children.length; i++) {
  link.children[i].onmouseover = function () {
    this.style.color = 'white';
    this.style.textDecoration = "underline"
  }
  link.children[i].onmouseout = function () {
    this.style.color = '#ccc';
    this.style.textDecoration = ""
  }
}
var code = document.querySelector(".code");
var opinion = document.querySelector(".opinion");
var toUp = document.querySelector(".toUp");

code.onmouseover = function () {
  this.style.backgroundPositionY = "46px"
  this.firstElementChild.style.display = "block"
  //this.parentNode.style.zIndex = 7
};
opinion.onmouseover = function () {
  this.style.backgroundPositionY = "95px"
};
toUp.onmouseover = function () {
  this.style.backgroundPositionY = "145px"
};

code.onmouseout = function () {
  this.style.backgroundPositionY = "0px"
  this.firstElementChild.style.display = "none"
};
opinion.onmouseout = function () {
  this.style.backgroundPositionY = "295px"
};
toUp.onmouseout = function () {
  this.style.backgroundPositionY = "245px"
};
toUp.onclick = function () {
  clearInterval(document.documentElement.timer);
  document.documentElement.timer = setInterval(function () {
    var flag = true;
    var current = document.documentElement.scrollTop || 0;
    var step = (0 - current) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current = current + step;
    document.documentElement.scrollTop = current;
    if (current !== 0) {
      flag = false;
    }
    if (flag) {
      clearInterval(document.documentElement.timer);
    }
  }, 20);
}

var phone = document.getElementById("phone");
var password = document.getElementById("password");
var reg1 = /^1[34578]\d{9}$/
var reg2 = /^\w{8,12}/
function checkReg(element, reg) {
  element.onblur = function () {
    var content = this.value;
    if (content === "") {
      this.nextElementSibling.innerHTML = "";
      return
    }
    if (reg.test(content)) {
      this.nextElementSibling.innerHTML = "合法";
      this.nextElementSibling.style.color = "green";
    } else {
      this.nextElementSibling.innerHTML = "不合法";
      this.nextElementSibling.style.color = "red";
    }
  }
}
checkReg(phone, reg1);
checkReg(password, reg2);
















