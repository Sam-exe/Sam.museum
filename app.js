const observer = new IntersectionObserver((entries)) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.
        }
    });
}

const hiddenelements = document.querySelectorAll('show')