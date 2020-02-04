function initNav() {
  $("a").click(function(e) {
    var buttonId = e.currentTarget.id;
    var currentPage = PROVIDER.getCurrentPageName();
    if (buttonId != currentPage) {
      loadContent(buttonId);
    }
  });
}

function loadContent(pageName) {
  // console.log("loadContent: ", pageName);
  var pageContent = PROVIDER.getPageContent(pageName);
  $(".content").html(pageContent);

  initNav();
}

function populateFooter() {
  var footer = PROVIDER.getFooter();
  $("footer").append(footer.content);

  loadContent("home");
}

function populateNav() {
  var nav = PROVIDER.getMainNav();
  $.each(nav, function(idx, link) {
    $("nav").append(
      `<a class="link" href="#" id="${link.path}">${link.linkName}</a>`
    );
  });
  $("nav").append(
    `<div class="link social_links">
      <i class="fa fa-facebook-square"></i>
      <i class="fa fa-instagram"></i>
      <i class="fa fa-twitter-square"></i>
    </div>`
  );

  populateFooter();
}

function dataIsLoaded() {
  populateNav();
}

$(document).ready(function() {
  PROVIDER.getData(dataIsLoaded);
});
