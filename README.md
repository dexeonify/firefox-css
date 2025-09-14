# firefox-css <!-- omit in toc -->

Some `userChrome.css` configurations to customise Firefox to my liking.

I'm currently daily-driving *Firefox Nightly*, so naturally I will try to
update as soon as possible if there are any breaking changes.

## Table of Contents <!-- omit in toc -->

- [Features](#features)
  - [Sidebery CSS](#sidebery-css)
  - [URL bar blur](#url-bar-blur)
  - [Custom startpage using nightTab](#custom-startpage-using-nighttab)
    - [Base Theme](#base-theme)
    - [Nord Theme](#nord-theme)
- [Usage](#usage)
  - [userChrome.css](#userchromecss)
  - [Smooth scrolling](#smooth-scrolling)
  - [Vertical tabs](#vertical-tabs)
  - [Custom new tab](#custom-new-tab)
- [References](#references)

## Features

### Sidebery CSS

<https://user-images.githubusercontent.com/72267349/147921242-f2a5900d-1ef1-408a-b04e-a7c7440efb6a.mp4>

### URL bar blur

![Blurred URL Bar](https://i.imgur.com/s5036st.png)

⚠️ Blur currently **does not work** regardless of `layout.css.backdrop-filter.enabled`,
due to [bug 1773402](https://bugzilla.mozilla.org/show_bug.cgi?id=1773402).

### Custom startpage using [nightTab](https://github.com/zombieFox/nightTab)

#### Base Theme

![nightTab](https://user-images.githubusercontent.com/72267349/147921209-55f18032-af83-4db2-9c7c-51c977096d27.jpg)

#### Nord Theme

![nightTab Nord](https://user-images.githubusercontent.com/72267349/147921152-0839d947-02c9-4b5c-a70c-5aafad09352b.jpg)

## Usage

### userChrome.css

1. Go to `about:config` and enable `toolkit.legacyUserProfileCustomizations.stylesheets`
2. Go to `about:support` and click **Profile folder > Open Folder**.
3. Create a new folder named `chrome`, download/clone this repo and copy the
   downloaded files into the `chrome` folder you just created.
4. Restart Firefox.

<details>
<summary>The directory tree should look something like this:</summary>

```css
<your profile folder>
│   user.js
└── chrome/
    │   userChrome.css
    │   noise-512x512.png
    │
    └── components/
            autohide_sidebar.css
            iconized_content_context_menu.css
            iconized_main_menu.css
            iconized_tabs_context_menu.css
            iconized_textbox_context_menu.css
```

</details>

### Smooth scrolling

Copy the `user.js` file (from the `config/` folder) to the **Profile folder**
*(not the `chrome/` folder)*. Remove other unrelated tweaks, if needed.
The `user.js` file can be deleted afterwards.

### Vertical tabs

0. Install [Sidebery](https://addons.mozilla.org/firefox/addon/sidebery).
1. Copy the contents of `config/sidebery.css`.
2. Navigate to **Sidebery Settings > Styles editor** and paste the CSS under
   "Sidebar" on the right.
3. Alternatively, import `config/sidebery-data.json` in **Sidebery Settings > Help > Import**,
   if you are fine with my settings. 🙂

### Custom new tab

0. Install [nightTab](https://addons.mozilla.org/firefox/addon/nighttab).
1. Open a new tab and click the settings icon.
2. Navigate to **Data > Restore > Import from File**.
3. Import any of the any of the `nightTab*.json` file.
4. To set nightTab as your default homepage, [see here](https://github.com/zombieFox/nightTab/wiki/Setting-nightTab-as-your-Firefox-homepage).

## References

- [MrOtherGuy/firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)
  - [autohide_sidebar.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/autohide_sidebar.css)
  - [iconized_main_menu.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/iconized_main_menu.css)
  - [iconized_content_context_menu.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/iconized_content_context_menu.css)
  - [iconized_tabs_context_menu.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/iconized_tabs_context_menu.css)
  - [iconized_textbox_context_menu.css](https://github.com/MrOtherGuy/firefox-csshacks/blob/master/chrome/iconized_textbox_context_menu.css)
- [Redundakitties/colorful-minimalist](https://github.com/Redundakitties/colorful-minimalist)
