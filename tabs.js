function switchTab(tabName) {
    for (tab of document.getElementsByClassName("tabs")) {
        hide(tab.id);
    }
    show("tab-" + tabName);
}