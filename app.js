const speakers = [
  {
    name: 'Ali Abbani',
    professional: 'Microverse Student since July 2021',
    desctiption: 'Microverse Student since July 2021',
    photo: 'images/AliAbbani.png',
  },
  {
    name: 'Mark Zuckerberg',
    professional: 'Chief Executive Officer of Facebook',
    desctiption: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist.',
    photo: 'images/MarkZuk.png',

  },
  {
    name: 'Jack Dorsey',
    professional: 'CEO of Twitter Inc.',
    desctiption: 'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist',
    photo: 'images/JackDorsey.png',
  },
  {
    name: 'Pierre Omidyar',
    professional: 'Chairman of eBay',
    desctiption: 'Pierre Morad Omidyar is a French-American billionaire technology entrepreneur, software engineer',
    photo: 'images/PierreOmidyar.png',
  },
  {
    name: 'Andy Jassy',
    professional: 'CEO of Amazon',
    desctiption: 'Andrew R. Jassy is an American businessman who has been the president and CEO of Amazon since July 5, 2021.',
    photo: 'images/AndyJassy.png',
  },
  {
    name: 'Sundar Pichai',
    professional: 'Chief Executive Officer of Google',
    desctiption: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madras, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.',
    photo: 'images/SundarPichai.png',
  },
];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < speakers.length; i++) {
  const cardsContainer = document.createElement('div');
  const container = document.createElement('div');
  const cardsImage = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const cardsInformation = document.createElement('div');
  const cardsBody = document.createElement('div');
  const fullName = document.createElement('h3');
  const title = document.createElement('h5');
  const description = document.createElement('small');

  cardsContainer.appendChild(container);
  container.appendChild(cardsImage);
  container.appendChild(cardsInformation);
  cardsImage.appendChild(chess);
  cardsImage.appendChild(photo);
  cardsInformation.appendChild(cardsBody);
  cardsBody.appendChild(fullName);
  cardsBody.appendChild(title);
  cardsBody.appendChild(description);

  cardsContainer.className = 'cards-container';
  container.className = 'container';
  cardsImage.className = 'cards-images';
  chess.className = 'image-inside-cards1';
  photo.className = 'image-inside-cards2';
  cardsInformation.className = 'cards-info';
  cardsBody.className = 'cards-body';
  fullName.className = 'cards-name';
  title.className = 'cards-title';
  description.className = 'cards-small';

  document.querySelector('.speakers').appendChild(cardsContainer);
  photo.src = speakers[i].photo;
  fullName.innerText = speakers[i].name;
  title.innerText = speakers[i].professional;
  description.innerText = speakers[i].desctiption;
}