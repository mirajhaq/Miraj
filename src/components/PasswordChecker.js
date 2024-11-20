// src/components/PasswordChecker.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectDetails.css";
import NavBar from "./NavBar";


const PasswordChecker = () => {
  return (
    <div className="project-details">
      <NavBar />
      <article className="project-article">
        <h1 className="project-title">Password Checker</h1>

        <section className="project-section">
          <h2>Objective</h2>
          <p>
            To create a local version of the Have I been Pwned website, where users
            could input a password, and the system would check if that password has
            been compromised in previous data breaches.
          </p>
        </section>

        <section className="project-section">
          <h2>Reasons</h2>
          <ul>
            <li>Running the checker locally ensures passwords are not sent over the internet.</li>
            <li>Full control over data hosting and privacy.</li>
            <li>Limits third-party dependencies.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Steps</h2>
          <h4>2.1 Downloading the Pwned Passwords</h4>
          <p>
          As of May 2022, the best way to get the most up to date passwords is to use the Pwned Passwords downloader.
          The downloaded password hashes may be integrated into other systems and used to verify whether a password 
          has previously appeared in a data breach after which a system may warn the user or even block the password outright.
          For suggestions on integration practices, read the Pwned Passwords launch blog post for more information.
          </p>

          <p>
          The first link takes you to their "haveibeenpwned-downloader" which is a dotnet tool, 
          to download alll Pwned Passwords hash ranes and save them offline so they can be used without a dependency on the k-anonoymity API.
          </p>
          <h5>2.1.1 Installing Tool</h5>

          <p>
          You'll need to install .NET 6 to be able to install the tool.
	
          Open CMD as admin 
          Run dotnet tool install --global haveibeenpwned-downloader
          </p>

          <h5>2.1.2 Usage</h5>
          <p>There are a few different download methods that may help depending on how you want to use the hashes</p>
          <p>Download all SHA1 hashes to a single txt file called pwnedpasswords.txt</p>
          <p>In CMD as admin:</p>
          <p>haveibeenpwned-downloader.exe</p>
          <p>This command by itself took 2 hours and it will save it in C:\Windows\System32 unless you specify</p>
          <p>haveibeenpwned-downloader.exe "C:\Users\mhaq\Desktop\parsed_passwords\pwnedpasswords.txt"</p>

        </section>

        <section className="project-images">
          <img src="../assets/untitled.png" alt="Password Checker Step 1" />
          <img src="/images/password-checker-step2.jpg" alt="Password Checker Step 2" />
        </section>
      </article>
    </div>
  );
};

export default PasswordChecker;
