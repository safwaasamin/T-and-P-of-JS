// accordian
const accordian = document.querySelectorAll('.accordian .item');
accordian.forEach(item => {
    const label = item.querySelector('.label');
    const content = item.querySelector('.content');
    label.addEventListener('click', () => {
        content.classList.toggle('open');
        label.classList.toggle('open');
    });
})