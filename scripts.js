// ── Loader ──────────────────────────────────────────────────────────────────
setTimeout(function() {
    $('#loader').fadeOut(500);
}, 800);

$(document).ready(function() {

    // ── Tab switching (no page scroll) ──────────────────────────────────────
    function showTab(id) {
        $('.tab').removeClass('active');
        $('nav a').removeClass('active');
        $('#' + id).addClass('active');
        $('nav a[data-tab="' + id + '"]').addClass('active');
    }

    // Wire every [data-tab] link anywhere on the page
    $(document).on('click', '[data-tab]', function(e) {
        e.preventDefault();
        var id = $(this).data('tab');
        showTab(id);
        closeNav();
    });

    // ── Hamburger / mobile nav ───────────────────────────────────────────────
    function openNav() {
        $('#hamburger').addClass('open');
        $('#mainNav').addClass('open');
        $('#navOverlay').addClass('open');
    }
    function closeNav() {
        $('#hamburger').removeClass('open');
        $('#mainNav').removeClass('open');
        $('#navOverlay').removeClass('open');
    }

    $('#hamburger').on('click', function() {
        $('#mainNav').hasClass('open') ? closeNav() : openNav();
    });

    $('#navOverlay').on('click', function() {
        closeNav();
    });

});
