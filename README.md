# Team Sticker Album

## Live Demo
[Click for demo](https://muratcankirdar.github.io/team-sticker-album/)

### Summary
This is a POC project of team sticker album. Think you are working remotely on a company with 1200 people and 120 scrum teams.
Almost nobody knows each other. This project's goal is to meet people with their stickers.
Everybody can open 3 sticker sets a day and every sticker set has 6 stickers. When you open a sticker set, you can meet 6 new people in mostly different teams.

### Tech Stack That I Used
- I've created the project with [Vue CLI](https://cli.vuejs.org/) (5.0.4)
- I used [Node js](https://nodejs.org/en/) version 14.19.1 with [NVM](https://github.com/nvm-sh/nvm) 0.39.1
- I used [Vue.js](https://v2.vuejs.org/) 2.6.14 which I'm using Vue 2 almost 2 years.
- I used [Vue router](https://router.vuejs.org/) for routing pages, [Vuex](https://vuex.vuejs.org/) for state management and [Vuetify](https://vuetifyjs.com/en/) as UI library 
- I used [DiceBear Avatars](https://avatars.dicebear.com/) to get random avatars.
- I decided to use [animate.css](https://animate.style/) package to add small animations.

### Project Details
When I first saw the project, I thought about different avatars part a while. I started to think how can I get different images dynamically.
Then I started to search this topic on Google.Then I found DiceBear Avatars and I created a project to try this package, and it contains simply everything I wanted to do, and I decided to use it.
After that part, I noted my path, I created todos because I didn't want to be lost in the middle of the project.
Then I created the project and removed default unnecessary things(files, styles etc.)

I started with apply design of the homepage. When I finished responsive design of the homepage, I felt like it is boring, so I added small animation to next page button.

Although I have not too much experience with responsive design, I designed and developed pages responsive with started mobile size.

Homepage part was easy at first, but Album page part was complicated, so I started to develop Album part, and I created small components for progress of the sticker album.
For example, I created TeamCard.vue component to show team name and logos, but at this point I didn't have mock data or api to show team information in album page, then I created mock data in state and completed album team info part.
Then I wanted to add small client side search because there can be 120+ teams and users don't have time to scroll minutes to find the team they want to look.
I wasn't working with backend api, so I handled client side search with using store efficient I believe.
I turned back the homepage and created StickerDialog.vue component as I planned before. Randomly sticker set open part was probably the hardest part for me.
I created 4 teams with 6 members each. I've created random number generate method to get random index in all uncollected members but sometimes generated number is getting duplicated. So I've searched in Google and modified my method.
After that, I implemented open sticker set feature.

When I started to implement syncTeams method and use localStorage to store data, I've realized that there was a bug, because I called syncSet method in HomeView file but user can reload site in album page and HomeView can't call the syncTeams method. After that I moved sync method directly to App.vue.

After 4-5 manual deploys, I Created a script for automatize deploy process.

Lastly, I've stored sticker set count with using localStorage.
I didn't use a backend API and handled all data on client side, but we have to create and API and use endpoints in every step of course. 

## Notes
I used localStorage, so you have to clean browser cache after open 3 sticker sets if you want to test again, or you can wait one day. :)

### Local Development
- Clone project
- yarn install
- yarn serve
