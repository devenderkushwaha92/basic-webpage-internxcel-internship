document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Username: ${username}</p><p>Password: ${password}</p>`;
});
