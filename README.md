# My Digital Garden - A Notes Website

This is a clean, beautiful, and feature-rich website for personal notes, built with Jekyll and designed for deployment on GitHub Pages.

## Core Features

- **Clean & Readable Layout**: Optimized for note-taking and studying with great typography.
- **Categorized Notes**: Organized into Mathematics, Code, and General sections.
- **Search & Filtering**: Instant client-side search and category filtering on the homepage.
- **Syntax Highlighting**: Beautiful code blocks powered by Rouge.
- **Mathematical Notations**: KaTeX integration for fast and elegant rendering of LaTeX math.
- **Responsive Design**: Looks great on desktops, tablets, and phones.
- **Dark/Light Theme**: A theme toggle that respects user preference.
- **Table of Contents**: Auto-generated for each note page.

## How to Use

### 1. Running Locally

1.  **Install Jekyll**: Follow the official [Jekyll installation guide](https://jekyllrb.com/docs/installation/).
2.  **Clone the repository**: `git clone <your-repo-url>`
3.  **Navigate to the directory**: `cd notes-website`
4.  **Install dependencies**: `bundle install`
5.  **Serve the site**: `bundle exec jekyll serve`
6.  Open your browser to `http://127.0.0.1:4000`.

### 2. Adding a New Note

1.  Decide on the category for your note: `Mathematics`, `Code`, or `General`.
2.  Create a new Markdown file inside the corresponding folder (`_mathematics/`, `_code/`, or `_general/`).
3.  Name the file in the format `YYYY-MM-DD-your-note-title.md`.
4.  Add the following front matter to the top of the file, adjusting the values as needed:

    ```markdown
    ---
    title: "Your Awesome Note Title"
    date: YYYY-MM-DD
    tags: [tag1, tag2, another-tag]
    ---

    Your content starts here...
    ```
    The `category` is automatically assigned based on the folder.

### 3. Writing Content

-   **Code Blocks**: Use standard Markdown syntax with the language specified for highlighting.

    ````
    ```javascript
    console.log("Hello, world!");
    ```
    ````

-   **Mathematical Notations**: Use KaTeX syntax.
    -   For inline math, wrap your LaTeX in single dollar signs: `$ E = mc^2 $`.
    -   For block-level math, wrap your LaTeX in double dollar signs:
        ```
        $$
        \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
        $$
        ```

### 4. Deployment to GitHub Pages

This site is ready for GitHub Pages.

1.  **Update `_config.yml`**:
    -   Set `url` to your GitHub Pages URL (e.g., `https://your-username.github.io`).
    -   Set `baseurl` to your repository name if it's not a user/org page (e.g., `/my-notes-repo`). If it is, leave it as `""`.
    -   Update `github_username`, `author`, `email`, and `description`.
2.  **Push to GitHub**: Push your code to a repository on GitHub.
3.  **Enable GitHub Pages**: In your repository settings, go to the "Pages" tab. Select the branch you want to deploy from (usually `main` or `master`) and save.

Your website will be live in a few minutes!







