export const metadata = {
  title: 'Resume | Rex Staples',
  description:
    'Front-end software engineer with 25+ years building and modernizing data-driven web products.',
};

/**
 * Resume.
 *
 * Content mirrors `Rex Staples - Resume - 2026.html`, converted from its print
 * stylesheet to Tailwind. The source used floats and `page-break` classes for PDF
 * output, which have no meaning in a browser and are not carried over.
 */
export default function ResumePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Rex Staples</h1>
        <address className="text-sm not-italic text-slate-600 sm:text-right">
          11504 Autumn Ridge Drive
          <br />
          Austin, TX 78759
          <br />
          (512) 589-5900
          <br />
          rstaples@gmail.com
        </address>
      </header>

      <Section title="Summary">
        <p>
          Front-end software engineer with 25+ years building and modernizing data-driven web
          products. Deep specialty in cross-browser JavaScript, React/TypeScript, and payment and
          configuration systems.
        </p>

        <Labelled label="Specialties">
          Human-computer interfaces, cross-browser compatibility, advanced client-side scripting,
          JavaScript frameworks, web technologies, dynamic html, and open-source frameworks.
        </Labelled>

        <Labelled label="Languages">
          TypeScript, JavaScript, HTML, CSS, C#, Java, XML, XSL, XSLT, JSP, ASP, Python, PHP, Perl,
          JSX, VB, C/C++, SQL
        </Labelled>

        <Labelled label="Core technology">
          Claude, OpenCode, Stripe, Stripe apps, Vite, server-side rendering, React, React Query,
          TanStack, Redux-Saga, Amazon Web Services, Docker, Tailwind, JSON, PostgreSQL, Linux
        </Labelled>

        <Labelled label="Prior experience">
          ExtJS, jQuery, Sass, Spring MVC, i18n, XPath, MySQL, Oracle, SQL Server, SEO, HTML Email
        </Labelled>
      </Section>

      <Section title="Experience">
        <ul className="flex flex-col">
          <Job title="Systems Engineer" date="February 2021 - April 2026" employer="Cloudflare">
            <li>
              Created a data-driven checkout experience supporting purchase of multiple products,
              direct email marketing links, and turnkey configuration to onboard new products in
              hours instead of weeks.
            </li>
            <li>
              Authored Stripe apps to run on Cloudflare&apos;s private Stripe dashboard where
              finance team members audit financial activities to maintain various levels of
              compliance.
            </li>
            <li>
              Ported the data-driven checkout to an experimental SSR solution refactoring three
              years of adoption by a dozen teams to improve product presentation for users.
            </li>
            <li>
              Drove a Claude AI migration of the data-driven checkout off the experimental SSR
              solution and back to the primary Cloudflare dash with care taken to maintain the
              configuration improvements, the i18n, and the abstracted data layer.
            </li>
            <li>
              Mentored interns and new team members on the disciplines required to develop and debug
              on the front end.
            </li>
          </Job>

          <Job
            title="Software Engineer IV"
            date="July 2018 - August 2020"
            employer="iFly Indoor Skydiving"
          >
            <li>
              Implemented third-party redesigns of the public-facing iFlyWorld.com website
              supporting five different device sizes and dozens of web browsers including legacy
              Internet Explorer and mobile Safari.
            </li>
            <li>
              Leveraged an existing multi-site WordPress installation to populate reusable React
              components from the headless WordPress API for consistent branding across various
              customer apps.
            </li>
            <li>
              Replaced the legacy single script PHP photos and video kiosk with a rebranded React
              Redux-Saga implementation connecting to a C# .NET Core backend.
            </li>
            <li>
              Created a visual pricing demand tool allowing financial administrators to dynamically
              adjust flight prices months in advance at each retail location.
            </li>
            <li>
              Supported the legacy WordPress site authoring custom Angular/PHP elements for both
              co-branded national marketing and heavy traffic holiday campaigns.
            </li>
          </Job>

          <Job title="UI Architect" date="October 2012 - June 2018" employer="OutboundEngine, Inc.">
            <li>
              Created the OutboundEngine web application enabling our customers to consistently
              deliver the right message to their contacts with very little effort, and then monitor
              for signs of engagement.
            </li>
            <li>
              Deployed an advanced web stack delivering the first application within weeks, and then
              grew that application over five years through multiple design themes and thousands of
              product requirements.
            </li>
            <li>
              Re-architected a monolithic Java application for our customers&apos; Profile Page
              website into a simplified Java 8/Spring MVC environment to support dynamic rendering
              for dozens of product verticals from multivariate permissions and configurations.
            </li>
            <li>
              Built various web crawlers designed to authenticate and retrieve logs and other
              information from third-party sites.
            </li>
            <li>
              Authored customized web tools to support sales and marketing teams managing the
              corporate website and product demos.
            </li>
          </Job>

          <Job
            title="Senior Architect & Designer"
            date="February 2011 - October 2012"
            employer="CDS Global"
          >
            <li>
              Recognized as a client-side expert and chief ExtJS evangelist within the company
              tasked with training teams, rapidly prototyping applications, and performing due
              diligence on acquisition targets and emerging technology.
            </li>
            <li>
              Scaled the performance of a Magento ecommerce application to handle thousands of
              product categories by implementing an AJAX/REST interface to integrate with the PHP
              Mage API.
            </li>
            <li>
              Authored an ExtJS intranet application integrating in-house account profiles with
              Salesforce.com contacts and dashboards using the Force.com AJAX Toolkit Connector API
              and CouchDB.
            </li>
            <li>
              Created a Python prettydiff source control analysis plugin (for mercurial or git) to
              process unified diffs into side-by-side HTML diffs targeted for email or modern
              browsers.
            </li>
            <li>
              Supported sales and marketing teams by customizing WordPress plugins, creating rich
              product demos, and refactoring intranet applications to minimize developer support.
            </li>
          </Job>

          <Job
            title="Staff Software Engineer"
            date="August 2009 - January 2011"
            employer="Autonomy"
          >
            <li>
              Recognized as a JavaScript expert and mentor within the organization leveraging 15
              years of experience to solve the most obtuse browser inconsistencies.
            </li>
            <li>
              Built a multivariate testing tool ready for demo in under a week enabling
              point-and-click selection of document elements within arbitrary customer pages.
            </li>
            <li>
              Designed custom ExtJS JavaScript widgets for critical portions of the information
              monitoring website of the BBC.
            </li>
            <li>
              Rebuilt the Zantaz Email Archive application replacing procedural JavaScript with
              object-oriented ExtJS widgets to deliver a cross-browser Outlook-style web UI in under
              one month.
            </li>
            <li>
              Led a pre-sales engineering team to recreate a pixel-perfect replica of a Fortune 50
              e-commerce site in less than one week securing a multi-million dollar contract.
            </li>
          </Job>

          <Job
            title="Staff Software Engineer"
            date="October 2004 - August 2009"
            employer="Interwoven"
          >
            <li>
              Rebranded the 13 Colonies WYSIWYG acquisition software as LiveSite and integrated into
              the SitePublisher enterprise content management suite in three months.
            </li>
            <li>
              Developed a visual site map management application within SitePublisher integrating
              custom navigation, LiveSite pages, external content and affinity group views.
            </li>
            <li>
              Enhanced the LiveSite WYSIWYG product with in-context editing, advanced templating,
              custom data controls, and surf-and-edit technology.
            </li>
            <li>
              Evolved the LiveSite product over time from a JSP taglib application using hidden
              iframes for client-server communication into an object-oriented ExtJS application
              using AJAX and JSON.
            </li>
            <li>
              Created pre-sales training courses for sales engineers and assisted post-sales product
              integration teams for marquee customers.
            </li>
          </Job>

          <Job
            title="Chief Designer, Founder"
            date="June 2001 - October 2004"
            employer="13 Colonies Software"
          >
            <li>
              Developed a WYSIWYG architecture where users work with live data to develop
              interactive, dynamic website.
            </li>
            <li>
              Served as lead architect for a generic XML-based framework used to manage client
              assets in a SQL database or any other external repository.
            </li>
            <li>
              Designed the Arista Records flagship website in three months using Java, XML and XSL
              delivering a componentized solution where images, audio/video streams, contests, and
              artist pages are managed through a web browser.
            </li>
            <li>
              Authored hundreds of custom XML/XSL components for demos, the corporate site, and for
              customer implementations such as Time Warner/Warner Music Group.
            </li>
            <li>
              Rebuilt the entire product suite from ASP/COM+ to J2EE solution abstracting complex
              HTML controls and XML menu navigation into JSP tag libraries in six months.
            </li>
            <li>
              Developed an algorithm for converting container geometries into both table-based and
              div-based HTML layouts.
            </li>
          </Job>

          <Job
            title="Senior Software Engineer"
            date="December 1999 - May 2001"
            employer="CollegeClub.com"
          >
            <li>
              Designed and developed scalable SQL Server/ASP/VBScript personalization application
              for 3 million member community in three months.
            </li>
            <li>
              Developed existing College Store Online partnership into a SQL Server/ASP/PerlScript
              e-commerce application integrating a third-party product database into a branded
              CollegeClub.com storefront.
            </li>
            <li>
              Led the architectural redesign of dozens of core site products migrating from ASP and
              SQL Server to J2EE and Oracle increasing traffic to 500 million page views per month.
            </li>
            <li>
              Designed and developed an in-house SQL Server/ASP/VBScript content management system
              with access controls and workflow.
            </li>
          </Job>

          <Job
            title="Chief Designer, Founder"
            date="August 1996 - December 1999"
            employer="CollegeStudent.com"
            last
          >
            <li>
              Co-founded a seed-funded internet start-up company into a sixty-person operation which
              resulted in a $19M competitor acquisition.
            </li>
            <li>
              Responsible for hiring, site-strategy, and technology due diligence for prospective
              partners, mergers and acquisitions.
            </li>
            <li>
              Developed College Store Online in a venture with the National Association of College
              Stores employing Microsoft technologies to build a turnkey e-commerce service licensed
              to over 300 independent college bookstores.
            </li>
            <li>
              Led a team of designers to produce print artwork, online media, application
              interfaces, and internal product development.
            </li>
            <li>
              Architectural redesign of site migrating from CGI/C++ and flat files to Apache,
              mod_perl, and Oracle.
            </li>
            <li>
              Developed template-driven web technologies using Oracle and Perl for serving localized
              content to over 1500 colleges across the country.
            </li>
            <li>
              Grew a web community from zero to 500,000 members by delivering over two dozen free
              web applications including e-mail, personalization, blogs, and classifieds.
            </li>
            <li>
              Designed and developed a real-time web-based content management system in mod_perl and
              Oracle to support dozens of editors creating content for an online magazine.
            </li>
          </Job>
        </ul>
      </Section>

      <Section title="Education">
        <p>
          <strong className="font-semibold">The University of Texas at Austin</strong>
          <br />
          Bachelor of Arts, Computer Science, 1998
        </p>
      </Section>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="rounded-lg bg-slate-100 px-3 py-1.5 text-xl font-normal">{title}</h2>
      <div className="flex flex-col gap-4 px-1 pt-4">{children}</div>
    </section>
  );
}

function Labelled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="block font-semibold">{label}</span>
      {children}
    </p>
  );
}

function Job({
  title,
  date,
  employer,
  last,
  children,
}: {
  title: string;
  date: string;
  employer: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={last ? '' : 'border-b border-dotted border-slate-400 pb-4'}>
      <div className="flex flex-col gap-1 pb-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-slate-600">{date}</span>
      </div>
      <p className="font-semibold">{employer}</p>
      <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 leading-relaxed">{children}</ul>
    </li>
  );
}
