const admins = [
    {
        login: "admin1",
        password: "azerty",
    },
    {
        login: "admin2",
        password: "azerty",
    },
];

localStorage.setItem("credentials", JSON.stringify(admins));

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const isLoginValid = () => {
        if (login === admins[0].login || login === admins[1].login) {
            return true;
        } else {
            return false;
        }
    };
    isLoginValid();

    const isPasswordValid = () => {
        if (
            password === admins[0].password ||
            password === admins[1].password
        ) {
            return true;
        } else {
            return false;
        }
    };
    isPasswordValid();

    if (isLoginValid() && isPasswordValid()) {
        const newUser = {
            login: login,
            password: password,
        };
        const newAdmins = JSON.parse(localStorage.getItem("credentials"));
        newAdmins.push(newUser);
        localStorage.setItem("credentials", JSON.stringify(newAdmins));
        window.location.href = "backoffice.html";
    } else {
        loginForm.reset();
        const wrongCredentialsMsg =
            document.getElementById("wrong-credentials");
        wrongCredentialsMsg.style.visibility = "visible";
        setTimeout(() => {
            wrongCredentialsMsg.style.visibility = "hidden";
        }, 2500);
    }
});
