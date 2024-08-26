// Function to hide divs with the specified class
function hideDivs() {
  // Select all divs with the specific class name
  const divs = document.querySelectorAll('.rcx-box.rcx-box--full.rcx-css-4sipl9');
  
  // Loop through the NodeList and hide each div
  divs.forEach(div => {
    div.style.display = 'none';
  });
}

// Run the hideDivs function every 50ms
setInterval(hideDivs, 50);
