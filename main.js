'use strict';

{
  function check() {
    // 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();

    // タイマーの終了
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 3 * 1000;
    }

    timer.textContent = countdown;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalId;

  // タイマーの終了時刻を求める
  btn.addEventListener('click', () => {
    endTime = new Date().getTime() + 3 * 1000;

    // 残り時間を表示する
    intervalId = setInterval(check, 100);
  });
}
