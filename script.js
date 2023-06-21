
  const facultyData = "Fawzi Emad, Senior Lecturer, CMSC132FawziEman.html, IRB 2212, https://www.cs.umd.edu/~fpe/\nClifford Bakalian, Lecturer, CMSC330CliffBakalian.html, IRB 1144, https://www.cliffbakalian.dev\nPedram Sadeghian, Lecturer, CMSC131PedramSadeghian.html, IRB 1214, https://ani0075saha.github.io\nEvan Golub, Principal Lecturer, CMSC131Pedram Sadeghian.html, IRB 1210, http://www.cs.umd.edu/~egolub/professional.shtml\nSoheil Feizi, Assistant Professor, CMSC131Pedram Sadeghian.html, IRB 1202, https://www.cs.umd.edu/~sfeizi/\nMichael Marsh, Lecturer, CMSC131Pedram Sadeghian.html, IRB 2218, https://mhicks.me\nMichel Cummings, Affiliate Professor, CMSC131Pedram Sadeghian.html, IRB 3240, https://biology.umd.edu/people/michael-cummings\nDaniel Abadi,Darnell-Kanal Professor of Computer Science, officeHours.html, IRB 5156, https://www.cs.umd.edu/~abadi/\nAshok Agrawala, Professor, officeHours.html, IRB 5204, https://www.cs.umd.edu/~agrawala/\nAndreea Alexandru, Post-Doctoral Associate, officeHours.html, IRB 5252, https://andreea-alexandru.github.io\nJohn Aloimonos, Professor, officeHours.html, IRB 4214, http://users.umiacs.umd.edu/~yiannis/\nWilliam Arbaugh, Associate Professor Emeritus, officeHours.html, IRB 2164, https://www.cs.umd.edu/~waa/UMD/Home.html\nBahar Asgari, Assistant Professor, officeHours.html, IRB 5148, https://www.cs.umd.edu/~bahar/\nVictor Basili, Professor Emeritus - Research Professor, officeHours.html, IRB 2164, https://www.cs.umd.edu/~basili/\nLeilani Battle, Adjuct Assitant Professor, officeHours.html, IRB 5148, None\nAniket Bera, Affiliate Assistant Research Professor, officeHours.html, IRB 5144, https://www.cs.purdue.edu/homes/ab/\nAbhinav Bhatele, Associate Professor, officeHours.html, IRB 5218, https://www.cs.umd.edu/~bhatele/\nBobby Bhattacharjee, Professor, officeHours.html, IRB 5140, https://www.cs.umd.edu/~bobby/\nJordan Boyd-Graber, Associate Professor, officeHours.html, IRB 4146, http://users.umiacs.umd.edu/~jbg/ \nMarine Carpuat, Associate Professor, officeHours.html, IRB 4130, https://www.cs.umd.edu/~marine/\nRance Cleveland, Professor-CMNS Associate Dean for Research, officeHours.html, IRB 3226, https://www.cs.umd.edu/~rance/\nHector Corrada Bravo, Adjuct Associate Professor, officeHours.html, IRB 3226, http://www.hcbravo.org\nMichel Cummings, Affiliate Professor, officeHours.html, IRB 3240, https://biology.umd.edu/people/michael-cummings"













    const lines = facultyData.split("\n");
    const table = document.getElementById("list");
    const searchInput = document.getElementById('filter-search');
    searchInput.style.width = "600px";
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        let match = false;
        
        for (let j = 0; j < row.cells.length - 1; j++) {
          const cell = row.cells[j];
          const text = cell.textContent.toLowerCase();
          
          if (text.includes(query)) {
            match = true;
            break;
          }
        }
        if (match) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
    
    lines.forEach(line => {
      const values = line.split(",");
      const row = table.insertRow();
      values.forEach((value, index) => {
        const cell = row.insertCell();
        if (index === values.length - 1) {
          const link = document.createElement("a");
          link.href = "openSite.html?value=" + value;
          const icon = document.createElement("i");
          icon.classList.add("fa", "fa-cloud");
          link.appendChild(icon);
          cell.appendChild(link);
        } else if (index === values.length - 3){
          const link = document.createElement("a");
          link.href = value;
          const icon = document.createElement("i");
          icon.classList.add("fa", "fa-list");
          link.appendChild(icon);
          cell.appendChild(link);
        } else {
          cell.appendChild(document.createTextNode(value));
        }
      });
    });
