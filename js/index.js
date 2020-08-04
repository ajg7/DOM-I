const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

/*Header*/

const headerNavLinks = document.querySelectorAll("header nav a");
const nav = document.querySelector("header nav")

headerNavLinks[0].textContent = "Services";
headerNavLinks[1].textContent = "Product";
headerNavLinks[2].textContent = "Vision";
headerNavLinks[3].textContent = "Features";
headerNavLinks[4].textContent = "About";
headerNavLinks[5].textContent = "Contact";

headerNavLinks.forEach((ele) => {
  ele.style.color = "green";
  ele.style.fontWeight = "bold";
});

//appendChild addition
const a = document.createElement("a");
const newLink = nav.appendChild(a);
newLink.textContent = "Models"
newLink.href = "#";
newLink.style.color = "green";
newLink.style.fontWeight = "bold";

//prependChild addition
const future = document.createElement("a");
future.href= "#";
future.style.color = "green";
future.style.fontWeight = "bold";
future.textContent= "Future";
nav.prepend(future);



const headerImg = document.getElementById("logo-img");
headerImg.src = "./img/logo.png";

/*CTA Section*/

const cta = document.getElementById("cta-img");
cta.src= "./img/header-img.png";

const ctaText = document.querySelector(".cta:nth-of-type(1) h1");
const lineBreak1 = document.createElement("br");
const lineBreak2 = document.createElement("br");


ctaText.append("DOM");
ctaText.appendChild(lineBreak1);
ctaText.append("is")
ctaText.appendChild(lineBreak2);
ctaText.append("Awesome!")
console.log(ctaText);

const ctaButton = document.querySelector(".cta:nth-of-type(1) button")
ctaButton.append("Get Started")

/*Main Content*/

const header4 = document.getElementsByTagName("h4");
header4[0].textContent = "Features";
header4[1].textContent = "About";
header4[2].textContent = "Services";
header4[3].textContent = "Product";
header4[4].textContent = "Vision";

const mainContentImg = document.querySelector(".main-content img");
mainContentImg.src="./img/mid-page-accent.jpg";

const featuresP = document.querySelector(".main-content .top-content .text-content:nth-child(1) p");
featuresP.append("Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.")

const aboutP = document.querySelector(".main-content .top-content .text-content:nth-child(2) p");
aboutP.append("About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.")

const serviceP = document.querySelector(".main-content .bottom-content .text-content:nth-child(1) p")
serviceP.append("Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.")

const productP = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) p")
productP.append("Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.")

const visionP = document.querySelector(".main-content .bottom-content .text-content:nth-child(3) p")
visionP.append("Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.")

/*Contact*/
header4[5].textContent = "Contact";

const contactText = document.querySelectorAll(".contact p");
contactText[0].innerText="123 Way 456 Street \n Somewhere, USA";
contactText[1].textContent="1 (888) 888-8888"
contactText[2].textContent="sales@greatidea.io"

/*Footer*/

const copyRightInfo = document.querySelector("footer p");
copyRightInfo.append("Copyright Great Idea! 2018")