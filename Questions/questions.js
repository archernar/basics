/**
 * Selects and returns a random <tr> element from a given <table> element.
 *
 * @param {HTMLTableElement} tableElement The table element to select a row from.
 * @returns {HTMLTableRowElement|null} A random table row element, or null if the table has no rows.
 */
function getRandomTableRow(tableElement) {
  // 1. Get all the rows in the table.
  // The .rows property returns a live HTMLCollection of all <tr> elements.
  const rows = tableElement.rows;

  // 2. Get the total number of rows.
  const rowCount = rows.length;

  // 3. Handle the edge case where the table is empty.
  if (rowCount === 0) {
    return null;
  }

  // 4. Generate a random index number.
  // Math.random() returns a number between 0 (inclusive) and 1 (exclusive).
  // Multiplying by rowCount gives a number from 0 to rowCount-1.
  // Math.floor() rounds it down to the nearest whole number (our index).
  const randomIndex = Math.floor(Math.random() * rowCount);

  // 5. Return the row at the random index.
  return rows[randomIndex];
}

function showRandomTopic() {
//function getRandomTableRow(tableElement) {
    var tab=document.createElement('table');
    tab.classList.add('examtable');
    setClasses(tab, 'width91');
    tab.setAttribute('border','1');
    tab.setAttribute('id','test');
    var sz=""
    sz = "<a onclick=" + dq("ettp('#randomtopictable')") + ">TO PDF</a><br><br>"
    sz = sz + "<table id='randomtopictable'><tr><td><div class='content-grid'>"
    // Loop from 0 to 4
    for (let i = 0; i < 100; i++) {
        console.log(`The current number is ${i}`);
        var p=getRandomDiv('.topic-card-detail')
        const uno = p.querySelector('div:nth-of-type(1)').innerHTML;
        const dua = p.querySelector('div:nth-of-type(2)').innerHTML;
        sz = sz + swapClass(p, 'topic-card-detail','topic-card').outerHTML;

        tr=createElementWithClasss('tr', 'examtr');
        tab.appendChild(tr);

        td=createElementWithClasss('td', 'examtd');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(i));

        td=createElementWithClasss('td', 'examtd');
        setWidthClass(td, 'width50');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(uno));

        td=createElementWithClasss('td', 'examtd');
        tr.appendChild(td);
        td.innerHTML=dua;
        // td.appendChild(document.createTextNode(dua.replace(/<br>/g, "\n")));

    }
    if (1==2) {
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
        sz = sz + selectRandomDiv('.topic-card-detail', 'topic-card-detail','topic-card').outerHTML;
    }
    sz = sz + "</td></tr></table></div>" 
    // showPopup(selectRandomDiv('.topic-card'));
    //showPopupInnerHTML(sz);
    document.getElementById('popupOverlay').innerHTML = "";
    document.getElementById('popupOverlay').innerHTML = "<button onclick='hidePopup();'>Close</button>&nbsp;<button onclick='exportTest()'>Export Test to PDF</button><br><br>"
    document.getElementById('popupOverlay').append(tab);
    exportTest();
    // showOverlay();
}
function hidePopup() {
            document.getElementById('popupOverlay').classList.remove('popupVisible');
            document.getElementById('popupOverlay').classList.add('popupHidden');
            document.getElementById('main-content').classList.remove('blurry');
            document.getElementById('main-content').classList.add('notblurry');
}
function showPopupInnerHTML(innerhtml) {
            // Copy the content from the source div to the popup body
            document.getElementById('popupOverlay').innerHTML = "<button onclick='hidePopup();'>Close</button><br>" + innerhtml + "<br><button onclick='hidePopup();'>Close</button>"

            // Make the overlay visible
            document.getElementById('popupOverlay').classList.remove('popupHidden');
            document.getElementById('popupOverlay').classList.add('popupVisible');
            document.getElementById('main-content').classList.remove('notblurry');
            document.getElementById('main-content').classList.add('blurry');
        }
