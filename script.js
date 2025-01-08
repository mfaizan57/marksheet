function handleForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const fullName = document.getElementById('name').value;
    const engMark = Number(document.getElementById('engMark').value);
    const mathMark = Number(document.getElementById('mathMark').value);
    const sciMark  = Number(document.getElementById('sciMark').value);
    const totalMark  = Number(document.getElementById('totalMark').value);

    const obtainedMarks = engMark + mathMark + sciMark;

    const percentage = obtainedMarks / totalMark * 100;
    const roundedPercentage = Math.round(percentage * 100) / 100;
    let grade;
    let reMarks;
    if (percentage >= 80 && percentage <= 100) {
        grade = 'A-one';
        reMarks = 'Excellent';
    } else if (percentage >= 70 && percentage < 80) {
        grade = 'A';
        reMarks = 'Good';
    } else if (percentage >= 60 && percentage < 70) {
        grade = 'B';
        reMarks = 'You need to improve';
    } else if (percentage < 60) {
        grade = 'F';
        reMarks = 'Sorry';
    } else {
        grade = 'Invalid';
        reMarks = 'Null';
    }


    console.log('Full Name:', fullName);
    console.log('Marks Obtained:', obtainedMarks);
    console.log('Total Marks:', totalMark);
    console.log('Percentage:', roundedPercentage + '%');
    console.log('Grade:', grade);
    console.log('Remarks:', reMarks);

}