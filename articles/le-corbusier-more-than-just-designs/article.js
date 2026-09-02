document.addEventListener("DOMContentLoaded", function () {
  const article = {
    title: "Le Corbusier: More Than Just Designs",

    subtitle: "The mind that shaped the world",

    category: "Design",

    sections: [
      {
        type: "hero",
        data: {
          title: "Le Corbusier: More Than Just Designs",
          subtitle: "The mind that shaped the world",
          image: "img/LC4.webp",
          alt: "Le Corbusier LC4 chaise longue",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "When Le Corbusier is mentioned, architecture usually comes first. White villas, geometric forms, concrete structures and cities imagined from the ground up. Yet reducing him to an architect would mean missing one of the most interesting parts of his work: his belief that design should shape the way people live.",
              bold: true,
            },

            {
              content:
                "For Le Corbusier, a building was never simply a collection of walls and windows. Architecture was a system of relationships between space, light, movement and the human body. The same idea eventually moved beyond the building itself and into the objects placed inside it.",
            },

            {
              content:
                "This is where his furniture becomes particularly interesting. Together with his cousin Pierre Jeanneret and designer Charlotte Perriand, he developed a series of pieces that treated furniture almost like architecture in miniature: precise, functional and stripped of unnecessary decoration.",
            },
          ],
        },
      },

      {
        type: "quote",
        data: {
          content:
            "“Architecture is the masterly, correct and magnificent play of volumes brought together in light.”",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "The idea behind this approach was not simply to make objects look modern. It was to rethink what an object could do. Instead of designing furniture as decoration added to a room, Le Corbusier and his collaborators approached it as part of the architecture itself.",
            },

            {
              content:
                "The collaboration with Charlotte Perriand was particularly important. After joining Le Corbusier's studio in 1927, she became a major contributor to its furniture and interior work. In 1928, the group developed several now-iconic pieces, including the LC2 armchair, the LC3 sofa and the chaise longue that would later become known as the LC4.",
            },

            {
              content:
                "The LC4 is perhaps the clearest expression of this philosophy. It does not look like a traditional lounge chair. Instead, it separates the supporting structure from the reclining surface, allowing the user to change position while maintaining a sense of balance and continuity.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/LC4-cow.webp",
          alt: "LC4 chaise longue in leather",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "What makes the LC4 remarkable is that its appearance follows its purpose. The curved reclining surface responds to the human body, while the metal frame provides the structure necessary to support it. There is very little that feels decorative or excessive. Almost every visible element has a reason to be there.",
            },

            {
              content:
                "This relationship between form and function became one of the defining ideas of twentieth-century modernism. The object was no longer expected to imitate furniture from the past. It could instead express its materials, its construction and the way it was meant to be used.",
            },

            {
              content:
                "That is also why the LC4 has remained relevant for almost a century. Its design does not depend on a particular trend or decorative language. The proportions are simple, the materials are exposed and the purpose is immediately understandable. It is an object that communicates what it is without needing to explain itself.",
            },

            {
              content:
                "Le Corbusier's influence therefore extends far beyond the buildings normally associated with his name. His real legacy lies in a broader question: what happens when design stops being decoration and starts becoming part of everyday life?",
            },

            {
              content:
                "The LC4 offers one possible answer. It is not simply a chair designed by an architect. It is a piece of design built around the human body, where structure, movement and comfort become one idea. And perhaps that is why, decades after its creation, it still feels less like a historical object and more like a contemporary one.",
            },
          ],
        },
      },

      {
        type: "suggested",
        data: {
          articles: [
            "why-good-design-disappears",
            "the-architecture-of-security",
            "the-city-that-disappears",
          ],
        },
      },
    ],
  };

  loadArticle(article);
});
