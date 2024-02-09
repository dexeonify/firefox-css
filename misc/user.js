/* Smooth Scroll  */
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 500);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("mousewheel.acceleration.factor", 4);
user_pref("mousewheel.acceleration.start", 6);

/* Enable userChrome customisations */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/* Don't close the bookmark menu when middle-clicking the entries */
user_pref("browser.bookmarks.openInTabClosesMenu", false);

/* Increase the minimum tab width so that the tab title can be read */
user_pref("browser.tabs.tabMinWidth", 140);

/* Prevent middle-click (to autoscroll) from deselecting text */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1714810 */
user_pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", true);

/* Make PDFs sent as attachments open directly in Firefox without downloading */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1772569 */
user_pref("browser.download.open_pdf_attachments_inline", true);

/* Disable pocket */
user_pref("extensions.pocket.enabled", false);

/* Autofill URLs based on frequency and history */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1597791 */
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", true);

/* Allow searching using the search engine from the active page */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1794823 */
user_pref("browser.urlbar.contextualSearch.enabled", true);
