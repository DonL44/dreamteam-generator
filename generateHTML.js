// this is for generating HTML into js


//Manager
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
// Engineer
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}


// intern
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// push array  
generateHTML = (data) => {


    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // for the manager
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // for the engineer
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // for the intern
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // join string
    const employeeCards = pageArray.join('')

    // return to generateHTML page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    <div class="employee-card">
        <div class="card-header">
            <h2 class="card-title" style="color:white">Michael Scott</h2>
            <h3 class="card-title" style="color:white"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 12312</li>
                <li class="list-group-item">Email: <a href="mailto:DateMike@Team.com">DateMike@Team.com</a></li>
                <li class="list-group-item">Office number: D123</li>
            </ul>
        </div>
    </div>
    <div class="employee-card">
        <div class="card-header">
            <h2 class="card-title" style="color:white">Dwight Schrute</h2>
            <h3 class="card-title" style="color:white"><i class="fas fa-user-secret mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1123</li>
                <li class="list-group-item">Email: <a href="mailto:Dwight.Schrute@test.com">Dwight.Schrute@test.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/DwightTest" target="_blank" rel="noopener noreferrer">DwightTest</a></li>
            </ul>
        </div>
    </div>
    <div class="employee-card">
        <div class="card-header">
            <h2 class="card-title" style="color:white">Ryan Howard</h2>
            <h3 class="card-title" style="color:white"><i class="fas fa-fire-extinguisher mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 12312</li>
                <li class="list-group-item">Email: <a href="ryan.howard@Intern.com">ryan.howard@Intern.com</a></li>
                <li class="list-group-item">School: UCLA</li>
            </ul>
        </div>
    </div>
    <div class="employee-card">
        <div class="card-header">
            <h2 class="card-title" style="color:white">Stanley Hudson</h2>
            <h3 class="card-title" style="color:white"><i class="fas fa-edit mr-2"></i>Employee</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1123</li>
                <li class="list-group-item">Email: <a href="mailto:Stanley.Hudson@Test.com">Stanley.Hudson@Test.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/stanleyhudson" target="_blank" rel="noopener noreferrer">StanleyHudson</a></li>
            </ul>
        </div>
    </div>
    
                </div>
            </div>
        </div>
    </body>
    
    </html>
`;
}


module.exports = generateHTML; 