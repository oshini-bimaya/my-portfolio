# Oshini Bimaya --- Personal Portfolio

An Apple-inspired, minimalist personal portfolio built with HTML, CSS
and vanilla JavaScript. The portfolio presents my background as a
Computer Science student, selected project work, technical skills and
current learning journey.

## Public profile and contact links

-   **Portfolio website:** https://oshini-bimaya.github.io/my-portfolio/
-   **GitHub profile:** https://github.com/oshini-bimaya
-   **LinkedIn profile:**
    https://www.linkedin.com/in/oshini-bimaya-403372345/
-   **Email:** <o.bimaya12@icloud.com>
-   **Portfolio source repository:**
    https://github.com/oshini-bimaya/my-portfolio

The GitHub button in the website's Contact section links to my **GitHub
profile**, not directly to this repository. Visitors can explore my
public repositories from my profile.

> The portfolio URL above is the expected GitHub Pages address. It
> becomes publicly available after GitHub Pages has been enabled and its
> deployment has completed.

## Run locally with Visual Studio Code

1.  Download and extract the project ZIP.
2.  Open the extracted `oshini-bimaya-phase-05` folder in Visual Studio
    Code.
3.  Make sure the complete folder structure is preserved, including
    `assets/mira/`, the signature images, favicon and certificate.
4.  Install the **Live Server** extension by **Ritwick Dey** if it is
    not already installed.
5.  Open `index.html` in the editor.
6.  Start the server using either method:
    -   Click **Go Live** in the VS Code status bar, usually at the
        bottom-right; or
    -   Press `Ctrl + Shift + P`, search for **Live Server: Open with
        Live Server**, and select it.
7.  Your browser should open a local address similar to
    `http://127.0.0.1:5500/`.

### If Live Server does not appear

-   Open the Extensions view with `Ctrl + Shift + X` and confirm that
    **Live Server** by Ritwick Dey is installed and enabled.
-   If VS Code shows **Restricted Mode**, trust the project folder if it
    is your own project and you trust its contents.
-   Reload VS Code using `Ctrl + Shift + P` → **Developer: Reload
    Window**.
-   Open `index.html` and try **Go Live** or the Command Palette command
    again.

No npm installation or build step is required.

## Project contents

-   `index.html` --- portfolio page structure and content.
-   `style.css` --- responsive layout, typography, themes and visual
    styling.
-   `script.js` --- interactive features and public contact-link
    configuration.
-   `assets/mira/` --- MIRA project screenshots used in the case study.
-   `oshini-bimaya-signature.png` and
    `oshini-bimaya-signature-white.png` --- signature assets.
-   `favicon.svg` --- browser tab icon.
-   `java-programming-certificate.pdf` --- Java Programming for
    Beginners certificate.
-   `PHASE-05-LAUNCH-CHECKLIST.md` --- final review and publishing
    checklist.

## Phase 5 improvements

-   Added a keyboard-accessible skip link and improved tab keyboard
    navigation.
-   Improved mobile-menu labels and Escape-key handling.
-   Improved screen-reader state for the theme toggle and back-to-top
    control.
-   Made reveal animations progressively enhanced so content remains
    visible if JavaScript is unavailable.
-   Configured the Contact section with my public email, GitHub profile
    and LinkedIn profile.
-   Added launch and GitHub Pages deployment instructions.

## Contact-link configuration

The website's contact buttons are configured near the top of `script.js`
in the `PROFILE` object:

``` js
const PROFILE = {
    email: 'o.bimaya12@icloud.com',
    github: 'https://github.com/oshini-bimaya',
    linkedin: 'https://www.linkedin.com/in/oshini-bimaya-403372345/'
};
```

-   The email button opens the visitor's email application using a
    `mailto:` link.
-   The GitHub button opens my GitHub **profile**.
-   The LinkedIn button opens my LinkedIn **profile**.

These details are intentionally public because they are displayed on the
portfolio. If you do not want an email address or profile link to be
public, remove it from the `PROFILE` object. The website is a static
site and does not contain a server-side contact form.

## Publish with GitHub Pages

The existing source repository is:

https://github.com/oshini-bimaya/my-portfolio

1.  Make a backup of your current local portfolio repository folder.

2.  Copy the contents of the extracted `oshini-bimaya-phase-05` folder
    into the **root** of your existing `my-portfolio` repository. Do not
    place the files inside an extra nested folder.

3.  Confirm that `index.html`, `style.css` and `script.js` are directly
    in the repository root.

4.  Keep the complete `assets/` folder and all required images, favicon,
    signature files and certificate.

5.  Open the project with Live Server and complete the checks in
    `PHASE-05-LAUNCH-CHECKLIST.md`.

6.  Open GitHub Desktop, review the changed files, commit with a message
    such as `Prepare portfolio for launch`, and push the changes to the
    `main` branch.

7.  Open the repository on GitHub:
    https://github.com/oshini-bimaya/my-portfolio

8.  Go to **Settings → Pages**.

9.  Under **Build and deployment**, choose **Deploy from a branch**.

10. Select branch **main** and folder **/(root)**, then save.

11. Wait for the deployment to complete. GitHub Pages will show the
    published website address in the Pages settings.

12. The expected project URL is:

    https://oshini-bimaya.github.io/my-portfolio/

13. Open the public URL in a private/incognito browser window and test
    it on desktop and mobile. Check the images, CSS, JavaScript,
    certificate link, navigation and contact buttons.

## Add the portfolio to LinkedIn

After the public website URL works:

1.  Open my LinkedIn profile:
    https://www.linkedin.com/in/oshini-bimaya-403372345/
2.  Open **Contact info** and choose the edit option.
3.  Add the working GitHub Pages URL as a website.
4.  Choose **Portfolio** or the closest available website type, then
    save.
5.  Optionally, publish a LinkedIn post introducing the portfolio and
    linking to the live website.
6.  If the Featured section is available, the portfolio link or
    announcement post can also be highlighted there.

Do not announce the website until the public URL has been tested.

## Accuracy and privacy

-   MIRA is a university group project; the case study describes only my
    stated contributions.
-   NOVA is in development. Planned capabilities are not presented as
    completed features.
-   Docker is described as a future learning goal.
-   Review screenshots and public content before publishing.
-   Never publish API keys, passwords, student records or other private
    information.
-   The email address and profile URLs above are public contact details.
    Keep them in the repository only if you are comfortable making them
    publicly visible.
-   The portfolio is a static website. Theme preferences and interactive
    elements run in the visitor's browser; there is no server-side
    contact form or shared progress database.
