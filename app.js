let speakers = [
  {
    name: 'Ali Abbani',
    professional: 'Microverse Student since July 2021',
    desctiption: 'Microverse Student since July 2021',
    photo: 'images/AliAbbani.png',
  },
  {
    name: 'Mark Zuckerberg',
    professional: 'Chief Executive Officer of Facebook',
    desctiption: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.',
    photo: 'images/MarkZuk.png',

  },
  {
    name: 'Jack Dorsey',
    professional: 'CEO of Twitter Inc.',
    desctiption: 'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist who is the co-founder and CEO of Twitter, and the founder and CEO of Square, a financial payments company.',
    photo: 'images/JackDorsey.png',
  },
  {
    name: 'Pierre Omidyar',
    professional: 'Chairman of eBay',
    desctiption: 'Pierre Morad Omidyar is a French-American billionaire technology entrepreneur, software engineer, and philanthropist. He is the founder of eBay where he served as chairman from 1998 to 2015. Omidyar and his wife, Pamela, are philanthropists who founded Omidyar Network in 2004.',
    photo: 'images/PierreOmidyar.png',
  },
  {
    name: 'Andy Jassy',
    professional: 'CEO of Amazon',
    desctiption: 'Andrew R. Jassy is an American businessman who has been the president and CEO of Amazon since July 5, 2021. Jassy led Amazon Web Services since its inception in 2003. He replaced Jeff Bezos as president and CEO of Amazon on July 5, 2021, and Bezos became executive chairman.',
    photo: 'images/AndyJassy.png',
  },
  {
    name: 'Sundar Pichai',
    professional: 'Chief Executive Officer of Google',
    desctiption: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madras, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.',
    photo: 'images/SundarPichai.png',
  },
];

for (let i = 0; i < speakers.length; i++) {
  let container = document.createElement('div');
  let image = document.createElement('div');
  let chess = document.createElement('img');
  let photo = document.createElement('img');
  let information = document.createElement('div');
  let fullName = document.createElement('h3');
  let title = document.createElement('h4');
  let description = document.createElement('p');

  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullName);
  information.appendChild(title);
  information.appendChild(description);

  container.className = 'speak-container';
  image.className = 'speak-images';
  chess.className = 'chess-image';
  photo.className = 'main-image';
  information.className = 'speak-info';
  fullName.className = 'info-name';
  title.className = 'info-title';
  description.className = 'info-description';

  document.querySelector('.speakers').appendChild(container);
  photo.src = speakers[i].photo;
  chess.src = './images/chess.png';
  fullName.innerText = speakers[i].name;
  title.innerText = speakers[i].professional;
  description.innerText = speakers[i].desctiption;
}