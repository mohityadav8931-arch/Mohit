document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('openLetter');
  const paper = document.getElementById('letterPaper');
  if (openButton && paper) {
    openButton.addEventListener('click', () => {
      paper.hidden = false;
      openButton.hidden = true;
      paper.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  }
  const wishButton = document.getElementById('wishBtn');
  const wishMessage = document.getElementById('wishMessage');
  if (wishButton && wishMessage) {
    wishButton.addEventListener('click', () => {
      wishMessage.hidden = false;
      wishButton.textContent = 'Wish sent ♡';
      wishButton.disabled = true;
      for (let i = 0; i < 24; i++) {
        const bit = document.createElement('span');
        bit.textContent = ['♡', '✦', '✿', '♥'][i % 4];
        bit.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:${35+Math.random()*50}vh;color:#ee4a96;font-size:${14+Math.random()*22}px;z-index:10;pointer-events:none;animation:float 2.8s ease-out forwards`;
        document.body.appendChild(bit);
        setTimeout(() => bit.remove(), 3000);
      }
      wishMessage.scrollIntoView({behavior:'smooth',block:'center'});
    });
  }
});