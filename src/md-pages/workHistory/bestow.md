---
path: "/work/bestow"
dateFrom: "2017-10-01"
dateTo: "2018-08-01"
description: "React/Redux web app"
link: "https://hellobestow.com/"
title: "Bestow"
group: "work"
---

Bestow was and always will be one of my favorites. From feeling like a family to building something that you knew would make a positive impact in the world - it was a good time in my life.

## The Tech
As the founding Frontend Engineer and acting lead, Bestow hired me to help take the client app to the next level. Before my hire, the company made an unfortunate mistake of hiring a third-party dev consulting company to build the first version of the app, and it went very badly.

Needless to say, when I joined, I spent more time addressing bugs than I did building anything. Additionally, it was a single route for a 15 plus question form. A single...route. Oh, you didn't mean to refresh the page accidentally? Cry me a river and start all over, my friend.

One day, I decided enough was enough, and I "took one for the team" and redesigned and built the frontend entirely on my own time. The good news was that the consulting agency at least developed the app using React. From that point, all I did was add styled-components and Flow, and we were good to go with your traditional React/Redux app.

## The Redesign
At the heart of the Bestow app, it is just a glorified single form. The Backend drove most of the form direction due to an added legal layer that must control the question content if a user falls in a specific policy bucket.

Due to this, I created an Object that would map the content and routing to the Backend directions received from question responses. This single source of truth would allow us to dynamically build a multi-paged app that would only use a handful of components. Simple.

##The Customer Portal
Once users of the app would accept the terms, they would become customers. All Bestow customers have access to a portal where they receive their documents and get all the info they needed for their policy. This is just like your everyday dashboard app, so there was nothing crazy to redesign here (it also wasn't built at the time 😜). Thus, it used the good ole' "huge app" design that is used by large app teams like Facebook and Twitter to ensure a React app is scalable.

##The stuff that counts
As an engineer, you're only as good as the automation you put in place to ensure you are delivering high-quality clean code. Thus, we used Travis-CI to automate unit testing and used Cypress for our end-to-end suite. Looking back, I wish I knew or had a team that held the same standard that I have now. We could've saved tech-debt time by adding a tool like SonarQube to help us ensure we were shipping quality code. Alas, hindsight is 20/20.

## The end
It wasn't easy leaving the Bestow team, but at the end of the day, a life insurance form is a life insurance form. Whether from legal or just the overall company decisions, there was no room for extreme visionary improvements. And that is still alive today - the app has continued to be just a glorified form that feels like a reaction to other competitors in the industry. Nothing more, nothing less.

To this day, I would love to see the app use extrinsic gamification. This would create an experience that would take the monotony out of life insurance and replace it with something that would both drive behavior and be fun to use. It would also allow Bestow to be the first person in the industry to take this step in the Life Insurance realm.