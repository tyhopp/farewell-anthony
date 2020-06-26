// Add your notes for Anthony here
const notes = [
  {
    body: 'All the best on advancing to Mythic!',
    from: 'Grace'
  },
  {
    body: 'Hi Anthony, wish you all the best and good luck!',
    from: 'Liu'
  },
  {
    body: 'Good Luck and best wishes for your future ventures.',
    from: 'Sulthan'
  },
  {
    body: 'Hey Anthony, It\'s been a good journey. Hope we can meet again. All the best and Good luck. Thanks for everything.',
    from: 'Symon'
  },
  {
    body: 'Hi Anthony , wish you all the best in your future endeavor.',
    from: 'Vijay'
  },
  {
    body: 'Hi Anthony, wish you all the best for you future endeavours.',
    from: 'Ganesh'
  },
  {
    body: 'Dude! Been fun working with you!  Hoping for better adventures ahead for you! All the best, stay cool and keep in touch!',
    from: 'Alex M.'
  },
  {
    body: 'Hi Anthony, good luck and all the best for your future endeavours!',
    from: 'Susan'
  },
  {
    body: 'Hi Anthony, best wishes to your upcoming wedding ceremony. All the best and we\'ll keep in touch',
    from: 'Yang'
  },
  {
    body: 'Wishing the ever best in your next endeavours Anthony~',
    from: 'Vimal'
  },
  {
    body: 'Hi Anthony, wish you good luck and all the best for your future endeavors.',
    from: 'Bhakti'
  },
  {
    body: 'Hi Adrien & Anthony Wishing you guys all the best and keep in touch.',
    from: 'Kah Choon'
  },
  {
    body: 'Hi Anthony, Its been a pleasure to work with you. Learned different perspectives from discussions on user story(qa thought) and in general. All the Best for future endeavors and we\'ll keep in touch.',
    from: 'Sam'
  },
  {
    body: 'All the best, Anthony!',
    from: 'Badri'
  },
  {
    body: 'Hi Anthony, hope you find meaning and joy in your next endeavour. All the best.',
    from: 'Thibaud'
  },
  {
    body: 'Wish you all the very best in your future endeavour Anthony!',
    from: 'Jesse'
  },
  {
    body: 'Anthony, Our journey for investors portal has been amazing and it wouldn\'t have been the same without you. Hopefully, after the Covid-19 situation, we can get a chance to play sports with the rest! All the best in your next chapter~',
    from: 'Alex Yam'
  },
  {
    body: 'Anthony, It was nice working with you, wish you all the best for your future endeavors !!',
    from: 'Danuka'
  },
  {
    body: 'Hey Anthony, All the best in your future endeavours! Please keep in touch!',
    from: 'Kian'
  },
  {
    body: 'Anthony, It was pleasure working with you and the guidance, support and all the knowledge transfer chats and talks in this short time was amazing and I hope we could work together in future. Good luck for your future endeavors.',
    from: 'Yuvaraj'
  },
  {
    body: 'Hey buddy, You are one good team mate I ever worked with. I am going to miss you a lot at work, but we will stay in touch for sure. Keep up your good spirit and continue your journey in making everything great!',
    from: 'Isuru'
  },
  {
    body: 'Anthony, It was nice working with you. Your eagle eyes definitely caught a lot of bugs in investors, will miss that for sure :D. All the best! Keep rocking!',
    from: 'Martin'
  },
  {
    body: 'Hey Anthony, All the Best for Future !!! Keep rocking !!!!',
    from: 'Amber'
  },
  {
    body: 'Anthony, I\'m gonna miss going over to your table and playing with your puzzles while talking about random stuff. Here\'s to hoping we work together in the future, all the best for everything! Keep in touch.',
    from: 'Yao'
  },
  {
    body: 'Hey Anthony! I wish you all the best in your future endeavors ! I hope we can catch up after this COVID situation and play table tennis again. Let\'s keep in touch!',
    from: 'Hafid'
  },
  {
    body: 'Anthony, thanks for the great support to the Dev team, wish you good luck and all the best in your future. Let\'s keep in touch!',
    from: 'Yijie'
  },
  {
    body: 'Good Luck and best wishes for your future ventures.All the best in your future endeavours!',
    from: 'Swapnil'
  },
  {
    body: 'Hey Anthony, Wish you all the best for your future endeavors. Hope you enjoy the work in your next organisation and thanks for being an amazing team-mate. Will miss you in Investors team.',
    from: 'Rahul'
  },
  {
    body: 'It was a nice discussion we had for a short time. Wishing you tons of wishes for your future endeavours.',
    from: 'Khushbu'
  },
  {
    body: 'Anthony, I remember most clearly one conversation we had where you said "You write bugs, I catch them - we need each other." Indeed we do! Thanks for being a great teammate and best of luck wih your next adventure!',
    from: 'Ty'
  },
  {
    body: 'Dude !! It’s was a surprise when I came to know that your are leaving. I am gonna miss my TT partner and our team gonna miss you.. all the best and I wishing you great success and happiness.',
    from: 'Arun'
  },
  {
    body: 'Best of luck in your new journey Anthony!',
    from: 'Slava'
  }
];

const cards = document.querySelector('.anthony-cards');
const sortedNotes = notes.sort((a, b) => {
  if (a.from < b.from) {
    return -1;
  }
  if (a.from > b.from) {
    return 1;
  }
  return 0;
});

for (const note of sortedNotes) {
  const card = document.createElement('div');
  card.classList.add('anthony-card');
  let content = '';
  if (note.title) {
    content += `<h2 class="anthony-card-title">${note.title}</h2>`;
  }
  content += `
		<p class="anthony-card-body">${note.body}</p>
		<p class="anthony-card-from">-- ${note.from}</p>
	`;
  card.innerHTML = content;
  cards.appendChild(card);
}
