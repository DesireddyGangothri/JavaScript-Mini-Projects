class Employee {
    constructor(name) {
        this.name = name;
        this.isLoggedIn = false;
        this.leaveRequests = [];
    }

    login() {
        if (!this.isLoggedIn) {
            this.isLoggedIn = true;
            alert(`${this.name} has logged in successfully at ${new Date().toLocaleTimeString()}`);
        } else {
            alert(`${this.name} is already logged in`);
        }
    }

    logout() {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            alert(`${this.name} has logged out successfully at ${new Date().toLocaleTimeString()}`);
        } else {
            alert(`${this.name} has not yet logged in`);
        }
    }

    requestLeave(type, days) {
       
            this.leaveRequests.push({ type, days });
            alert(`Sent request to manager for ${this.name}: ${type} leave for ${days} days`);
            setTimeout(() => {
                alert(`${this.name} has successfully granted for ${type} leave for ${days} days`);
            }, 1000);
       
    }
}

const employeeNameInput = document.getElementById("employeeName");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const requestLeaveButton = document.getElementById("requestLeaveButton");
const leaveRequestForm = document.getElementById("leaveRequestForm");
const leaveTypeSelect = document.getElementById("leaveType");
const leaveDaysInput = document.getElementById("leaveDays");
const submitLeaveButton = document.getElementById("submitLeaveButton");

let currentEmployee = null;

employeeNameInput.addEventListener("input", () => {
    requestLeaveButton.disabled = false;
});

loginButton.addEventListener("click", () => {
    const employeeName = employeeNameInput.value;
    if (employeeName) {
        currentEmployee = new Employee(employeeName);
        currentEmployee.login();
        logoutButton.disabled = false;
    } else {
        alert("Please enter employee name");
    }
});

logoutButton.addEventListener("click", () => {
    if (currentEmployee) {
        currentEmployee.logout();
        logoutButton.disabled = true;
    } else {
        alert(`${currentEmployee.name} has not yet logged in`);
    }
});

requestLeaveButton.addEventListener("click", () => {
    leaveRequestForm.style.display = "block";
});

submitLeaveButton.addEventListener("click", () => {
    const leaveType = leaveTypeSelect.value;
    const leaveDays = parseInt(leaveDaysInput.value);

    if (leaveType && leaveDays >= 0 && currentEmployee) { 
        currentEmployee.requestLeave(leaveType, leaveDays);
        leaveRequestForm.style.display = "none";
    } else {
        alert("Please select leave type, enter a positive number of days");
    }
});