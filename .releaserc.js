// From: https://github.com/asjdf/semantic-release-go-demo
module.exports = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "master",
        "main",
        "next",
        "next-major",
        { name: "beta", prerelease: true },
        { name: "alpha", prerelease: true },
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                successComment: false, // tmp fix https://github.com/semantic-release/github/pull/857
                failComment: false,
                failTitle: false,
            },
        ],
    ],
};
