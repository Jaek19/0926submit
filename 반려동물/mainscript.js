document.getElementById('certification-popup').addEventListener('click', () => {
  document.getElementById('certification-wrapper').style.display = 'block';
});

document.getElementById('submit').addEventListener('click', () => {
  document.getElementById('certification-wrapper').style.display = 'none';
});

const breederBtn = document.getElementById('help-breeder');

breederBtn.addEventListener('click', () => {
  alert('작업중입니다.');
});

const myPageBtn = document.getElementById('mypageBtn');
const bellBtn = document.getElementById('bellBtn');
const myPageText = document.getElementById('myPageText');

function initialAppear() {
  bellBtn.style.visibility = 'hidden';
  myPageText.style.visibility = 'hidden';
}

initialAppear();
function myPageAppear() {
  if (
    bellBtn.style.visibility === 'hidden' &&
    myPageText.style.visibility === 'hidden'
  ) {
    bellBtn.style.visibility = 'visible';
    myPageText.style.visibility = 'visible';
  } else {
    bellBtn.style.visibility = 'hidden';
    myPageText.style.visibility = 'hidden';
  }
}
