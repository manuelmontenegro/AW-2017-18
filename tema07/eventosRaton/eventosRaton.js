
$(document).ready(() => {
    $("#superficie").on("mouseenter", () => {
        $("#posicion").show();
    });

    $("#superficie").on("mouseleave", () => {
        $("#posicion").hide();
    });

    $("#superficie").on("mousemove", (event) => {
        let posSuperficie = $("#superficie").offset();
        $("#posicion").text(
            `${event.pageX - posSuperficie.left} x ${event.pageY - posSuperficie.top}`
        );
    });
});
