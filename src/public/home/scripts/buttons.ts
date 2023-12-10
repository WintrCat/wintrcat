$(".nav-tabs span").on("click", ({ target }) => {
    location.href = $(target).attr("data-url") || "#";
});

$(".social").on("click", ({ target }) => {
    let url = $(target).attr("data-url") || $(target).parent().attr("data-url");
    open(url);
});

function updateNavbarOpacity() {
    if (scrollY > 0) {
        $(".nav-bar").get(0).classList.add("scrolled");
    } else {
        $(".nav-bar").get(0).classList.remove("scrolled");
    }
}

$(window).on("scroll", () => {
    updateNavbarOpacity();
});

updateNavbarOpacity();