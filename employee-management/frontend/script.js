let token = '';

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const res = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) return alert('Login failed!');
  const data = await res.json();
  token = data.token;
  document.getElementById("login-section").style.display = 'none';
  document.getElementById("app").style.display = 'block';
  fetchEmployees();
}

async function fetchEmployees() {
  const res = await fetch('http://localhost:3000/employees', {
    headers: { Authorization: 'Bearer ' + token }
  });
  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = '';
  data.forEach(emp => {
    list.innerHTML += `
      <li class="flex justify-between items-center py-2">
        <span>${emp.name} - ${emp.email}</span>
        <button onclick="deleteEmp(${emp.id})" class="text-red-500">Delete</button>
      </li>
    `;
  });
}

async function addEmployee() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("empEmail").value;
  if (!name || !email) return alert("All fields required!");
  await fetch('http://localhost:3000/employees', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  });
  fetchEmployees();
}

async function deleteEmp(id) {
  await fetch(`http://localhost:3000/employees/${id}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token }
  });
  fetchEmployees();
}
