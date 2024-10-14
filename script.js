const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');
const magButton =  document.getElementById('magButton');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const audio = document.getElementById('modal-audio');
const initialMusic = document.getElementById('initial-music');
const musicAfter50Clicks = document.getElementById('music-after-50-clicks');
const musicAfter100Clicks = document.getElementById('music-after-100-clicks');
const musicAfter150Clicks = document.getElementById('music-after-150-clicks');
const musicAfter200Clicks = document.getElementById('music-after-200-clicks');
const musicAfter250Clicks = document.getElementById('music-after-250-clicks');
const musicAfter300Clicks = document.getElementById('music-after-300-clicks');
const musicAfter350Clicks = document.getElementById('music-after-350-clicks');
const musicAfter400Clicks = document.getElementById('music-after-400-clicks');
const musicAfter450Clicks = document.getElementById('music-after-450-clicks');
const musicAfter500Clicks = document.getElementById('music-after-500-clicks');
const musicAfter550Clicks = document.getElementById('music-after-550-clicks');
const musicAfter600Clicks = document.getElementById('music-after-600-clicks');
const musicAfter650Clicks = document.getElementById('music-after-650-clicks');

let balance = Math.floor(Number(localStorage.getItem('balance'))) || 0; // Округление до целого
let clicks = Math.floor(Number(localStorage.getItem('clicks'))) || 0; // Округление до целого
let imageIndex = Math.floor(Number(localStorage.getItem('imageIndex'))) || 0; // Добавляем сохранение индекса изображения
let speedMultiplier = Number(localStorage.getItem('speedMultiplier')) || 1;





const balanceNode = document.createElement('span');
balanceNode.classList.add('balance'); // Класс для CSS
balanceNode.innerText = `Баланс: ${balance}`;
counterNode.appendChild(balanceNode);

const clicksNode = document.createElement('span');
balanceNode.classList.add('clicks');
clicksNode.innerText = `Кликов: ${clicks}`;
counterNode.appendChild(clicksNode);

if (clicks < 50) {
    initialMusic.play();
  }

incBtnNode.addEventListener('click', () => {
  clicks += 1;
  clicksNode.innerText = `Кликов: ${clicks}`;
  localStorage.setItem('clicks', clicks);

  if (clicks % 50 === 0) {
    imageIndex = (imageIndex + 1) % images.length; // Обновляем индекс изображения
    localStorage.setItem('imageIndex', imageIndex); // Сохраняем индекс изображения в localStorage
    changeImage();
  }

  if (clicks === 50) {
    initialMusic.pause();
    musicAfter50Clicks.play();
  }

  if (clicks === 100) {
    musicAfter50Clicks.pause();
    musicAfter100Clicks.play();
  }

  if (clicks === 150) {
    musicAfter100Clicks.pause();
    musicAfter150Clicks.play();
  }

  if (clicks === 200) {
    musicAfter150Clicks.pause();
    musicAfter200Clicks.play();
  }

  if (clicks === 250) {
    musicAfter200Clicks.pause();
    musicAfter250Clicks.play();
  }
  if (clicks === 300) {
    musicAfter250Clicks.pause();
    musicAfter300Clicks.play();
  }

  if (clicks === 350) {
    musicAfter300Clicks.pause();
    musicAfter350Clicks.play();
  }
  if (clicks === 400) {
    musicAfter350Clicks.pause();
    musicAfter400Clicks.play();
  }
  if (clicks === 450) {
    musicAfter400Clicks.pause();
    musicAfter450Clicks.play();
  }
  if (clicks === 500) {
    musicAfter450Clicks.pause();
    musicAfter500Clicks.play();
  }
  if (clicks === 550) {
    musicAfter500Clicks.pause();
    musicAfter550Clicks.play();
  }
  if (clicks === 600) {
    musicAfter550Clicks.pause();
    musicAfter600Clicks.play();
  }
  if (clicks === 650) {
    musicAfter600Clicks.pause();
    musicAfter650Clicks.play();
    alert('спасибо что дошли до последнего клика! Я очень старался! На этом бета кликер заканчивается! Вы конечно можете дальше кликать но будкт критичные баги');
  }
});



let currentBalance = balance;


