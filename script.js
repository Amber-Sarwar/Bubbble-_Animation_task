const container = document.getElementById('bubble-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 80 + 40; 
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';


  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
  bubble.style.setProperty('--dur', (Math.random() * 5 + 4) + 's');


  bubble.style.setProperty('--opacity', (0.8 + Math.random() * 0.2).toFixed(2));
  bubble.style.setProperty('--hue', Math.floor(Math.random() * 360) + 'deg');

  container.appendChild(bubble);

  setTimeout(() => bubble.remove(), parseFloat(bubble.style.getPropertyValue('--dur')) * 1000);
}

setInterval(createBubble, 500);