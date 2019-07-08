function about() {
  const content = document.getElementById('content');

  const p1 = document.createElement('p');
  p1.innerHTML = "We are Nigeria's no 1 restaurant and are the certificate of excellence winner 2015 - 2019";
  content.appendChild(p1);

  const br1 = document.createElement('br');
  content.appendChild(br1);

  const p2 = document.createElement('p');
  p2.innerHTML = "Due to high demand, we advise booking your table well ahead of time.";
  content.appendChild(p2);

  const br2 = document.createElement('br');
  content.appendChild(br2);

  const img1 = document.createElement('img');
  img1.src = "../dist/img/abj_map.png";
  img1.alt = "restaurant map";
  img1.id = 'map';
  content.appendChild(img1);

  const br3 = document.createElement('br');
  content.appendChild(br3);

  const p3 = document.createElement('p');
  p3.innerHTML = 'Find us at: 📍 123, Tokunbo Lane, Maitama, Abuja';
  content.appendChild(p3);
  
}

export {about};