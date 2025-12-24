  fetch('whatsappbutton.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('whatsappbutton-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));
