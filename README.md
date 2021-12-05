# firefox-css

Some `userChrome.css` and `userContent.css` configurations
to customise Firefox to my liking. 😄

None of the changes are substanstial,
since I'm probably one of the few who actually likes Proton. 🤔
I try to keep everything as close to the original,
so no fancy color schemes, Proton-fix, compact mode or `userChrome.js`.

Maybe if I get bored of it, I will probably
be interested in some heavy theming ;)

I'm currently daily-driving *Firefox Nightly*, so naturally I will try to
update as soon as possible if Nightly breaks anything.

## Usage

Here's a quick roundown on the basics of setting up Firefox CSS:

1. Go to `about:config`, and enable `toolkit.legacyUserProfileCustomizations.stylesheets`
   and `layout.css.backdrop-filter.enabled`.

2. Go to `about:support` and click **Open Folder** at "Profile folder".

3. Create a new folder named `chrome`, download this repo (or `git clone`) and
   just copy the downloaded files into the `chrome` folder you just created.

4. For smooth scrolling, copy the `user.js` file (from the `misc/` folder)
   to the Profile folder, *NOT* the `chrome/` folder.

5. To set up Sidebery CSS, open `misc/sidebery.css` and copy the content.
   Then, navigate to `Sidebery Settings > Styles editor` and paste the CSS
   under "Sidebar" on the right.

6. To set up a custom new tab, install [nightTab](https://addons.mozilla.org/en-GB/firefox/addon/nighttab/).
   Open a new tab and click the settings icon. Then, navigate to
   `Data > Restore > Import from File` and import any of the `.json` files
   under `misc/`. To set up nightTab as your default homepage, [see here](https://github.com/zombieFox/nightTab/wiki/Setting-nightTab-as-your-Firefox-homepage).

So the directory tree is something like this:

```text
<your profile folder>
│   user.js
└── chrome/
    │   userChrome.css
    │   userContent.css
    │   noise-512x512.png
    │
    └── components
            autohide_sidebar.css
            hide_tabs_toolbar.css
            windows_controls_placeholder.css
```

If you want a proper getting started guide, you should check out
[the wiki in r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials).

## Features

### URL bar blur

![Blurred URL Bar](screenshots/Blurred%20URL%20Bar.png)

### Dynamic tab bar

Dynamically autohide tabs bar when Sidebery is active, *with animation*.

![Dynamic tabs bar](screenshots/Dynamic%20Sidebery.gif)

#### How to set up

Set window preface value: `Sidebery settings > Help > Preface value`

**Note:**
The preface value can be anything, but you would have to change it accordingly
inside the CSS files as well. In my CSS, it's "Sidebery".

### Autohide sidebar

Automatically hides sidebar (Sidebery). Only expand when the cursor hovers it.

![Autohide sidebar](screenshots/Autohide%20Sidebar.gif)

### Custom startpage using [nightTab](https://github.com/zombieFox/nightTab)

#### Base Theme

![nightTab](screenshots/nightTab%20Base.png)

#### Nord Theme

![nightTab Nord](screenshots/nightTab%20Nord.png)

## References

- [Guerra24/Firefox-UWP-Style](https://github.com/Guerra24/Firefox-UWP-Style)
- [MrOtherGuy/firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)
  - [css_scrollbar_width_color.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/content/css_scrollbar_width_color.css)
  - [hide_tabs_toolbar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/hide_tabs_toolbar.css)
  - [window_control_placeholder_support.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/window_control_placeholder_support.css)
  - [autohide_sidebar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/autohide_sidebar.css)
- [stonecrusher/simpleMenuWizard](https://github.com/stonecrusher/simpleMenuWizard)
- [drannex42's Sidebery CSS](https://github.com/drannex42/linux-utils/tree/main/firefox)
