'use strict';
{
  const menuItems = document.querySelectorAll('.introduce li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
     dt.parentNode.classList.toggle('appear');

     dts.forEach(el => {
      if (dt !== el) {
        el.parentNode.classList.remove('appear');
      }
     });
    });
  });

}