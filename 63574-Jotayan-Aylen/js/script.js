function show(id, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

