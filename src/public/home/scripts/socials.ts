$(".social").on("click", ({ target }) => {
    let url = $(target).attr("data-url") || $(target).parent().attr("data-url");
    open(url);
});