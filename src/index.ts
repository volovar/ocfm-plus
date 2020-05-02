import { setupAudioPlayer } from "./audio-player";
import { createDiv } from "./utils";

document.onreadystatechange = () => {
  const { readyState } = document;

  if (readyState !== "complete") return;

  initExtension();
};

const arrangeHeader = () => {
  var $podcastHead = $('.ocseparatorbar:contains("Podcasts")');
  var $podcastsList;

  if (!$podcastHead) return;

  $podcastHead.addClass("navlink");
  $podcastHead.nextAll().addBack().wrapAll(createDiv("podcasts-block"));
  $podcastHead.nextAll().wrapAll(createDiv("podcasts-list"));

  $(".search_container").before($(".podcasts-block"));

  $podcastsList = $(".podcasts-list");

  $podcastHead.on("click", function (e) {
    e.preventDefault();
    $podcastsList.stop();

    if ($podcastsList.is(":visible")) {
      $podcastsList.fadeOut("fast");
    } else {
      $podcastsList.fadeIn("fast");
    }
  });

  // $(this).mouseup(function (e: MouseEvent) {
  //   var $podcastsList = $(".podcasts-list");

  //   if (
  //     !$('.ocseparatorbar:contains("Podcasts")').is(e.target) &&
  //     !$podcastsList.is(e.target) &&
  //     $podcastsList.has(e.target).length == 0
  //   ) {
  //     $podcastsList.fadeOut("fast");
  //   }
  // });
};

function initExtension(): void {
  console.log("complete");
  setupAudioPlayer();
  arrangeHeader();

  // old code
  // grabbing element references
  var logoIMGsmall = chrome.extension.getURL("images/icon48.png");
  var logoIMG = chrome.extension.getURL("images/icon-oc-plus.png");

  // update the small logo to be the ocfm+ version
  if ($("#tinyhomeimg")) {
    $("#tinyhomeimg").attr("src", logoIMGsmall);
  }

  // update the main logo to be the ocfm+ version
  if ($(".logo")) {
    $(".logo").attr("src", logoIMG);
    $(".logo + h1").after(
      '<p class="text-notice">Site enhanced by the ocfm plus addon</p>'
    );
  }

  if (
    $("#progressbar") &&
    $("#playcontrols_container") &&
    $("#speedcontrols")
  ) {
    $("#playcontrols_container")
      .next("#speedcontrols")
      .addBack()
      .wrapAll(createDiv("player-controls"));
    $("#progressbar")
      .nextAll(".player-controls")
      .addBack()
      .wrapAll(createDiv("player-control-block"));
    $(".player-control-block")
      .next(".fullart_container")
      .addBack()
      .wrapAll(createDiv("player-block"));
  }

  if ($("#audiotimestamplink").next(".margintop1") && $(".titlestack")) {
    var dateElement = $("#audiotimestamplink").next(".margintop1");

    $(".titlestack").append($(dateElement));
  }

  if ($(".player-control-block") && $("#episode_body")) {
    $(".player-control-block").append($("#episode_body"));
  }

  if ($("#progressbar") && $("#deletepodcastform") && $("#fullart_container")) {
    $("#deletepodcastform")
      .nextUntil(".extendedepisodecell")
      .addBack()
      .wrapAll(createDiv("podcast-data"));
    $(".podcast-data").wrap(createDiv("podcast-data-block"));
    $(".podcast-data-block").append($(".fullart_container"));
  }
}
