// Элементы на странице
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function (slide, index) {
  // Скрываем все слайды кроме первого
  if (index !== 0) slide.classList.add("hidden");

  //Добавляем индексы
  slide.dataset.index = index;

  // Добавляем data атрибут active для первого / активного слайда

  sliderItems[0].setAttribute("data-active", "");

  // Клик по слайдам
  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

btnNext.onclick = function () {
  showNextSlide("next");
};

btnPrev.onclick = function () {
  showNextSlide("prev");
};

function showNextSlide(direction) {
  // Скрываем текущий слайд
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // Рассчитываем след индекс в завис от направления
  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }
  // Показываем след слайд
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
