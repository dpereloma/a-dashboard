export const scrollToUp = (id: string) => {
  const node = document.getElementById(id);

  node?.scrollIntoView(true);

  const scrolledY = window.scrollY;

  if (scrolledY && node) {
    window.scroll(0, scrolledY - 96);
  }
};
