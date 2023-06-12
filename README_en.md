# semantic-release-go-demo
A demo of automatic-golang-release with GitHub Action

## Who is this project for?

This project is for those who have the need to manage multiple versions of a program in parallel, and do not want to manually tag versions for release.

Example:

> You have released version `v0.1.0` of your program, and then you want to add a new feature to the program (a non-breaking update), and you want users who are interested in the new feature to use it before it is stable. According to the semantic release process, you should release a version with the suffix `v0.2.0-beta` or another suffix.
>
> In this case, the `v0.2.0-beta` version should be a pre-release version (i.e. marked as a non-official version).
>
> At this point, you are mainly maintaining the branch of the new version `v0.2.0-beta`. When you want to fix a bug in `v0.1.0`, you should fix it in the branch of `v0.1.0` and release a `v0.1.1` version. That is, you should release the fix in the minor version where the error occurred, so that users can trust the rules of semantic release and upgrade the minor version without worrying about compatibility issues caused by introducing new features or other problems.

For further reading on related rules, please refer to the relevant documentation of [semantic-release](https://github.com/semantic-release/semantic-release/blob/452e1fa4b99759f408b503480e7a1ee8cc76f007/docs/recipes/release-workflow/pre-releases.md), where you will get a more detailed introduction to the semantic release process.

## Dependencies

- cycjimmy/semantic-release-action@v3
- goreleaser/goreleaser-action@v4

## How does it work?

1. Project contributors follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to fill in commit titles and submit them.
2. `cycjimmy/semantic-release-action@v3` automatically determines whether a new version needs to be released, and then adds a new version tag at the appropriate location and creates a release.
3. If there is a new version release, `goreleaser/goreleaser-action@v4` will be launched to build binaries for the new release.

## Quick Start

Here's how to port this project to your own project.

1. Copy `.github/workflows/release.yaml`, `.releaserc.js`, and `.goreleaser.yaml` (if you already have related configuration files, please resolve conflicts yourself) to your project.
2. (Optional) Refer to `.gitignore` to set the contents of your project's `.gitignore` file and ignore the `dist` folder (goreleaser's output folder).
3. (Optional) Edit `.releaserc.js` to adjust the release branch and pre-release branch, as well as configure plugin settings.
4. (Optional) Edit `.goreleaser.yaml` to adjust the binary release configuration.
5. (Optional) Run `goreleaser release --snapshot --clean` to verify your build configuration. (Assuming you have goreleaser installed locally)
6. Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to fill in commit titles and submit them, and manage branches according to the relevant documentation of [semantic-release](https://github.com/semantic-release/semantic-release/blob/452e1fa4b99759f408b503480e7a1ee8cc76f007/docs/recipes/release-workflow/pre-releases.md).

## How to Contribute

If you are interested in this project, you can contribute in the following ways:

- Submitting issues: If you find any problems or have any suggestions, please submit an issue on GitHub.
- Submitting pull requests: If you have solved a problem or implemented a new feature, please submit a pull request.
- Improving documentation: We greatly need contributors to improve the documentation. If you find any deficiencies or errors in the documentation, please submit a pull request.

We appreciate any contributions to this project, and we thank you for your support!