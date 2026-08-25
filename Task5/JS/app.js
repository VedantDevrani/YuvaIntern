/* =====================================================
   STUDENTHUB SPA
===================================================== */


/* -----------------------------------------------------
   APPLICATION STATE
----------------------------------------------------- */

const state = {
    currentRoute: window.location.pathname
};


/* -----------------------------------------------------
   DOM ELEMENTS
----------------------------------------------------- */

const appContent = document.getElementById("app-content");
const pageTitle = document.getElementById("page-title");

const navigationLinks =
    document.querySelectorAll("[data-route]");


/* -----------------------------------------------------
   PAGE DATA
----------------------------------------------------- */

const pages = {

    "/dashboard": {
        title: "Dashboard",
        render: renderDashboard
    },

    "/courses": {
        title: "Courses",
        render: renderCourses
    },

    "/assignments": {
        title: "Assignments",
        render: renderAssignments
    },

    "/profile": {
        title: "Profile",
        render: renderProfile
    }

};


/* -----------------------------------------------------
   DASHBOARD
----------------------------------------------------- */

function renderDashboard() {

    return `

        <div class="page-enter">

            <section class="welcome">

                <h2>
                    Welcome back, Vedant 👋
                </h2>

                <p>
                    Here's an overview of your academic progress.
                </p>

            </section>


            <section class="stats-grid">

                <article class="stat-card primary">

                    <p>
                        Current CGPA
                    </p>

                    <strong>
                        7.79
                    </strong>

                </article>


                <article class="stat-card success">

                    <p>
                        Completed Courses
                    </p>

                    <strong>
                        18
                    </strong>

                </article>


                <article class="stat-card warning">

                    <p>
                        Pending Assignments
                    </p>

                    <strong>
                        4
                    </strong>

                </article>


                <article class="stat-card">

                    <p>
                        Attendance
                    </p>

                    <strong>
                        86%
                    </strong>

                </article>

            </section>


            <section class="dashboard-grid">


                <article class="card">

                    <div class="card-header">

                        <h3>
                            Current Courses
                        </h3>

                        <a href="/courses"
                           data-route="/courses">
                            View all
                        </a>

                    </div>


                    ${courseList()}

                </article>


                <article class="card">

                    <div class="card-header">

                        <h3>
                            Recent Assignments
                        </h3>

                        <a
                            href="/assignments"
                            data-route="/assignments"
                        >
                            View all
                        </a>

                    </div>


                    ${assignmentList()}

                </article>


            </section>

        </div>
    `;
}


/* -----------------------------------------------------
   COURSE LIST
----------------------------------------------------- */

function courseList() {

    const courses = [
        ["DS", "Data Structures", "78%", 78],
        ["OS", "Operating Systems", "72%", 72],
        ["DB", "Database Management", "91%", 91],
        ["AI", "Artificial Intelligence", "65%", 65]
    ];

    return courses.map(course => `

        <div class="course-item">

            <div class="course-icon">
                ${course[0]}
            </div>

            <div class="course-info">

                <strong>
                    ${course[1]}
                </strong>

                <small>
                    ${course[2]} completed
                </small>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width: ${course[3]}%"
                ></div>

            </div>

        </div>

    `).join("");
}


/* -----------------------------------------------------
   ASSIGNMENT LIST
----------------------------------------------------- */

function assignmentList() {

    const assignments = [
        ["Operating Systems Report", "Due Tomorrow", "pending"],
        ["Database Mini Project", "Due in 3 days", "pending"],
        ["AI Research Paper", "Completed", "completed"],
        ["Web Development Task", "Completed", "completed"]
    ];

    return assignments.map(item => `

        <div class="assignment">

            <div>

                <h4>
                    ${item[0]}
                </h4>

                <p>
                    ${item[1]}
                </p>

            </div>

            <span class="badge ${item[2]}">
                ${item[2] === "pending"
                    ? "Pending"
                    : "Completed"}
            </span>

        </div>

    `).join("");
}


/* -----------------------------------------------------
   COURSES PAGE
----------------------------------------------------- */

