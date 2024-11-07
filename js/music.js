(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// import $ from 'jquery';
// import 'APlayer/dist/APlayer.min.css';
// import APlayer from 'APlayer';
// import '../lib/Meting.min'

var page = {
  init: function init() {
    // page.loadAPlayer();
    // page.event();
  },
  loadAPlayer: function loadAPlayer() {
    var options = {
      container: document.getElementById('aplayer'),
      mini: true,
      // listFolded: false,
      // listMaxHeight: 90,
      // lrcType: 3,
      audio: [{
        name: 'name1',
        artist: 'artist1',
        url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
        cover: '../images/favicon.png',
        // lrc: 'lrc1.lrc',
        theme: '#ebd0c2'
      }]
    };
    var ap = new APlayer(options);
  },
  event: function event() {}
};
page.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvbWluaW1hL3NvdXJjZS9qcy9tdXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBSSxJQUFJLEdBQUc7RUFDUCxJQUFJLEVBQUUsZ0JBQU07SUFDUjtJQUNBO0VBQUEsQ0FDSDtFQUNELFdBQVcsRUFBRSx1QkFBTTtJQUNmLElBQU0sT0FBTyxHQUFHO01BQ1osU0FBUyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO01BQzdDLElBQUksRUFBRSxJQUFJO01BQ1Y7TUFDQTtNQUNBO01BQ0EsS0FBSyxFQUFFLENBQ0g7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLEdBQUcsRUFBRSw0REFBNEQ7UUFDakUsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QjtRQUNBLEtBQUssRUFBRTtNQUNYLENBQUM7SUFFVCxDQUFDO0lBQ0QsSUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ25DLENBQUM7RUFDRCxLQUFLLEVBQUUsaUJBQU0sQ0FFYjtBQUNKLENBQUM7QUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0ICdBUGxheWVyL2Rpc3QvQVBsYXllci5taW4uY3NzJztcclxuLy8gaW1wb3J0IEFQbGF5ZXIgZnJvbSAnQVBsYXllcic7XHJcbi8vIGltcG9ydCAnLi4vbGliL01ldGluZy5taW4nXHJcblxyXG5cclxuXHJcbmxldCBwYWdlID0ge1xyXG4gICAgaW5pdDogKCkgPT4ge1xyXG4gICAgICAgIC8vIHBhZ2UubG9hZEFQbGF5ZXIoKTtcclxuICAgICAgICAvLyBwYWdlLmV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgbG9hZEFQbGF5ZXI6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGxheWVyJyksXHJcbiAgICAgICAgICAgIG1pbmk6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIGxpc3RGb2xkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBsaXN0TWF4SGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgLy8gbHJjVHlwZTogMyxcclxuICAgICAgICAgICAgYXVkaW86IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogJ2FydGlzdDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9tdXNpYy4xNjMuY29tL3NvbmcvbWVkaWEvb3V0ZXIvdXJsP2lkPTQ5Njg2OTQyMi5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnLi4vaW1hZ2VzL2Zhdmljb24ucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBscmM6ICdscmMxLmxyYycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICcjZWJkMGMyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcCA9IG5ldyBBUGxheWVyKG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50OiAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5wYWdlLmluaXQoKTsiXX0=
