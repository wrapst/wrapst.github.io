document.addEventListener("DOMContentLoaded", function () {
  const article = {
    title: "The Planet That Shouldn't Exist",

    subtitle:
      "What GJ 523b reveals about how little we understand about worlds beyond our own",

    category: "Science",

    sections: [
      {
        type: "hero",
        data: {
          title: "The Planet That Shouldn't Exist",
          subtitle:
            "What GJ 523b reveals about how little we understand about worlds beyond our own",
          image: "img/gj-523b-hero.jpg",
          alt: "Artistic visualization of a massive rocky exoplanet isolated in deep space",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "Some discoveries expand what we know. Others make the things we already know feel less certain. GJ 523b belongs to the second kind.",
              bold: true,
            },

            {
              content:
                "The planet is enormous by the standards of rocky worlds. It has about 23.5 times the mass of Earth, yet its radius is only about 2.55 times larger. Its measured density suggests that, despite its size, it contains relatively little of the thick hydrogen and helium envelope normally expected around a planet this massive. That is what makes GJ 523b so interesting. It is not simply another distant world added to an ever-growing catalogue of exoplanets. It is a world that appears to sit uncomfortably between the categories we use to describe planets.",
            },
          ],
        },
      },

      {
        type: "quote",
        data: {
          content:
            "The universe does not have to fit neatly into the categories we created to understand it.",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "GJ 523b orbits a relatively young star in just under eighteen days. The planet itself is estimated to be roughly 170 million years old, ancient on a human scale, but remarkably young compared with our 4.5-billion-year-old Earth.",
            },

            {
              content:
                "Its mass and density are the real source of the puzzle. Planets begin as collections of material in the disks surrounding young stars. As their cores grow, their gravity can become strong enough to attract large quantities of gas. Beyond a certain point, a planet can rapidly transform from a rocky world into something much more like a gas giant. GJ 523b appears to have crossed into territory where that process should become important. Yet its measured properties suggest that it has not become a conventional gas-rich world.",
            },

            {
              content:
                "There are several possible explanations. Perhaps the planet once possessed a much thicker atmosphere and lost much of it. Perhaps a violent collision stripped away material that had accumulated around a growing world. Or perhaps it followed a formation pathway that is less common than the models built from our own Solar System would lead us to expect. At the moment, none of these explanations can be treated as the answer. The observations tell us what the planet is like. They do not yet tell us exactly how it became that way.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/gj-523b-scale.jpg",
          alt: "Artistic comparison suggesting the enormous mass of GJ 523b relative to Earth",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "This distinction is easy to lose when a new planet makes the news. A strange observation quickly becomes a headline, and a possible explanation can begin to sound like a conclusion. Science is usually much less tidy. A planet can be unusual without being impossible. What feels impossible is often simply something that does not fit the boundaries of our current categories.",
            },

            {
              content:
                'We call planets Earth-like, super-Earths, sub-Neptunes and gas giants because names make an enormous universe easier to think about. They give us patterns. They let us compare one world with another. But categories are descriptions, not laws. Nature does not stop at the edges of a diagram. The informal term "mega-Earth" is itself an example. It describes unusually massive, dense planets that still appear predominantly rocky, but it is not a formal planetary class in the way the names of familiar planets might suggest. It is a useful way of describing an observation, not an explanation for it.',
            },

            {
              content:
                "That may be the most interesting part of discoveries like GJ 523b. They remind us that our understanding of the universe is built from patterns found in a limited sample. Every new world gives us another point on the map, and sometimes that point lands somewhere we did not expect.",
            },

            {
              content:
                "For most of human history, the planets we knew were the handful visible in our own Solar System. Today, astronomers have confirmed thousands of worlds orbiting other stars, and the number continues to grow. Yet even that enormous catalogue represents only a small glimpse of what may exist. The planets we detect are shaped by the limits of our instruments, the methods we use and the kinds of stars we are currently able to observe most effectively.",
            },

            {
              content:
                "GJ 523b is therefore interesting not because it proves that our theories are wrong, but because it gives those theories something new to explain. Perhaps future observations will reveal that worlds like it are rare accidents. Perhaps they will show that mega-Earths are much more common than we thought, and that our picture of planetary formation has been incomplete from the beginning.",
            },

            {
              content:
                "For now, there is something strangely beautiful about not knowing. We look into the darkness, find another world, measure it as carefully as we can, and discover that the universe has once again given us a question instead of an answer. Maybe that is what makes GJ 523b worth remembering. Not that it is a planet that should not exist, but that it exists at all, quietly orbiting a distant star, asking us to make our understanding a little larger.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/gj-523b-final.jpg",
          alt: "Distant artistic visualization of a rocky exoplanet against a sparse field of stars",
        },
      },
    ],
  };

  loadArticle(article);
});
