#gitpr

GitHub Profile app purely in JavaScript that grabs data from the Github API in order to display a specified users avatar, number of followers and number of repos.

The project will involve using JavaScript to consume data available from third parties over the network (e.g. GitHub API data accessed via Ajax) and using more advanced JavaScript Model View Controller (MVC) frameworks such as AngularJS.

The project will need to be deployed to Heroku, and the choice of back-end server is up to you: Node for the brave, Ruby for the stable.

Here's a wireframe of one possible design:

GitHub profile viewer

To install a package into your project, for instance if you wanted to use a package called hapi in your application, you would use npm install hapi --save For example, if you wanted to use the test framework 'jasmine-node', you would enter npm install jasmine-node --save-dev

Bower is a package manager, similar to :pill: npm but optimized for the front-end. It can be used in conjunction with Sinatra, Node or Rails, to manage your front-end dependencies.

it is important for every member of your team to run the command npm install from the top level directory of your project - this will then install all the packages as described in the package.json, in a similar way to running bundle in a ruby project.

* npm install --save-dev bower  .....to install node packages
* bower install jquery --save   .....to install bower packages
