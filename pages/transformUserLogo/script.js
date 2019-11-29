/* eslint-disable no-alert */
/* eslint-disable no-undef */
'use strict';

const $loading = $('.p-loading');
const $wrap = $('.p-wrap');
const $wrapNew = $('.p-wrap-new');
const $userLogo = $('.p-user-logo');
const $qjdLogo = $('.p-qjd-logo');
const $userLogoNew = $('.p-user-logo-new');
const $company = $('.p-company');

// 解析location的参数，获得code
// const searchStr = window.location.search ? window.location.search.substr(1) : '';
// const searchArr = searchStr.split('&');
// const searchObj = {};
// searchArr.forEach(item => {
//   const arr = item.split('=');
//   searchObj[arr[0]] = arr[1];
// });

// if (searchObj.state && searchObj.state === 'jjys') {
  document.title = '交建云商头像生成器';
  $company.text('交建云商');
  $('body').addClass('p-theme-jjys');
  $qjdLogo[0].src = '/public/pages/transformUserLogo/logo-jjys.png';
// } else {
//   document.title = '仟金顶头像生成器';
//   $company.text('仟金顶网络科技有限公司');
//   $qjdLogo[0].src = '/public/pages/transformUserLogo/logo-qjd.png';
// }

// let userLogoReady = false;
// function transformUserLogo() {
//   if (userLogoReady === false) return;
//   $loading.hide();
//   html2canvas($wrap[0], { width: 210, height: 210, useCORS: true }).then(canvas => {
//     $userLogoNew[0].src = canvas.toDataURL('image/png');
//     $wrap.hide();
//     $wrapNew.show();
//   });
// }
window.onload = function transformUserLogo() {
    // if (userLogoReady === false) return;
    $loading.hide();
    html2canvas($wrap[0], { width: 210, height: 210, useCORS: true }).then(canvas => {
    $userLogoNew[0].src = canvas.toDataURL('image/png');
       $wrap.hide();
      $wrapNew.show();
    });
  }
// $userLogo[0].onload = function() {
//   userLogoReady = true;
//   try {
//     transformUserLogo();
//   } catch (error) {
//     window.alert('生成失败，请刷新页面重试');
//   }
// };
$userLogo[0].src = '/public/pages/transformUserLogo/lianmen.png';

// $.ajax({
//   type: 'post',
//   url: '/api/transformUserLogo/getUserInfo',
//   data: {
//     code: searchObj.code,
//     // state: searchObj.state,
//   },
//   success(res) {
//     if (res.errcode) {
//       window.alert('头像下载失败，请刷新页面重试');
//     } else {
//       $userLogo[0].src = res.headimgurl.replace(/(\d+)$/, '0');
//     }
//   },
//   fail() {
//     window.alert('头像下载失败，请刷新页面重试');
//   },
// });

function getFileUrl(sourceId) {

  var url;
  
  if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
      url = document.getElementById(sourceId).value;
  } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
      url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  }
  return url;
  }
  var ss=null
  var ImgType=["gif", "jpeg", "jpg", "bmp", "png","ico"];
  //--将本地图片 显示到浏览器上 
  function preImg(obj, targetId) { 
  ss=obj;
      if (!RegExp("\.(" +  ImgType.join("|") + ")$", "i").test(obj.value.toLowerCase())) {
          alert("选择文件错误,图片类型必须是" +  ImgType.join(","));
          this.value = "";
          return false
      }
  
  var sourceId=obj.id
  var url = getFileUrl(sourceId);
  var imgPre = document.getElementById(targetId);
  $userLogo[0].src = url;
  }