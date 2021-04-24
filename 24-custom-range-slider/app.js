const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
    label.innerHTML = value;


    const range_width = getComputedStyle(e.target).getPropertyValue('width');

    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_range_width = +range_width.substring(0, range_width.length -2);
    const num_label_width = +label_width.substring(0, label_width.length -2);

    const rangeMin = e.target.min;
    const rangeMax = e.target.max;

    const left = value * (num_range_width / rangeMax) - num_label_width / 2 + scale(value, rangeMin, rangeMax, 10, -10);

    label.style.left = `${left}px`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};