
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.page}>

      {/* HEADER */}

      <header>
        <h1>Your Favorite Site</h1>

        <p>
          Crafting thoughtful web experiences with modern frontend tools,
          accessible design, and handcrafted interfaces.
        </p>

        <nav>
          <a href="#about">About</a> |{" "}
          <a href="#services">Services</a> |{" "}
          <a href="#projects">Projects</a> |{" "}
          <a href="#media">Media</a> |{" "}
          <a href="#forms">Contact</a>
        </nav>
      </header>

      {/* HERO */}

      <section id="about">
        <h2>About The Studio</h2>

        <p>
          We build websites and applications focused on clarity, performance,
          and long-term maintainability.
        </p>

        <blockquote>
          “Good design should feel obvious once you use it.”
        </blockquote>

        <p>
          We specialize in:
          <strong> Next.js</strong>,
          <em> SvelteKit</em>,
          <mark> modern CSS</mark>,
          <u> accessibility</u>,
          and scalable component systems.
        </p>

        <details>
          <summary>Studio Philosophy</summary>

          <p>
            Our goal is to create interfaces that feel calm, usable, and fast —
            without unnecessary complexity.
          </p>
        </details>

        <hr />

        <address>
          Lantern Light Development
          <br />
          Seattle, Washington
        </address>

        <p>
          Founded in{" "}
          <time dateTime="2024-01-01">
            2024
          </time>
        </p>
      </section>

      {/* SERVICES */}

      <section id="services">
        <h2>Services</h2>

        <article>
          <h3>Frontend Development</h3>

          <p>
            Responsive applications built with semantic HTML,
            reusable components, and modern frameworks.
          </p>
        </article>

        <article>
          <h3>Backend Integration</h3>

          <p>
            API integrations, authentication systems,
            image uploads, scheduled tasks, and database architecture.
          </p>
        </article>

        <article>
          <h3>Performance Optimization</h3>

          <p>
            Image compression, lazy loading, accessibility auditing,
            and Core Web Vitals improvements.
          </p>
        </article>

        <aside>
          <h4>Current Stack</h4>

          <ul>
            <li>Next.js</li>
            <li>SvelteKit</li>
            <li>Postgres</li>
            <li>Drizzle ORM</li>
            <li>Tailwind CSS</li>
          </ul>
        </aside>
      </section>

      {/* PROJECTS */}

      <section id="projects">
        <h2>Featured Projects</h2>

        <table>
          <caption>Recent Work</caption>

          <thead>
            <tr>
              <th>Project</th>
              <th>Tech</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Garden Tracker</td>
              <td>SvelteKit</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Weather Scheduler</td>
              <td>Next.js</td>
              <td>Testing</td>
            </tr>

            <tr>
              <td>Portfolio System</td>
              <td>React</td>
              <td>Live</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td >
                Updated weekly
              </td>
            </tr>
          </tfoot>
        </table>

        <h3>Development Process</h3>

        <ol>
          <li>Research & Planning</li>
          <li>Wireframing</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Deployment</li>
        </ol>

        <dl>
          <dt>SSR</dt>
          <dd>Server-side rendering for faster initial loads.</dd>

          <dt>SPA</dt>
          <dd>Single-page application experience.</dd>
        </dl>
      </section>

      {/* MEDIA */}

      <section id="media">
        <h2>Media Showcase</h2>

        <figure>
          <img
            src="/images/test.png"
            alt="Workspace setup"
          />

          <figcaption>
            Workspace setup during late-night development sessions.
          </figcaption>
        </figure>

        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/images/test-mobile.png"
          />

          <img
            src="/images/test.png"
            alt="Responsive studio image"
          />
        </picture>

        <video width="480" controls>
          <source
            src="/video/test.mp4"
            type="video/mp4"
          />
        </video>

        <audio controls>
          <source
            src="/audio/test.mp3"
            type="audio/mpeg"
          />
        </audio>

        <iframe
          src="https://www.lanternlightdevelopment.com/"
          width="900"
          height="650"
          title="Lantern Light Development">
        </iframe>

        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r="50"
          />
        </svg>

        <canvas width="300" height="120"></canvas>
      </section>

      {/* BLOG */}

      <section>
        <h2>Latest Notes</h2>

        <article>
          <h3>Why Semantic HTML Still Matters</h3>

          <p>
            Modern frameworks are powerful, but semantic structure still forms
            the backbone of accessible interfaces.
          </p>

          <p>
            Tags like
            <code> article </code>,
            <code> section </code>,
            and
            <code> nav </code>
            improve readability for both developers and assistive technologies.
          </p>

          <q>
            HTML is not outdated — most people just never learned it deeply.
          </q>

          <p>
            <small>
              Published May 2026
            </small>
          </p>
        </article>
      </section>

      {/* CONTACT */}

      <section id="forms">
        <h2>Contact The Studio</h2>

        <form>

          <fieldset>

            <legend>Project Inquiry</legend>

            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
            />

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="jane@example.com"
            />

            <label htmlFor="company">
              Company
            </label>

            <input
              type="text"
              id="company"
              placeholder="Studio Name"
            />

            <label htmlFor="budget">
              Budget Range
            </label>

            <input
              type="range"
              id="budget"
            />

            <label htmlFor="date">
              Preferred Start Date
            </label>

            <input
              type="date"
              id="date"
            />

            <label htmlFor="projectType">
              Project Type
            </label>

            <select id="projectType">
              <option>Website</option>
              <option>Web App</option>
              <option>Consulting</option>
            </select>

            <label htmlFor="message">
              Project Details
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your project...">
            </textarea>

            <label>
              <input type="checkbox" />
              Subscribe to updates
            </label>

            <br />

            <label>
              <input
                type="radio"
                name="priority"
              />
              Rush Project
            </label>

            <br /><br />

            <button type="submit">
              Send Inquiry
            </button>

            <output>
              Response time: 1–2 business days
            </output>

          </fieldset>

        </form>
      </section>

      {/* SEMANTIC EXAMPLES */}

      <section>
        <h2>Additional Semantic Elements</h2>

        <section>
          <h3>Nested Section</h3>

          <p>
            Sections can contain their own headings and content.
          </p>
        </section>

        <div>
          Generic layout container using a div.
        </div>

        <p>
          Inline text can use a
          <span> span element </span>
          for styling or scripting.
        </p>
      </section>

      {/* INTERACTIVE */}

      <section>
        <h2>Interactive Components</h2>

        <dialog open>
          <p>
            Your project consultation request has been received.
          </p>

          <button>
            Close
          </button>
        </dialog>

        <h3>Project Completion</h3>

        <progress
          value="72"
          max="100">
        </progress>

        <p>
          Current workload:
        </p>

        <meter
          value="0.7">
          70%
        </meter>

        <template>
          <p>
            Hidden template content.
          </p>
        </template>

        <slot>
          Slot content for future web component usage.
        </slot>
      </section>

      {/* FOOTER */}

      <footer>

        <p>
          <strong>Lantern Light Development</strong>
        </p>

        <p>
          Building calm, fast, and thoughtful web experiences.
        </p>

        <nav>
          <a href="https://example.com">
            Portfolio
          </a>{" "}
          |{" "}
          <a href="mailto:hello@example.com">
            Email
          </a>{" "}
          |{" "}
          <a href="tel:1234567890">
            Phone
          </a>
        </nav>

        <p>
          <small>
            © 2026 Lantern Light Development
          </small>
        </p>

      </footer>

    </main>
  );
}