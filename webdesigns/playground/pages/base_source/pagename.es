require('./pagename.scss');

document.addEventListener('DOMContentLoaded', () => {
  if (!document.documentElement.classList.contains('page-pagename'))
    return;

  console.info('page: pagename');
});
