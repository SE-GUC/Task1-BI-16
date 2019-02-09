const express = require('express');
const app = express();

const students = [
    { id: "28-09121", name: "Omar Sherif", github_username: "osheriff", email: "omarr@whatever.com" },
    { id: "21-094123", name: "Mathew White", github_username: "matheww", email: "matheww@whatever.com" },
    { id: "15-10312", name: "Dom Sundle", github_username: "domss", email: "domss.whatever.com" },
    { id: "7223", name: "Gehad Ismail", github_username: "Gehad93", email: "gehad.ismail@guc.edu.eg" }
];

app.get('/', (request, response) => {
    response.send(`<a href="/api/students">Students</a>`);
});

app.get('/api/students', (request, response) => {
    let data = "";
    students.forEach((value) => {
        const user_id = value.id;
        const user_name = value.name;
        data += `<a href="/api/students/${user_id}">${user_name}</a><br>`;
    });
    response.send(data);
});

app.get('/api/students/:id', (request, response) => {
    var data = "";
    students.forEach((value) => {
        if(value.id === request.params.id) {
            data = `Id: ${value.id}<br>Name: ${value.name}<br>Email: ${value.email}<br>Github: ${value.github_username}`;
            return;
        }
    });
    response.send(data || 'No student matches the requested id');
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));