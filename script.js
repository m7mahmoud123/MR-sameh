
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 123) { // F12 key
        event.preventDefault();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Ctrl+Shift+I
        event.preventDefault();
    }
});
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.body.style.display = 'none';
    } else {
        document.body.style.display = 'block';
    }
});



document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    // Disable F12
    if (e.keyCode == 123) {
        return false;
    }
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}









let btn = document.getElementsByClassName("fa-solid")[0]
let nav = document.getElementsByClassName("nav")[0]

btn.onclick = function () {
    btn.classList.toggle("fa-times")
    nav.classList.toggle("active")
}



let button1 = document.getElementsByClassName("first-button")[0]
let remove = document.getElementsByClassName("remove")[0]
let firstForm = document.getElementsByClassName("first-form")[0]
let userName = document.getElementsByClassName("username")[0]
let code = document.getElementsByClassName("code")[0]
let go1 = document.getElementsByClassName("go1")[0]








button1.onclick = function () {
    firstForm.style.display = "flex"
}


remove.onclick = function () {
    firstForm.style.display = "none"
}



const validCredentials = {
    '1': 'password1',
    '2': 'mahmoud saad',
    '3': 'password3',
    '4': 'password4',
    '5': 'password5',
    '6': 'password6',
    '7': 'password7',
    '8': 'password8',
    '9': 'password9',
    '10': 'password10',
    '11': 'password1',
    '12': 'mahmoud saad',
    '13': 'password3',
    '14': 'password4',
    '15': 'password5',
    '16': 'password6',
    '17': 'password7',
    '18': 'password8',
    '19': 'password9',
    '20': 'password10',
    '21': 'password1',
    '22': 'mahmoud saad',
    '23': 'password3',
    '24': 'password4',
    '25': 'password5',
    '26': 'password6',
    '27': 'password7',
    '28': 'password8',
    '29': 'password9',
    '30': 'password10',
    '31': 'password1',
    '32': 'mahmoud saad',
    '33': 'password3',
    '34': 'password4',
    '35': 'password5',
    '36': 'password6',
    '37': 'password7',
    '38': 'password8',
    '39': 'password9',
    '40': 'password10',
    '41': 'password1',
    '42': 'mahmoud saad',
    '43': 'password3',
    '44': 'password4',
    '45': 'password5',
    '46': 'password6',
    '47': 'password7',
    '48': 'password8',
    '49': 'password9',
    '50': 'password10',
    '51': 'password1',
    '52': 'mahmoud saad',
    '53': 'password3',
    '54': 'password4',
    '55': 'password5',
    '56': 'password6',
    '57': 'password7',
    '58': 'password8',
    '59': 'password9',
    '60': 'password10',
    '61': 'password1',
    '62': 'mahmoud saad',
    '63': 'password3',
    '64': 'password4',
    '65': 'password5',
    '66': 'password6',
    '67': 'password7',
    '68': 'password8',
    '69': 'password9',
    '70': 'password10',
    '71': 'password1',
    '72': 'mahmoud saad',
    '73': 'password3',
    '74': 'password4',
    '75': 'password5',
    '76': 'password6',
    '77': 'password7',
    '78': 'password8',
    '79': 'password9',
    '80': 'password10',
    '81': 'password1',
    '82': 'mahmoud saad',
    '83': 'password3',
    '84': 'password4',
    '85': 'password5',
    '86': 'password6',
    '87': 'password7',
    '88': 'password8',
    '89': 'password9',
    '90': 'password10',
    '91': 'password1',
    '92': 'mahmoud saad',
    '93': 'password3',
    '94': 'password4',
    '95': 'password5',
    '96': 'password6',
    '97': 'password7',
    '98': 'password8',
    '99': 'password9',
    '100': 'password10'
};

go1.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials[userName.value] && validCredentials[userName.value] === code.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }


    localStorage.setItem("code", code.value)
    code.value = localStorage.getItem("code")
});


// go1.onclick = function (event) {

//     if (userName.value != "156.217.124.97" && userName.value != "156.217.35.218") {
//         event.preventDefault()
//     }
// }




let secondButton = document.getElementsByClassName("second-button")[0]
let secondForm = document.getElementsByClassName("second-form")[0]
let remove1 = document.getElementsByClassName("remove1")[0]
let userName1 = document.getElementsByClassName("username1")[0]
let code1 = document.getElementsByClassName("code1")[0]
let go2 = document.getElementsByClassName("go2")[0]

secondButton.onclick = function () {
    secondForm.style.display = "flex"
}


remove1.onclick = function () {
    secondForm.style.display = "none"
}



