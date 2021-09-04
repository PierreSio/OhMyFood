setTimeout(displaySite, 3000);

/**
 * Hide loader and display the content.
 */
function displaySite() {
    jQuery(".loader").hide();
    jQuery('.container').show();
}
