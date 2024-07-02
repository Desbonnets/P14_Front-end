$(function() {

    const generateObjects = () => {
        const objects = [];
        let startDate = new Date('9/1/1978')
        let dateOfBirth = new Date('7/17/1976')
        for (let i = 0; i < 500; i++) {
            objects.push({
                firstName: 'firstName '+i,
                lastName: 'lastName '+i,
                startDate: startDate?.toDateString(),
                department: 'department '+i,
                dateOfBirth: dateOfBirth?.toDateString(),
                street: 'street '+i,
                city: 'city' +i,
                state: 'state '+i,
                zipCode: 'zipCode '+i,
            });

            startDate.setDate(startDate.getDate() + 1);

            dateOfBirth.setDate(dateOfBirth.getDate() + 1);
        }
        return objects;
    };

    let employees = JSON.parse(localStorage.getItem('employees'));
    employees = employees.concat(generateObjects());

    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
});