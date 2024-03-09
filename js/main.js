document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelectorAll('.materialboxed');
    var galleryInstances = M.Materialbox.init(gallery);

    var sidenav = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenav);
  });