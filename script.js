/**
 * Blog Post Data
 * This array contains all blog posts. Easy to extend with backend integration.
 * Each post has: id, title, description, author, date, image, and full content.
 */
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    description:
      "Exploring emerging technologies and trends that will shape how we build websites and applications in the coming years.",
    author: "Sarah Chen",
    date: "January 10, 2026",
    image: "/web-design.jpg",
    content: `
            <p>The landscape of web development is evolving at an unprecedented pace. As we step into 2026, several key trends are reshaping how developers approach building for the web.</p>
            
            <h2>AI-Assisted Development</h2>
            <p>Artificial intelligence has become an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently while maintaining code quality.</p>
            
            <p>Tools that understand context and can suggest entire functions based on comments are no longer experimental—they're essential. This shift is allowing developers to focus more on architecture and user experience rather than boilerplate code.</p>
            
            <h2>Edge Computing Takes Center Stage</h2>
            <p>The move toward edge computing has fundamentally changed how we think about performance. By processing data closer to users, applications can deliver near-instantaneous responses regardless of geographic location.</p>
            
            <h3>Key Benefits</h3>
            <ul>
                <li>Reduced latency for global users</li>
                <li>Better handling of real-time features</li>
                <li>Improved reliability and redundancy</li>
                <li>Cost optimization for high-traffic applications</li>
            </ul>
            
            <h2>The Rise of Component Islands</h2>
            <p>The architecture pattern of "islands" has matured significantly. This approach allows developers to ship minimal JavaScript while still enabling rich interactivity where needed.</p>
            
            <blockquote>The best JavaScript is no JavaScript—until you need it. Then, make sure it's exactly what the user needs, nothing more.</blockquote>
            
            <p>As we continue through 2026, the focus remains on building faster, more accessible, and more sustainable web experiences. The tools are getting better, but the fundamentals of good design and user-centric thinking remain paramount.</p>
        `,
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Practical Guide",
    description:
      "Learn how to create inclusive digital experiences that work for everyone, regardless of ability or circumstance.",
    author: "Marcus Johnson",
    date: "January 8, 2026",
    image: "Design_Accessibility.jpg",
    content: `
            <p>Accessibility isn't just about compliance—it's about creating experiences that work for everyone. When we design with accessibility in mind, we often create better experiences for all users.</p>
            
            <h2>Understanding the Basics</h2>
            <p>Web accessibility means ensuring that websites and applications are usable by people with various disabilities. This includes visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
            
            <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making content accessible. Following these guidelines helps ensure your work reaches the widest possible audience.</p>
            
            <h2>Practical Implementation</h2>
            
            <h3>Color and Contrast</h3>
            <p>Ensure sufficient contrast between text and background colors. The minimum contrast ratio should be 4.5:1 for normal text and 3:1 for large text.</p>
            
            <h3>Keyboard Navigation</h3>
            <p>All interactive elements should be accessible via keyboard. Test your site by navigating without a mouse—can you reach every button, link, and form field?</p>
            
            <ul>
                <li>Use semantic HTML elements</li>
                <li>Implement visible focus indicators</li>
                <li>Ensure logical tab order</li>
                <li>Provide skip links for navigation</li>
            </ul>
            
            <h3>Screen Reader Compatibility</h3>
            <p>Use proper heading hierarchy, descriptive link text, and ARIA labels where needed. Test with actual screen readers to understand the experience.</p>
            
            <blockquote>Accessibility is not a feature—it's a social responsibility. And it's the right thing to do.</blockquote>
            
            <p>By incorporating accessibility from the start of your projects, you create more robust, usable products that serve everyone better.</p>
        `,
  },
  {
    id: 3,
    title: "Building a Personal Brand as a Developer",
    description:
      "Strategies for standing out in a competitive industry and creating meaningful connections within the tech community.",
    author: "Emma Williams",
    date: "January 5, 2026",
    image: "/software-developer.webp",
    content: `
            <p>In today's competitive tech landscape, technical skills alone aren't enough. Building a personal brand helps you stand out, attract opportunities, and connect with like-minded professionals.</p>
            
            <h2>Why Personal Branding Matters</h2>
            <p>Your personal brand is how others perceive your professional identity. It's the unique combination of skills, experience, and personality that you bring to the table.</p>
            
            <p>A strong personal brand can lead to job opportunities, speaking engagements, collaborations, and a network of peers who share your interests and values.</p>
            
            <h2>Building Your Online Presence</h2>
            
            <h3>Choose Your Platforms</h3>
            <p>Focus on platforms where your target audience spends time. For developers, this typically includes GitHub, LinkedIn, Twitter/X, and personal blogs or portfolios.</p>
            
            <h3>Share Your Knowledge</h3>
            <p>Create content that demonstrates your expertise:</p>
            <ul>
                <li>Write blog posts about problems you've solved</li>
                <li>Contribute to open source projects</li>
                <li>Share insights on social media</li>
                <li>Speak at meetups or conferences</li>
            </ul>
            
            <h3>Be Authentic</h3>
            <p>Don't try to be someone you're not. Authenticity resonates with people and builds trust. Share your journey, including challenges and failures.</p>
            
            <blockquote>Your personal brand should feel natural—it's an extension of who you are, not a fabricated persona.</blockquote>
            
            <h2>Networking Effectively</h2>
            <p>Building relationships is at the heart of personal branding. Engage genuinely with others' content, offer help without expecting anything in return, and nurture connections over time.</p>
            
            <p>Remember, personal branding is a long-term investment. Consistency and authenticity will yield results over time, even if progress seems slow at first.</p>
        `,
  },
]