clearBtnNode.addEventListener('click', () => {
      currentBalance += clicks / 2;
      balanceNode.innerText = `Баланс: ${Math.floor(currentBalance)}`;
      clicks = 0;
      clicksNode.innerText = `Кликов: ${clicks}`;
      localStorage.setItem('balance', currentBalance);
      localStorage.setItem('clicks', clicks);
      imageIndex = 0;
      localStorage.setItem('imageIndex', imageIndex);
      image.src = images[0];
       // Возобновляем initialMusic после сброса, если необходимо
      if (clicks < 50) {
          initialMusic.play();
          musicAfter50Clicks.pause();
          musicAfter100Clicks.pause();
          musicAfter150Clicks.pause();
          musicAfter200Clicks.pause();
          musicAfter250Clicks.pause();
          musicAfter300Clicks.pause();
          musicAfter350Clicks.pause();
          musicAfter400Clicks.pause();
          musicAfter450Clicks.pause();
          musicAfter500Clicks.pause();
          musicAfter550Clicks.pause();
          musicAfter600Clicks.pause();
          musicAfter650Clicks.pause();  
      }
      alert('Ваш баланс равен ' + (currentBalance === 0 ? '0 рублей' : Math.floor(currentBalance) + ' рубля'));
    });


    
    magButton.addEventListener('click', () => {
      modal.style.display = "block";
      initialMusic.pause();
      musicAfter50Clicks.pause();
      musicAfter100Clicks.pause();
      musicAfter150Clicks.pause();
      musicAfter200Clicks.pause();
      musicAfter250Clicks.pause();
      musicAfter300Clicks.pause();
      musicAfter350Clicks.pause();
      musicAfter350Clicks.pause();
      musicAfter400Clicks.pause();
      musicAfter450Clicks.pause();
      musicAfter500Clicks.pause();
      musicAfter550Clicks.pause();
      musicAfter600Clicks.pause();
      musicAfter650Clicks.pause();

      setTimeout(() => {
        audio.play().catch(error => {
          console.log('Ошибка воспроизведения аудио:', error);
        });
      }, 100); 
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = "none";
      audio.pause();
      musicAfter50Clicks.pause();
      audio.currentTime = 0;
      if (clicks < 50) {
        initialMusic.play();
    } else if (clicks < 100) {
        musicAfter50Clicks.play();
    } else if (clicks < 150) {
        musicAfter100Clicks.play();
    } else if (clicks < 200) {
        musicAfter150Clicks.play();
    } else if (clicks < 250) {
        musicAfter200Clicks.play();
    } else if (clicks < 300) {
        musicAfter250Clicks.play();
    } else if (clicks < 350) {
        musicAfter300Clicks.play();
    }else if (clicks < 400) {
        musicAfter350Clicks.play();
    }else if (clicks < 450) {
        musicAfter400Clicks.play();
    }else if (clicks < 500) {
        musicAfter450Clicks.play();
    }else if (clicks < 550) {
        musicAfter500Clicks.play();
    }else if (clicks < 600) {
        musicAfter550Clicks.play();
    } else if (clicks < 650) {
        musicAfter600Clicks.play();
    }else {
        alert('вы сделали то что привело к ошибке (возможно я виноват)')
    }
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        audio.pause();
        initialMusic.pause();
        audio.currentTime = 0;
        if (clicks < 50) {
            initialMusic.play();
        } else if (clicks < 100) {
            musicAfter50Clicks.play();
        } else if (clicks < 150) {
            musicAfter100Clicks.play();
        } else if (clicks < 200) {
            musicAfter150Clicks.play();
        } else if (clicks < 250) {
            musicAfter200Clicks.play();
        } else if (clicks < 300) {
            musicAfter250Clicks.play();
        } else if (clicks < 350) {
            musicAfter300Clicks.play();
        }else if (clicks < 400) {
            musicAfter350Clicks.play();
        }else if (clicks < 450) {
            musicAfter400Clicks.play();
        }else if (clicks < 500) {
            musicAfter450Clicks.play();
        }else if (clicks < 550) {
            musicAfter500Clicks.play();
        }else if (clicks < 600) {
            musicAfter550Clicks.play();
        } else if (clicks < 650) {
            musicAfter600Clicks.play();
        }else {
            alert('вы сделали то что привело к ошибке (возможно я виноват)')
        }
      }
    });



function buyColor(color, cost) {
  // Обновляем значение balance из локального хранилища
  balance = Number(localStorage.getItem('balance')) || 0; 

  // Проверяем, достаточно ли средств
  if (balance >= cost) {
    balance -= cost; // Уменьшаем баланс
    localStorage.setItem('balance', balance); // Обновляем balance в localStorage
    balanceNode.innerText = `Баланс: ${balance}`; // Обновляем отображение баланса
    currentBalance = balance; // Обновляем значение currentBalance
    changeBackgroundColor(color); // Меняем фон
    localStorage.setItem('backgroundColor', color); // Сохраняем цвет фона
    localStorage.setItem(`color-${color}`, true); // Сохраняем покупку цвета
  } else {
    alert('Недостаточно средств для покупки этого фона.');
  }
}


function buyUpgrade(cost, upgradeType) {
  if (balance >= cost) {
    balance -= cost;
    localStorage.setItem('balance', balance);
    balanceNode.innerText = `Баланс: ${balance}`;

    if (upgradeType === 'speed') {
      speedMultiplier = 2;
      localStorage.setItem('speedMultiplier', speedMultiplier);
    } else {
      document.body.style.backgroundColor = upgradeType;
      localStorage.setItem('backgroundColor', upgradeType);
    }
  } else {
    alert('Недостаточно баллов!');
  }
}