const validCredentials1 = {
    '1': 'password1',
    '2': 'mahmoud saad',
    '3': 'password3',
    '4': 'password4',
    '5': 'password5',
    '6': 'password6',
    '7': 'password7',
    '8': 'password8',
    '9': 'password9',
    '10': 'password10',
    '11': 'password1',
    '12': 'mahmoud saad',
    '13': 'password3',
    '14': 'password4',
    '15': 'password5',
    '16': 'password6',
    '17': 'password7',
    '18': 'password8',
    '19': 'password9',
    '20': 'password10',
    '21': 'password1',
    '22': 'mahmoud saad',
    '23': 'password3',
    '24': 'password4',
    '25': 'password5',
    '26': 'password6',
    '27': 'password7',
    '28': 'password8',
    '29': 'password9',
    '30': 'password10',
    '31': 'password1',
    '32': 'mahmoud saad',
    '33': 'password3',
    '34': 'password4',
    '35': 'password5',
    '36': 'password6',
    '37': 'password7',
    '38': 'password8',
    '39': 'password9',
    '40': 'password10',
    '41': 'password1',
    '42': 'mahmoud saad',
    '43': 'password3',
    '44': 'password4',
    '45': 'password5',
    '46': 'password6',
    '47': 'password7',
    '48': 'password8',
    '49': 'password9',
    '50': 'password10',
    '51': 'password1',
    '52': 'mahmoud saad',
    '53': 'password3',
    '54': 'password4',
    '55': 'password5',
    '56': 'password6',
    '57': 'password7',
    '58': 'password8',
    '59': 'password9',
    '60': 'password10',
    '61': 'password1',
    '62': 'mahmoud saad',
    '63': 'password3',
    '64': 'password4',
    '65': 'password5',
    '66': 'password6',
    '67': 'password7',
    '68': 'password8',
    '69': 'password9',
    '70': 'password10',
    '71': 'password1',
    '72': 'mahmoud saad',
    '73': 'password3',
    '74': 'password4',
    '75': 'password5',
    '76': 'password6',
    '77': 'password7',
    '78': 'password8',
    '79': 'password9',
    '80': 'password10',
    '81': 'password1',
    '82': 'mahmoud saad',
    '83': 'password3',
    '84': 'password4',
    '85': 'password5',
    '86': 'password6',
    '87': 'password7',
    '88': 'password8',
    '89': 'password9',
    '90': 'password10',
    '91': 'password1',
    '92': 'mahmoud saad',
    '93': 'password3',
    '94': 'password4',
    '95': 'password5',
    '96': 'password6',
    '97': 'password7',
    '98': 'password8',
    '99': 'password9',
    '100': 'password10'
};

go2.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials1[userName1.value] && validCredentials1[userName1.value] === code1.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئةٍ');
        event.preventDefault();
    }



    localStorage.setItem("code", code1.value)
    code1.value = localStorage.getItem("code")
});


// go2.onclick = function (event) {
//     if (userName1.value != "156.160.249.192" && userName1.value != "156.217.3.72") {
//         event.preventDefault()
//     }
// }




let thirdButton = document.getElementsByClassName("third-button")[0]
let ThirdForm = document.getElementsByClassName("third-form")[0]
let remove2 = document.getElementsByClassName("remove2")[0]
let userName2 = document.getElementsByClassName("username2")[0]
let code2 = document.getElementsByClassName("code2")[0]
let go3 = document.getElementsByClassName("go3")[0]


thirdButton.onclick = function () {
    ThirdForm.style.display = "flex"
}

remove2.onclick = function () {
    ThirdForm.style.display = "none"
}




