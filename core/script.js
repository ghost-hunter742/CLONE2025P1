function ques1(a) {
    fulldata = {
        "1": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices. <br><br> You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        "2": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        "3": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br><br>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        "4": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees-start or stop your account anytime.",
        "5": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        "6": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br><br> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
    b = document.querySelector(`.question${a}`)
    c = document.querySelector(".fullques")
    e = b.nextElementSibling
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(e)
    if (c === null) {
        console.log("hollow")
        div = document.createElement("div")
        div.setAttribute("class", "fullques")
        div.innerHTML = fulldata[a]
        b.after(div)
    }
    else {
        console.log("found")
        if (e == c) {
            c.remove();
            console.log("same")
        }
        else {
            c.remove();
            console.log("hollow")
            div = document.createElement("div")
            div.setAttribute("class", "fullques")
            div.innerHTML = fulldata[a]
            b.after(div)
            console.log("different")
        }
    }
    console.log("runned")
}

// let l = document.createElement("span")
// let k = document.querySelector(".content" + clas)
// l.setAttribute("class", "dot" + clas)
// l.innerHTML = "."
// k.after(l)