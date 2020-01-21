# discourse-home-page

A Discourse plugin to set the home page of a Discourse instance.

### Settings

- `discourse_home_page_enabled`: set to true to enable the plugin

- `discourse_home_page_path`: path of the home page. For example `/t/12` will 
  set the home page to topic 12 and `/c/5` will set the home page to category 5.

### Warning

There is [this line](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/routes/forgot-password.js.es6#L13)
in Discourse which might cause an issue, but I couldn't get my Discourse 
instance to run through it. Please let me know if you can.