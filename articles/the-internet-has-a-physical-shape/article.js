const article = {
  title: "The Internet Has a Physical Shape",
  subtitle: "The hidden infrastructure behind the digital world",
  category: "Tech",

  sections: [
    {
      type: "hero",
      data: {
        title: "The Internet Has a Physical Shape",
        subtitle: "The hidden infrastructure behind the digital world",
        image: "./img/the-internet-has-a-physical-shape-hero.jpg",
        alt: "A vast network of submarine cables, data centers and terrestrial infrastructure representing the physical structure of the internet",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The internet feels like a place without a location. We send a message, open a website, upload a photograph or start a video, and none of it seems to require anything more than a screen and a connection. The information appears almost instantly, as if it simply exists somewhere beyond the physical world. We talk about the cloud, online spaces and wireless connections as though digital information has somehow escaped geography.",
              bold: true
          },
          {
            content:
              "But the internet is not nowhere. It is somewhere. Behind every search, video, message and photograph is a physical infrastructure made of cables, buildings, antennas, switches, servers, electrical systems and cooling equipment. Some of it runs beneath streets. Some sits inside anonymous buildings. Some stretches across entire oceans. The digital world may feel weightless, but the system that carries it is anything but.",
          },
        ],
      },
    },

    {
      type: "quote",
      data: {
        content:
          "The internet may feel invisible. The infrastructure behind it is not.",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "It begins with a surprisingly simple idea: information has to travel. When two devices communicate, data is divided into packets and moved across a collection of interconnected networks. Those packets do not follow a magical path through the air. They move through physical equipment, crossing routers and switches, traveling through fiber optic cables and passing between networks that may be operated by completely different organizations.",
          },
          {
            content:
              "Inside a city, that infrastructure can be buried beneath roads or carried through existing telecommunications routes. Between cities, it can travel through terrestrial fiber networks. And when the destination is on another continent, the journey often continues through one of the most important pieces of infrastructure in the modern world: a cable lying on the ocean floor.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/the-internet-has-a-physical-shape-cables.jpg",
        alt: "A submarine fiber optic telecommunications cable being deployed across the ocean floor",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "Submarine cables are the hidden backbone of global connectivity. They connect continents by carrying enormous amounts of information through optical fibers protected by layers of material designed to survive one of the least forgiving environments on Earth. According to the International Telecommunication Union, submarine cables carry more than 99 percent of international data traffic.",
          },
          {
            content:
              "That means a photograph sent across an ocean, a financial transaction between countries or a request reaching a distant cloud service may physically travel beneath the sea. The route is invisible to the person using the service, but the geography is still there. Oceans, coastlines and cable landing points remain part of the journey.",
          },
        ],
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "At the other end of those cables are places that are just as easy to overlook. Data centers are the buildings where enormous collections of computers store, process and distribute digital information. From the outside, many look almost ordinary. Inside, however, they contain rows of servers, networking equipment, power systems, backup systems and cooling infrastructure designed to keep machines operating continuously.",
          },
          {
            content:
              "This is where the idea of the cloud becomes strangely concrete. A file stored in the cloud still has to occupy physical storage somewhere. A video still has to be processed and delivered by hardware. A website still has to exist on computers connected to a network. The cloud is not a place above us. It is a distributed collection of physical places that we rarely see.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/the-internet-has-a-physical-shape-data-center.jpg",
        alt: "Rows of servers inside a modern data center showing the physical infrastructure behind cloud computing",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The physical shape of the internet becomes even clearer when we look between the major pieces of infrastructure. Internet Exchange Points, or IXPs, are physical locations where different networks connect and exchange traffic. They contain networking equipment and provide a meeting point between organizations that would otherwise have to send traffic through additional networks. In other words, even the relationships between the networks that make up the internet can have a physical address.",
          },
          {
            content:
              "This is one of the reasons distance still matters online. The internet has made the world feel smaller, but it has not removed geography. Data still has to travel, and the path it takes can affect latency, reliability and performance. A server located closer to a user can reduce the distance a request needs to cross. A connection between nearby networks can avoid an unnecessarily long route. Behind the apparent immediacy of the internet is a world where meters and kilometers still count.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/the-internet-has-a-physical-shape-exchange.jpg",
        alt: "Network switches and fiber connections inside a physical internet exchange facility",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The most interesting part is that we usually notice this infrastructure only when something goes wrong. A damaged cable can disrupt international connectivity. A power failure can take servers offline. Congestion can make a service feel slow. A routing problem can send traffic along an inefficient path. For a few seconds or a few hours, the physical world behind the screen becomes visible.",
          },
          {
            content:
              "That invisibility is not an accident. Much of the internet has been designed so that its complexity disappears from everyday experience. We are not expected to think about which cable carries a message, which data center stores a photograph or which network exchanges a packet with another. The system works precisely because most of its physical complexity remains outside our field of view.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/the-internet-has-a-physical-shape-landing.jpg",
        alt: "A coastal submarine cable landing station connecting an undersea cable to terrestrial internet infrastructure",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "This makes the internet less like a cloud and more like a city. A city is not defined only by the buildings people see. It depends on roads, power lines, water pipes, tunnels, stations and systems that most people rarely think about. Remove enough of that infrastructure and the visible city stops working. The internet follows the same principle, only at a planetary scale.",
          },
          {
            content:
              "We built a digital world on top of a physical one, then gave the digital layer a language that makes the physical layer easy to forget. We call it wireless, even when the information eventually reaches a cable. We call it the cloud, even when the data is stored in a warehouse-sized building. We say something is online, even though getting it there required an enormous network of machines, energy and infrastructure.",
          },
          {
            content:
              "The internet did not make the physical world disappear. It made the physical world easier to ignore. Beneath the simplicity of every screen is a system that stretches across cities, countries and oceans, quietly carrying pieces of our lives from one place to another.",
          },
        ],
      },
    },
  ],
};

loadArticle(article);
