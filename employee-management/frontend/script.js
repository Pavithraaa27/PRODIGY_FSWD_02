let token = '';

async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    return alert("Email and password required!");
  }

  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      return alert("Invalid credentials!");
    }

    const data = await res.json();
    token = data.token;

    // Clear password field after login
    document.getElementById("password").value = "";

    document.getElementById("login-section").style.display = 'none';
    document.getElementById("app").style.display = 'block';

    fetchEmployees();

  } catch (err) {
    alert("Server error. Please try again.");
  }
}

async function fetchEmployees() {
  try {
    const res = await fetch('http://localhost:3000/employees', {
      headers: { Authorization: 'Bearer ' + token }
    });

    if (!res.ok) {
      alert("Session expired. Please login again.");
      return;
    }

    const data = await res.json();
    const list = document.getElementById("list");
    list.innerHTML = '';

    data.forEach(emp => {
      const li = document.createElement("li");
      li.className = "flex justify-between items-center py-2";

      const span = document.createElement("span");
      span.textContent = `${emp.name} - ${emp.email}`;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.className = "text-red-500";
      btn.onclick = () => deleteEmp(emp.id);

      li.appendChild(span);
      li.appendChild(btn);
      list.appendChild(li);
    });

  } catch (err) {
    alert("Failed to fetch employees.");
  }
}

async function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("empEmail").value.trim();

  if (!name || !email) {
    return alert("All fields required!");
  }

  try {
    const res = await fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });

    if (!res.ok) {
      return alert("Failed to add employee.");
    }

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("empEmail").value = "";

    fetchEmployees();

  } catch (err) {
    alert("Server error while adding employee.");
  }
}

async function deleteEmp(id) {
  try {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token }
    });

    if (!res.ok) {
      return alert("Failed to delete employee.");
    }

    fetchEmployees();

  } catch (err) {
    alert("Server error while deleting employee.");
  }
}

