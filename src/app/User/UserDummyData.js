const DUMMYDATA = {
  name: "Luis",
  profileImage:
    "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
  main: "Falco",
  socialMedia: ["instagram", "facebook", "twitter", "youtube"],
  emailAdress: "luis_p456@outlook.com",
  animes: ["One Punch Man", "DBZ", "Gate"],
  summary: "Smash or get Smashed!",
  friends: ["Thomas", "Rafa", "Cain", "Russell"],
  birthDate: String,
  chats: [{
    reciever: 'Russel',
    messages: [{
      sender: 'user',
      date: '12/12/2024',
      time: '12:00',
      message: 'what ahp dawg how you been?',


    },
    {
      sender: 'user',
      date: '12/12/2024',
      time: '12:00',
      message: 'its been a min',

    },
    {
      sender: 'Russel',
      date: '12/12/2024',
      time: '12:00',
      message: 'alright fag/fam wby',
    },
    {
      sender: 'Russel',
      date: '12/12/2024',
      time: '12:00',
      message: 'shooting dear still?',
    },
    {
      sender: 'user',
      date: '12/12/2024',
      time: '12:00',
      message: 'hell yea?',
    },
    {
      sender: 'Russel',
      date: '12/12/2024',
      time: '12:00',
      message: 'mah man',
    },

  ]

    
  }],
  blogs: [
    {
      author: "Jonny",
      thumb: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      date: 12 / 12 / 2015,
      images: [
        "https://static7.depositphotos.com/1033002/732/i/600/depositphotos_7322826-stock-photo-hunter.jpg",
        "https://media.istockphoto.com/id/1301911854/photo/hunter-and-his-dog-with-prey-at-sunset.jpg?s=612x612&w=0&k=20&c=5_zZjvKrnovP4bQIu0fSRyfs9nVUgsdICIRvF9ReHTg=",
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_565,w_849,x_0,y_0/c_scale,w_1080/v1417542577/big_9_dw42vu.jpg",
        "https://www.gannett-cdn.com/-mm-/0a97d85c9bf6a8a29abc48d77e9caa2d61fc375f/c=0-129-1279-852/local/-/media/Reno/2014/11/28/B9315302420Z.1_20141128194523_000+G1V990I9G.1-0.jpg?width=1279&height=723&fit=crop&format=pjpg&auto=webp",
      ],
      message: "Is all about that deer meat",
    },
    {
      author: "Russel",
      thumb: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
      date: 12 / 12 / 2015,
      images: [
        "https://www.petersenshunting.com/files/2013/09/amazing_hunting_photos.jpg"
      ],
      message: "killing it",
    },
    {
      author: "Dean",
      thumb: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAAB/CAMAAADFNu54AAABGlBMVEUAAAABt/8AAAMBuP4Auv8Avf8BAAYBAQoAv/8AABIAABABAw4AABgAABQBAAwDjdgAAB4AACMAADAAACoDEFIAADUIXqsAACcAABsIhLkAw/8ABhwCADwDB0gDEE0DB0UAAEsHJngJRpQKbb4LfMsGHGcCAFUJP5sLc8kJl+cEq/UHKnUHTaUJf9UOrf8FQosEE2QJVqwJi90IOH4IZ7ADMoQHN4QKT5cKoO0KVIsOXp8PkM8HfLYNM1YFFzsMXIMGTXMIPl8EFC4ERIEJb7EGIlUJSnoGLmIEHmAQf8UHNmYKYpQLZqACoOAMKkQOeKcLJUsJITEPNUwFS7AOcNMIXMgAWNYAGHQHWOUCHYgHR8MIMI0CGE8DMZtBGiHoAAAHyElEQVR4nO1bCVvTSBieyRy52vS+oAgK7EJYqwhCoeVQoRShgBe4q/7/v7HfpC2STBJxd7GTbt5HsTaT55mX95vvmhmEUqRIkSJFihQpUqRIkSJFihQpUqRIkXxomvfDg/g06fn8t/BIwV/BjnMOn/iQ6RTxHGrHuW7blgdH1zgfCzoNACa6bWXrhVKxOVculx/NV0r5TMa07WmgOVTPsbKFysLjJ9XFpZyHpcXqs+Vmre4AS55oip5Cum1mir/9vrLqYkzoCARjd3VxrVnLOp7FTnqm/xigoG7li8t/PG3NGJQAgCX2AJ+pMdNaejaXN3U9sRzBRK168Xn1BWYjYkFQ5uaqC3nLTiRHESccM7+w7mLPLiNAKG6vFTN6Eq0VvKhVn1tvGySanyckJsaLjVJWkJz0nH8OYKTZ2vISYbH8hkuTMHdzLmMniqMIFWCkL9s/UPC7lDRX5uB1kpPvAEM7M78etwaDYrLWVg1ynsQICeswO7cInuS+Kgoh3e2ixZNirBANzcoK9tHz/kO9eEiYAUESB9kDx7qZjOQc5qhnFp4aPisFOSGzYZQx0nbbO7sdwiQrpka1ZulcfYoi5842F1lAJsKI22l0G43G/N4+DDvoNkgwISB4t+AkYTlq3CxWh8Hgu4YG7h6+eg1PdcsbAj/MwwZm3414aMhvrASk5Rq38lti1d0Rh+KjuvfMm702jCrwab8jDPiO3NQ9NpVP5sDV1Nfa1Gel1O2h26bGbYXo/TzsMN9QliuaqntVjTuPcn5PQtmTW93GozzHKb45bvkDC9nN2qoz1AvVuwxFAbXDR3yk0RqqL/plJIMTU1eYo6jws32X+mRprVyNiuMwHG/6KWJ2WtIV9jga4nZm0fAxnFlcfx0V6oC3XXVJQPQTlctHDenZ5y2fiLSDstEaAnrBNIflLEvZ4Ciy79qmz32QXA2h0HU4egW9cqUE4MRU11KhCi7n6N2Q7247AWfqfwGhIwMHQE/zjqoqAsX8tn+2uaIW42vE9+1grkrI4K2jbGzkenPpbplP6G60lWrDjQ1XLirprqlsT447fZ+zIa1yZN0w3tToyq0PETcUdTiarT/xiUhapejBI4rn0loktHWsaE2lcTv/wvBRNPZQ1D7bkKKG9oIeFbyVsa3r/NdO/l6A1MYq+oMiBopxhipYmg3ZUo0jTc1EFSj2iS9VwcYOimpU3NYcZ3J/h7ZNNRcjVPvb/vQU00ZkxLitq84khvDivJphAyhuBikOYoaPVDyXGlXw5omK/gaWopM/ZUGKBRQjh3gy26ESQ0zfqLhbJRrglUAxDNXfRVwOLh7ZIe4Gk3OuKMW5YDZG8FlsEi44Hoa0k8kRUpOi/qgdnC7rZn9EETUMHFyO9FRLDEWCe/EUhVMh0mqkp0jBYsMz1Jw8WTe20vAeHZDg3gdQVFNFpylT9KJ/DEVPY8njAEUVmxtgqIUQisS9iDHVIc3DoIrgbhz1GCKxp3gqGyqmndnYKA7PLoMUWRcp2WnUdGdT3m6CP2fx773vSNuQ8IqK7RswVGdXLuEJJjOFuNfQ5Yxc9/dUdDdepbEWui1sdCPi/9ChXspFMblCCuaoHsVKOyThhDSuHkexK1N0HTX3GTXNyi5J0/VEeRVJEYUlcKyjZMxA4rQUqoZTPIhRMT+QUiKIpSp6GwDn+kboaTcaTRHZlxJDgvdUpQg+9coNW4ysEd6kEhTfDQJviCrztZL+FHkUA0XxGEdRLwiHKv1S2LmuZOBHHkW0ExI26Opx2Gg0bF2dBSlGeicFIES5GsgcjdMQOx2TeB80VMj41O33i5IRHYUWG+Fx3Lk4uMRSQkQgtfnVU78/NI6+St1tPHMSMvT9wWWjMyBMMlPatriKrfARhIzbwbhBsR4UURP2SSiVjZoQ1otr2k0eIGMtF3CqbEUeJpeII4aQ2ThKH6IWd4XQG7+pUtwLGRnWd/M4uq9ijwZMHqK9kT+67cXAP6z1oSTbKTqDTC/kRC5VtFK8C3H0pjQY7fcT0Z7aCnWnB3LbzTPqDlKzxrgDcfsE9cb6ELr6JJShgw5DtjJE6paEk4zAkXeHXpXQp30Utv0GNQn8HiQdRddV4XjxHZxzpytORpPWxyYKjQCeVD03cCyXkp7yC3EI0BG9PmKUtD4tiPsaIYaq2SbSyx8DB4+NM7Uj4l0Ax8q627q+MbkWEeTMPM8vrzCfhufhkisKjvofP/9Z0iNu7sFXZnEWlejY8WLCBrGbWKoBZvr2+q8bce8iem1ZxcruqA0ibvp19pCSpzQicfXhZr5gxR0s1VB9B49VJKy7r2bnNBL7X5q6/iOzuxhXisRw3woJk0RR+1oc3VSIGYMuGsNKgzIwUicZ0eIWVv4eg8ytE9e7buvuvBNGmiQNgeJ9Bu1/erk9Q8hgB41iRaIo3mu+1ofrm1z3EJZsgoLhT6J//WE/I9KfaSWIUOHb543ZyDNyUwG99O3b/qQn8bBwss1vfXuaRUQog/pfoo8dTwFgETr5x/1JT+MBAYECMoSvy9O9Gvmshsrl2UlP40EBEVFbriSqhPpZiLSmsrwx6Wk8LDSN10pTHTa81CY7zatxVEDNKryd+C8xujSN9OmleHvRf4oX4/iG/xSHjXEz4/8g4xRTnO5KKkWKFClSpEiR4mHwN9z2hRH672FgAAAAAElFTkSuQmCC",
      date: 12 / 12 / 2015,
      images: [
        "https://media.gettyimages.com/id/152873437/photo/male-hunter-aiming-at-deer-with-rifle.jpg?s=612x612&w=gi&k=20&c=N4NjOppPwNlCgfDDI4sc6yqttrsvs0TyJ0ANzcX-Eu8=",
      ],
      message: "what a day of hunting. Will be going again soon. lmk if anyone wants in",
    },
  ],
};

export default DUMMYDATA;