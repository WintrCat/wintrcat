fetch("/api/video", {
    "method": "GET"
}).then(res => {
    return res.text();
}).then(videoURL => {
    $(".video-section iframe").attr("src", videoURL);
});