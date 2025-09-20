
function openEditor(content) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const targetWidth = viewportWidth * 0.85;
            const targetHeight = viewportHeight * 0.85;
            const popupWidth = targetWidth;
            const popupHeight = targetHeight;
            const left = (screen.width / 2) - (popupWidth / 2);
            const top = (screen.height / 2) - (popupHeight / 2);
            const popup = window.open('', 'JavaCodeEditor', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);
            popup.document.open();
            popup.document.write(ContentDocTop);
            popup.document.write(content);
            popup.document.write(ContentEndComment);
            popup.document.write(ContentApplicationClass);
            popup.document.write(ContentDocBottom);
            popup.document.close();
}
function exportTableToPDF(sel) {
    //
    // IMPORTANT: Make sure to import jsPDF and jspdf-autotable.
    // In this example, they are imported via <script> tags in the HTML file.
    //
    var ct = 0;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    const doc = new jsPDF({
        orientation: "landscape"
    });

    // Use autoTable to generate the table.
    // The 'html' option is used to specify the HTML table element.
    // doc.autoTable({ html: '#myTable' });
    // doc.autoTable({ html: sel });
    const box = document.querySelectorAll(sel);
    doc.autoTable({ html: sel,
         styles: {
             fontSize: 12 // Sets the font size for the entire table
         },
         didDrawPage: function (data) {
            ct = ct +1
            // Add a report title as a header on every page
            doc.setFontSize(20);
            var pageWidth = doc.internal.pageSize.width;
            doc.text(ct.toString(), pageWidth - 10, 10, { align: 'right' }); // 10 units from the right edge
          }
      });

    // Save the PDF
    // doc.save('table.pdf');
    // doc.output('dataurl');
    //
    // doc.output('save','table.pdf');
    // window.open(doc.output('bloburl'));
    //
    // const pdfDataUri = doc.output('datauristring');
    // const iframe = document.createElement('iframe');
    // iframe.style.width = '100%';
    // iframe.style.height = '600px';
    // iframe.src = pdfDataUri;
    // document.body.appendChild(iframe);
    const windowName = 'PDF';
    const screenWidth = Math.trunc(screen.width * .65);
    const screenHeight = Math.trunc(screen.height * .80);
    const windowFeatures = 'width=' + screenWidth + ',height=' + screenHeight + ',popup=yes,scrollbars=yes,resizable=yes';
    const popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
    popupWindow.moveTo(50, 50);
    popupWindow.focus();

}
function ettp(sel) {
    exportTableToPDF(sel);
}

function exportTableToPDF2() {
    // Select all elements with the class 'info-box'
    const infoBoxes = document.querySelectorAll('.exset');
    var ct = 0
    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: "landscape"
    });

    // Loop over the NodeList using forEach
    infoBoxes.forEach(function(box) {
        //doc.text("This is a landscape PDF!", 10, 10);
      doc.autoTable({ html: box ,
         styles: {
             fontSize: 12 // Sets the font size for the entire table
         },
         didDrawPage: function (data) {
             ct = ct +1
            // Add a report title as a header on every page
            doc.setFontSize(20);
            doc.text( box.getAttribute('nom'), 10,10);
                 var pageWidth = doc.internal.pageSize.width;
                 doc.text(ct.toString(), pageWidth - 10, 10, { align: 'right' }); // 10 units from the right edge
          }
      });
      doc.addPage();
    });

    // Save the PDF
    //doc.output('save','table.pdf');
    // window.open(doc.output('bloburl'));
    const windowName = 'PDF';
    const screenWidth = Math.trunc(screen.width * .65);
    const screenHeight = Math.trunc(screen.height * .80);
    const windowFeatures = 'width=' + screenWidth + ',height=' + screenHeight + ',popup=yes,scrollbars=yes,resizable=yes';
    const popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
    popupWindow.moveTo(50, 50);
    popupWindow.focus();
}
function ettp2() {
    exportTableToPDF2();
}
function fastEdit(url) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const targetWidth = viewportWidth * 0.85;
            const targetHeight = viewportHeight * 0.85;
            const popupWidth = targetWidth;
            const popupHeight = targetHeight;
            const left = (screen.width / 2) - (popupWidth / 2);
            const top = (screen.height / 2) - (popupHeight / 2);
            const popup = window.open(url, 'JavaCodeEditor', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);
}


document.addEventListener('DOMContentLoaded', function() {
        // Your code here will run after the DOM is ready.
        console.log('DOM fully loaded and parsed');
        // The entire content of the Java code editor page is stored in this template literal.
        // now in editor.js
 
        document.getElementById('main-content').classList.remove('hidden');

        // Event listener for the launch button
        document.getElementById('open-editor-btn').addEventListener('click', () => {
            // Define properties for the popup window was 900 750
            // // Get the viewport's width and height
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate 85% of the dimensions
            const targetWidth = viewportWidth * 0.85;
            const targetHeight = viewportHeight * 0.85;

            // Log the results to the console
            console.log(`Viewport Width: ${viewportWidth}px, Target Width (85%): ${targetWidth.toFixed(2)}px`);
            console.log(`Viewport Height: ${viewportHeight}px, Target Height (85%): ${targetHeight.toFixed(2)}px`);

            const popupWidth = targetWidth;
            const popupHeight = targetHeight;

            const left = (screen.width / 2) - (popupWidth / 2);
            const top = (screen.height / 2) - (popupHeight / 2);

            // Open a new window
            const popup = window.open('', 'JavaCodeEditor', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

            // Write the stored HTML content into the new window
            popup.document.open();
            popup.document.write(Content0);
            popup.document.close();
        });
});




        // This script uses plain JavaScript for maximum reliability.
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');

            function showSection(targetId) {
                // Hide all content sections
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });

                // Remove 'active' class from all navigation links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Show the target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }

                // Add 'active' class to the corresponding link
                const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            // Set up click events for all navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('data-target');
                    showSection(targetId);
                });
            });

            // Show the first section by default when the page loads.
            showSection('intro');
        });


        // --- COOKIE HELPER FUNCTIONS (Unchanged) ---

        /**
         * Sets a cookie with a given name, value, and expiration in days.
         * @param {string} name - The name of the cookie.
         * @param {string} value - The value to store in the cookie.
         * @param {number} days - The number of days until the cookie expires.
         */
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        }

        /**
         * Retrieves the value of a cookie by its name.
         * @param {string} name - The name of the cookie to retrieve.
         * @returns {string|null} The cookie's value, or null if not found.
         */
        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }

        // --- REFACTORED MAIN LOGIC ---

        // Wait for the DOM to be fully loaded before running the script
        document.addEventListener('DOMContentLoaded', () => {
            // Select all checkboxes that should have their state saved
            const savableCheckboxes = document.querySelectorAll('.savable-checkbox');

            // Iterate over each of these checkboxes
            savableCheckboxes.forEach(checkbox => {
                // Use the checkbox's 'name' attribute as its unique cookie key
                const cookieName = checkbox.name;

                // 1. LOAD the saved state for this specific checkbox
                const savedState = getCookie(cookieName);
                if (savedState !== null) {
                    // Set the checkbox state based on the cookie's string value
                    checkbox.checked = (savedState === 'true');
                }

                // 2. SAVE the state whenever this specific checkbox is changed
                checkbox.addEventListener('change', () => {
                    const isChecked = checkbox.checked;
                    // Save the current state to a cookie named after the checkbox
                    setCookie(cookieName, isChecked, 7); // Cookie expires in 7 days
                    console.log(`Saved state for '${cookieName}': ${isChecked}`);
                });
            });
        });
