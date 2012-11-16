thoughtbot.com
==============

This is the source of thoughtbot.com, which is a hybrid Rails/jekyll site.

We use jekyll to generate files to `public/`, which then gets served by Rails.

We also use Rails to get real 301 redirects instead of the `<meta>` redirects in
jekyll.

We are using the Rails asset pipeline.

Editing
-------

* Edit files in the `jekyll/` directory. Don't edit files in "public/" because
  those are generated from the "jekyll/" directory by running "jekyll".
* Styles for the main site are in `app/assets/stylesheets`
* Run `bundle exec jekyll` to generate files to the `public/` directory
* `git commit` the additions and push

Run locally
-----------

Run the regular rails commands:

    $ rake db:create
    $ rake db:migrate
    $ bundle

Run the server:

    # in one terminal
    $ jekyll --auto
    # in another terminal
    $ rails s

Then go to [http://localhost:3000](http://localhost:3000)

Files will be auto-regenerated.  If your changes aren't showing up correctly,
check for parse errors by running:

    $ jekyll --no-auto

The Blog
--------

Styles are in `app/assets/stylesheets/robots`.

Images are in `app/assets/images/robots`.

It will auto-regenerate because it's using the asset pipeline.

Deploying
---------

Add a `heroku` remote:

    git remote add heroku git@heroku.com:thoughtbotdotcom.git

Push:

    git push heroku master
