function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
        let jobs = document.getElementsByName('job');
        let job;
        for (let jobElement of jobs) {
            if (jobElement.checked) {
                job = jobElement.value;
            }
        }
        console.log(job);
        if (job) {
            alert("Thank you for applying to be a " + job + "!");
        } else {
            alert("Please select a job!");

        }
}
document.getElementById("job-apply").addEventListener("click", () => {
    submitApplication();
});