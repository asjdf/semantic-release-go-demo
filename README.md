# Golang 二进制自动化语义化发布专案

一个使用 GitHub Action 辅助实现自动化 Golang 二进制自动化语义化发布的案例

**[English](./README_en.md)**

## 这个专案适合谁？

当您有并行管理同一个程序多个版本的需求且不想通过手动标签进行版本发布时。

案例：

> 您发布了您的程序的`v0.1.0`版本，然后您想为程序加一个新的功能（非破坏性更新），且希望在新功能尚未稳定的情况下让对新功能感兴趣的用户先行使用上，按照语义化发布流程，此时您应该发布`v0.2.0-beta`或是其他后缀的版本。
> 
> 在这个情况下，`v0.2.0-beta`版本应为预发布版本（即被标记为非正式版本）。
> 
> 此时您主要是在维护新版本`v0.2.0-beta`的分支，此时当你想要修复一个`v0.1.0`的一个漏洞，您应当在`v0.1.0`的分支中修复它并发布一个`v0.1.1`版，即您应将修复发布在出现错误的小版本中，使得用户可以相信语义化发布的规则，放心地升级小版本号而不必担心因为引入了新的特性或是其他问题导致的兼容性故障。

进一步阅读相关规则，请移步[semantic-release](https://github.com/semantic-release/semantic-release/blob/452e1fa4b99759f408b503480e7a1ee8cc76f007/docs/recipes/release-workflow/pre-releases.md)的相关文档，在那里您将获得更详细的语义化发布流程介绍。

## 依赖

- cycjimmy/semantic-release-action@v3
- goreleaser/goreleaser-action@v4

## 它是如何工作的？

1. 项目贡献者遵守[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)规范来填写 Commit 标题并提交。
2. `cycjimmy/semantic-release-action@v3` 自动判断是否需要发布新版，后在恰当的位置打上新版本的标签并创建 Release。
3. 如果有新版本发布`goreleaser/goreleaser-action@v4`将会启动并为新的 Release 构建二进制。

## 快速开始

下面我将介绍如何将这个专案移植到您的项目中。

1. 将`.github/workflows/release.yaml`、`.releaserc.js`、`.goreleaser.yaml`（如果您已有相关配置文件请自行解决冲突）复制到您的项目中。
2. （可选）参照`.gitignore`设置您项目`.gitignore`的内容，忽略`dist`文件夹（goreleaser 的输出文件夹）
3. （可选）编辑`.releaserc.js`调整发布分支和预发布分支，以及配置插件配置。
4. （可选）编辑`.goreleaser.yaml`调整二进制的发布配置。
5. （可选）执行`goreleaser release --snapshot --clean`验证您的构建配置。（默认您本地已安装 goreleaser）
6. 遵守[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)规范来填写 Commit 标题并提交，并根据[semantic-release](https://github.com/semantic-release/semantic-release/blob/452e1fa4b99759f408b503480e7a1ee8cc76f007/docs/recipes/release-workflow/pre-releases.md)的相关文档进行分支管理。

## 如何贡献

如果您对本项目感兴趣，您可以通过以下方式贡献：

- 提交 issue：如果您发现了任何问题或者有任何建议，欢迎在 GitHub 上提交 issue。 
- 提交 PR：如果您已经解决了某个问题或者实现了某个新功能，欢迎提交 PR。 
- 完善文档：我们非常需要完善文档的贡献者。如果您发现文档有任何不足或者错误，欢迎提交 PR。

我们感谢任何对此项目的贡献，也感谢您的对此项目的支持！
