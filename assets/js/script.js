const content = document.querySelector(".content");
if (content) {
  (viewContent = (e) => {
    if (!e) return;
    if (e.classList.contains("js-tagHoverWrap"))
      return void e.classList.add("--visible");
    const t = `.js-tagHoverWrap.--exhibition#${e.id}`,
      item = e.closest(".content-day").querySelector(t);
    if (item) {
      if (window.innerWidth < 768 && item.classList.contains("--visible"))
        return e.classList.remove("--active"), void hideContent();
      e.classList.add("--active"), item.classList.add("--visible");
    }
  }),
    (hideContent = () => {
      const item = document.querySelector(".js-tagHoverWrap.--visible");
      const span = document.querySelector(".js-contentEventTag.--active");
      item &&
        setTimeout(() => {
          item.classList.remove("--visible");
          span.classList.remove("--active");
        }, 250);
    }),
    (updateView = () => {
      const contents = document.querySelectorAll(".js-contentEventTag"),
        contentHover = document.querySelectorAll(".js-tagHoverWrap");
      for (const e of contents)
        e.addEventListener("mouseenter", () => {
          viewContent(e);
        }),
          e.addEventListener("mouseleave", () => {
            hideContent();
          });
      if (window.innerWidth > 768)
        for (const e of contentHover)
          e.addEventListener("mouseenter", () => {
            viewContent(e);
          }),
            e.addEventListener("mouseleave", () => {
              hideContent();
            });
    });
  window.addEventListener("DOMContentLoaded", () => {
    updateView();
  });
}
