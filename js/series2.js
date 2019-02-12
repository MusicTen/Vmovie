/**
 * Created by 17654 on 2018/5/2.
 */
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
  download.style.zIndex = 5;
  this.className = "header_current"
}
Client.onmouseout = function () {
  download.style.display = "none";
  this.className = ""
}

var ul = document.getElementById("lis");
var borderB = document.getElementById("borderB");
var lis = ul.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].onmouseover = function () {
    borderB.style.left = this.offsetLeft + 'px';
    this.style.color = 'skyblue';
  }
  lis[i].onmouseleave = function () {
    borderB.style.left = '259px';
    this.style.color = 'black';
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
  //if (scrollTop > 28) {
  //  nav.className = 'nav nav_fixed'
  //  nav.style.zIndex = 1
  //} else {
  //  nav.className = 'nav'
  //}
  if (scrollTop !== 0) {
    threeBtn.style.display = 'block';
  } else {
    threeBtn.style.display = 'none';
  }
}

var right = document.getElementById("right");
setInterval(function(){
  right.click()
},2000)




var login = document.querySelector(".login_cover");
var register = document.getElementById("register");
register.onclick = function () {
  login.style.display = 'block'
}
var close = document.getElementById("close");
close.onclick = function () {
  login.style.display = 'none'
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

var series2Movie = document.getElementById("series2Movie");
series2Movie.onclick = function(){
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
}