const validCredentials2 = {
    '1': 'password1',
    '2': 'mahmoud saad',
    '3': 'password3',
    '4': 'password4',
    '5': 'password5',
    '6': 'password6',
    '7': 'password7',
    '8': 'password8',
    '9': 'password9',
    '10': 'password10',
    '11': 'password1',
    '12': 'mahmoud saad',
    '13': 'password3',
    '14': 'password4',
    '15': 'password5',
    '16': 'password6',
    '17': 'password7',
    '18': 'password8',
    '19': 'password9',
    '20': 'password10',
    '21': 'password1',
    '22': 'mahmoud saad',
    '23': 'password3',
    '24': 'password4',
    '25': 'password5',
    '26': 'password6',
    '27': 'password7',
    '28': 'password8',
    '29': 'password9',
    '30': 'password10',
    '31': 'password1',
    '32': 'mahmoud saad',
    '33': 'password3',
    '34': 'password4',
    '35': 'password5',
    '36': 'password6',
    '37': 'password7',
    '38': 'password8',
    '39': 'password9',
    '40': 'password10',
    '41': 'password1',
    '42': 'mahmoud saad',
    '43': 'password3',
    '44': 'password4',
    '45': 'password5',
    '46': 'password6',
    '47': 'password7',
    '48': 'password8',
    '49': 'password9',
    '50': 'password10',
    '51': 'password1',
    '52': 'mahmoud saad',
    '53': 'password3',
    '54': 'password4',
    '55': 'password5',
    '56': 'password6',
    '57': 'password7',
    '58': 'password8',
    '59': 'password9',
    '60': 'password10',
    '61': 'password1',
    '62': 'mahmoud saad',
    '63': 'password3',
    '64': 'password4',
    '65': 'password5',
    '66': 'password6',
    '67': 'password7',
    '68': 'password8',
    '69': 'password9',
    '70': 'password10',
    '71': 'password1',
    '72': 'mahmoud saad',
    '73': 'password3',
    '74': 'password4',
    '75': 'password5',
    '76': 'password6',
    '77': 'password7',
    '78': 'password8',
    '79': 'password9',
    '80': 'password10',
    '81': 'password1',
    '82': 'mahmoud saad',
    '83': 'password3',
    '84': 'password4',
    '85': 'password5',
    '86': 'password6',
    '87': 'password7',
    '88': 'password8',
    '89': 'password9',
    '90': 'password10',
    '91': 'password1',
    '92': 'mahmoud saad',
    '93': 'password3',
    '94': 'password4',
    '95': 'password5',
    '96': 'password6',
    '97': 'password7',
    '98': 'password8',
    '99': 'password9',
    '100': 'password10'
};

go3.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials2[userName2.value] && validCredentials2[userName2.value] === code2.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }



    localStorage.setItem("code", code2.value)
    code2.value = localStorage.getItem("code")
});


// go3.onclick = function (event) {
//     if (userName2.value != "156.217.105.194") {
//         event.preventDefault()
//     }
// }




let fourthBtn = document.getElementsByClassName("fourth-button")[0]
let fourthForm = document.getElementsByClassName("fourth-form")[0]
let remove3 = document.getElementsByClassName("remove3")[0]
let code3 = document.getElementsByClassName("code3")[0]
let go4 = document.getElementsByClassName("go4")[0]
let userName3 = document.getElementsByClassName("username3")[0]

fourthBtn.onclick = function () {
    fourthForm.style.display = "flex"
}


remove3.onclick = function () {

    fourthForm.style.display = "none"
}




const validCredentials3 = {
    '1': '1234',
    '2': '5678',
    '3': '9101',
    '4': '1121',
    '5': '3141',
    '6': '5161',
    '7': '7181',
    '8': '9202',
    '9': '1222',
    '10': '3242',
    '11': '5262',
    '12': '7282',
    '13': '9303',
    '14': '1323',
    '15': '3343',
    '16': '5363',
    '17': '7383',
    '18': '9404',
    '19': '1424',
    '20': '3444',
    '21': '5464',
    '22': '7484',
    '23': '9505',
    '24': '1525',
    '25': '3545',
    '26': '5565',
    '27': '7585',
    '28': '9606',
    '29': '1626',
    '30': '3646',
    '31': '5666',
    '32': '7686',
    '33': '9707',
    '34': '1727',
    '35': '3747',
    '36': '5767',
    '37': '7787',
    '38': '9808',
    '39': '1828',
    '40': '3848',
    '41': '5868',
    '42': '7888',
    '43': '9909',
    '44': '1929',
    '45': '3949',
    '46': '5969',
    '47': '7989',
    '48': '9001',
    '49': '2030',
    '50': '4050',
    '51': '6070',
    '52': '8090',
    '53': '9111',
    '54': '2131',
    '55': '4151',
    '56': '6171',
    '57': '8191',
    '58': '9212',
    '59': '2232',
    '60': '4252',
    '61': '6272',
    '62': '8292',
    '63': '9313',
    '64': '2333',
    '65': '4353',
    '66': '6373',
    '67': '8393',
    '68': '9414',
    '69': '2434',
    '70': '4454',
    '71': '6474',
    '72': '8494',
    '73': '9515',
    '74': '2535',
    '75': '4555',
    '76': '6575',
    '77': '8595',
    '78': '9616',
    '79': '2636',
    '80': '4656',
    '81': '6676',
    '82': '8696',
    '83': '9717',
    '84': '2737',
    '85': '4757',
    '86': '6777',
    '87': '8797',
    '88': '9818',
    '89': '2838',
    '90': '4858',
    '91': '6878',
    '92': '8898',
    '93': '9919',
    '94': '2939',
    '95': '4959',
    '96': '6979',
    '97': '8999',
    '98': '9090',
    '99': '9191',
    '100': '9292'
};

