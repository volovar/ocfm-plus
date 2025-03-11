import LayoutUpdater from "~/services/LayoutUpdater";
import PageHandler from "~/services/PageHandler";
import VirtualDom from "~/services/VirtualDom";
import "~/ocfm-plus.css";

const { pathname } = location;

if (pathname === "/podcasts") {
  LayoutUpdater.updatePodcastsPage(".container");
  PageHandler.setup();

  const html = document.querySelector("html");
  if (html) {
    console.log("building virtual dom");
    // const vdom = VirtualDom.buildTreeFromHtml(html.getHTML());

    VirtualDom.getPodcastLists();
  }
}

LayoutUpdater.cleanup();
