document.addEventListener("DOMContentLoaded", function () {
  const article = {
    title: "The Buildings Behind the Internet",

    subtitle:
      "Why the invisible architecture of AI is becoming impossible to ignore",

    category: "Tech",

    sections: [
      {
        type: "hero",
        data: {
          title: "The Buildings Behind the Internet",
          subtitle:
            "Why the invisible architecture of AI is becoming impossible to ignore",
          image: "img/data-center-hero.jpg",
          alt: "Minimalist architectural visualization of a vast modern data center",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "We tend to imagine the internet as something without a physical location. It feels weightless, almost abstract, because most of our interactions with it happen through screens. A message travels across a room, a photograph appears instantly, a website responds to a request, and an artificial intelligence system produces an answer in seconds. None of these experiences reveal where the computation actually happens. Yet behind every one of them is a physical infrastructure of cables, electrical systems, cooling equipment and machines, all housed somewhere on the ground.",
              bold: true,
            },

            {
              content:
                "Behind much of what we now call the cloud are buildings filled with computers. Some are relatively modest facilities hidden inside ordinary industrial areas, while others are enormous campuses designed specifically to concentrate large amounts of computing power in one place. They sit on concrete foundations, connect to electrical grids and require carefully controlled environments to operate continuously. For years, these buildings were easy to overlook because the services they supported felt almost entirely digital. Artificial intelligence is beginning to change that relationship.",
            },

            {
              content:
                "As AI systems become more capable, the amount of computing required to train and operate them is becoming an increasingly visible part of the technological landscape. The machines themselves are becoming more powerful, but they are also producing more heat and demanding more electricity. What looks like an invisible service on a screen therefore has a very physical foundation. The growth of AI is not only creating new software and new products. It is also creating a new generation of buildings designed around computation.",
            },
          ],
        },
      },

      {
        type: "quote",
        data: {
          content:
            "The cloud has always had an address. We simply did not need to know it.",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "A modern data center is not simply a warehouse containing computers. It is a carefully controlled environment where temperature, humidity, electricity and network connections have to remain within narrow limits. The servers may be the reason the building exists, but much of its architecture is dedicated to supporting them. Power distribution, backup systems, cooling equipment, fire protection and physical security all become part of the same machine. The building and the technology inside it are therefore difficult to separate.",
            },

            {
              content:
                "This becomes particularly important as artificial intelligence changes the kind of computing being performed inside these facilities. Specialized processors used for demanding AI workloads can consume substantial amounts of electricity and generate significant heat. Removing that heat is not simply a matter of making a room colder. It requires an entire infrastructure designed around the density and behavior of the equipment. Cooling has consequently become one of the defining architectural problems of modern computing, with different facilities using different combinations of air and liquid-based systems.",
            },

            {
              content:
                "From the outside, however, very little of this complexity is visible. A large data center can look almost anonymous, with long walls, limited windows and security infrastructure revealing almost nothing about what happens inside. There may be no public entrance, no retail space and no visual connection between the building and the digital services it supports. In architectural terms, it is an unusual kind of place because its most important occupants are machines that do not experience the building in anything like the way humans do.",
            },

            {
              content:
                "That creates an interesting inversion of the way we normally think about architecture. Most buildings are designed around human movement, comfort and perception. Their proportions, entrances, windows and circulation are shaped by the needs of people. A data center reverses much of that logic. The human presence remains essential for construction, maintenance and operation, but the building is ultimately organized around computers, electricity, airflow and reliability. It is architecture designed primarily for a form of activity that most of us never see.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/data-center-interior.jpg",
          alt: "Rows of computer racks inside a large modern data center",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "For a long time, infrastructure like this could remain almost completely outside the public imagination. The internet seemed to make geography less important. A file could be stored somewhere on the other side of the world without changing the way it appeared on a screen. A service could reach millions of people without requiring a visible building in every city where it was used. The physical distance between the user and the machine became almost irrelevant to the experience.",
            },

            {
              content:
                "The infrastructure itself, however, never stopped depending on geography. Data centers need land, electricity, network connections and suitable environmental conditions. As facilities become larger, the availability of these resources can determine where new buildings are possible. In Europe, the growing demand for computing is contributing to a search for locations with available energy, land and grid capacity, including areas farther from major urban centers. The digital economy may feel detached from place, but the buildings supporting it are becoming increasingly shaped by place.",
            },

            {
              content:
                "The scale of the energy involved makes this connection even more difficult to ignore. The International Energy Agency estimates that global electricity consumption from data centers could rise from around 485 terawatt-hours in 2025 to around 950 terawatt-hours by 2030. That would bring data centers to around three percent of global electricity demand by the end of the decade. The exact future remains uncertain, but the direction is clear enough to make computing infrastructure an increasingly important part of discussions about electricity and the development of new energy systems.",
            },

            {
              content:
                "Numbers like these are difficult to visualize because electricity has no obvious physical form. A terawatt-hour does not look like anything in particular. What the number represents, however, is very tangible. It represents power stations, transmission lines, substations, cooling systems and buildings capable of operating thousands of machines at once. The more computation we demand, the more closely the digital world becomes connected to the physical infrastructure that supports it.",
            },
          ],
        },
      },

      {
        type: "image",
        data: {
          image: "img/data-center-landscape.jpg",
          alt: "Large data center building integrated into a quiet rural landscape",
        },
      },

      {
        type: "text",
        data: {
          paragraphs: [
            {
              content:
                "There is something revealing about this moment. For years, the digital world was often described as a way of escaping physical limitations. Information could move instantly, software could be reproduced almost without friction and entire services could exist without a traditional storefront. The language surrounding technology encouraged us to think of the internet as something that existed somewhere above the physical world. Artificial intelligence is making that idea harder to maintain.",
            },

            {
              content:
                "Computation has a body. Every model still needs processors, every processor needs electricity and every large concentration of processors needs a place where it can operate. That place requires a building, a cooling system, network connections and people capable of maintaining the infrastructure around it. The more computationally demanding our digital systems become, the more physical the supposedly invisible world becomes as well.",
            },

            {
              content:
                "This may eventually change the way we think about the architecture of the digital age. The most important buildings of our technological era may not be the ones we visit or photograph. They may be the ones we pass without recognizing, hidden behind security fences and blank walls, quietly supporting services used by millions of people. Their lack of visual drama is almost part of their purpose. They are designed to make something extraordinary feel ordinary.",
            },

            {
              content:
                "There is an irony in all of this. The internet made information feel detached from geography, while the infrastructure supporting it is becoming increasingly dependent on geography. A place with available land, sufficient electricity and the right network connections can become strategically important to the digital economy, even if almost nobody outside the surrounding area knows its name. The cloud was never really in the sky. It has always been somewhere on the ground. What is changing is that we are beginning to notice the buildings.",
            },
          ],
        },
      },
    ],
  };

  loadArticle(article);
});