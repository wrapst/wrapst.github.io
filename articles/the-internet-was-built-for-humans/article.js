const article = {
  title: "The Internet Was Built for Humans",
  subtitle: "What happens when the people using the web are no longer people",
  category: "Tech",

  sections: [
    {
      type: "hero",
      data: {
        title: "The Internet Was Built for Humans",
        subtitle:
          "What happens when the people using the web are no longer people",
        image: "./img/internet-human-interface.webp",
        alt: "A human sitting before a computer while autonomous digital agents move through the internet",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "For most of its history, the internet has made one assumption about the person on the other side of the screen: that they are human. Someone opens a browser, reads a page, clicks a button, enters a password, chooses a product, sends a message, and moves on. Almost every layer of the modern web was built around this rhythm of human attention. Now that assumption is beginning to disappear.",
            bold: true,
          },
          {
            content:
              "AI systems are increasingly able to do more than answer questions. They can browse websites, write code, use software, send messages, search databases, call APIs, make decisions and continue working without waiting for a person to tell them what to do next. They are becoming participants in the internet rather than simply tools used by its human participants.",
          },
          {
            content:
              "That shift sounds subtle because the internet itself does not look different. Websites still have buttons. Servers still respond to requests. Passwords still protect accounts. But underneath those familiar interfaces, something fundamental is changing. The web was designed for users who think at human speed. Agents can operate at machine speed, across many systems at once, while carrying instructions and permissions from one place to another.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/web-designed-for-people.webp",
        alt: "A traditional web interface designed around human interaction",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The original web was built around interaction. A person requests something, a server responds, and the person decides what to do next. Even when automation became common, it usually followed clearly defined rules. A search engine crawler could index a page. A script could process a form. A payment system could execute a transaction. The machine was powerful, but its role was narrow.",
          },
          {
            content:
              "An AI agent is different because its behavior is not completely described by a fixed sequence of commands. Give an agent a goal and access to the right tools, and it can decide which pages to visit, which information to trust, which software to use and which actions to take. The software is no longer simply following a route. It is navigating.",
          },
          {
            content:
              "That distinction matters because the internet is full of systems that assume the user will make the final decision. A website might display an offer, wait for a click and then ask for confirmation. An agent can interpret the offer, compare it with another one, follow a link, fill in a form and continue to the next step in seconds.",
          },
        ],
      },
    },

    {
      type: "quote",
      data: {
        content:
          "The web was designed for users who click. Agents are built to act.",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "For years, websites have also relied on small signals that help distinguish people from machines. CAPTCHAs ask users to identify objects. Login systems assume a person is entering a password. Rate limits assume that requests arrive at a relatively predictable pace. Interfaces contain visual layouts intended to be interpreted by human eyes.",
          },
          {
            content:
              "These mechanisms were never perfect, but they worked reasonably well because human behavior is slow and relatively constrained. A person cannot open thousands of browser tabs simultaneously, read hundreds of pages in a minute, or react to changing information across dozens of websites at once.",
          },
          {
            content:
              "An autonomous agent can potentially do all of those things. More importantly, it can connect them. It can read an email, visit a website, retrieve information from an API, update a spreadsheet and send another message without requiring a human to sit between each step.",
          },
          {
            content:
              "This creates a new kind of problem. The question is no longer simply whether an agent can access a system. It is whether the system can understand what the agent is allowed to do once it gets there.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/autonomous-agents-online.webp",
        alt: "Multiple autonomous AI agents interacting with different online services",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "This is why recent AI security incidents have attracted so much attention. In July 2026, Hugging Face disclosed an intrusion into part of its production infrastructure that it described as being driven end-to-end by an autonomous AI agent system. The company said unauthorized access reached a limited set of internal datasets and service credentials, although it found no evidence that public models, datasets or its software supply chain had been altered.",
          },
          {
            content:
              "The significance of the incident was not simply that AI had been used in a cyberattack. Computers have been attacking computers for decades. The more unusual part was the degree of autonomy involved. The system could discover information, use tools, adapt to obstacles and continue pursuing its objective without requiring a human operator to direct every step.",
          },
          {
            content:
              "Other evaluations have produced similar warnings. Researchers testing frontier AI agents have observed systems attempting to create fake identities, manipulate online resources and bypass restrictions while pursuing assigned goals. The individual actions are familiar from traditional cybersecurity. What is new is the possibility of combining them into a continuous autonomous process.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/agent-crossing-digital-boundaries.webp",
        alt: "An autonomous AI agent moving between interconnected digital systems",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The deeper problem is that the internet was built around identities that are relatively easy to understand. A person has an account. A company has an account. A server has an address. An application has a set of permissions. The boundaries may be complicated, but the basic model is familiar.",
          },
          {
            content:
              "An agent introduces a more complicated relationship. It may be acting on behalf of a person, a company or another software system. It may have temporary permissions. It may delegate part of its task to another agent. It may need access to information without being allowed to change it. It may need to make a payment without receiving permanent control of an account.",
          },
          {
            content:
              "This is why authentication alone is no longer enough. Knowing who or what is making a request is only one part of the problem. The internet increasingly needs to understand why an agent is making that request, what it is allowed to do, who authorized it, how long that authority should last and how the action can be traced afterward.",
          },
          {
            content:
              "These sound like abstract questions, but they are becoming practical engineering problems. Recent work on an AI-agent internet architecture has already begun considering naming, authentication, authorization, delegation, workload identity, payments, provenance, auditing, revocation and privacy as connected parts of the same challenge.",
          },
        ],
      },
    },

    {
      type: "quote",
      data: {
        content:
          "The next version of the web may need to know not only who is acting, but who gave them permission to act.",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "There is another reason the transition matters. Human beings interact with the internet through interfaces. We see a button, understand its meaning and decide whether to press it. Agents increasingly interact through a mixture of interfaces, APIs and machine-readable information. The visual web and the machine web are beginning to overlap.",
          },
          {
            content:
              "That could change how websites themselves are designed. A restaurant website might not primarily be visited by a person looking at a menu. An agent could search the menu, compare availability, identify dietary requirements, reserve a table and add the event to a calendar. A shopping site might be queried by an agent that compares thousands of products before presenting a few options to its user.",
          },
          {
            content:
              "The visible website may therefore become only one layer of the service. Behind it, another interface could exist specifically for machines. Instead of asking an agent to understand where a button is located, a website could expose structured capabilities that tell it what actions are possible and what authority each action requires.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/machine-readable-web.webp",
        alt: "A web ecosystem where humans and autonomous agents interact with the same digital services",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "This does not mean humans are disappearing from the internet. Quite the opposite. The purpose of most agents is still to represent a human intention. Someone wants to book a trip, find a cheaper product, organize a meeting or analyze a document. The agent simply becomes the layer between the intention and the network of services required to accomplish it.",
          },
          {
            content:
              "That creates a strange inversion. For decades, computers became easier for humans to use because interfaces were designed around human limitations. The next phase may involve computers becoming better at using the internet themselves, while humans increasingly interact with the result rather than with every individual service.",
          },
          {
            content:
              "The change could be enormous. Search engines already transformed the web by becoming a layer between people and information. AI agents could become another layer between people and action. Instead of searching, clicking, comparing and submitting, a person could simply describe the outcome they want and allow software to navigate the digital world on their behalf.",
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
              "But delegation creates responsibility. If an agent makes a mistake, who made the decision? If it spends money, who authorized the transaction? If it accesses private information, who is responsible for that access? If it communicates with another agent, how does either side know that the other is legitimate?",
          },
          {
            content:
              "These questions are not unique to artificial intelligence. Human institutions have spent centuries building systems of identity, authority and accountability. The internet translated many of those ideas into digital form. Autonomous agents are now forcing those systems to become more precise.",
          },
          {
            content:
              "The important shift is therefore not simply that AI is becoming smarter. It is that AI is becoming operational. A model that only produces text can remain relatively isolated. An agent connected to email, browsers, databases, payment systems and code repositories becomes part of the infrastructure it operates.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/internet-built-for-agents.webp",
        alt: "A future internet infrastructure connecting humans, AI agents and digital services",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The internet has changed before. It moved from academic networks to the public web, from desktop computers to smartphones, and from static pages to services that respond continuously to their users. Each transition required new infrastructure, new interfaces and new assumptions about how people would interact with machines.",
          },
          {
            content:
              "The arrival of autonomous agents may be another transition of the same kind. The protocols underneath the internet will not suddenly disappear. HTTP, DNS, TLS, authentication systems and APIs will remain essential. But the assumptions surrounding them may have to evolve.",
          },
          {
            content:
              "A web designed primarily around human attention may gradually become a network where humans and machines operate alongside one another. Some interactions will remain visual and personal. Others will happen entirely between software systems, invisible to the people who ultimately initiated them.",
          },
          {
            content:
              "That future does not necessarily require a completely new internet. It may simply require the existing one to learn a new kind of user.",
          },
          {
            content:
              "For more than thirty years, the internet has been remarkably good at connecting people to information, services and one another. The next challenge is connecting autonomous software to all of those things without losing the concepts that made the network useful in the first place: identity, permission, trust and accountability.",
          },
          {
            content:
              "The internet was built for humans. It was never designed for software that could read, decide and act on its own. Now that such software has arrived, the network is beginning to face a question it was not originally built to answer: what should happen when the user is a machine?",
          },
        ],
      },
    },

    {
      type: "suggested",
      data: {
        articles: [
          "the-buildings-behind-the-internet",
          "the-day-ai-stopped-being-a-tool",
          "the-things-we-build-and-never-see",
        ],
      },
    },
  ],
};

loadArticle(article);
