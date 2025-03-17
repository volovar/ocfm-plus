import LayoutUpdater from "~/services/LayoutUpdater";
import PageHandler from "~/services/PodcastPageService";
import PodcastPage from "~/features/PodcastPage";
import "~/ocfm-plus.css";

const { pathname } = location;

if (pathname === "/podcasts") {
  LayoutUpdater.updatePodcastsPage(".container");
  PageHandler.setup();
  PodcastPage.setup();
}

LayoutUpdater.cleanup();
