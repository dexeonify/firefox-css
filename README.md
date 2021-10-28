# firefox-css

Some `userChrome.css` and `userContent.css` configurations to customise Firefox to my liking. 😄

None of the changes are substanstial, since I'm probably one of the few who actually likes Proton. 🤔
I try to keep everything as close to the original, so no fancy color schemes, Proton-fix, compact mode or `userChrome.js`.
Maybe if I get bored of it, I will probably be interested in some heavy theming ;)

I'm currently daily-driving *Firefox Nightly*, so naturally I will try to update as soon as possible if Nightly breaks anything.

## Usage

Here's a quick roundown on the basics of setting up Firefox CSS:
1. Go to `about:config`, and enable `toolkit.legacyUserProfileCustomizations.stylesheets` (so userChrome.css works) 
   and `layout.css.backdrop-filter.enabled` (important for URL bar blur).

2. Go to `about:support` and click Open Folder at "Profile folder".

3. Create a new folder named `chrome`, download this repo (or `git clone`)
   and just copy the downloaded files into the `chrome` folder you just created.

If you want a proper getting started guide, you should check out
[the wiki in r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials).

## Features

### URL bar blur
Modified from [Firefox-Mod-Blur](https://github.com/datguypiko/Firefox-Mod-Blur) (which is derived from
[this reddit post](https://www.reddit.com/r/FirefoxCSS/comments/ddi4dc/testing_the_backdropfilter_in_the_url_dropdown/)).
Removed all other customisations, leaving only the relevant CSS for the url bar.

![Blurred URL Bar](screenshots/Blurred%20URL%20Bar.png)

### Thin scrollbar
#### userChrome.css
Taken from [MrOtherGuy/firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/minimal_in-UI_scrollbars.css).
Changes various **in-UI** scrollbars to be slim and more subtle, such as the Library window and sidebar.

![Thin scrollbar (UI)](screenshots/Thin%20Scrollbar%20(UI).png)

#### userContent.css
Also taken from [MrOtherGuy/firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/content/css_scrollbar_width_color.css).
Changes **websites'** scrollbar to be slim. I've decided not to specify a global colour for the scrollbar, 
and instead leave the choice to the website owner ;).
Though I've also themed the scrollbar for new Reddit because it doesn't have a native dark themed scrollbar.

![Thin scrollbar (Websites)](screenshots/Thin%20Scrollbar%20(Websites).png)

![Reddit dark-themed scrollbar](screenshots/Reddit%20Scrollbar.png)

### Cleaner context menu
Credit to [stonecrusher/simpleMenuWizard](https://github.com/stonecrusher/simpleMenuWizard) so I can find the entries easily. 😄

- Removes **Send tab to device** and **Share** entries in tab context menu

  ![Tab context menu (Before)](screenshots/Tab%20Context%20Menu%20(Before).png)
  ![Tab context menu (After)](screenshots/Tab%20Context%20Menu%20(After).png)

- Removes **Email Image...**, **Send Link to Device** and **Set As Desktop Background...** entries in context menu

  ![Context menu (Before)](screenshots/Context%20Menu%20(Before).png)
  ![Context menu (After)](screenshots/Context%20Menu%20(After).png)

- You can also remove Pocket by disabling `extensions.pocket.enabled` in `about:config`

### Dynamic tab bar
Autohide tabs bar when Sidebery is active, *with animation*.

[Sidebery's wiki](https://github.com/mbnuqw/sidebery/wiki/Firefox-Styles-Snippets-(via-userChrome.css)#dynamic-native-tabs)
entry on this is outdated, while the snippets provided in [this discussion](https://github.com/mbnuqw/sidebery/discussions/406)
have some glitches if the window is resized too small.

![Overlapping Windows control](screenshots/Overlapping%20Windows%20Control.png)

So I decided to use and modify MrOtherGuy's [autohide_tabstoolbar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/autohide_tabstoolbar.css)
and [window_control_placeholder_support.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/window_control_placeholder_support.css)
(which are more comprehensive) to work with Sidebery, then add some animation and voilà!

![Dynamic tabs bar](screenshots/Dynamic%20Sidebery.gif)

It's probably very "bloated" to have 2 css files just for this but hey, it's complete.
Though, I did tried to leave only the necessary CSS rules in both files.

Anyways, to set this up you need to set the window preface value in Sidebery settings. 

From the wiki: `Sidebery settings` > `Help` > `Preface value`

**Note:** The preface value can be anything, but you have to change it in the CSS as well.
          In my CSS, it's "Sidebery".
