//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
console.log(userData);

// let johnProfile = Array.from(userData);
// console.log(johnProfile);

const laDiv = document.querySelector('.userProfil');
console.log(laDiv);

laDiv.style.background = 'linear-gradient(to right, blue, pink)';
laDiv.style.color = '#ffffff';
laDiv.style.padding = '20px';
laDiv.style.width = '50%';
laDiv.style.display = 'flex';
laDiv.style.flexDirection ='column'
laDiv.style.justifyContent ='center'
laDiv.style.alignItems ='center'


const jImg = document.createElement('img');
jImg.src = userData.img;
jImg.alt = 'Photo de profil';
jImg.style.width = '90%';
console.log(jImg);
laDiv.append(jImg);

const jName = document.createElement('h1');
jName.innerText = userData.name;
console.log(jName);
laDiv.append(jName);

const jEmail = document.createElement('p');
jEmail.innerText = userData.email;
console.log(jEmail);
laDiv.append(jEmail);

const jAge = document.createElement('p');
jAge.innerText = userData.age;
console.log(jAge);
laDiv.append(jAge);

const jDob = document.createElement('p');
jDob.innerText = userData.dob;
console.log(jDob);
laDiv.append(jDob);

const jActive = document.createElement('p');
jActive.innerText = userData.active;
console.log(jActive);
laDiv.append(jActive);




// const jName = userData.name;
// console.log(jName);
// laDiv.append(jName);

// const jEmail = userData.email;
// console.log(jEmail);
// laDiv.append(jEmail);

// const jAge = userData.age;
// console.log(jAge);
// laDiv.append(jAge);

// const jdob = userData.dob;
// console.log(jdob);
// laDiv.append(jdob);

// const jActive = userData.active;
// console.log(jActive);
// laDiv.append(jActive);

// const jImg = userData.img;
// console.log(jImg);
// laDiv.append(jImg);



// laDiv.append(userData.name);
// laDiv.append(userData.email);
// laDiv.append(userData.age);
// laDiv.append(userData.dob);
// laDiv.append(userData.active);
// laDiv.append(userData.img);