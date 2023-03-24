// When the page loads, highlight the first module in the navigation menu and display its content
window.onload = function() {
  const firstModule = document.querySelector('nav li:first-of-type a');
  firstModule.classList.add('active');
  const firstModuleContent = document.querySelector('main section:first-of-type');
  firstModuleContent.style.display = 'block';
}

// When a module link in the navigation menu is clicked, highlight it and display its content
const moduleLinks = document.querySelectorAll('nav a');
moduleLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    // Remove the "active" class from all links in the navigation menu
    moduleLinks.forEach(link => link.classList.remove('active'));
    // Add the "active" class to the clicked link in the navigation menu
    link.classList.add('active');
    // Hide all content sections in the main section
    const contentSections = document.querySelectorAll('main section');
    contentSections.forEach(section => section.style.display = 'none');
    // Display the content section corresponding to the clicked link in the navigation menu
    const targetSectionId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);
    targetSection.style.display = 'block';
  });
});

