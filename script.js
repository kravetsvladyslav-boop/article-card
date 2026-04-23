const shareBtn = document.getElementById('shareBtn');
const sharePopup = document.getElementById('sharePopup');

shareBtn.addEventListener('click', function () {
  sharePopup.classList.toggle('visible');
  shareBtn.classList.toggle('active');
});

document.addEventListener('click', function (e) {
  if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
    sharePopup.classList.remove('visible');
    shareBtn.classList.remove('active');
  }
});