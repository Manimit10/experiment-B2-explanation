// get data from local storage
let dis_in_Storage = localStorage.getItem('distance VS classroom');
let edlev_in_Storage = localStorage.getItem('educational level');
let sub_in_Storage = localStorage.getItem('subject');
let bloom_in_Storage = localStorage.getItem('bloom');
let time_in_Storage = localStorage.getItem('time');
let student_in_Storage = localStorage.getItem('student amount');
// design object
const designData = [
  {
    id: 1,
    name: 'Understanding Rational Choice Theory',
    description: 'Describe the effect of rational choice theory on social exchange',
    author: '',
    link: './previews/preview1.html',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Between 10-20 students',
    subject: 'Social Science, Business & Law',
    time: 'Between 10-20 mins',
    bloom: 'Understand',
  },
  {
    id: 2,
    name: 'Discourse in Social Psychology',
    description: 'Explain the concept of discourse in social psychology. (refer to work of Foucault',
    author: '',
    link: './previews/preview2.html',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Master or Equivalent',
    studentamount: 'Between 10-20 Students',
    subject: 'Social Science, Business & Law',
    time: 'Between 20-30 mins',
    bloom: 'Understand',
  },
  {
    id: 3,
    name: 'Real Assets and Bonds',
    description: 'Identify the differences between Real assets (capital budgeting) and Bonds (financing decisions).',
    author: '',
    link: './previews/preview3.html',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Master or Equivalent',
    studentamount: 'Between 10-20 students',
    subject: 'Humanities and Arts',
    time: 'Between 10-20 mins',
    bloom: 'Understand',
  },
  {
    id: 4,
    name: 'Monotheisitic religions',
    description:
      'State three significant monotheisitic religions in the world, and recognize their geographical diversities.',
    author: '',
    link: './previews/preview4.html',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Between 10-20 Students',
    subject: 'Humanities and Arts',
    time: 'Between 20-30 mins',
    bloom: 'Remember',
  },
  {
    id: 5,
    name: 'General Education and Law',
    description: 'Describe the relationship between general education and the study of law.',
    author: '',
    link: './previews/preview5.html',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Between 10-20 Students',
    subject: 'Humanities and Arts',
    time: 'Between 20-30 mins',
    bloom: 'Understand',
  },
  {
    id: 6,
    name: 'Social Class',
    description: 'Classify the existing definitions of class in western societies.',
    author: '',
    link: './previews/preview6.html',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Humanities and Arts',
    time: 'Between 20-30 mins',
    bloom: 'Understand',
  },
  // {
  //   name: 'Metodología Docente',
  //   description:
  //     '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
  //   author: 'Verónica',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'In the Classroom',
  //   educationlevel: 'Early Childhood Education',
  //   studentamount: 'Between 30-40 students',
  //   subject: 'Humanities and Arts',
  //   time: 'More than 40 mins',
  //   bloom: 'Analysis',
  // },
  // {
  //   name: 'Asking questions to peers',
  //   description: 'Ask a question to the peers that have presented',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Post Secndary non-tertiary',
  //   studentamount: 'Less than 10 students',
  //   subject: 'Agriculture',
  //   time: 'More than 40 mins',
  //   bloom: 'Apply',
  // },
  // {
  //   name: 'Questions about Science communication',
  //   description: 'Propose a question for the groups having studied "Science communication',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Upper Secondary Education',
  //   studentamount: 'Less than 10 students',
  //   subject: 'General Programmes',
  //   time: 'Between 10-20 mins',
  //   bloom: 'Remember',
  // },
  // {
  //   name: 'Questions about Science communication',
  //   description: 'Propose a question for the groups having studied "Science communication',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Bachelor or Equivalent',
  //   studentamount: 'Less than 10 students',
  //   subject: 'Health & Wellfare',
  //   time: 'Between 30-40 mins',
  //   bloom: 'Create',
  // },
];

function dis(dist) {
  if (dis_in_Storage == dist) {
    console.log(dist);
    return `<div class="alert alert-success" role="alert">
    ${dist}</span>
    </div>`;
  } else {
    return ``;
  }
}

function edlevel(educationlevel) {
  if (edlev_in_Storage == educationlevel) {
    console.log(educationlevel);
    return `<div class="alert alert-success" role="alert">
    ${educationlevel}</span>
    </div>`;
  } else {
    return ``;
  }
}
function amount(stu) {
  if (student_in_Storage == stu) {
    console.log(stu);
    return `<div class="alert alert-success" role="alert">
    ${stu}</span>
    </div>`;
  } else {
    return ``;
  }
}
//subject generator tag
function sub(subject) {
  if (sub_in_Storage == subject) {
    console.log(subject);
    return `<div class="alert alert-success" role="alert">
            ${subject}</span>
            </div>`;
  } else {
    return ``;
  }
} // end of subject function

function timey(time) {
  if (time_in_Storage == time) {
    console.log(time);
    return `<div class="alert alert-success" role="alert">
    ${time}</span>
    </div>`;
  } else {
    return ``;
  }
}
function bloomy(bloom) {
  if (bloom_in_Storage == bloom) {
    console.log(bloom);
    return `<div class="alert alert-success" role="alert">
    ${bloom}</span>
    </div>`;
  } else {
    return ``;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-5">
     <div class="card bg-light mb-3" style="18rm">
      <div class="card-body">
      
        <h5 class="card-title">${design.name}</h5>
         <p class="card-text">${design.description} </p>
              <a href="${design.link}" class="btn btn-primary btn-sm"
                >Preview</a
              >
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">Select</button>
              <p></p>
              ${dis(design.distanceClassroom)}
              ${edlevel(design.educationlevel)}
              ${amount(design.studentamount)}
              ${sub(design.subject)}
              ${timey(design.time)}
              ${bloomy(design.bloom)}

            </div>
          </div>
        </div>
    `;
}
// function petTemplate(pet) {
//   return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ''}
//       </div>
//     `;
// }

// document.getElementById('app').innerHTML = `
//     <h1 class="app-title">Pets (${designData.length} results)</h1>
//     ${designData.map(petTemplate).join('')}
//     <p class="footer">These ${designData.length} pets were added recently. Check back soon for updates.</p>
//   `;
document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
