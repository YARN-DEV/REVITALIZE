<!-- .github/copilot-instructions.md
Guidance for AI coding agents working on the REVITALIZE repository.
Keep this file short and highly actionable — focus on what an agent must know to be productive immediately.
-->

# REVITALIZE — Copilot instructions (concise)

Repository snapshot:
- Project root contains `README.md` describing a wellness store. No obvious source folders, build files, or tests were found when this guidance was created.

Primary goal for an AI agent arriving at this repo:
- Discover the project's language, frameworks, and build/test scripts before making changes. If they are not discoverable, ask the maintainer for the intended tech stack.

Quick detective checklist (run these in order):
1. Look for these files at repo root (one or more will identify the stack): `package.json`, `pyproject.toml`, `requirements.txt`, `setup.py`, `Pipfile`, `Cargo.toml`, `go.mod`, `pom.xml`, `build.gradle`, `Makefile`, `Dockerfile`, `*.sln`.
2. Search for common source folders: `src/`, `app/`, `backend/`, `frontend/`, `server/`, `client/`.
3. If any CI config exists (`.github/workflows/*`, `azure-pipelines.yml`, `circleci/config.yml`), open it to learn test/build commands and environment variables.

If the checklist finds nothing (common for a new/empty repo):
- Do NOT create large implementation changes or assume a framework. Instead, post a short clarifying question to the repository owner asking for the intended runtime (Node/Python/.NET/Java/etc.), preferred package manager, and CI expectations.

Repository-specific notes discovered here:
- `README.md` exists and states: "a general wellness store that specialize in selling wellness products and devices." Use that as the product context when naming models, routes, or data structures.

How to propose changes (branching and PRs):
- Use short-lived branches with a type prefix: `feature/`, `fix/`, `chore/` (e.g., `feature/add-product-model`).
- Open a PR against `main`. Include a short description of intent, files changed, and any manual steps to validate.

Small implementation conventions (only apply when consistent files exist):
- Follow existing coding style. If no style files found, prefer minimal, idiomatic code for the chosen language and include a short comment explaining any non-obvious design choices.
- Keep changes small and testable. When adding code, add one minimal unit test (follow project's test framework) or document how maintainers can validate the change manually.

When adding new dependencies or tooling:
- Update/mention the manifest used by the project (`package.json`, `requirements.txt`, `pyproject.toml`, etc.).
- Avoid adding large build systems without confirmation.

What to reference in PR descriptions:
- Why the change was needed (product context from `README.md`), what was changed, how to run validations (commands discovered from CI or package files), and any migration steps.

If you need more context (most likely):
- Ask these concrete questions in the PR or issue: "What runtime/framework should I target?", "Are there preferred linting and test commands?", "What's the CI provider and any secret/ENV requirements?"

Contact/ownership:
- Repo default branch: `main`. If you need to run or test anything and lack permissions, request a workspace or instructions from the owner.

End of file.