function showOverlay() {
            document.getElementById('popupOverlay').classList.remove('popupHidden');
            document.getElementById('popupOverlay').classList.add('popupVisible');
}
function showPopup(sourceDiv) {
            // Ensure the source div exists and has the 'momo' class
            if (!sourceDiv) {
                console.error("Invalid Source DIV");
                return;
            }

            // Copy the content from the source div to the popup body
            document.getElementById('popupOverlay').innerHTML = sourceDiv.innerHTML + "<br><button onclick='hidePopup();'>Close</button>"

            // Make the overlay visible
            document.getElementById('popupOverlay').classList.remove('popupHidden');
            document.getElementById('popupOverlay').classList.add('popupVisible');
            document.getElementById('main-content').classList.remove('notblurry');
            document.getElementById('main-content').classList.add('blurry');
}
function getRandomDiv(sel) {
            const divs = document.querySelectorAll(sel);
            if (divs.length === 0) {
                console.warn("No elements with the class 'selectable' were found.");
                return;
            }
            const randomIndex = Math.floor(Math.random() * divs.length);
            const randomDiv = divs[randomIndex];
            return randomDiv
}
function selectRandomDiv(sel,oldclass,newclass) {
            const divs = document.querySelectorAll(sel);
            if (divs.length === 0) {
                console.warn("No elements with the class 'selectable' were found.");
                return;
            }
            const randomIndex = Math.floor(Math.random() * divs.length);
            const randomDiv = divs[randomIndex];
            const uno = randomDiv.querySelector('div:nth-of-type(1)').innerHTML;
            console.log(uno);
            const dua = randomDiv.querySelector('div:nth-of-type(2)').innerHTML;
            console.log(dua);
            randomDiv.classList.remove(oldclass);
            randomDiv.classList.add(newclass);


            return randomDiv.cloneNode(true);
            // return randomDiv

            //divs.forEach(div => {
            //    div.classList.remove('highlight');
            //});
}

