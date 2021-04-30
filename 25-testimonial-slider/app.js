const testimonialContainer = document.querySelector('.testimonial-container');
const testimonal = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: "John Doe",
        position: "Designer",
        photo: "https://randomuser.me/api/portraits/men/20.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque illum commodi obcaecati optio et sint architecto similique beatae omnis asperiores culpa maxime saepe nemo adipisci, nobis, facere error a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, est. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, exercitationem?"
    },
    {
        name: "Smith Doe",
        position: "Developer",
        photo: "https://randomuser.me/api/portraits/men/21.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque illum commodi obcaecati optio et sint architecto similique beatae omnis asperiores culpa maxime saepe nemo adipisci, nobis, facere error a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, est. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, exercitationem?"
    },
    {
        name: "Sam Doe",
        position: "Manager",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque illum commodi obcaecati optio et sint architecto similique beatae omnis asperiores culpa maxime saepe nemo adipisci, nobis, facere error a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, est. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, exercitationem?"
    }
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonal.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);