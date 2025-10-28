function myToPDF(title, sel) {
    //
    // IMPORTANT: Make sure to import jsPDF and jspdf-autotable.
    // In this example, they are imported via <script> tags in the HTML file.
    //
    var ct = 0;

console.log(title + "      " + sel);


    var originalTable = document.querySelector(sel);
    var clonedTable = originalTable.cloneNode(true);
    var firstRow = clonedTable.rows[0];
    if (firstRow) {
      firstRow.remove();
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
         drawRow: (row) => {
           if (row.index > 0 && row.index % rowsPerPage === 0) {
             doc.autoTableAddPage();
           }
         },
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
    const fn = "testpdf_" + (new Date()).toLocaleString() + ".pdf";
    const windowName = 'PDF';
    const screenWidth = Math.trunc(screen.width * .65);
    const screenHeight = Math.trunc(screen.height * .80);
    const windowFeatures = 'width=' + screenWidth + ',height=' + screenHeight + ',popup=yes,scrollbars=yes,resizable=yes';
    var popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
    popupWindow.moveTo(50, 50);
    popupWindow.focus();
    doc.save(title + ".pdf");
    document.body.removeChild(clonedTable);

}
