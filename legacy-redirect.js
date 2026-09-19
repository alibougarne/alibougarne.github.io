// Addresses used to look like /#/projects. Anyone with an old link (or an old bookmark) is sent to /projects.
if (location.hash.indexOf('#/') === 0) location.replace(location.hash.slice(1));
