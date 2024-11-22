document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section.scrolled-to");

  sections.forEach((section, index) => {

    if (typeof sections[index + 1] === "undefined") return;

    let next = document.getElementById(sections[index + 1].id);

    let scrollDownLink = document.createElement("div");
    scrollDownLink.innerHTML = `
                            <a href="#" class="scroll-down text-gray-400">
                              <ion-icon name="chevron-down-outline" class="text-4xl animate-bounce [animation-duration:_2s]"></ion-icon>
                            </a>`;

    section.appendChild(scrollDownLink);

    const scrollDown = section.querySelector(".scroll-down");

    if (scrollDown) {
      scrollDown.addEventListener("click", function (e) {
        e.preventDefault();
        next.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});
