const events = [
  {
    title: "Seminar on Imposter Syndrome",
    image: {
      url: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Speaking in a seminar",
    },
    description:
      "Practical, immediately usable steps to interrupt needless — and costly — self-doubt in yourself and those around you.",
    date: "2021-12-15",
    category: "Education",
    info: "Learn from an Internationally-Recognized Expert, Speaker, and Award-Winning Author Dr. Valerie Young.Valerie has presented her informative and engaging program to over 100,000 people around the world including professionals, managers, and executives at these and other companies and firms.",
    landingpage: false,
  },
  {
    title: "Boro - The Art of Necesity",
    image: {
      url: "https://images.unsplash.com/photo-1561490497-43bc900ac2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Art Exhibition",
    },
    description:
      "Ripped, worn, patched and lovingly mended. Boro textiles tell us about the art of surviving on scarce resources in a harsh place.",
    date: "2022-01-20",
    category: "Exhibition",
    info: "For a long time boro was considered a shameful reminder of poorer times in Japan. A century later, everything has changed, and boro objects are now copied by luxury fashion brands and showcased as art in international art galleries. As the first museum in Europe, the Museum of Far Eastern Antiquities is showing a world unique collection of boro objects loaned from the Amuse Museum in Tokyo. The collection has previously been exhibited in New York, Beijing and Sydney",
    landingpage: false,
  },
  {
    title: "Soul Therapy™ Introduction - Awakening Your Authentic Self",
    image: {
      url: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Meditating on beach",
    },
    description:
      "Join Licensed Soul Therapist Milla Andersson for a three hour gathering of women exploring how to connect to your true authentic expression.",
    date: "2021-12-19",
    category: "Workshop",
    info: "Join Licensed Soul Therapist Milla Andersson for a three hour in-person gathering of women exploring how to connect to your true authentic expression. The benefits are astounding! Sharing your core truth and living your purpose is deeply pleasurable and incredibly satisfying. Most women are blocked from accessing her core power, her true awareness of self. Soul Therapy is an evolutionary embodiment of exploring your humanness from the SOUL level.",
    landingpage: true,
  },
  {
    title: "2021 Brands in Review and After Work Drinks",
    image: {
      url: "https://images.unsplash.com/photo-1523379882969-04477e5c1e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "People",
    },
    description:
      "Potter Clarkson will be presenting a roundup of this year’s key intellectual property developments, which will be followed by an after work",
    date: "2021-12-10",
    category: "Education, after work",
    info: "Join Potter Clarkson for this year's key intellectual property developments. With a focus on trade marks and copyright, the aim of the seminar is to provide guidance for SMEs in key developments to help direct their branding strategies.",
    landingpage: false,
  },
  {
    title: "Tech Career Fair: Exclusive Tech Hiring Event",
    image: {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Code on computer",
    },
    description:
      "Tech Career Fair focus on helping companies achieve their diversity and inclusivity initiative with more diverse non-traditional candidates",
    date: "2021-02-01",
    category: "Work shop",
    info: "We will be hosting a Tech Career Fair with our hiring partners from fast growing startups and Fortune 500 companies in technology in the US/Canada.  There will be a focus on helping companies achieve their diversity and inclusivity initiative with more diverse candidates to their talent pool.",
    landingpage: true,
  },
  {
    title: "A lil Razzle Dazzle",
    image: {
      url: "https://images.unsplash.com/photo-1636806663015-088d3d1ce2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      alt: "2022",
    },
    description:
      "Come celebrate the new year in the style of 1920's flapper razzle dazzle!",
    date: "2020-12-31",
    category: "Entertainment",
    info: "Step back in time as you immerse yourself into a night of rip-roaring revelry at our Twenties themed New Year’s Eve party. Delve into a time of classic sophistication with an element fun, as you experience the era of flapper girls & clean shaven 1920s suited men. Welcome to the roaring Twenties a glamorous event for everyone to enjoy this festive period.",
    landingpage: true,
  },

  {
    title: "Cute Cats!",
    image: {
      url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Butterfly on cat's nose",
    },
    description: "Cuddly kittens and cats",
    date: "2021-12-15",
    category: "Entertainment",
    info: "Cats are wonderful! So cute, pet, cuddle and adopt beautiful cats! Let's find these cats a new home!",
    landingpage: true,
  },
  {
    title: "Cute dogs!",
    image: {
      url: "https://images.unsplash.com/photo-1529088363398-8efc64a0eb95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80",
      alt: "Cute dog",
    },
    description: "Dogs for dog lovers",
    date: "2021-12-15",
    category: "Entertainment",
    info: "Come meet these friedly and beautiful dogs who are looking for a new home!",
    landingpage: true,
  },
  {
    title: "Wall-e, and what a animated robot can tell us",
    image: {
      url: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Wall-e",
    },
    description: "WALL-E follows a solitary robot on a future, uninhabitable, deserted Earth, left to clean up garbage. ",
    date: "2021-12-15",
    category: "Education",
    info: "In the 29th century, Earth has become a garbage-strewn wasteland due to rampant consumerism and corporate greed; seven centuries earlier, the megacorporation Buy-n-Large (BnL) evacuated humanity to space on giant starliners. Of all the trash compacting robots left by BnL to clean up, only one remains operational, Waste Allocation Load-Lifter: Earth-Class (WALL-E). ",
    landingpage: true,
  },
  {
    title: "The Horror of Clowns",
    image: {
      url: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80",
      alt: "Scary Clown",      
    },
    description: "Coulrophobia is no laughing matter. This irrational fear of clowns can cause panic and nausea. ",
    date: "2021-12-15",
    category: "Education",
    info: "Although it’s a rare phobia, many people find clowns creepy if not downright scary. Why? The answer lies partly in the prevalence of evil clowns in popular culture—think Pennywise in Stephen King’s It (1986). However, according to researchers, there are actual psychological reasons why we fear clowns.",
    landingpage: false,
  },
];

