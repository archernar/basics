
const Content1 = `
/**
 * A template class for a simple Java program.
 *
 * @author [Your Name]
 * @version 1.0
 * @since [Date]
 *
 */
import java.util.Scanner; // Import the Scanner class to read user input

public class LearningTemplate {
    /**
     * The main method is the entry point of the application.
     * Execution starts here.
     */
    public static void main(String[] args) {
    }
}
`;

const ContentDocTop= `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title></title>
            </head>
            <body>
            <pre>
            <code>
/**
 * A template class for a simple Java program.
 *
 * @author [Your Name]
 * @version 1.0
 * @since [Date]
 *
`;
const ContentEndComment= `
 */

`;



const ContentDocBottom= `
            </code>
            </pre>
            </body>
            </html>
`;

const ContentApplicationClass= `

import java.util.Scanner; // Import the Scanner class to read user input

public class LearningTemplate {
    /**
     * The main method is the entry point of the application.
     * Execution starts here.
     */
    public static void main(String[] args) {
    }
}
`;



const Content0= `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Java Code</title>
            </head>
            <body>
            <pre>
            <code>
/**
 * A template class for a simple Java program.
 *
 * @author [Your Name]
 * @version 1.0
 * @since [Date]
 *
 */
import java.util.Scanner; // Import the Scanner class to read user input

public class LearningTemplate {
    /**
     * The main method is the entry point of the application.
     * Execution starts here.
     */
    public static void main(String[] args) {
    }
}
            </code>
            </pre>
            </body>
            </html>
`;



const EditorZed= `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Zed</title>
            </head>
            <body>
                Hello World!
            </body>
            </html>
`;


const Editor0= `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Java Code Editor</title>
                <script src="https://cdn.tailwindcss.com"><\/script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/dracula.min.css">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js"><\/script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/clike/clike.min.js"><\/script>
                <style>
                    body { font-family: 'Inter', sans-serif; }
                    .CodeMirror { height: calc(100vh - 220px); border-radius: 0.5rem; font-size: 1rem; }
                </style>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            </head>
            <body class="bg-gray-900 text-white antialiased">
                <div class="container mx-auto p-4">
                    <main class="bg-gray-800 rounded-lg shadow-2xl p-6">
                        <div class="mb-4">
                            <label for="java-code" class="block text-lg font-medium text-gray-300 mb-2">Java Code</label>
                            <textarea id="java-code" name="java-code">
`;


const Editor1 = `
                            <\/textarea>
                        </div>
                        <div class="flex items-center justify-end space-x-4 mb-4">
                            <!-- button id="gmail-button" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.5v15c0 .825-.675 1.5-1.5 1.5H1.5C.675 21 0 20.325 0 19.5v-15C0 3.675.675 3 1.5 3h21C23.325 3 24 3.675 24 4.5zm-1.5-1.5L12 12 1.5 3h21zm-21 15h21v-12l-10.5 7.5L0 6v12z"/></svg>
                                <span>Email Code</span>
                            </button -->
                            <!-- button id="copy-button" class="px-5 py-2.5 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500">Copy Code</button -->
                            <!-- button id="run-button" class="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400">Run Code</button -->
                        </div>
                        <!-- div>
                            <label for="output" class="block text-lg font-medium text-gray-300 mb-2">Output</label>
                            <pre id="output" class="bg-gray-900 text-gray-300 p-4 rounded-lg h-24 overflow-y-auto text-sm font-mono whitespace-pre-wrap">Click "Run Code" to see the output here...<\/pre>
                        </div -->
                    </main>
                </div>
                <div id="message-box" class="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg text-sm opacity-0 transition-opacity duration-300">Code copied to clipboard!</div>
                <script>
                    const editor = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                        lineNumbers: true, mode: "text/x-java", theme: "dracula", matchBrackets: true, autoCloseBrackets: true, indentUnit: 4
                    });
                    const runButton = document.getElementById('run-button');
                    const copyButton = document.getElementById('copy-button');
                    const gmailButton = document.getElementById('gmail-button');
                    const outputArea = document.getElementById('output');
                    const messageBox = document.getElementById('message-box');

                    runButton.addEventListener('click', () => {
                        outputArea.textContent = 'Compiling and running code...\\n\\n';
                        setTimeout(() => { outputArea.textContent += 'Hello, World!\\n'; }, 1000);
                    });
                    
                    copyButton.addEventListener('click', () => {
                        const codeToCopy = editor.getValue();
                        const tempTextArea = document.createElement('textarea');
                        tempTextArea.value = codeToCopy;
                        document.body.appendChild(tempTextArea);
                        tempTextArea.select();
                        try {
                            document.execCommand('copy');
                            showMessage('Code copied to clipboard!');
                        } catch (err) {
                            showMessage('Failed to copy code.', true);
                        }
                        document.body.removeChild(tempTextArea);
                    });

                    gmailButton.addEventListener('click', () => {
                        const code = editor.getValue();
                        const subject = "Java Code Snippet";
                        const body = \`Here is the Java code I was working on:\\n\\n---\\n\\n\${code}\`;
                        const mailtoLink = \`mailto:?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`;
                        window.location.href = mailtoLink;

                    });
                    
                    function showMessage(message, isError = false) {
                        messageBox.textContent = message;
                        messageBox.className = \`fixed bottom-5 right-5 text-white py-2 px-4 rounded-lg shadow-lg text-sm transition-opacity duration-300 \${isError ? 'bg-red-500' : 'bg-green-500'}\`;
                        messageBox.classList.remove('opacity-0');
                        setTimeout(() => { messageBox.classList.add('opacity-0'); }, 3000);
                    }
                <\/script>
            </body>
            </html>
`;
