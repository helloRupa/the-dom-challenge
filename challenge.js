document.addEventListener('DOMContentLoaded', function(e) {
  const counter = document.querySelector('#counter');
  const decrementer = document.getElementById('-');
  const incrementer = document.getElementById('+');
  const liker = document.getElementById('<3');
  const likesUl = document.querySelector('.likes');
  const likes = {};
  const buttons = [decrementer, incrementer, liker];
  let count = 0;

  let timer = setInterval(() => { counter.textContent = ++count }, 1000);

  decrementer.addEventListener('click', () => { --count; });
  incrementer.addEventListener('click', () => { ++count; });

  liker.addEventListener('click', () => {
    const key = counter.textContent;

    if(likes.hasOwnProperty(key)) {
      likes[key] += 1;
    } else {
      likes[key] = 1;
    }

    likesUl.textContent = '';

    for (const key in likes) {
      const li = document.createElement('li');
      li.textContent = `${key} was liked ${likes[key]} times`;
      likesUl.appendChild(li);
    }
  });

  const pauseBtn = document.querySelector('#pause');

  pauseBtn.addEventListener('click', function(e) {
    if (e.currentTarget.textContent.trim() == 'pause') {
      e.currentTarget.textContent = 'resume';
      clearInterval(timer);
      buttons.forEach(btn => {btn.disabled = true});
    } else {
      e.currentTarget.textContent = 'pause';
      timer = setInterval(() => { counter.textContent = ++count }, 1000);
      buttons.forEach(btn => {btn.disabled = false});
    }
  });

  const comments = document.querySelector('#list');
  const submitBtn = document.querySelector('#submit');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const comment = document.querySelector('input');

    const p = document.createElement('p');
    p.textContent = comment.value;
    comment.value = '';
    comments.appendChild(p);
  })

});