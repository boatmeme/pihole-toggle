function toggleButton(id) {
  const el = document.getElementById(id)
  const classList = el.classList
  if (classList.contains('enabled')) {
    el.classList.remove('enabled')
    el.innerHTML = 'Disable Ad Blocker'
  } else {
    el.classList.add('enabled')
    el.innerHTML = 'Enable Ad Blocker'
  }
}