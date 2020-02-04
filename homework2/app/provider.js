//// this file acts as a sort of Model for this webpage ////

//create self-executing function named PROVIDER
var PROVIDER = (function() {
  //create a var to store the data later
  var _allData = {};
  var _currentPage = "";

  //function to get data from json file
  var _getData = function(callback) {
    $.getJSON("data/data.json", function(data) {
      //this is when it is complete
      // console.log("success: ", data);
    })
      .fail(function(error) {
        //   console.log("error: ", error);
      })
      .done(function(data) {
        // console.log("done: ", data.MainNav);
        //store data in _allDatat var
        _allData = data;
        callback();
        // populateNav(data.MainNav);
      });
  };

  var _getMainNav = function() {
    return _allData.MainNav;
  };

  var _getFooter = function() {
    return _allData.Footer;
  };

  var _getPageContent = function(nameOfPage) {
    //create variable to store content
    var content = "";
    //loop through to get content with name mathing active page name
    $.each(_allData.Pages, function(idx, page) {
      if (nameOfPage == page.pageName) {
        content = page.content;
        _currentPage = page.pageName;
      }
    });
    return content;
  };

  var _getCurrentPageName = function() {
    return _currentPage;
  };

  return {
    getData: _getData,
    getMainNav: _getMainNav,
    getPageContent: _getPageContent,
    getCurrentPageName: _getCurrentPageName,
    getFooter: _getFooter
  };
})();
