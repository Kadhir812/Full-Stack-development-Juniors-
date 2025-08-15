const btn = document.getElementById("changeBtn");

        btn.addEventListener("click", () => {
            // 1. getElementById
            const unique = document.getElementById("uniquePara");
            unique.style.color = "red";

            // 2. querySelector (first match)
            const firstCommon = document.querySelector(".common");
            firstCommon.style.backgroundColor = "pink";
        

            // 3. querySelectorAll (all matches)
            const allCommon = document.querySelectorAll(".common");
            allCommon.forEach(el => el.style.fontStyle = "italic");

            // 4. getElementsByClassName
            const byClass = document.getElementsByClassName("common");
            byClass[1].style.color = "blue";

            // 5. getElementsByTagName
            const allParas = document.getElementsByTagName("p");
            allParas[3].style.backgroundColor = "lightgreen";
        });