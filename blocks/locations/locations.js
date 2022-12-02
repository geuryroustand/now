export default async function decorate(block) {
  const data = [];
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (res.ok) {
    data.push(await res.json());
  }

  const ul = document.createElement('ul');

  data.forEach((rows) => {
    rows.forEach((row) => {
      const li = document.createElement('li');

      li.innerText = row.title;
      ul.append(li);
    });
  });

  // [...block.children].forEach((row) => {
  //   const li = document.createElement('li');

  //   li.innerHTML = row.innerHTML;

  //   ul.append(li);
  // });

  block.textContent = '';

  block.append(ul);
}
