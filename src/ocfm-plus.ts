import LayoutUpdater from "./LayoutUpdater";
import PageHandler from "./PageHandler";
import VirtualDom from "./VirtualDom";
import "./ocfm-plus.css";

const { pathname } = location;

if (pathname === "/podcasts") {
  LayoutUpdater.updatePodcastsPage(".container");
  PageHandler.setup();

  const html = document.querySelector("html");
  if (html) {
    console.log("building virtual dom");
    const vdom = VirtualDom.buildTreeFromHtml(html.getHTML());
    console.log(vdom);
  }
}

LayoutUpdater.cleanup();