function renderCourses() {

    const courses = [
        {
            code: "DS",
            title: "Data Structures",
            description:
                "Learn arrays, linked lists, trees, graphs and algorithms.",
            progress: 78
        },

        {
            code: "OS",
            title: "Operating Systems",
            description:
                "Study processes, memory management, scheduling and file systems.",
            progress: 72
        },

        {
            code: "DB",
            title: "Database Management",
            description:
                "Understand SQL, normalization, transactions and database design.",
            progress: 91
        },

        {
            code: "AI",
            title: "Artificial Intelligence",
            description:
                "Explore machine learning, search algorithms and intelligent systems.",
            progress: 65
        },

        {
            code: "CN",
            title: "Computer Networks",
            description:
                "Learn networking protocols, TCP/IP and network architecture.",
            progress: 82
        },

        {
            code: "WD",
            title: "Web Development",
            description:
                "Build modern responsive websites using HTML, CSS and JavaScript.",
            progress: 88
        }
    ];

    return `

        <div class="page-enter">

            <section class="page-heading">

                <h2>
                    My Courses
                </h2>

                <p>
                    Track your progress across all enrolled courses.
                </p>

            </section>


            <section class="course-grid">

                ${courses.map(course => `

                    <article class="course-card">

                        <div class="course-icon">
                            ${course.code}
                        </div>

                        <h3>
                            ${course.title}
                        </h3>

                        <p>
                            ${course.description}
                        </p>

                        <div class="progress">

                            <div
                                class="progress-bar"
                                style="width: ${course.progress}%"
                            ></div>

                        </div>

                        <br>

                        <button
                            type="button"
                            onclick="showCourseMessage('${course.title}')"
                        >
                            View Course
                        </button>

                    </article>

                `).join("")}

            </section>

        </div>

    `;
}


/* -----------------------------------------------------
   ASSIGNMENTS PAGE
----------------------------------------------------- */

function renderAssignments() {

    const assignments = [
        [
            "Operating Systems Report",
            "Operating Systems",
            "26 Aug 2026",
            "Pending"
        ],

        [
            "Database Mini Project",
            "Database Management",
            "29 Aug 2026",
            "Pending"
        ],

        [
            "AI Research Paper",
            "Artificial Intelligence",
            "20 Aug 2026",
            "Completed"
        ],

        [
            "Responsive Website",
            "Web Development",
            "18 Aug 2026",
            "Completed"
        ],

        [
            "Network Protocol Analysis",
            "Computer Networks",
            "10 Sep 2026",
            "Pending"
        ]
    ];

    return `

        <div class="page-enter">

            <section class="page-heading">

                <h2>
                    Assignments
                </h2>

                <p>
                    Manage your upcoming and completed assignments.
                </p>

            </section>


            <section class="assignment-table">

                <div class="assignment-row header">

                    <span>
                        Assignment
                    </span>

                    <span>
                        Course
                    </span>

                    <span>
                        Due Date
                    </span>

                    <span>
                        Status
                    </span>

                </div>


                ${assignments.map(item => `

                    <div class="assignment-row">

                        <strong>
                            ${item[0]}
                        </strong>

                        <span>
                            ${item[1]}
                        </span>

                        <span>
                            ${item[2]}
                        </span>

                        <span>

                            <span
                                class="badge ${
                                    item[3] === "Pending"
                                        ? "pending"
                                        : "completed"
                                }"
                            >
                                ${item[3]}
                            </span>

                        </span>

                    </div>

                `).join("")}

            </section>

        </div>

    `;
}


/* -----------------------------------------------------
   PROFILE PAGE
----------------------------------------------------- */

