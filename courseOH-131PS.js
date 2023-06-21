fetch('officeHours.txt')
    .then(response => response.text())
    .then(data => {
        const lines =data.split('\n').filter(line => line.trim() !== '');
        const courses =lines.map(line => {
            const [course, day, start, end, ta, location, instructor] = line.split(',');
            return { course, day, start, end, ta, location, instructor };
        });
        
        //Add the times to the left column of table
        const table = document.getElementById('list');
        for(var i = 9; i <= 17; i++){
            var num = i; 
            if (num > 12){
                num = num - 12; 
            };
            const time = document.createElement('div');
            time.classList.add(i);
            time.innerHTML = `
                <tr class= "row${num}">
                    <td>
                        ${num}:00
                    </td> 
                </tr>`;

           table.appendChild(time);
        };

        const courseCode = "CMSC131";
        const prof = "Pedram Sadeghian";

        //add data to table 
        courses.forEach(course =>{
            if (course.course == courseCode && course.instructor == prof){
                const start = course.start;
                const row = document.getElementsByClassName(start);
                const data = document.createElement('td');
                data.innerHTML = `

                `
            }

        })

       

        array2.forEach(course =>{
            const card = document.createElement('div');
            card.classList.add('col-sm-4');
            card.innerHTML = `
            <div class="card text-center">
                <div class="card-body">
                <h5 class="card-title">
                    ${course.course}
                </h5>
                <p class="card-text">
                    ${course.instructor}
                </p>
                <a href="${course.course + course.instructor}.html" class="stretched-link"></a>
                </div>
            </div>` ;
            cardContainer.appendChild(card);
        });
    })


    