function renderTable(arr) {
        var tab,tr,td,tx;
        arr.forEach(
           function (element, index) {  // (1)
              if (index == 0) {
                  if (element.parentNode.nodeName == "DIV") {
                      tab=element.parentNode.appendChild( document.createElement('table'));
                  } else {
                      tab=element.parentNode;
                  }
              }
              tab.classList.add('plaintable');
              tab.setAttribute('border','0');
              tab.setAttribute('align','left');
              tab.setAttribute('width','100%');
              var szCode = element.getAttribute('code');

              if ((index % 2) == 0)
                  tr=tab.appendChild( document.createElement('tr'));

              td=tr.appendChild( document.createElement('td'));
              td.classList.add('plaintd');
              if (szCode=="skip") {
                  td.appendChild( document.createTextNode('\u00A0')); // Unicode for non-breaking space
              } else {
                  tx=td.appendChild( document.createElement('a'));
                  tx.classList.add('np');
                  tx.appendChild( document.createTextNode(szCode));
                  tx.addEventListener('click', function(event) {
                      fastEdit( szCode );
                      event.preventDefault();
                  });
              }
              element.remove();
        });
}
function renderClassTable(cls) {
        var arr=[];
        document.querySelectorAll(cls).forEach(element => {
            arr.push(element);
        });
        renderTable(arr);
}

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
function exportTest() {
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

    const w1=Math.trunc(doc.internal.pageSize.getWidth() * .20);
    const w2=Math.trunc(doc.internal.pageSize.getWidth() * .30);
    const w3=Math.trunc(doc.internal.pageSize.getWidth() * .50);
    console.log(w1);
    console.log(w2);
    console.log(w3);
    const sel = '#test'
    const box = document.querySelectorAll(sel);
    const columns = [
    { header: "NUM", dataKey: "num" },
    { header: "TITLE", dataKey: "title" },
    { header: "QUESTION", dataKey: "question" }
    ];
    doc.autoTable({ 
         columns: columns,
         html: sel,
         columnStyles: {
             num:      { cellWidth: 20 },
             title:    { cellWidth: 80 },
             question: { cellWidth: 170 }
         },
         theme: "grid",
         styles: {
             fontSize: 12 // Sets the font size for the entire table
         },
         didDrawPage: function (data) {
            ct = ct +1
            // Add a report title as a header on every page
            doc.setFontSize(20);
            var pageWidth = doc.internal.pageSize.width;
            var now = new Date();
            doc.text("Java Test " + now.toLocaleString() + " -- Page " + ct.toString(), pageWidth - 15, 10, { align: 'right' }); // 10 units from the right edge
          }
      });
    const fn = "testpdf_" + (new Date()).toLocaleString() + ".pdf";
    const windowName = 'PDF';
    const screenWidth = Math.trunc(screen.width * .65);
    const screenHeight = Math.trunc(screen.height * .80);
    const windowFeatures = 'width=' + screenWidth + ',height=' + screenHeight + ',popup=yes,scrollbars=yes,resizable=yes';
    const popupWindow=window.open(doc.output('bloburl'), windowName, windowFeatures);
    doc.save(fn);
    popupWindow.moveTo(50, 50);
    popupWindow.focus();

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
    const infoBoxes = document.querySelectorAll('.e');
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
        hidePopup();

        // The entire content of the Java code editor page is stored in this template literal.
        // now in editor.js
 
        // Define the title you want to set
        // Select all elements
        // Loop through each selected element and set its title attribute
        var newTitle = "table view/create pdf";
        var moeElements = document.querySelectorAll('.p');
        moeElements.forEach(element => {
          element.valign='center'
          element.src='icon.png';
          element.title = newTitle;
        });
        document.querySelectorAll('.q').forEach(element => {
          element.valign='center'
          element.src='icon.png';
          element.title = "create pdf";
        });

        renderClassTable('.momo');


        arr=[];
        document.querySelectorAll('.xxxxnp').forEach(element => {
            arr.push(element);
        });
        arr.forEach(
           function (element, index) {  // (1)
              console.log(index);
              element.text = element.getAttribute('code');
              element.addEventListener('click', function(event) {
                  fastEdit( element.getAttribute('code') );
                  event.preventDefault();
              });
        });

//        document.querySelectorAll('.np').forEach(element => {
//          element.text = element.getAttribute('code');
//          element.addEventListener('click', function(event) {
//            fastEdit( element.getAttribute('code') );
//            event.preventDefault();
//          });
//        });

        document.getElementById('sidebar').classList.remove('hidden');
        document.getElementById('main-content').classList.remove('hidden');

            // *****************************************************************************
            // Cookie Compliance Start
            const COOKIE_NAME = 'user_cookie_consent';
            removeCookie(COOKIE_NAME);
            const COOKIE_EXPIRATION_DAYS = 365;

            const banner = document.getElementById('cookie-consent-banner');
            const acceptBtn = document.getElementById('accept-cookies-btn');
            const declineBtn = document.getElementById('decline-cookies-btn');

            
            /**
             * Hides the cookie consent banner.
             */
            function hideBanner() {
                banner.style.display = 'none';
            }
            
            /**
             * Shows the cookie consent banner.
             */
            function showBanner() {
                banner.style.display = 'flex';
            }

            // --- Event Listeners ---
            
            acceptBtn.addEventListener('click', function() {
                setCookie(COOKIE_NAME, 'accepted', COOKIE_EXPIRATION_DAYS);
                hideBanner();
                console.log('User accepted cookies. Other tracking scripts can now be initialized.');
                // Example: initializeAnalytics();
            });

            declineBtn.addEventListener('click', function() {
                setCookie(COOKIE_NAME, 'declined', COOKIE_EXPIRATION_DAYS);
                hideBanner();
                console.log('User declined cookies. Non-essential scripts should not run.');
            });


            // --- Main Logic ---
            
            // Check if the user has already given consent.
            const userConsent = getCookie(COOKIE_NAME);
            
            if (!userConsent) {
                // If no cookie is found, show the banner.
                showBanner();
            } else if (userConsent === 'accepted') {
                // If they accepted, you could run your tracking scripts here.
                console.log('Cookie consent previously accepted.');
                // Example: initializeAnalytics();
            } else {
                // If they declined, do nothing.
                console.log('Cookie consent previously declined.');
            }
            // Cookie Compliance End
            // *****************************************************************************
/*
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
*/
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



        function removeCookie(name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

            /**
             * Sets a cookie with a given name, value, and expiration in days.
             * @param {string} name - The name of the cookie.
             * @param {string} value - The value of the cookie.
             * @param {number} days - The number of days until the cookie expires.
             */
            function setCookie(name, value, days) {
                let expires = "";
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                // Use SameSite=Lax for modern browsers and include the secure flag if on HTTPS
                const sameSite = "; SameSite=Lax";
                const secure = window.location.protocol === 'https:' ? '; Secure' : '';
                document.cookie = name + "=" + (value || "") + expires + "; path=/" + sameSite + secure;
            }

            /**
             * Gets the value of a specific cookie by its name.
             * @param {string} name - The name of the cookie to retrieve.
             * @returns {string|null} The cookie's value or null if not found.
             */
            function getCookie(name) {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

        // --- REFACTORED MAIN LOGIC ---

        // Wait for the DOM to be fully loaded before running the script
        document.addEventListener('DOMContentLoaded', () => {
            // Select all checkboxes that should have their state saved
            const savableCheckboxes = document.querySelectorAll('.scb');

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









/**
         * Sets a cookie with a given name, value, and expiration in days.
         * @param {string} name - The name of the cookie.
         * @param {string} value - The value to store in the cookie.
         * @param {number} days - The number of days until the cookie expires.
        function setCookieOLDVER(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        }

         * Retrieves the value of a cookie by its name.
         * @param {string} name - The name of the cookie to retrieve.
         * @returns {string|null} The cookie's value, or null if not found.
        function getCookieOLDVERSION(name) {
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

*/



