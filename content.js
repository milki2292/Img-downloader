chrome.runtime.onMessage.addListener((request, sender, sendResponsee) => {
  if (request.action == "get_images") {
    let formated_images = [];
    let images = $("img").map((i, img) => {
      if ($(img).data("src")) {
            formated_images.push( {
          src: $(img).data("src"),
        });
      } else if ($(img).src) {
        formated_images.push( {
          src: $(img).src,
        });
      }
    });
    sendResponsee(formated_images);
  }
});
