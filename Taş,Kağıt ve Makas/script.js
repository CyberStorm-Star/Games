function startGame() {
    var choices = ['Taş', 'Kağıt', 'Makas'];
    var playerSelection = document.getElementById('player-selection').value;
   

  
    // Yapay zekanın rastgele seçim yapması
    var aiSelection = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('ai-selection').innerText = aiSelection;
  
    // Kazananı kontrol et ve sonucu ekrana yazdır
    var resultMessage = document.getElementById('result-message');
    var winnerElement = document.getElementById('winner');
    
    if (playerSelection === aiSelection) {
      resultMessage.innerText = 'Berabere!';
      resultMessage.style.color = 'black';
    } else if (
      (playerSelection === 'Taş' && aiSelection === 'Makas') ||
      (playerSelection === 'Makas' && aiSelection === 'Kağıt') ||
      (playerSelection === 'Kağıt' && aiSelection === 'Taş')
    ) {
      resultMessage.innerText = 'Oyuncu kazandı!';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.innerText = 'Yapay Zeka kazandı!';
      resultMessage.style.color = 'red';
    }
  }
  