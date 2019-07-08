function contact() {
  const content = document.getElementById('content');

  const head = document.createElement('h3');
  head.innerHTML = 'Contact Us';
  content.append(head);

  const phone = document.createElement('p');
  phone.innerHTML = '📲 +123 456 789';
  content.append(phone);

  const email = document.createElement('p');
  email.innerHTML = '📩 info@example.com';
  content.append(email);
}

export { contact }