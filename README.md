# firefox-css

Some `userChrome.css` and `userContent.css` configurations to customise Firefox
to my liking.

I'm currently daily-driving *Firefox Nightly*, so naturally I will try to
update as soon as possible if there's any breaking changes.

## Features

### URL bar blur

![Blurred URL Bar](https://i.imgur.com/s5036st.png)

⚠️ Blur currently does not work in Nightly regardless of `layout.css.backdrop-filter.enabled`,
due to [bug 1741779](https://bugzilla.mozilla.org/show_bug.cgi?id=1741779).
There's also [bug 1741305](https://bugzilla.mozilla.org/show_bug.cgi?id=1741305)
which addresses the blocky artifacts caused by the blur filter.

### Sidebery Autohide, Dynamic Indentation & Floating Tabs

<https://user-images.githubusercontent.com/72267349/147921242-f2a5900d-1ef1-408a-b04e-a7c7440efb6a.mp4>

### Custom startpage using [nightTab](https://github.com/zombieFox/nightTab)

#### Base Theme

![nightTab](https://user-images.githubusercontent.com/72267349/147921209-55f18032-af83-4db2-9c7c-51c977096d27.jpg)

#### Nord Theme

![nightTab Nord](https://user-images.githubusercontent.com/72267349/147921152-0839d947-02c9-4b5c-a70c-5aafad09352b.jpg)

## Usage

### userChrome.css

A quick roundown on the basics of setting up `userChrome.css`:

1. Go to `about:config`, and enable
   - `toolkit.legacyUserProfileCustomizations.stylesheets`
   - `layout.css.backdrop-filter.enabled`

2. Go to `about:support` and click **Profile folder > Open Folder**.

3. Create a new folder named `chrome`, download/clone this repo and copy the
   downloaded files into the `chrome` folder you just created.

4. Restart Firefox.

The directory tree is something like this:

```css
<your profile folder>
│   user.js
└── chrome/
    │   userChrome.css
    │   userContent.css
    │   noise-512x512.png
    │
    └── components/
            autohide_sidebar.css
            hide_tabs_toolbar.css
            windows_controls_placeholder.css
```

For a proper getting started guide, you should check out [r/FirefoxCSS's wiki](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials).

### Smooth scrolling

Copy the `user.js` file (from the `misc/` folder) to the **Profile folder**,
*NOT the `chrome/` folder*. The `user.js` file can be deleted afterwards.

### Vertical Tabs

0. Install [Sidebery](https://addons.mozilla.org/firefox/addon/sidebery/).

1. Copy the content of `misc/sidebery.css`.

2. Navigate to **Sidebery Settings > Styles editor** and paste the CSS under
   "Sidebar" on the right.

3. Individually set the following options under **Common** in Styles editor:
   - **Background color** to `#2B2A33`
   - **Info color** to `#9494AA`
   - **Color of active option** to `#9494AA`
   - **Color of inactive option** to `#52525E`

4. Set window preface value in **Sidebery settings > Help > Preface value**
   to **[Sidebery]**.

   **Note:**
   The preface value can be anything, but you would have to change it
   accordingly inside the `userChrome.css` files as well.

5. Alternatively, import `misc/sidebery-data.json` in **Sidebery Settings > Help > Import**,
   if you are fine with my settings. :P

`treestyletabs.css` and `treestyletabs-config.json` is also included.
The same steps can be done for Tree Styles Tab as well.

### Custom new tab

0. Install [nightTab](https://addons.mozilla.org/firefox/addon/nighttab/).
1. Open a new tab and click the settings icon.
2. Navigate to **Data > Restore > Import from File**.
3. Import any of the any of the `nightTab*.json` file.
4. To set nightTab as your default homepage, [see here](https://github.com/zombieFox/nightTab/wiki/Setting-nightTab-as-your-Firefox-homepage).

## References

- [Guerra24/Firefox-UWP-Style](https://github.com/Guerra24/Firefox-UWP-Style)
- [MrOtherGuy/firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)
  - [hide_tabs_toolbar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/hide_tabs_toolbar.css)
  - [window_control_placeholder_support.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/window_control_placeholder_support.css)
  - [autohide_sidebar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/autohide_sidebar.css)
  - [context_menus_more_proton.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/context_menus_more_proton.css)
- [stonecrusher/simpleMenuWizard](https://github.com/stonecrusher/simpleMenuWizard)
- [drannex42's Sidebery CSS](https://github.com/drannex42/FirefoxSidebar)
