        bool1 = false;
        bool4 = false;
        boolr = false;
        boole = false;
        boolc = false;
        boolh = false;
        booln = false;
        boole2 = false;
        boolr2 = false;

        addEventListener("keypress", function (event) {
        if (event.key === "c") {
            bool1 = true;
            setTimeout(() => {
            bool1 = false;
            }, 1000);
        }
        if (event.key === "1" && bool1 == true) {
            bool4 = true;
            setTimeout(() => {
                bool4 = false;
            }, 1000);
        }
        if (event.key === "4" && bool4 == true) {
            boolr = true;
            setTimeout(() => {
                boolr = false;
            }, 1000);
        }
        if (event.key === "r" && boolr == true) {
            boole = true;
            setTimeout(() => {
                boole = false;
            }, 1000);
        }
        if (event.key === "e" && boole == true) {
            boolc = true;
            setTimeout(() => {
                boolc = false;
            }, 1000);
        }
        if (event.key === "c" && boolc == true) {
            boolh = true;
            setTimeout(() => {
                boolh = false;
            }, 1000);
        }
        if (event.key === "h" && boolh == true) {
            booln = true;
            setTimeout(() => {
                booln = false;
            }, 1000);
        }
        if (event.key === "n" && booln == true) {
            boole2 = true;
            setTimeout(() => {
                boole2 = false;
            }, 1000);
        }
        if (event.key === "e" && boole2 == true) {
            boolr2 = true;
            setTimeout(() => {
                boolr2 = false;
            }, 1000);
        }
        if (event.key === "r" && boolr2 == true) {
            window.location.href = "/html/bongo.html";
        }
        });