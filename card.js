console.log("Hello, World// Romantic Sorry Web Page using JavaScript")

    // Create the main container
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.color = '#fff';
    container.style.padding = '50px 20px';
    container.style.animation = 'fadeIn 2s ease-in-out';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    container.style.borderRadius = '20px';
    container.style.margin = '30px';
    container.innerHTML = `
      <h1 style="font-family: 'Great Vibes', cursive; font-size: 3em; margin-bottom: 0.5em;">I'm Really Sorry</h1>
      <p>Main dil se maafi chahta hoon. Jo bhi hua, uska mujhe afsos hai.</p>
      <p>Tumhari kami har pal mehsoos hoti hai...</p>
      <p>Main tumhein bohot yaad karta hoon.</p>
      <div class="question">
        <p>Kya tum mujhe yaad karti ho?</p>
        <button class="button" onclick="showYes()">Yes</button>
        <button class="button" onclick="showNo()">No</button>
      </div>
    `;
    document.body.appendChild(container);
    
    // Add CSS styles via JavaScript
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background: url('https://i.ibb.co/9cKH3xg/roses-background.jpg') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;
      }
      .button {
        background: #fff;
        color: #e91e63;
        border: none;
        padding: 10px 20px;
        font-size: 1.2em;
        border-radius: 25px;
        cursor: pointer;
        transition: 0.3s;
        margin: 0 10px;
      }
      .button:hover {
        background: #fce4ec;
      }
      .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        display: none;
        z-index: 9999;
        text-align: center;
      }
      .popup img {
        max-width: 250px;
        margin-bottom: 20px;
      }
      .popup p {
        font-size: 1.2em;
        color: #e91e63;
      }
    `;
    document.head.appendChild(style);
    
    // Hearts background animation
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts';
    heartsContainer.style.position = 'absolute';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.overflow = 'hidden';
    document.body.appendChild(heartsContainer);
    
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.position = 'absolute';
      heart.style.width = '20px';
      heart.style.height = '20px';
      heart.style.background = 'red';
      heart.style.transform = 'rotate(45deg)';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.bottom = '0';
      heart.style.opacity = '0';
      heart.style.animation = `float ${Math.random() * 3 + 3}s ease-in forwards`;
      const before = document.createElement('div');
      before.style.position = 'absolute';
      before.style.width = '20px';
      before.style.height = '20px';
      before.style.background = 'red';
      before.style.borderRadius = '50%';
      before.style.top = '-10px';
      heart.appendChild(before);
      const after = document.createElement('div');
      after.style.position = 'absolute';
      after.style.width = '20px';
      after.style.height = '20px';
      after.style.background = 'red';
      after.style.borderRadius = '50%';
      after.style.left = '-10px';
      heart.appendChild(after);
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 300);
    
    // Popup for Yes
    const yesPopup = document.createElement('div');
    yesPopup.className = 'popup';
    yesPopup.id = 'yesPopup';
    yesPopup.innerHTML = `
      <img src="/mnt/data/file-N2ZBYpfNkAVP1gAecVr7a7" alt="Bouquet">
      <p>Yeh bouquet tumhare liye... Tumhari yaad ne dil chhoo liya!</p>
    `;
    document.body.appendChild(yesPopup);
    
    // Popup for No
    const noPopup = document.createElement('div');
    noPopup.className = 'popup';
    noPopup.id = 'noPopup';
    noPopup.innerHTML = `
      <img src="/mnt/data/file-NvcW1vCzTxTP8eRE48Ghho" alt="Crying Bear">
      <p>I am really sorry... please forgive me.</p>
    `;
    document.body.appendChild(noPopup);
    
    // Show popups
    window.showYes = function () {
      yesPopup.style.display = 'block';
      setTimeout(() => {
        yesPopup.style.display = 'none';
      }, 5000);
    };
    
    window.showNo = function () {
      noPopup.style.display = 'block';
      setTimeout(() => {
        noPopup.style.display = 'none';
      }, 5000);
    };
    
    
