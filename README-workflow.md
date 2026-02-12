# GitHub Actions: Build & Push Docker Image to Docker Hub

Required secrets (set in GitHub repository Settings → Secrets → Actions):

- `DOCKERHUB_USERNAME` — your Docker Hub username
- `DOCKERHUB_TOKEN` — a Docker Hub access token or password (recommend token)
- `DOCKERHUB_REPOSITORY` — full repository name, e.g. `myusername/myrepo`

How it works:

- The workflow at `.github/workflows/docker-publish.yml` builds the Docker image using the Dockerfile in `Java_Application/Dockerfile`.
- It uses Buildx to build multi-arch images (`linux/amd64, linux/arm64`) and pushes three tags: `latest`, a short commit SHA, and the git tag (when the workflow runs on a tag).
- You can trigger manually via `workflow_dispatch` and pass `environment` and `custom_tag` inputs.

Usage examples:

1. Push to `main` branch — the workflow builds and pushes `latest` and a commit-based tag.
2. Push a Git tag like `v1.0.0` — the workflow pushes the tag `v1.0.0` as an image tag.
3. Manual run (workflow_dispatch) — set `environment` or `custom_tag` if you want custom behavior.

Notes & recommendations:

- Ensure `DOCKERHUB_REPOSITORY` is set to a repository you own on Docker Hub (format `username/repo`).
- Consider using a Docker Hub access token instead of your password and rotate credentials periodically.
- If you need additional customization (different Dockerfile path, extra build args, or private base images), let me know and I can update the workflow.
