const testimonials = [
    {
        name: "Henrie O.",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I could probably go into sales for you. I have gotten at least 50 times the value from Kelvin. Kelvin impressed me on multiple levels."
    },

    {
        name: "Cash",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
        text: "You guys rock! Since I invested in Kelvin I made over 100,000 dollars profits. I could probably go into sales for you"
    },

    {
        name: "Bernadette Q.",
        photoUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I would be lost without Kelvin."

    },


    {
        name: "Earlissa",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I STRONGLY recommend Kelvin to EVERYONE interested in running a successful online business!"

    } 
]
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const{ name, photoUrl, text }= testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(()=> {
        updateTestimonial()

    }, 5000);
}