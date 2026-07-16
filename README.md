# Wanli Peng — Academic Homepage

A static academic portfolio for robotics, embodied AI, and 3D computer vision. The site is designed to run directly on GitHub Pages without a build step.

## Structure

```text
index.html          Stable page structure and profile copy
css/style.css       Design tokens, components, motion, and responsive rules
js/content.js       Featured projects and publication records
js/main.js          Content rendering and lightweight interactions
images/             Portraits and project teaser images
pages/              Standalone legacy project pages
```

The architecture intentionally separates content from presentation:

- Edit `js/content.js` to add, remove, or reorder projects and publications.
- Edit `index.html` for profile, research areas, navigation, or contact details.
- Edit `css/style.css` for the visual system and responsive behavior.
- Edit `js/main.js` only when adding a new component type or interaction.

## Add a publication

Add one object to the `publications` array in `js/content.js`:

```js
{
    year: "2026",
    venue: "Conference",
    topic: "Research Area",
    title: "Paper Title",
    authors: "Author One, <strong>Wanli Peng</strong>, Author Three",
    image: "images/your-teaser.jpg",
    imageAlt: "Short accessible image description",
    links: {
        project: "https://example.com",
        paper: "https://example.com/paper.pdf",
        code: "https://github.com/example/repo"
    }
}
```

The `links` object is flexible: omit any link that is not available. Featured projects follow the same pattern in the `featuredProjects` array.

## Local preview

You can open `index.html` directly. For a preview that matches GitHub Pages more closely, start a local web server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.
