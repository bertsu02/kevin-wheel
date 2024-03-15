(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const messageContainer = document.querySelector('.message-container');
  const wheel2 = document.querySelector('.wheel2');
  const startSecondButton = document.querySelector('.button2');
  let deg = 0;

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(1000 + Math.random() * 1000);
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;

     const area = determineArea(actualDeg);

     displayMessage(area);
  });



   function determineArea(deg) {
    const areas = [
      { name: 'Try Again', startDeg: 0, endDeg: 22.49 },
      { name: 'Stake 20$ Buy 50/50', startDeg: 22.5, endDeg: 45 },
      { name: 'Try Again', startDeg: 45.01, endDeg: 67.49 },
      { name: 'Kevin Spin', startDeg: 67.5, endDeg: 90 },
      { name: 'Try Again', startDeg: 90.01, endDeg: 112.49 },
      { name: 'Clash 50 Battle 30%', startDeg: 112.5, endDeg: 135 },
      { name: 'Try Again', startDeg: 135.01, endDeg: 157.49 },
      { name: 'Runestake 50 Battle 30%', startDeg: 157.5, endDeg: 180 },
      { name: 'Try Again', startDeg: 180.01, endDeg: 202.49 },
      { name: 'Stake 5$ Tip', startDeg: 202.5, endDeg: 225 },
      { name: 'Try Again', startDeg: 225.01, endDeg: 247.49 },
      { name: 'Daddyskins 10$ Depo', startDeg: 247.5, endDeg: 270 },
      { name: 'Try Again', startDeg: 270.01, endDeg: 292.49 },
      { name: 'Clash 30 Battle 30%', startDeg: 292.5, endDeg: 315 },
      { name: 'Try Again', startDeg: 315.01, endDeg: 337.49 },
      { name: 'Runestake 30 Battle 50%', startDeg: 337.5, endDeg: 360 },

    ];

    for (const area of areas) {
      if (deg >= area.startDeg && deg < area.endDeg) {
        return area.name;
      }
    }

    return 'Dead center, RE-SPIN!';
  }

  function determineArea2(deg) {
    const areas = [
      { name: 'Better Luck Next Time!', startDeg: 0, endDeg: 67.49 },
      { name: 'MAXX WIN!!!', startDeg: 67.5, endDeg: 90 },
      { name: 'Better Luck Next Time!', startDeg: 90.01, endDeg: 157.49 },
      { name: 'MINI WIN!', startDeg: 157.5, endDeg: 180 },
      { name: 'Better Luck Next Time!', startDeg: 180.01, endDeg: 247.49 },
      { name: 'MAJOR WIN!!', startDeg: 247.5, endDeg: 270 },
      { name: 'Better Luck Next Time!', startDeg: 180.01, endDeg: 337.49},
      { name: 'MINOR WIN!', startDeg: 337.5, endDeg: 360 },

    ];
    deg = deg % 360; 

    for (const area of areas) {
      if (deg >= area.startDeg && deg < area.endDeg) {
        return area.name;
      }
    }
  
    return 'No area found';
  }

  function displayMessage(area) {
    const messageContainer = document.getElementById('message-container');
    if (area === 'Kevin Spin')  {
      const proceedButton = document.createElement('button');
      messageContainer.innerText = ` You have won a Kevin Spin!`;
      messageContainer.style.display = 'block';
      proceedButton.innerText = 'Proceed';
      proceedButton.onclick = function() {
        messageContainer.innerHTML = '';
        document.querySelector('.marker').style.zIndex = '1001';
        const newWheel = document.createElement('img'); 
        newWheel.classList.add('wheel2');
        newWheel.src = 'wheel2.png'; 
        newWheel.style.width = '750px'; 
        newWheel.style.height = '750px';
        newWheel.style.marginTop = '15%'; 
        messageContainer.appendChild(newWheel); 
        messageContainer.appendChild(document.createElement('br'));
        const newButton = document.createElement('img'); 
        newButton.classList.add('button2');
        newButton.src = 'button2.png';
        newButton.onclick = function() {
          startSecondButton.style.pointerEvents = 'none';
          deg = Math.floor(1000 + Math.random() * 1000);
          newWheel.style.transition = 'all 10s ease-out';
          newWheel.style.transform = `rotate(${deg}deg)`;
        };
        newWheel.addEventListener('transitionend', function() {
          const newDeg = Math.floor(1000 + Math.random() * 1000); 
          newWheel.style.transition = 'none'; 
          newWheel.style.transform = `rotate(${newDeg}deg)`; 
          const newArea = determineArea2(newDeg); 
          displayMessage2(newArea); 
          newWheel.style.display = 'block'; 

      });
        messageContainer.appendChild(newButton); 
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.innerText = 'X';
        closeButton.style.float = 'right';
        closeButton.onclick = function() {
          messageContainer.style.display = 'none';
        };
        messageContainer.appendChild(closeButton);
      };

      messageContainer.appendChild(document.createElement('br'));
      messageContainer.appendChild(proceedButton);
      
    } else {
      messageContainer.innerText = `${area}`;
      messageContainer.style.display = 'block';
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 3000);
    }
  }
  function displayMessage2(area) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = area;
    messageContainer.style.display = 'block';
    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 5000);
}
  
})();