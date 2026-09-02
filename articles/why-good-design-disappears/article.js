document.addEventListener("DOMContentLoaded", function () {
  const article = {
    title: "Why Good Design Disappears",

    subtitle: "When the best objects stop asking for attention",

    category: "Design",

    sections: [
      {
        type: "hero",
        data: {
          title: "Why Good Design Disappears",
          subtitle: "When the best objects stop asking for attention",
          image: "img/good-design-hero.jpg",
          alt: "Minimalist everyday object photographed in a quiet modern interior",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "Some objects are designed to be noticed. Others are designed so well that, after a while, we stop noticing them at all. A chair becomes simply the place where we sit. A lamp becomes the light in the room. A handle becomes the movement of opening a door. The object is still there, but its design has almost disappeared.",
              bold: true,
            },

            {
              content:
                "This is one of the most interesting qualities of good design. It does not always announce itself through unusual shapes, expensive materials or visual complexity. Sometimes its greatest achievement is making an interaction feel so natural that we never think about the decisions behind it.",
            },

            {
              content:
                "We often associate design with appearance because appearance is the part we can immediately see. But design also lives in proportions, movement, balance, weight, distance and repetition. It exists in the relationship between an object and the person using it.",
            },
          ],
        },
      },

      {
        type: "quote",
        data: {
          content:
            "The best-designed object may be the one you eventually stop thinking about.",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "Think about the objects that surround you every day. The ones that work particularly well rarely demand a moment of admiration every time you use them. Their success is quieter. They fit the hand, occupy the right amount of space, move in the expected direction and communicate their purpose without requiring instructions.",
            },

            {
              content:
                "That quietness can be difficult to achieve. Removing something from an object is easy. Knowing what can be removed without making the object worse is much harder. Simplicity is not the absence of decisions; it is often the result of many decisions that are no longer visible.",
            },

            {
              content:
                "This is why minimal design can sometimes be misleading. Two objects may look equally simple while feeling completely different in use. One may have been reduced until only the essential remains. The other may simply have been made visually sparse. From a distance they can appear similar. In the hand, the difference becomes obvious.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/good-design-still-life.jpg",
          alt: "Minimalist arrangement of everyday objects in a modern interior",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "Good design therefore has a strange relationship with attention. At first, we may notice an object because of its form. Over time, however, the visual novelty becomes familiar. What remains is the experience of using it.",
            },

            {
              content:
                "This is where durability becomes more than a question of materials. An object can remain physically intact while becoming visually or functionally obsolete. A different kind of longevity comes from creating something that continues to make sense as habits, interiors and technologies change around it.",
            },

            {
              content:
                "The most successful objects often leave room for the person using them. They do not try to dominate the environment. They establish a relationship with the surrounding space and then become part of it. Their presence is clear without becoming overwhelming.",
            },

            {
              content:
                "Perhaps this is why certain pieces of furniture, tools and everyday objects continue to feel contemporary long after the moment that produced them has passed. Their value is not entirely tied to novelty. They work because the underlying problem they solve has not changed.",
            },

            {
              content:
                "There is also something reassuring about this kind of design. In a world filled with things competing for attention, an object that simply does its job can feel almost radical. It does not need to tell us that it is important. It proves its value through repetition.",
            },

            {
              content:
                "Good design does not necessarily disappear because it becomes invisible. It disappears because it becomes familiar. The decisions that once seemed remarkable become part of an effortless routine, and the object quietly moves from something we look at to something we live with.",
            },

            {
              content:
                "Maybe that is the real measure of a well-designed object. Not how long we admire it when it is new, but how naturally it remains in our lives after the novelty has gone.",
            },
          ],
        },
      },

      {
        type: "suggested",
        data: {
          articles: [
            "le-corbusier-more-than-just-designs",
            "when-more-becomes-the-product",
            "the-things-we-build-and-never-see",
          ],
        },
      },
    ],
  };

  loadArticle(article);
});
