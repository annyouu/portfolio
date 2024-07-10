'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  function Click() {
    location.href = "index.html";
  }

  const home = document.getElementById('home');

  home.onclick = Click;

  function onClick() {
    location.href = "privacy.html";
  }

  const policy = document.getElementById('policy');

  policy.onclick = onClick;

  const site = document.getElementById('site')

  function onnClick() {
    location.href = "sitemap.html"
  }

  site.onclick =  onnClick;
}