function menu() {
  const content = document.getElementById('content');

  const head1 = document.createElement('h3');
  head1.innerHTML = "Our Specials";
  const meals = document.createElement('div');
  meals.classList.add("flex-display");
  content.appendChild(head1);
  content.appendChild(meals);

  const food1 = document.createElement('img');
  food1.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  food1.alt = "Top pick"
  food1.classList.add('menu-img');
  meals.append(food1);

  const food2 = document.createElement("img");
  food2.src = "https://images.unsplash.com/photo-1543340904-0b1d843bccda?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  food2.classList.add('menu-img');
  meals.append(food2);

  const food3 = document.createElement("img");
  food3.src = "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80";
  food3.classList.add('menu-img');
  meals.append(food3);
}

export { menu };