/**
 * DOM Content Loaded Event
 * Initializes the appropriate page functionality based on current location
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize mobile menu toggle
  initMobileMenu()

  // Check which page we're on and initialize accordingly
  if (document.getElementById("posts-container")) {
    // Home page - render blog posts
    renderBlogPosts()
  } else if (document.getElementById("post-content")) {
    // Single post page - render post content
    renderSinglePost()
  }
})

/**
 * Initialize Mobile Menu Toggle
 * Handles the hamburger menu functionality for mobile devices
 */
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })

    // Close menu when a link is clicked
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  }
}

/**
 * Render Blog Posts
 * Dynamically generates and displays blog post cards on the home page
 */
function renderBlogPosts() {
  const container = document.getElementById("posts-container")

  if (!container) return

  // Generate HTML for each blog post
  const postsHTML = blogPosts
    .map(
      (post) => `
        <article class="post-card">
            <img 
                src="${post.image}" 
                alt="${post.title}" 
                class="post-card-image"
                loading="lazy"
            >
            <div class="post-card-content">
                <div class="post-card-meta">
                    <span class="post-card-author">${post.author}</span>
                    <span class="meta-separator"></span>
                    <span class="post-card-date">${post.date}</span>
                </div>
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-description">${post.description}</p>
                <a href="post.html?id=${post.id}" class="read-more-btn">
                    Read More <span class="arrow">→</span>
                </a>
            </div>
        </article>
    `,
    )
    .join("")

  container.innerHTML = postsHTML
}

/**
 * Render Single Post
 * Displays the full content of a single blog post based on URL parameter
 */
function renderSinglePost() {
  const container = document.getElementById("post-content")

  if (!container) return

  // Get post ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const postId = Number.parseInt(urlParams.get("id"))

  // Find the post with matching ID
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    // Handle invalid or missing post ID
    container.innerHTML = `
            <div class="error-message">
                <h1>Post Not Found</h1>
                <p>Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
                <a href="index.html" class="read-more-btn">
                    <span class="arrow">←</span> Back to Home
                </a>
            </div>
        `
    document.title = "Post Not Found | The Blog"
    return
  }

  // Update page title with post title
  document.title = `${post.title} | The Blog`

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute("content", post.description)
  }

  // Render the full post content
  container.innerHTML = `
        <header class="post-header">
            <div class="post-meta">
                <span class="post-author">${post.author}</span>
                <span class="meta-separator"></span>
                <span class="post-date">${post.date}</span>
            </div>
            <h1 class="post-title">${post.title}</h1>
        </header>
        <img 
            src="${post.image}" 
            alt="${post.title}" 
            class="post-featured-image"
        >
        <div class="post-body">
            ${post.content}
        </div>
    `
}

/**
 * Smooth Scroll for Anchor Links
 * Enables smooth scrolling when clicking on internal anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")

    // Skip if it's just "#"
    if (href === "#") return

    const target = document.querySelector(href)

    if (target) {
      e.preventDefault()
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
