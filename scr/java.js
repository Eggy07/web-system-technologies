document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const table = document.getElementById('userTable');

    function appendValues(name, email, role) {
        const newRow = `
            <tr>
                <td><input type="text" value="&nbsp;&nbsp;${table.rows.length}" class="bg-transparent" readonly></td>
                <td><input type="text" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${name}" class="bg-transparent" readonly></td>
                <td><input type="text" value="&nbsp;&nbsp;&nbsp;${email}" class="bg-transparent" readonly></td>
                <td><input type="text" value="&nbsp;&nbsp;&nbsp;${role}" class="bg-transparent" readonly></td>
                <td class="p-3 px-5 flex ">
                    <i class="fa-solid fa-pen-to-square edit-btn" style="color: #3478e5;"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa-solid fa-trash delete-btn" style="color: #ff0000;"></i>
                </td>
            </tr>`;
        table.insertAdjacentHTML('beforeend', newRow);}

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;
        if (name.trim() && email.trim()) {
            appendValues(name, email, role);
        } else {
            alert('Please fill in all fields.');
        }
    });

    table.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            const inputs = row.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                input.toggleAttribute('readonly');
            });
        } else if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});
