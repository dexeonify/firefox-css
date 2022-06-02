/* Smooth Scroll  */
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 100);
user_pref("mousewheel.acceleration.factor", 6);
user_pref("mousewheel.acceleration.start", 4);
user_pref("mousewheel.min_line_scroll_amount", 22);

/* Enable userChrome customisations */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/* Don't close the bookmark menu when middle-clicking the entries */
user_pref("browser.bookmarks.openInTabClosesMenu", false);

/* Increase the minimum tab width so that the tab title can be read */
user_pref("browser.tabs.tabMinWidth", 140);

/* Prevent middle-click (to autoscroll) from deselecting text */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1714810 */
user_pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", true);
