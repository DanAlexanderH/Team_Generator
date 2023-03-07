const generateHTML = function(groupString) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>Team Generator</title>
    <style>
    h1 {
        background-color: rgb(178, 180, 182);
        height: 90px;
    text-align: center;
    }
    
</style>

</head>
<body>
<h1 id="header">Team Generator</h1>
<div style="display: flex; justify-content: space-around;" class="cardCtn">
    ${groupString}
</div>
</body>
</html> `
}

const makeCard = function (status) {
    let icon;
    let roleInfo;

    if (status.title === "Manager") {
        icon = `<i class="fa fa-coffee" aria-hidden="true"></i>`
        roleInfo = `Office Number: ${status.office}`
    } else if (status.title === "Engineer") {
        icon = `<i class="fa fa-cogs" aria-hidden="true"></i>`
        roleInfo = `GitHub: <a href="http://github.com/${status.github}" target="_blank">${status.github}</a>`
    } else if (status.title === "Intern") {
        icon = `<i class="fa fa-user" aria-hidden="true"></i>`
        roleInfo = `School: ${status.school}`
    }

    return `<div class="card" style="width: 19rem;">
<div  style="background-color: rgb(138, 184, 231);" class="card-header">
    <h2 style="color: #fff;">${status.name}</h2>
    ${icon}
    <p>${status.title}</p>    
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${status.id}</li>
  <li class="list-group-item">Email: ${status.email}</li>
  <li class="list-group-item">${roleInfo}</li>
</ul>
</div>`
}

exports.generateHTML = generateHTML;
exports.makeCard = makeCard;