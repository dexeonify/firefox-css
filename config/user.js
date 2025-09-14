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

/*
 * Prevent middle-click (to autoscroll) from deselecting text
 * Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1714810
 */
user_pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", true);

/*
 * Make PDFs sent as attachments open directly in Firefox without downloading
 * https://connect.mozilla.org/t5/discussions/stop-saving-pdfs-to-downloads-when-viewing-in-firefox/m-p/78399/highlight/true#M29939
 * Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1772569
 *
 * There's another related pref which controls PDF downloading.
 * It was added in https://support.mozilla.org/en-US/kb/firefox-enterprise-118-release-notes
 * Related bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1811830
 */
user_pref("browser.download.open_pdf_attachments_inline", true);

/*
 * Enable Mica effect on titlebar and sidebar
 * As of writing, Mica effect on titlebar only works on the default Auto theme
 * Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1934143
 */
user_pref("widget.windows.mica", true)
