# ⏳ Multi-Page Countdown Timer

A simple, lightweight countdown timer built with vanilla JavaScript. This application features a setup page for inputting time and a dedicated display page that executes the countdown using URL parameters for state management.

## 🚀 Features

* **Customizable Input:** specific fields for Hours, Minutes, and Seconds.
* **Page Redirection:** seamless transition from the input interface to a focused timer view.
* **State Persistence:** uses URL Query Parameters (`?time=XXX`) to pass the duration between pages without needing a backend or local storage.
* **Visual Formatting:** automatic zero-padding (e.g., `05:01:09`) for a clean digital clock look.
* **Completion Alert:** displays a "Time's up!" message when the counter hits zero.

## 🛠️ Technologies Used

* **HTML5:** Structure for the input form and display container.
* **CSS3:** Styling for the layout (referenced as `index.css` and `timerpage.css`).
* **JavaScript (ES6):** Logic for time calculation, DOM manipulation, and URL parameter parsing.

## 📂 Project Structure

```text
/project-root
│
├── index.html          # The landing page with input fields and Start button
├── timerpage.html      # The dedicated countdown display page
├── timerScript.js      # Main logic handling inputs and the countdown interval
├── index.css           # Styles for the input page
├── timerpage.css       # Styles for the display page
└── images/             # Folder containing the favicon
