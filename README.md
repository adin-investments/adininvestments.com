# adininvestments.com

Single-page site for Adin Investments, Inc., hosted on GitHub Pages at https://adininvestments.com.

Plain static HTML, CSS and a few lines of vanilla JavaScript. No build step, no framework. Edit the files and push to `main`; GitHub Pages republishes in a minute or two.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: hero, What we do, Work with us (routing cards), About, Contact, footer |
| `styles.css` | All styles. Colors are tokens at the top in `:root` (theme: Slate & Brass) |
| `contact.js` | Builds the email address in the browser and fills in the copyright year |
| `404.html` | Page-not-found page |
| `fonts/` | Self-hosted Source Serif 4, Public Sans, IBM Plex Mono (SIL OFL, see `fonts/LICENSE.txt`) |
| `img/og-image.png` | 1200×630 share image for link previews |
| `img/logo-512.png` | Logo used in the structured data |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Browser and phone icons |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `CNAME` | Custom domain for GitHub Pages: `adininvestments.com` |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Rules for editing

- **Email address.** The contact address is never written in plain text anywhere in this repo, including comments and this README. `contact.js` holds it reversed and split up, and assembles it in the browser. Every link with class `js-email` becomes a `mailto:` link; `data-subject` sets the subject line and `data-show` also shows the address as the link text. To change the address, edit `PARTS` in `contact.js`.
- **Routing card subjects** ("Selling a property", "Deal submission", "Transaction / verification request", "Partnership inquiry") are used by Outlook rules on the receiving inbox. If you change one, update the rule.
- **Licensee disclosure.** The notice in the Contact section and the footer disclosure on every page are required because Clint Aguon is a licensed Washington real estate broker (RCW 18.85.361(21)). Don't remove or weaken them. Keep the page free of brokerage-service language (listing property for others, valuations, representing buyers or sellers).
- **No investor solicitation.** Don't add language inviting people to invest money in deals.
- **No dated statistics** on this page.
- Before each deploy, search for `{{`, `TODO` and `lorem`, and keep `robots` set to `index, follow` on `index.html`.
- If a second page is added, give it a unique title and description, add it to `sitemap.xml`, and update `lastmod`.

## Launch steps (GitHub Pages + GoDaddy)

Replace `<username>` with the GitHub username.

1. **Create the repo** `adininvestments.com` (public on the Free plan) and push these files to `main`.
2. **Verify the domain on GitHub.** Profile Settings › Pages › Add a domain › `adininvestments.com`. Add the TXT record GitHub shows (`_github-pages-challenge-<username>`) in GoDaddy DNS, then click Verify. Leave that record in place permanently.
3. **Turn on Pages.** Repo Settings › Pages › Build and deployment › Deploy from a branch › `main` / `(root)` › Save.
4. **Set the custom domain.** Repo Settings › Pages › Custom domain › `adininvestments.com` › Save. (The `CNAME` file is already in the repo.)
5. **Clear GoDaddy parking.** In GoDaddy: turn off any domain forwarding, then in DNS delete the existing `A @` records (the domain currently points at GoDaddy's parking/forwarding addresses `3.33.130.190` and `15.197.148.33`) and any `CNAME www` pointing at GoDaddy.
6. **Add the GitHub records in GoDaddy DNS.** Leave the MX, SPF (`v=spf1 include:spf.protection.outlook.com -all`) and any other Microsoft 365 records exactly as they are.

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA (optional) | @ | 2606:50c0:8000::153 |
   | AAAA (optional) | @ | 2606:50c0:8001::153 |
   | AAAA (optional) | @ | 2606:50c0:8002::153 |
   | AAAA (optional) | @ | 2606:50c0:8003::153 |
   | CNAME | www | `<username>.github.io` |

   Never add a wildcard `*` record pointing at GitHub.
7. **Wait and check.** Usually under an hour, up to 24. `dig adininvestments.com +noall +answer -t A` (or `Resolve-DnsName adininvestments.com` on Windows) should show the four GitHub addresses.
8. **Enforce HTTPS.** Repo Settings › Pages › Enforce HTTPS, once the checkbox becomes available.
9. **Test.** Both `https://adininvestments.com` and `https://www.adininvestments.com` load; `/robots.txt` and `/sitemap.xml` load; a made-up URL shows the 404 page; every email button opens a message to the info address with the right subject; a test email from an outside address arrives.
10. **Search Console.** Add `adininvestments.com` as a Domain property (DNS TXT record in GoDaddy) and submit `https://adininvestments.com/sitemap.xml`.