go4.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials3[userName3.value] && validCredentials3[userName3.value] === code3.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }


    localStorage.setItem("code", code3.value)
    code3.value = localStorage.getItem("code")



});




let fifthBtn = document.getElementsByClassName("fifth-button")[0]
let fifthForm = document.getElementsByClassName("fifth-form")[0]
let remove4 = document.getElementsByClassName("remove4")[0]
let code4 = document.getElementsByClassName("code4")[0]
let go5 = document.getElementsByClassName("go5")[0]
let userName4 = document.getElementsByClassName("username4")[0]

fifthBtn.onclick = function () {
    fifthForm.style.display = "flex"
}


remove4.onclick = function () {

    fifthForm.style.display = "none"
}




const validCredentials4 = {
    '1': '1234',
    '2': '5678',
    '3': '9101',
    '4': '1121',
    '5': '3141',
    '6': '5161',
    '7': '7181',
    '8': '9202',
    '9': '1222',
    '10': '3242',
    '11': '5262',
    '12': '7282',
    '13': '9303',
    '14': '1323',
    '15': '3343',
    '16': '5363',
    '17': '7383',
    '18': '9404',
    '19': '1424',
    '20': '3444',
    '21': '5464',
    '22': '7484',
    '23': '9505',
    '24': '1525',
    '25': '3545',
    '26': '5565',
    '27': '7585',
    '28': '9606',
    '29': '1626',
    '30': '3646',
    '31': '5666',
    '32': '7686',
    '33': '9707',
    '34': '1727',
    '35': '3747',
    '36': '5767',
    '37': '7787',
    '38': '9808',
    '39': '1828',
    '40': '3848',
    '41': '5868',
    '42': '7888',
    '43': '9909',
    '44': '1929',
    '45': '3949',
    '46': '5969',
    '47': '7989',
    '48': '9001',
    '49': '2030',
    '50': '4050',
    '51': '6070',
    '52': '8090',
    '53': '9111',
    '54': '2131',
    '55': '4151',
    '56': '6171',
    '57': '8191',
    '58': '9212',
    '59': '2232',
    '60': '4252',
    '61': '6272',
    '62': '8292',
    '63': '9313',
    '64': '2333',
    '65': '4353',
    '66': '6373',
    '67': '8393',
    '68': '9414',
    '69': '2434',
    '70': '4454',
    '71': '6474',
    '72': '8494',
    '73': '9515',
    '74': '2535',
    '75': '4555',
    '76': '6575',
    '77': '8595',
    '78': '9616',
    '79': '2636',
    '80': '4656',
    '81': '6676',
    '82': '8696',
    '83': '9717',
    '84': '2737',
    '85': '4757',
    '86': '6777',
    '87': '8797',
    '88': '9818',
    '89': '2838',
    '90': '4858',
    '91': '6878',
    '92': '8898',
    '93': '9919',
    '94': '2939',
    '95': '4959',
    '96': '6979',
    '97': '8999',
    '98': '9090',
    '99': '9191',
    '100': '9292'
};

go5.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials4[userName4.value] && validCredentials4[userName4.value] === code4.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }


    localStorage.setItem("code", code4.value)
    code4.value = localStorage.getItem("code")



});











const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const inputIds = ['userInput1', 'userInput2', 'userInput3', 'userInput4', 'userInput5', 'userInput6'];

// Function to get a random value from the array
function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to initialize all user inputs with random values if not already set
function initializeUserInputs() {
    inputIds.forEach(id => {
        const userInput = document.getElementById(id);
        let storedValue = localStorage.getItem(id);

        if (!storedValue) {
            storedValue = getRandomValue(myArray);
            localStorage.setItem(id, storedValue);
        }

        userInput.value = storedValue;
    });
}

// Function to generate and set new random values for all inputs
function setNewRandomValues() {
    inputIds.forEach(id => {
        const newValue = getRandomValue(myArray);
        const userInput = document.getElementById(id);
        userInput.value = newValue;
        localStorage.setItem(id, newValue);
    });
}

// Initialize the input fields when the page loads
window.addEventListener('load', initializeUserInputs);

// Event listener for the button to generate new random values




let loader = document.getElementsByClassName("loader")[0]

window.onload = function () {
    loader.style.display = "none"
}









