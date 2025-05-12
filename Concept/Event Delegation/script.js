const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        if (e.target.innerText === "জাভাস্ক্রিপ্ট") e.target.style.backgroundColor = "red";
        else if (e.target.innerText === "পিএইচপি") e.target.style.backgroundColor = "green";
        else if (e.target.innerText === "জাভা") e.target.style.backgroundColor = "blue";
        else if (e.target.innerText === "পাইথন") e.target.style.backgroundColor = "yellow";
        else if (e.target.innerText === "টাইপস্ক্রিপ্ট") e.target.style.backgroundColor = "pink";
        else e.target.style.border = "2px solid black";
    }
});

function addElement() {
    const newElement = document.createElement("li");
    newElement.textContent = "ডট নেট";
    list.appendChild(newElement);
}
