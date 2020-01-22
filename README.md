# discourse-home-page

A Discourse plugin to set the home page of your Discourse instance.

This plugin is especially useful when used with 
[discpage](https://github.com/sylque/discpage).

### Settings

- `discourse_home_page_enabled`: set to true to enable the plugin

- `discourse_home_page_path`: path of the home page. For example `/t/12` will
  set the home page to topic 12 and `/c/5` will set the home page to category 5.

### Drawback

When the home page points to a topic, the url in the address bar is
changed to the topic url.

Example: if your Discourse url is
`www.mydiscourse.org` and you set the home page to `/t/mytopic/12`, then any
user coming to `www.mydiscourse.org` will see `www.mydiscourse.org/t/mytopic/12`
in the address bar.

### Warning

There is [this line](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/routes/forgot-password.js.es6#L13)
in Discourse which might cause an issue, but I couldn't get my Discourse
instance to run through it. Please let me know if you can.
