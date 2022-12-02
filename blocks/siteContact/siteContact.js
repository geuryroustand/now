export default function decorate(block) {
  [...block.children].forEach((bl, index) => {
    bl.classList.add(`site-contact-${index + 1}`);
    [...bl.children].forEach((b, i) => {
      b.classList.add(`site-contact-col-${i + 1}`);
    });
  });
}
