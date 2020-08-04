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
headerNavLinks[0].textContent = "Services";
headerNavLinks[1].textContent = "Product";
headerNavLinks[2].textContent = "Vision";
headerNavLinks[3].textContent = "Features";
headerNavLinks[4].textContent = "About";
headerNavLinks[5].textContent = "Contact";

const headerImg = document.querySelector("header img");
headerImg.src = "./img/logo.png";

/*CTA Section*/

const cta = document.getElementById("cta-img");
cta.src= "./img/header-img.png";

const ctaText = document.querySelector(".cta:nth-of-type(1) h1");
ctaText.append("DOM is Awesome!");

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

/*Footer*/
header4[5].textContent = "Contact";

const contactText = document.querySelectorAll(".contact p");
contactText[0]="123 Way 456 Street <br> Somewhere, USA"
contactText[1]="1 (888) 888-8888"
contactText[2]="sales@greatidea.io"