function renderProfile() {

    return `

        <div class="page-enter">

            <section class="page-heading">

                <h2>
                    My Profile
                </h2>

                <p>
                    View your student information.
                </p>

            </section>


            <section class="profile-card">

                <div class="profile-header">

                    <div class="profile-avatar">
                        V
                    </div>

                    <div>

                        <h2>
                            Vedant
                        </h2>

                        <p>
                            B.Tech Computer Science Student
                        </p>

                    </div>

                </div>


                <div class="profile-details">

                    <div class="detail">

                        <span>
                            Full Name
                        </span>

                        <strong>
                            Vedant
                        </strong>

                    </div>


                    <div class="detail">

                        <span>
                            Program
                        </span>

                        <strong>
                            B.Tech CSE
                        </strong>

                    </div>


                    <div class="detail">

                        <span>
                            Current Semester
                        </span>

                        <strong>
                            Semester 5
                        </strong>

                    </div>


                    <div class="detail">

                        <span>
                            Current CGPA
                        </span>

                        <strong>
                            7.79
                        </strong>

                    </div>


                    <div class="detail">

                        <span>
                            Email
                        </span>

                        <strong>
                            student@example.com
                        </strong>

                    </div>


                    <div class="detail">

                        <span>
                            Department
                        </span>

                        <strong>
                            Computer Science
                        </strong>

                    </div>

                </div>

            </section>

        </div>

    `;
}


/* -----------------------------------------------------
   ROUTER
----------------------------------------------------- */

function router(path = window.location.pathname) {

    /*
        If the requested route doesn't exist,
        show the 404 page.
    */

    const page = pages[path];

    if (!page) {

        render404();

        return;
    }


    /*
        Update application state.
    */

    state.currentRoute = path;


    /*
        Update browser title.
    */

    pageTitle.textContent = page.title;

    document.title =
        `${page.title} | StudentHub`;


    /*
        Dynamically render page.
    */

    appContent.innerHTML =
        page.render();


    /*
        Update active navigation item.
    */

    updateActiveNavigation(path);


    /*
        Reattach navigation events to newly
        generated links.
    */

    attachNavigationEvents();

}


/* -----------------------------------------------------
   ACTIVE NAVIGATION
----------------------------------------------------- */

function updateActiveNavigation(path) {

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.dataset.route === path
            );

        });

}


/* -----------------------------------------------------
   NAVIGATION EVENTS
----------------------------------------------------- */

function attachNavigationEvents() {

    document
        .querySelectorAll("[data-route]")
        .forEach(link => {

            link.addEventListener(
                "click",
                handleNavigation
            );

        });

}


/* -----------------------------------------------------
   HANDLE NAVIGATION
----------------------------------------------------- */

function handleNavigation(event) {

    event.preventDefault();

    const path =
        event.currentTarget.dataset.route;


    /*
        Do not create a new history entry
        if the user clicks the current page.
    */

    if (path === state.currentRoute) {
        return;
    }


    /*
        Change the URL without reloading
        the webpage.
    */

    history.pushState(
        {},
        "",
        path
    );


    /*
        Render the new page.
    */

    router(path);

}


/* -----------------------------------------------------
   BROWSER BACK/FORWARD
----------------------------------------------------- */

window.addEventListener(
    "popstate",
    () => {

        router(
            window.location.pathname
        );

    }
);


/* -----------------------------------------------------
   COURSE BUTTON
----------------------------------------------------- */

function showCourseMessage(courseName) {

    alert(
        `${courseName} selected!`
    );

}


/* -----------------------------------------------------
   404 PAGE
----------------------------------------------------- */

function render404() {

    pageTitle.textContent =
        "Page Not Found";

    document.title =
        "Page Not Found | StudentHub";


    appContent.innerHTML = `

        <section class="error-page page-enter">

            <h2>
                404
            </h2>

            <p>
                Sorry, the page you are looking for
                does not exist.
            </p>

            <a
                href="/dashboard"
                data-route="/dashboard"
            >
                Back to Dashboard
            </a>

        </section>

    `;


    attachNavigationEvents();

}


/* -----------------------------------------------------
   INITIALIZE APPLICATION
----------------------------------------------------- */

/*
    If the user opens the project directly
    without a recognized route, show dashboard.
*/

const initialPath =
    pages[window.location.pathname]
        ? window.location.pathname
        : "/dashboard";


/*
    Replace the initial URL if required.
*/

if (window.location.pathname !== initialPath) {

    history.replaceState(
        {},
        "",
        initialPath
    );

}


/*
    Start the SPA.
*/

router(initialPath);