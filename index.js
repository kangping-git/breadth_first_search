window.onload = () => {
    let main = document.createElement("table")
    main.border = "1"
    for (let x = 0;x < 16;++x){
        let element = document.createElement("tr")
        for (let y = 0;y < 16;++y){
            let elm = document.createElement("td")
            elm.classList.add("block")
            if (x == 0 && y == 0){
                elm.classList.add("start")
            }
            elm.id = "block-" + (x * 16 + y)
            elm.onclick = () => {
                if (elm.classList.contains("start") || elm.classList.contains("end")){
                }else{
                    elm.classList.toggle("active")
                }
                do_()
            }
            elm.ondblclick = () => {
                document.querySelectorAll(".block").forEach((value) => {
                    value.classList.remove("start")
                })
                elm.classList.add("start")
                do_()
            }
            element.appendChild(elm)
        }
        main.appendChild(element)
    }
    document.body.appendChild(main)
    window.do_ = () => {
        Q = [Number(document.querySelector(".start").id.split("-")[1])]
        v = []
        v.push(Q[0])
        document.querySelectorAll(".block").forEach((value) => {
            value.innerText = ""
            value.style.fontSize = "14pt"
        })
        document.getElementById(document.querySelector(".start").id).innerText = 0
        do{
            let x = Math.floor(Q[0] / 16)
            let y = Q[0] % 16
            if (x - 1 >= 0){
                if (!document.getElementById("block-" + ((x - 1) * 16 + y)).classList.contains("active")){
                    if (!v.includes((x - 1) * 16 + y)){
                        v.push((x - 1) * 16 + y)
                        Q.push((x - 1) * 16 + y)
                        document.getElementById("block-" + ((x - 1) * 16 + y)).innerText = Number(document.getElementById("block-" + Q[0]).innerText) + 1
                    }
                }
            }
            if (x + 1 < 16){
                if (!document.getElementById("block-" + ((x + 1) * 16 + y)).classList.contains("active")){
                    if (!v.includes((x + 1) * 16 + y)){
                        v.push((x + 1) * 16 + y)
                        Q.push((x + 1) * 16 + y)
                        document.getElementById("block-" + ((x + 1) * 16 + y)).innerText = Number(document.getElementById("block-" + Q[0]).innerText) + 1
                    }
                }
            }
            if (y + 1 < 16){
                if (!document.getElementById("block-" + ((x + 0) * 16 + y + 1)).classList.contains("active")){
                    if (!v.includes((x + 0) * 16 + y + 1)){
                        v.push((x + 0) * 16 + y + 1)
                        Q.push((x + 0) * 16 + y + 1)
                        document.getElementById("block-" + ((x + 0) * 16 + y + 1)).innerText = Number(document.getElementById("block-" + Q[0]).innerText) + 1
                    }
                }
            }
            if (y - 1 >= 0){
                if (!document.getElementById("block-" + ((x + 0) * 16 + y - 1)).classList.contains("active")){
                    if (!v.includes((x + 0) * 16 + y - 1)){
                        v.push((x + 0) * 16 + y - 1)
                        Q.push((x + 0) * 16 + y - 1)
                        document.getElementById("block-" + ((x + 0) * 16 + y - 1)).innerText = Number(document.getElementById("block-" + Q[0]).innerText) + 1
                    }
                }
            }
            Q.shift()
        }while (Q.length != 0);
    }
    do_()
};