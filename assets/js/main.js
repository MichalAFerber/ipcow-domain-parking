// Get the current domain
const domain = window.location.hostname;

// Set the title
document.title = `Domain parking at IPCow.com [${domain}]`;

// Set the H1 text
document.getElementById('domain-name').textContent = domain;

// Base Tally embed URL with your existing parameters
const baseSrc = "https://tally.so/embed/VLQbLa?hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1";

// Add the utm_campaign parameter with the domain name (URL-encoded for safety)
const utmCampaign = encodeURIComponent(domain);
const fullSrc = `${baseSrc}&utm_campaign=${utmCampaign}`;

// Set the iframe src
document.getElementById('tally-iframe').setAttribute('data-tally-src', fullSrc);
document.getElementById('tally-iframe').src = fullSrc;

// Load Tally embeds (in case it's needed)
if (typeof Tally !== 'undefined') {
    Tally.loadEmbeds();
}

// Set the footer
document.getElementById('footer-copyright').innerHTML = `&copy; ${new Date().getFullYear()} | Created with <i class="fa-solid fa-heart" style="color: red;"></i> by <a href="https://michalferber.com" target="_blank">Michal Ferber, aka TechGuyWithABeard</a>`;