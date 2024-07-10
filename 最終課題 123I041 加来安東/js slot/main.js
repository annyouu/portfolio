'use strict';


{
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined; //プロパティについてthis.timeoutIdとかくようなことは、あまりしないこで、何か代入するようなことをしたい letで初期化せずに変数を変更したら、undefinedが入るので、
      //undefined 0でもnullでもできる

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        panelsLeft--;  //これはパネルのことについてだから、クラス内にかく

        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult(); //チェックリザルトはパネルに直接関係するわけではないので関数の内容は外にカク
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

   /////////////コンストラクタはここまで//////////

  
    //Math.random() 0-1 Math.random() * 3 → 0 - 3
    // Math.floor 小数点以下切り捨て

    getRandomImage() {
      const images = [
       'img/seven.png',
       'img/bell.png',
       'img/cherry.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

     //setTimeout 50ミリ秒後に次の処理をする またspinを呼び出せば、繰り返しになる これから始まる
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => { 
         this.spin();
      }, 50);
    }

    isUnmatched(p1, p2) {
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src ) {
      //   return true; //trueということは、
      // } else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      this.img.classList.add('unmatched');
    }

    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }

  }

  //////////クラスはここまで////////

  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }

  const panels = [
    new Panel(),  //オブジェクト
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    if (spin.classList.contains('inactive')) {
      return; //止める
    }
    spin.classList.add('inactive');
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });
}