function renderEvents(event) {
  const eventWrapper = document.createElement("div");
  eventWrapper.setAttribute("class", "eventWrapper");

  const eventTitle = document.createElement("h3");
  eventTitle.innerHTML = event.title;

  const eventImage = document.createElement("img");
  eventImage.src = event.image.url;
  eventImage.alt = event.image.alt;

  const eventDescription = document.createElement("h4");
  eventDescription.innerHTML = event.description;

  const eventDate = document.createElement("p");
  eventDate.innerHTML = `When: ${event.date}`;

  const eventCategory = document.createElement("p");
  eventCategory.innerHTML = `Type of event: ${event.category}`;

  const eventInfoLink = document.createElement("a");
  eventInfoLink.setAttribute("class", "open-modal");
  eventInfoLink.innerHTML = "Click for more info";
  eventInfoLink.addEventListener("click", () => {
    modalHeader.innerHTML = event.title;
    modalSubHeading.innerHTML = event.description;
    modalParagraph.innerHTML = event.info;
  });

  const gridLinkDiv = document.createElement("div");
  gridLinkDiv.setAttribute('class', 'gridLinkDiv')

  const eventInfo = document.createElement("p");
  eventInfo.innerHTML = event.info;

  const eventPageLink = document.createElement("a");
  eventPageLink.setAttribute('class', 'detailPageLink')
  eventPageLink.href = "/detailpage.html";
  eventPageLink.innerHTML = "Go to event page";

  gridWrapper.append(eventWrapper);

  eventWrapper.appendChild(eventImage);
  eventWrapper.appendChild(eventTitle);
  eventWrapper.appendChild(eventDescription);
  eventWrapper.appendChild(eventDate);
  eventWrapper.appendChild(eventCategory);

  eventWrapper.appendChild(gridLinkDiv);
  gridLinkDiv.appendChild(eventInfoLink);

  gridLinkDiv.appendChild(eventPageLink);
}

const gridWrapper = document.getElementById("grid-wrapper");
const modalHeader = document.getElementById("modal-heading");
const modalSubHeading = document.getElementById("modal-subheading");
const modalParagraph = document.getElementById("modal-paragraph");

const landingPageEvents = events.filter(function (event) {
  if (document.URL.includes("landingpage.html")) {
    return event.landingpage == true;
  }
  return event;
});

landingPageEvents.forEach((event) => {
  renderEvents(event);
});

/* if (document.URL.includes('allevents.html')) {
  events.forEach(event => {
    renderEvents(event)
  })
} */

/*

events.forEach((event) => {
  console.log(event.title);
  renderEvents(event)

  const eventWrapper = document.createElement("div");
  eventWrapper.setAttribute("class", "eventWrapper");

  const eventTitle = document.createElement("h3");
  eventTitle.innerHTML = event.title;

  const eventImage = document.createElement("img");
  eventImage.src = event.image.url;
  eventImage.alt = event.image.alt;

  const eventDescription = document.createElement("p");
  eventDescription.innerHTML = event.description;

  const eventDate = document.createElement("p");
  eventDate.innerHTML = event.date;

  const eventCategory = document.createElement("p");
  eventCategory.innerHTML = event.category;

  const eventInfoLink = document.createElement('a')
  eventInfoLink.innerHTML = 'Click for more info'

  const eventPageLink = document.createElement("button");
  eventPageLink.innerHTML = 'Go to event page';

  gridWrapper.append(eventWrapper);

  eventWrapper.appendChild(eventImage);
  eventWrapper.appendChild(eventTitle);
  eventWrapper.appendChild(eventDescription);
  eventWrapper.appendChild(eventDate);
  eventWrapper.appendChild(eventCategory);
  eventWrapper.appendChild(eventInfoLink)
  eventWrapper.appendChild(eventPageLink)


});
*/