// Обработчик события клика дважды

document.getElementById('grey-button').addEventListener('click', () => buyUpgrade(100, 'grey'));
document.getElementById('yellow-button').addEventListener('click', () => buyUpgrade(100, 'yellow'));
document.getElementById('green-button').addEventListener('click', () => buyUpgrade(100, 'green'));
document.getElementById('blue-button').addEventListener('click', () => buyUpgrade(100, 'blue'));
document.getElementById('gold-button').addEventListener('click', () => buyUpgrade(300, 'gold'));
document.getElementById('speed-button').addEventListener('click', () => buyUpgrade(100, 'speed'));
document.getElementById('white-button').addEventListener('click', () => buyUpgrade(0, '#f0f4f8'));
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


document.getElementById('resizeButton').addEventListener('click', function() {
  const image = document.getElementById('image');
  image.style.transform = 'scale(0.8)';

  // Воспроизведение музыки на 3 секунды
  const sounds = [
    'kot-myaukaet.mp3',
    'simpatichnyie-kotyata-zvukovoy-effekt-42841.mp3',
    'zvuk-koshachego-quotmyauquot-29443.mp3',
  ];
  const randomSounds = sounds.sort(() => Math.random() - 0.5).slice(0, 3);
  randomSounds.forEach((sound) => {
    const audio = new Audio(sound);
    audio.play();
  });

  setTimeout(() => {
    image.style.transform = 'scale(1)';
  }, 100);

});


const images = [
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3XXxnuzD54rSBZsrTvoAoYgJVPnEHojNPIbejVXm7dIHUf63F',
  '1000022961.jpg',
  'download.jpg',
  '1000018602.jpg',
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNE-bwmRT92zcqHw1LvZFZqKHImO_1avzmfFBCPhlHa-sfovY8',
  'аааа.jpg',
  'ааавамс.jpg',
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSqfgsZZBDjlF2FQOptfCyP-gSknzYucab-zWvkiMnFwTXsSEJ',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6NbGRz3Y1FQ0dYYRjbsXhtha6P5JZsX_tMM2wDbLEwBTmoTD',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlXHkIyLUFVaRXL7otNfwPfhpKuGkX5pmbbjqTr2bMVmCEw6X',
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQyEqiXhfvkVyS6jd9i0FP0UCb3755po6FrCzIaVX8d5YH-EHX',
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWbQEWfjpubfkh98gjtijDhKyq4d-Lw1f_qTSNZGGMVSxa9k__',
  'uu.jpg',
];

function changeImage() {
  const image = document.getElementById('image');
  image.src = images[imageIndex];
}


// Обновляем изображение при загрузке страницы
const image = document.getElementById('image');
image.src = images[imageIndex];


const delitBtnNode = document.querySelector('.js-delit-btn');

delitBtnNode.addEventListener('click', () => {
  ff = prompt('вы уверены что хотите обнулить баланс? да/нет');
  if(ff === 'да'){
    balance = 0;
    localStorage.setItem('balance', balance);
    balanceNode.innerText = `Баланс: ${balance}`;
    alert('Баланс обнулен!');
    // Добавляем анимацию пропадания баланса
    balanceNode.style.opacity = 0;
    setTimeout(() => {
      balanceNode.style.display = 'none';
    }, 1000);
  } else if(ff === 'нет'){
    alert('Баланс не обнулен!');
  } else{
    alert('Баланс не обнулен! Т.к. Вы ввели неправильное значение');
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const savedBackgroundColor = localStorage.getItem('backgroundColor');
  if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
  }
});

let clickCounter = 0;
function handleClick() {
  if (speedMultiplier === 2) {
    clickCounter += 2;
  } else {
    clickCounter += 1;
  }
  clickCounterDisplay.textContent = `Кликов: ${clickCounter}`;
}


clickButton.addEventListener('click', handleClick);

// Initialize the click counter display
clickCounterDisplay.textContent = `Кликов: ${clickCounter}`;
// Изменяем функцию покупки улучшения, чтобы сохранять цвет фона

let doubleClick = false;
let lastClickTime = 0;

function buyUpgrade(cost, upgradeType) {
  const currentTime = new Date().getTime();
  balance = Number(localStorage.getItem('balance')) || 0;
  if (balance >= cost) {
    balance -= cost;
    localStorage.setItem('balance', balance);
    balanceNode.innerText = `Баланс: ${balance}`;

    if (upgradeType === 'speed') {
  speedMultiplier = 2;
  localStorage.setItem('speedMultiplier', speedMultiplier);
  clickCounter += speedMultiplier; // обновляем значение clickCounter
   }else {
      document.body.style.backgroundColor = upgradeType;  // Меняем цвет фона на выбранный
      localStorage.setItem('backgroundColor', upgradeType); // Сохраняем цвет фона в localStorage
    }
  } else {
    alert('Недостаточно баллов!');
  }
}