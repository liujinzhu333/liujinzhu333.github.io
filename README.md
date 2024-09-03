# 征途

## 前言

这是我的个人博客，主要用来记录一些学习笔记、生活感悟、工作总结等。

## 目录
```
├── _drafts/  # 草稿
├── _includes/  # 公共组件
├── _layouts/  # 布局模板
├── _posts/  # 博客文章
├── _site/  # 网站生成的静态文件
├── assets/  # 静态资源
├── config.yml  # 网站配置文件
├── index.html  # 网站首页
```

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
source ~/.nvm/nvm.sh
# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

`vim ~/.zshrc`

`source ~/.bashrc`

## 启动 Jekyll

`jekyll serve`

带草稿启动：

`jekyll serve --drafts`

