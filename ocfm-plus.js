$(document).ready(function () {
    var $podcastHead = $('.ocseparatorbar:contains("Podcasts")');
    var $podcastsList;
    var logoIMGsmall = chrome.extension.getURL('images/icon48.png');
    var logoIMG = chrome.extension.getURL('images/icon-oc-plus.png');

    if ($('#tinyhomeimg')) {
        $('#tinyhomeimg').attr('src', logoIMGsmall);
    }

    if ($('.logo')) {
        $('.logo').attr('src', logoIMG);
        $('.logo + h1').after('<p class="text-notice">Site enhanced by the ocfm plus addon</p>');
    }

    if ($podcastHead) {
        $podcastHead.addClass('navlink');
        $podcastHead.nextAll().addBack().wrapAll(makeDiv('podcasts-block'));
        $podcastHead.nextAll().wrapAll(makeDiv('podcasts-list'));

        $('.search_container').before($('.podcasts-block'));

        $podcastsList = $('.podcasts-list');

        $podcastHead.on('click', function (e) {
            e.preventDefault();
            $podcastsList.stop()

            if ($podcastsList.is(':visible')) {
                $podcastsList.fadeOut('fast');
            } else {
                $podcastsList.fadeIn('fast');
            }
        });

        $(this).mouseup(function (e) {
            var $podcastsList = $('.podcasts-list');

            if (!$('.ocseparatorbar:contains("Podcasts")').is(e.target) && !$podcastsList.is(e.target) && $podcastsList.has(e.target).length == 0) {
                $podcastsList.fadeOut('fast');
            }
        });
    }

    if ($('#progressbar') && $('#playcontrols_container') && $('#speedcontrols')) {
        $('#playcontrols_container').next('#speedcontrols').addBack().wrapAll(makeDiv('player-controls'));
        $('#progressbar').nextAll('.player-controls').addBack().wrapAll(makeDiv('player-control-block'));
        $('.player-control-block').next('.fullart_container').addBack().wrapAll(makeDiv('player-block'));
    }

    if ($('#audiotimestamplink').next('.margintop1') && $('.titlestack')) {
        var dateElement = $('#audiotimestamplink').next('.margintop1');

        $('.titlestack').append($(dateElement));
    }

    if ($('.player-control-block') && $('#episode_body')) {
        $('.player-control-block').append($('#episode_body'));
    }

    if ($('#progressbar') && $('#deletepodcastform') && $('#fullart_container')) {
        $('#deletepodcastform').nextUntil('.extendedepisodecell').addBack().wrapAll(makeDiv('podcast-data'));
        $('.podcast-data').wrap(makeDiv('podcast-data-block'));
        $('.podcast-data-block').append($('.fullart_container'));
    }

    function makeDiv (value) {
        return '<div class="' + value + '"></div>';
    };
});
