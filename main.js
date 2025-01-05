'use strict';

{
  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');

  // タイマーの終了時刻を求める
  btn.addEventListener('click', () => {
    const endTime = new Date().getTime() + 3 * 1000;
  });
}
