<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the website's original content in browser-safe data modules shared by the static pages, so copy and download links have one source of truth.
- Prerender all public content pages with explicit paths and no visitor-specific state, so the website serves static HTML.
- Define visual roles and responsive layouts in src/styles.css and use the shared Button for interactive controls, so the redesign stays consistent.
