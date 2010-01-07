// ==UserScript==
// @name        opensenya
// @description 「１３３７夜」等の数字を選択して Shift+Ctrl+クリックまたは Shift+右クリックすると千夜千冊の該当ページが開きます。
// @include     http://www.honza.jp/senya/1/matsuoka_seigow/*
// @version     0.0.5
// @author      outZider
// ==/UserScript==

(function() {
  function fz(num, digit) {
    var s = String(num);
    for (var i = 0; i < digit - String(num).length; i++) s = "0" + s;
    return s;
  }
  window.addEventListener(
    'contextmenu',
    function(e) {
      if (e.shiftKey) {
        var selection = window.getSelection();
        if (selection.rangeCount) {
          var s = String(selection.getRangeAt(0)).replace(/[０-９]/g,
            function (w) {
              var z = "０１２３４５６７８９", h = "0123456789"; return h[z.indexOf(w)];
            }).match(/\d+/);
          if (s && (parseInt(s) != 0)) {
            if (s < 1330)
              window.open("http://www.isis.ne.jp/mnn/senya/senya" + fz(s, 4) + ".html");  // 放埒・遊蕩篇
            else
              window.open("http://www.honza.jp/senya/1/matsuoka_seigow/" + fz(s, 4)); // 連環篇
          }
          e.preventDefault();
        }
      }
    },
    true);
})();