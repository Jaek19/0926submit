const joinBtn = document.getElementById('join-popup');
const joinPop = document.getElementById('user-join');

function joinPopup() {
  joinPop.style.display = 'block';
}

function deletePopup() {
  joinPop.style.display = 'none';
}

const userEmail = document.getElementById('user-email');
const userEmailCheck = document.getElementById('email-check');

userEmailCheck.addEventListener('click', () => {
  if (userEmail.value.includes('@')) alert('확인되었습니다.');
  else alert('유효한 이메일 형식이 아닙니다.');
});

const userNickname = document.getElementById('user-nickname');
const userNicknameCheck = document.getElementById('nickname-check');

userNicknameCheck.addEventListener('click', () => {
  if (userNickname.value.length < 8 && userNickname.value.length >= 2)
    alert('확인되었습니다.');
  else if (userNickname.value.length < 2) {
    alert('닉네임은 2글자 이상으로 해주세요');
  } else alert('닉네임은 8글자 이하로 해주세요');
});

const joinSuccessBtn = document.getElementById('join-success');

function workingPopup() {
  alert('작업중입니다');
}
