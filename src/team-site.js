const createTeam = (teamMembArr) => {
    return `
    ${teamMembArr
        .filter((role) => role.getRole() === "Manager")
        .map((m) => {
            //Base code for manager card
            return `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h3>${m.name}</h3>
                        <h4><span class="fas fa-mug-hot px-1"></span>Manager</h4>
                    </div>
                    <ul class= "list-group list-group-flush">
                        <li class="list-group-item">ID #:${m.id}</li>
                        <li class="list-group-item">Email Address:<a href="mailto:${m.email}" target="_blank">${m.email}</a></li>
                        <li class="list-group-item">Office Number: ${m.officeNumber}</li>
                    </ul>
                </div>
            `;
        }).join("")}
        ${teamMembArr
            .filter((role) => role.getRole() === "Engineer")
            .map((e) =>{
                return `
                    <div class="card m-2" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h3>${e.name}</h3>
                        <h4><span class="fas fa-glasses px-1"></span>Engineer</h4>
                    </div>
                        <ul class= "list-group list-group-flush">
                            <li class="list-group-item">ID #:${e.id}</li>
                            <li class="list-group-item">Email Address:<a href="mailto:${e.email}" target="_blank">${e.email}</a></li>
                            <li class="list-group-item">GitHub Link:<a href="https://github.com/${e.gitHub}" target="_blank">${e.gitHub}</a></li>
                        </ul>
                    </div>
                `;
            }).join("")}
            ${teamMembArr
                .filter((role) => role.getRole() === "Intern")
                .map((i) => {
                    return `
                        <div class="card m-2" style="width: 18rem;">
                        <div class="card-header bg-primary text-white">
                            <h3>${i.name}</h3>
                            <h4><span class="fas fa-user-graduate px-1"></span>Intern</h4>
                        </div>
                            <ul class= "list-group list-group-flush">
                                <li class="list-group-item">ID #:${i.id}</li>
                                <li class="list-group-item">Email Address:<a href="mailto:${i.email}" target="_blank">${i.email}</a></li>
                                <li class="list-group-item">School Name: ${i.school}</li>
                            </ul>
                        </div>
                    `;
                }).join("")
            }
        `;
};

module.exports = (teamMemb) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
        crossorigin="anonymous"
        >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="bg-info d-flex justify-content-center p-3 text-white">
            <h1>${teamMemb[0].getName()}'s Team Members</h1>
        </header>
        <section>
            <div class="flex-wrap justify-content-center d-flex container">
                ${createTeam(teamMemb)}
            </div>
        </section>
    </body>
    </html>
    `;
};