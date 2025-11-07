function myToPDFSaveAndPopUp(title, sel) {
    myToPDF(title, sel, 0);
}
function myToPDFSave(title, sel) {
    myToPDF(title, sel, 1);
}
function myToPDFPopUp(title, sel) {
    myToPDF(title, sel, 2);
}

function myToPDFSaveAllMany() {
    document.querySelectorAll(".e").forEach(element => {
              var nom = element.getAttribute('nom');
              console.log(nom + "    " +  "#"+element.id);
              myToPDFSave(nom, "#"+element.id);
    });
}
function myToPDFSaveAll() {
    var table1;
    var table2;
    var flag = 0;
    document.querySelectorAll(".e").forEach(element => {
        if ( flag == 0) {
            table1 = element.cloneNode(true);
            flag=1;
        }
        else {
            table2 = element
            combineTables(table1, table2);
            flag=1;
        }
    });

    myToPDFSave("MaMa", table1);

}
function myToPDF(title, sel, option) {
    //
    // IMPORTANT: Make sure to import jsPDF and jspdf-autotable.
    // In this example, they are imported via <script> tags in the HTML file.
    //
    var ct = 0;
    var originalTable;
    var clonedTable;
    var firstRow;

    if (sel instanceof Node) {
        clonedTable = sel.cloneNode(true);
    } else {
        originalTable = document.querySelector(sel);
        clonedTable = originalTable.cloneNode(true);
        firstRow = clonedTable.rows[0];
        if (firstRow) {
          firstRow.remove();
        }
    }


    document.body.appendChild(clonedTable);
    clonedTable.id = 'clonedTable';
    sel="#clonedTable";

    var { jsPDF } = window.jspdf;
    var doc = new jsPDF({
        orientation: "landscape"
    });

    var wwww = getTextWidth("Study");
    var rowsPerPage = 20;
    var columns = [
    { header: "#", dataKey: "num" },
    { header: "TOPIC", dataKey: "topic" },
    { header: "TITLE", dataKey: "title" },
    { header: "QUESTION", dataKey: "question" }
    ];

    doc.autoTable({ 
         html: sel,
         columns: columns,
         columnStyles: {
             num:      { cellWidth: 'auto' },
             topic:    { cellWidth: wwww },
             title:    { cellWidth: 'auto' },
             question: { cellWidth: 'auto' }
         },
         theme: "grid",
         styles: {
             fontSize: 10 // Sets the font size for the entire table
         },
         didDrawPage: function (data) {
            ct = ct +1
            // Add a report title as a header on every page
            doc.setFontSize(20);
            var pageWidth = doc.internal.pageSize.width;
            var now = new Date();
            doc.text("Java Exercises " + now.toLocaleString() + " -- Page " + ct.toString(), pageWidth - 15, 10, { align: 'right' }); // 10 units from the right edge
          }
      });

    //THIS ONE
    var popupWindow;
    const fn = "pdf_" + (new Date()).toLocaleString() + ".pdf";
    const windowName = 'PDF';
    const screenWidth = Math.trunc(screen.width * .65);
    const screenHeight = Math.trunc(screen.height * .80);
    const windowFeatures = 'width=' + screenWidth + ',height=' + screenHeight + ',popup=yes,scrollbars=yes,resizable=yes';
    if (option == 0) {
        popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
        popupWindow.moveTo(50, 50);
        popupWindow.focus();
    }
    if (option == 2) {
        popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
        popupWindow.moveTo(50, 50);
        popupWindow.focus();
    }

    if (option == 0) {
        doc.save(title + ".pdf");
    }
    if (option == 1) {
        doc.save(title + ".pdf");
    }

    document.body.removeChild(clonedTable);

}

//         drawRow: (row) => {
//           if (row.index > 0 && row.index % rowsPerPage === 0) {
//             doc.autoTableAddPage();
//           }
//         },
    /**
         * Combines two HTML table nodes into one by moving rows.
         *
         * This function moves all <tr> elements from all <tbody> elements
         * in `table2` and appends them to the *first* <tbody> element in `table1`.
         *
         * - If `table1` has no <tbody>, one will be created.
         * - This function does *not* merge <thead> or <tfoot> sections.
         * - The <tbody> elements in `table2` will be empty after the operation.
         *
         * @param {HTMLTableElement} table1 - The target table (node to merge into).
         * @param {HTMLTableElement} table2 - The source table (node to merge from).
         */
        function combineTables(table1, table2) {
            // 1. Validate inputs
            if (!table1 || !(table1 instanceof HTMLTableElement)) {
                console.error("Invalid argument: table1 must be an HTMLTableElement.");
                return;
            }
            if (!table2 || !(table2 instanceof HTMLTableElement)) {
                console.error("Invalid argument: table2 must be an HTMLTableElement.");
                return;
            }

            // 2. Find or create the target <tbody> in table1
            let targetTbody = table1.querySelector('tbody');

            if (!targetTbody) {
                targetTbody = document.createElement('tbody');

                // Try to append smartly: after <thead> or <caption>, before <tfoot>
                const caption = table1.querySelector('caption');
                const thead = table1.querySelector('thead');
                const tfoot = table1.querySelector('tfoot');

                if (tfoot) {
                    // Insert before the tfoot
                    table1.insertBefore(targetTbody, tfoot);
                } else if (thead) {
                    // Insert after the thead
                    thead.insertAdjacentElement('afterend', targetTbody);
                } else if (caption) {
                    // Insert after the caption
                    caption.insertAdjacentElement('afterend', targetTbody);
                } else {
                    // Just append to the table
                    table1.appendChild(targetTbody);
                }
            }

            // 3. Get all <tbody> elements from table2
            // The browser implicitly wraps any loose <tr> elements in a <tbody>,
            // so this should catch all body rows.
            const sourceTbodies = table2.querySelectorAll('tbody');

            // 4. Move all rows (<tr>) from each source <tbody> to the target <tbody>
            sourceTbodies.forEach(tbody => {
                // Using a while loop is efficient as appendChild moves the node
                // from tbody.children, automatically advancing to the next child.
                while (tbody.firstChild) {
                    targetTbody.appendChild(tbody.firstChild);
                }
            });
        }
function checkVar(myVar) {
  if (typeof myVar === 'string') {
    console.log("The variable is a string.");
    
  } else if (myVar instanceof Node) {
    console.log("The variable is a DOM Node.");
    
  } else {
    console.log("The variable is something else (e.g., a number, object, array, null, etc.).");
  }
}

