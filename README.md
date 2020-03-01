# discourse-home-page

This Discourse plugin allows to set any existing Discourse page (a topic, 
a category, etc.) as the home page of your Discourse instance.

This plugin is especially useful when used with
[DiscPage](https://github.com/sylque/discpage).

## Installation

Follow 
[those directions](https://meta.discourse.org/t/install-plugins-in-discourse/19157) 
using `https://github.com/sylque/discourse-home-page.git` as the repository URL.

## Settings

- `discourse_home_page_enabled`: switch the plugin on/off

- `discourse_home_page_path`: path of the home page. For example `/t/topic/12` will
  set the home page to topic 12 and `/c/5` will set the home page to category 5.

  You can support **localized home pages** by adding more values to
  `discourse_home_page_path`. For example, the following will redirect
  French-speaking users (as detected by Discourse) to topic 13,
  German-speaking users to topic 14 and all other users to topic 12.

  ```
    /t/topic/12
    fr,/t/topic/13
    de,/t/topic/14
  ```

## Limitations

### Address Bar

When the home page points to a topic, the url in the address bar is
changed to the topic url.

Example: if your Discourse url is
`www.mydiscourse.org` and you set the home page to be `/t/mytopic/12`, then any
user coming to `www.mydiscourse.org` will see `www.mydiscourse.org/t/mytopic/12`
in the address bar.

### Crawlers

As far as I can see, Facebook and Twitter crawlers (at least) do not see the
home page redirection and perform their analysis on the default Discourse home
page.

## Warning

This plugin ia based on a hack. There is no certainty it will keep working in
future versions of Discourse, even though I'll do my best to maintain it.

There is 
[this line](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/routes/forgot-password.js.es6#L13)
in Discourse which might cause an issue, but I couldn't get my Discourse
instance to run through it. Please let me know if you can.
