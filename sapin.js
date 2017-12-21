if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sapin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sapin'.");
}
var sapin = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  function main$lambda(closure$input) {
    return function (it) {
      draw(toInt(closure$input.value));
      return Unit;
    };
  }
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var input = Kotlin.isType(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : throwCCE();
    input.type = 'range';
    input.min = '2';
    input.max = '50';
    input.value = '10';
    input.addEventListener('input', main$lambda(input));
    var height = document.createElement('h1');
    height.id = 'height';
    var canvas = document.createElement('pre');
    canvas.id = 'canvas';
    (tmp$_0 = document.body) != null ? tmp$_0.appendChild(height) : null;
    (tmp$_1 = document.body) != null ? tmp$_1.appendChild(input) : null;
    (tmp$_2 = document.body) != null ? tmp$_2.appendChild(canvas) : null;
    draw(toInt(input.value));
  }
  function draw(height) {
    var tmp$, tmp$_0;
    var tree = new StringBuilder();
    for (var i = 0; i < height; i++)
      tree.append_gw00v9$(repeat(' ', height - i - 1 | 0) + repeat('*', (i * 2 | 0) + 1 | 0) + '\n');
    tree.append_gw00v9$(repeat(' ', height - 1 | 0) + '#');
    (tmp$ = document.getElementById('height')) != null ? (tmp$.innerHTML = 'n = ' + height) : null;
    (tmp$_0 = document.getElementById('canvas')) != null ? (tmp$_0.innerHTML = tree.toString()) : null;
  }
  _.main_kand9s$ = main;
  _.draw_za3lpa$ = draw;
  main([]);
  Kotlin.defineModule('sapin', _);
  return _;
}(typeof sapin === 'undefined' ? {} : sapin, kotlin);
