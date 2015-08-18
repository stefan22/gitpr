<<<<<<< HEAD
githubUserSearch.controller('GitUserSearchController', [function() {
  var self = this;
  self.searchResult = {
    "items": [
      {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }


    ]
=======
githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');



  self.doSearch = function() {

    self.searchResult = searchResource.get(
      {
        q: self.searchTerm,
        'access_token': gitProfileToken
      }
    );


>>>>>>> master
  };


}]);
