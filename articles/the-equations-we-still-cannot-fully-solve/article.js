const article = {
  title: "The Equations We Still Cannot Fully Solve",
  subtitle:
    "How a handful of equations came to describe water, air, turbulence and one of mathematics' most stubborn unanswered questions",
  category: "Science",

  sections: [
    {
      type: "hero",
      data: {
        title: "The Equations We Still Cannot Fully Solve",
        subtitle:
          "How a handful of equations came to describe water, air, turbulence and one of mathematics' most stubborn unanswered questions",
        image: "./img/fluid-turbulence-around-aircraft-wing.webp",
        alt: "Turbulent air flowing around the wing of a modern aircraft",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "Watch a river bend around a rock and the water seems almost effortless. Hold your hand outside a moving car and the air becomes something you can suddenly feel. Look at smoke rising from a candle and a smooth column can, within seconds, break into twisting patterns that seem to have no obvious order. These are very different situations, but underneath them is the same physical question: how does a fluid move?",
            bold: true,
          },
          {
            content:
              "For water and air, one of the most important answers is written in a set of equations known as the Navier-Stokes equations. They describe how the velocity and pressure of a fluid change through space and time, taking into account effects such as viscosity and external forces. In principle, they give us a mathematical language for things that are so ordinary we rarely stop to notice them.",
          },
          {
            content:
              "There is something almost strange about that achievement. The equations have been part of modern physics and engineering for well over a century, and they are used to understand phenomena ranging from airflow to water movement. Yet mathematics still cannot prove that the three-dimensional equations always behave as nicely as we would like them to. The same equations that help describe a gentle stream also sit at the center of one of the deepest unsolved problems in mathematics.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/water-flowing-around-rock-in-river.webp",
        alt: "Water flowing around a rock in a natural river",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The story begins with something much more familiar than advanced mathematics: Newton's laws of motion. A fluid may look continuous, but it can still be treated as matter whose motion responds to forces. Pressure pushes. Viscosity resists deformation. External forces such as gravity act on the fluid. The Navier-Stokes equations bring these effects together into a mathematical description of motion.",
          },
          {
            content:
              "That description is powerful because fluids are everywhere. The atmosphere is a fluid. Oceans are fluids. Blood moving through vessels behaves as a fluid. Fuel, oil and many industrial materials can be studied using fluid mechanics. The same basic framework can therefore connect an aircraft wing to a pipe, a weather system to a river and a spinning vortex to a much smaller flow inside an engineered device.",
          },
          {
            content:
              "But there is a difference between writing down an equation and being able to understand every solution it can produce. The equations are nonlinear, which means that the different parts of the flow can influence one another in ways that do not simply add together. A small change in one region can affect another. Smooth motion can become complicated. Simple patterns can interact and create structures that are difficult to predict in detail.",
          },
        ],
      },
    },

    {
      type: "quote",
      data: {
        content:
          "The equations are known. The difficulty is proving what their solutions can become.",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "This is where turbulence enters the story. A fluid moving smoothly has a recognizable structure. A turbulent fluid does not stop following the laws of physics, but its motion can become extraordinarily complicated. Swirls form inside larger swirls. Flow separates from surfaces. Energy moves between different scales. The patterns change continuously while still being governed by the same underlying equations.",
          },
          {
            content:
              "Engineers can simulate turbulence. Physicists can measure it. Computers can produce remarkably detailed approximations of turbulent flows. But simulation is not the same thing as a mathematical proof. A numerical calculation can tell us what happens under a particular set of assumptions and within a particular resolution. It does not establish that every mathematically valid initial condition will remain well behaved for all future time.",
          },
          {
            content:
              "That distinction is at the heart of the Navier-Stokes problem. For three-dimensional incompressible flow, mathematicians have not proved in full generality whether smooth initial conditions must always produce smooth solutions, or whether a solution could develop a singularity in finite time. The question is not whether real rivers suddenly become infinite. It is whether the mathematical equations themselves can guarantee the regular behavior we expect from physical fluids.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/smoke-forming-turbulent-air-vortices.webp",
        alt: "Smoke breaking into turbulent vortices as it rises through the air",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "The difficulty becomes easier to appreciate when we stop thinking of a fluid as a single moving object. At every point in space, the fluid has a velocity and a pressure. Those quantities change with position and time, and the changes interact with one another. Instead of tracking one particle following one path, the mathematics describes an entire field of motion.",
          },
          {
            content:
              "Imagine trying to predict the shape of every current inside a river while the river is flowing around rocks, meeting other currents and responding to its own internal friction. Now imagine doing this not just at one instant, but continuously into the future. The challenge is not simply having enough computational power. It is understanding the structure of the equations well enough to prove what must happen.",
          },
          {
            content:
              "This is why the Navier-Stokes equations occupy such an unusual position. They are not obscure equations describing an exotic corner of science. They govern phenomena that surround us constantly. We can fly through fluids, swim through them, pump them through machines and watch them move in a glass. Their practical usefulness is enormous, while their deepest mathematical behavior remains partly beyond our grasp.",
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
              "The problem was formalized as one of the seven Millennium Prize Problems announced by the Clay Mathematics Institute in 2000. A correct proof of the required existence and smoothness statement carries a one million dollar prize. The formulation asks, in simplified terms, whether smooth solutions exist for all time or whether a breakdown can occur.",
          },
          {
            content:
              "That wording can make the problem sound as if mathematicians simply need to find a clever trick. In reality, the challenge is much deeper. The equations combine geometry, analysis, physics and nonlinear dynamics. Results are known in important special cases, and mathematicians have developed many ways to study the equations, but the full three-dimensional problem remains open.",
          },
          {
            content:
              "The fact that the problem is open should not be confused with ignorance. We know an enormous amount about Navier-Stokes equations. There are rigorous results, powerful approximations, numerical methods and theories that explain particular kinds of flow. The missing piece is a global mathematical guarantee covering the general three-dimensional case posed by the problem.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/computer-simulation-of-turbulent-fluid-flow.webp",
        alt: "Computer simulation showing complex turbulent fluid flow patterns",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "There is an important philosophical detail hidden inside this mathematical problem. We often imagine that understanding nature means finding the right equation. Navier-Stokes suggests that this is only the beginning. Once an equation has been written down, we still need to understand what its solutions mean, whether they exist, whether they remain stable and what kinds of structures can emerge from them.",
          },
          {
            content:
              "This is particularly revealing in the case of turbulence. A turbulent flow may look chaotic, but chaos in everyday language is not the same thing as mathematical unpredictability. Turbulence can contain structure, patterns and statistical regularities even when the exact motion is extraordinarily difficult to follow. The challenge is to understand how those structures emerge from equations that are, at their core, compact enough to write down on a page.",
          },
          {
            content:
              "It is also why Navier-Stokes matters beyond the question of a prize. Better mathematical understanding can deepen our knowledge of fluid behavior itself. It can clarify where existing models are reliable, how different scales interact and why apparently simple physical systems can generate such complicated motion.",
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
              "There is something fitting about the fact that water and air should lead to such a difficult problem. Fluids are defined by movement. They spread, deform, mix and reorganize themselves continuously. A solid object can often be described by its shape. A fluid has to be understood through what it is doing.",
          },
          {
            content:
              "That may be why a river is such a useful place to begin thinking about the equations. From a distance, the water seems simple. Up close, every patch of its surface contains countless small movements. A rock changes the flow. A bend changes the pressure. A faster current meets a slower one. Tiny disturbances can grow into visible structures. What looks like one thing is actually a vast collection of interacting motions.",
          },
          {
            content:
              "The Navier-Stokes equations attempt to capture that entire choreography. They do not make the river less complicated. They give us a way to describe its complexity. And more than a century after the equations emerged, that description has taken us remarkably far without taking us all the way to the end.",
          },
        ],
      },
    },

    {
      type: "image",
      data: {
        image: "./img/airflow-over-wing-visible-as-fluid-streamlines.webp",
        alt: "Airflow moving over an aircraft wing represented by visible fluid streamlines",
      },
    },

    {
      type: "text",
      data: {
        paragraphs: [
          {
            content:
              "Perhaps that is the most interesting thing about Navier-Stokes. The equations are not a mysterious code hidden somewhere in a laboratory. They are written in the movement of things we encounter every day. The wind against a window, water leaving a tap, smoke curling toward a ceiling and air passing over an aircraft are all variations on the same fundamental problem.",
          },
          {
            content:
              "We can describe these motions with extraordinary precision in many practical situations. We can build aircraft, model weather, design machines and simulate flows without first solving the Millennium Prize Problem. Yet there remains a boundary between what mathematics can calculate in particular circumstances and what it can prove in complete generality.",
          },
          {
            content:
              "That boundary is what makes the problem so compelling. We are not looking at a mystery because the equations are unknown. We are looking at a mystery because we know the equations remarkably well and still do not completely understand what they are capable of doing.",
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
              "The next time water moves around a stone, it is easy to see only water. But inside that ordinary movement is a problem that has occupied mathematicians for generations. The equations are compact. The physical world they describe is not.",
          },
          {
            content:
              "Perhaps this is what makes the Navier-Stokes problem feel less like an abstract puzzle and more like a reminder. Nature does not become simple merely because we have found a language capable of describing it. Sometimes the most familiar things remain mysterious precisely because we have learned how to ask better questions about them.",
          },
        ],
      },
    },

    {
      type: "suggested",
      data: {
        articles: [
          "the-universe-is-mostly-made-of-something-we-cannot-see",
          "the-strange-shape-at-the-bottom-of-saturn",
          "the-things-we-build-and-never-see",
        ],
      },
    },
  ],
};

loadArticle(article);
