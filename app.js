const promise = new Promise(function (resolve) {
  const btn = document.querySelector('.switch-btn');
  const video = document.querySelector('.video-container');
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
      btn.classList.add('slide');
      video.pause();
    } else {
      btn.classList.remove('slide');
      video.play();
    }
  });

  const preloader = document.querySelector('.preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      resolve(preloader);
    }, 1500);
  });
});

promise.then(function (preloader) {
  preloader.classList.add('hide-preloader');
});
