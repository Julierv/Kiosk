/* eads from
*/
fetch('officeHours.txt')
    .then(response => response.text())
    .then(data => {
        const lines =data.split('\n').filter(line => line.trim() !== '');
        const courses =lines.map(line => {
            const [course, day, start, end, ta, location, instructor] = line.split(',');
            return { course, day, start, end, ta, location, instructor };
        });

        const tableBody =document.querySelector('#data tbody');
        courses.forEach(course => {
            const row =tableBody.insertRow();
            row.innerHTML = `
                <td>${course.course}</td>
                <td>${course.day}</td>
                <td>${course.start}</td>
                <td>${course.end}</td>
                <td>${course.ta}</td>
                <td>${course.location}</td>
                <td>${course.instructor}</td>
            `;
        });
    });