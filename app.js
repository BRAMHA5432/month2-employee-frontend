
async function loadEmployees() {
    const response = await fetch("http://localhost:8080/api/employees");
    const data = await response.json();

    const container = document.getElementById("employees");
    container.innerHTML = data.content
        .map(e => `<div class='emp-card'><strong>${e.name}</strong><br>${e.email}<br>${e.role}</div>`)
        .join('');
}
loadEmployees();
