class TicketBookingForm {
  constructor() {
    this.bookingForm = document.getElementById("bookingForm");
    this.previewButton = document.getElementById("previewButton");
    this.cancelButton = document.getElementById("cancelButton");

    this.bookingForm.addEventListener("submit", this.handleSubmit.bind(this));
    this.previewButton.addEventListener("click", this.handlePreview.bind(this));
    this.cancelButton.addEventListener("click", this.handleCancel.bind(this));

    const pnr = this.generatePNR();
    this.pnr = pnr;

    const today = new Date().toISOString().split('T')[0]; 
    document.getElementById('date').setAttribute('min', today);
  }

  generatePNR() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  checkDate() {
    const selectedDate = document.getElementById('date').value;
    const today = new Date().toISOString().split('T')[0]; 

    if (selectedDate < today) {
      alert("Please select a valid date. The date should be today or in the future.");
      document.getElementById('date').value = ''; 
      return false;
    }
    return true;
  }

  handlePreview(event) {
    event.preventDefault();

    if (!this.checkDate()) {
      return; 
    }

    const formData = new FormData(this.bookingForm);
    const name = formData.get("name");
    const trainNumber = formData.get("trainNumber");
    const from = formData.get("from");
    const to = formData.get("to");
    const date = formData.get("date");
    const classSelected = formData.get("class");
    const reservationType = formData.get("reservationType");

    alert(`Please confirm your booking details:\n\nName: ${name}\nTrain Number: ${trainNumber}\nPNR: ${this.pnr}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nClass: ${classSelected}\nReservation Type: ${reservationType}\n\nDo you want to proceed with the booking?`);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.checkDate()) {
      return; 
    }

    const formData = new FormData(this.bookingForm);
    const name = formData.get("name");
    const trainNumber = formData.get("trainNumber");
    const from = formData.get("from");
    const to = formData.get("to");
    const date = formData.get("date");
    const classSelected = formData.get("class");
    const reservationType = formData.get("reservationType");

    alert(`Booking successful!\nName: ${name}\n\nTrain Number: ${trainNumber}\nPNR: ${this.pnr}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nClass: ${classSelected}\nReservation Type: ${reservationType}`);
  }

  handleCancel(event) {
    event.preventDefault();

    const formData = new FormData(this.bookingForm);
    const name = formData.get("name");
    const trainNumber = formData.get("trainNumber");
    const from = formData.get("from");
    const to = formData.get("to");
    const date = formData.get("date");
    const classSelected = formData.get("class");
    const reservationType = formData.get("reservationType");

    alert(`Booking cancellation successful!\n\nName: ${name}\nTrain Number: ${trainNumber}\nPNR: ${this.pnr}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nClass: ${classSelected}\nReservation Type: ${reservationType}`);

    this.clearForm();
  }

  clearForm() {
    this.bookingForm.reset();
  }
}

const bookingApp = new TicketBookingForm();