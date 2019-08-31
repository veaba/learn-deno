# learn-deno

learn-deno

## Deno 对象

```js
{
    args,
    noColor,
    pid,
    env,
    exit,
    isTTY,
    execPath,
    chdir,
    cwd,
    File,
    open,
    openSync,
    stdin,
    stdout,
    stderr,
    read,
    readSync,
    write,
    writeSync,
    seek,
    seekSync,
    close,
    copy,
    toAsyncIterator,
    SeekMode,
    Buffer,
    readAll,
    readAllSync,
    mkdirSync,
    mkdir,
    makeTempDirSync,
    makeTempDir,
    chmodSync,
    chmod,
    chownSync,
    chown,
    utimeSync,
    utime,
    removeSync,
    remove,
    renameSync,
    rename,
    readFileSync,
    readFile,
    readDirSync,
    readDir,
    copyFileSync,
    copyFile,
    readlinkSync,
    readlink,
    statSync,
    lstatSync,
    stat,
    lstat,
    linkSync,
    link,
    symlinkSync,
    symlink,
    writeFileSync,
    writeFile,
    ErrorKind,
    DenoError,
    permissions,
    revokePermission,
    truncateSync,
    truncate,
    connect,
    dial,
    listen,
    metrics,
    resources,
    kill,
    run,
    Process,
    Signal,
    inspect,
    build,
    platform,
    version,
    core,
    Console,
    stringifyArgs,
    DomIterableMixin;
}
```

## 相关参考链接

- https://github.com/chenshenhai/deno_note/ 《Deno 进阶开发笔记》
- https://github.com/denolib/awesome-deno#chinese Awesome-Deno

## windows 安装 deno

```
> 下载二进制版本 https://github.com/denoland/deno/releases
> 解压到 d:\deno\deno.exe
> 打开系统，path 添加路径 d:\deno\
> 重开cmd
> deno -v

```

> 成功截图
> ![81efa02fbcd2364bb3084beb21b49b22.png](en-resource://database/2002:1)

## linux 安装 deno

### 方式一

```
> 下载二进制版本 https://github.com/denoland/deno/releases
> 解压到 /home/binary/deno
> gunzip deno_linux_x64
> 这时候是无法使用
> chmod 755 deno //或者chmode +x deno_linux_x64 这个就是一整个大文件的二进制
> export PATH="/home/binary/deno/:$PATH"
> ln -s /home/binary/deno /usr/local/bin/deno 快捷方式
> deno version
```

### 方式二

> 一键完成的方式，https://deno.land/

```shell

> curl -fsSL https://deno.land/x/install/install.sh | sh
> export PATH="/root/.deno/bin:$PATH"
> deno
```

![a44d85ae2d36349b5da891d48f425cdd.png](en-resource://database/2006:1)

shell 方式
![239042ed2a4b7afa71c66293058fe16e.png](en-resource://database/2022:1)

## deno 的 module 识别需要决定路径，否则无法识别

- 需要绝对路径
- 需要填写后缀名
  ![b03d5a6eb2af39bb3d5618fe232db720.png](en-resource://database/2028:1)

## deno 里面去 console this

> console.log(this)

```

```

## deno app.ts 报错

> Found argument 'app.ts' which wasn't expected, or isn't valid in this context

![6bf8951839d2fbc048a1de72523e7732.png](en-resource://database/2453:1)

需要这样运行

> deno run xx.ts

- Windows: ‌Cannot find the common subdirectory path for the input files.‌

> 更新 windows 下的 deno 到最新的版本就可以解决问题。

## deno 运行 express 类型库

> https://github.com/NMathar/deno-express

## deno 运行 http 服务

> deno run --allow-net --allow-read hello.ts

```typescript
import { serve } from "https://deno.land/std@v0.5/http/server.ts";

async function main() {
  const body = new TextEncoder().encode("Hello World\n");
  for await (const req of serve(":8000")) {
    req.respond({ body });
  }
}

main();
```

## deno 命令选项

> 打开 deno -h 看

### usage 使用

- 允许所有权限执行脚本文件

  > deno run --allow-all mod.ts

- 允许所有权限+重新编译脚本
  > deno run --allow-all --reload mot.ts

### 子命令

- run 运行文件
  > deno run mot.ts
  > deno run https://xx.com/xx.ts

#### deno run -h

> deno run -h
> ![5b25b89d5cf43b1f28887aea09ea5fc8.png](en-resource://database/2479:1)

#### 主要功能

- ts 编译 成为 js 和 sourcemap。在\$HOME/.deno/gen/ 目录
- js 和 sourcemap 都是 hash 值命名
- 代码不变更还是调用之前编译后的文件
- 代码变更才会生成新的文件

#### run 权限 flags

- deno run --allow-net mot.ts 允许送网络权限
- deno run --allow-read mod.ts 允许直接使用文件读权限
- deno run --allow-write mod.ts 允许使用文件写权限
- deno run --allow-run mod.ts 允许直接执行文件、或者执行子进程
- deno run --allow-env mod.ts 允许直接使用操作系统环境权限
- deno run --allow-hrtime mod.ts 陨石测量高分辨率时间
- deno run --allow-all mod.ts 允许以上所有权限

#### run 其他 flags

- deno run -h 查看帮助文档
- deno run -D mod.ts、deno --log-debug 输出执行底层日志
- deno run --no-prompt mod.ts 在执行代码时不显示提示
- deno run --v8-flags mod.ts 设置 V8 命令行参数

### 子命令 eval

> deno eval"console.log('xxx'+new Date())"

### 子命令 fetch

获取远程在线的依赖模块

- 下载和编译远程依赖模块，并保存在本地
- 递归获取和遍历模块的所有依赖
- 编译后无需运行代码
- 在新项目拉取依赖时，无需重新下载或者编译，除非 --reload

#### fetch 的使用方式

> deno fetch https:/xxxx.ts
> deno fetch --reload https://xxx.ts

### 子命令 info

- deno info local xx.ts
- deno info type xx.ts
- deno info compiled xx.ts
- deno info map xx.ts
- deno info deps xx.ts

## 模块

> https://github.com/denoland/deno_std#use-the-term-module-instead-of-library-or-package

### 模块风格

- 使用名词术语  module  而不是  lib  或  package
- 如果需要一个入口文件，则建议使用 mod.ts 而不是 index.js 或 index.ts
- 文件命名方式使用“下划线”\_，例如 file_sys.ts，不要使用“破折号”-
- 输出方最多是两个参数，如果参数太多，超出部分用对象的方式代替
- 使用标准代码格式化命令去检查代码格式 deno --fmt

### 模块分分类

#### 原生模块

- 基础能力
  - readFileSync
  - writeFileSync
  - listen
- 基础接口
  - Reader
  - Writer
  - Closer
  - Conn

```typescript
import { readFileSync, writeFileSync } from "deno";
```

#### 本地模块

本地或者相对路径引入文件

```typescript
import { Modul1, Modul2 } from "./Mod/xxx.ts";
```

#### 标准模块

```typescript
import { test } from "https://deno.land/x/testing/mod.ts";
```

- 标准模块要按照推荐代码格式去规范
- 标准模块以 https://deno.land/x/ URL 开头
- 可以用无版本或者带版本号 URL 链接使用
- 任何第三方都可以贡献，申请使用 https://deno.land/xxx/成为标准模块

#### 其他远程模块

私有 HTTP 服务，或者类似 Node.js 的私有 npm 源仓库

### 模块编译

- Deno 是一个 Typescript 运行环境，不是直接的 runtime
- 把 ts 编译为 js，调用 v8 去执行

#### 编译位置

- \.deno\deps\* 存放远程模块 在本地和 goland 类似
- \.deno\gen\* 存放本地 hash 的 js 和 SourceMap

## deno 的全局变量

全局变量是什么，应该怎么从deno xx.ts 获取

- this    无法获取
- global  无法获取
- process 无法获取

## Windows

```js
[
  "Deno",
  "denoMain",
  "window",
  "atob",
  "btoa",
  "fetch",
  "clearTimeout",
  "clearInterval",
  "setTimeout",
  "setInterval",
  "location",
  "crypto",
  "Blob",
  "File",
  "CustomEventInit",
  "CustomEvent",
  "EventInit",
  "Event",
  "EventListener",
  "EventTarget",
  "URL",
  "URLSearchParams",
  "Headers",
  "FormData",
  "TextEncoder",
  "TextDecoder",
  "Request",
  "performance",
  "onmessage",
  "workerMain",
  "workerClose",
  "postMessage",
  "Worker"
];
```

### Deno 原生 API

- libdeno
- denoMain
- Deno
- CustomEventInit
- EventInit
- workerMain

### 浏览器兼容 Web API

> https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams 比如 URLSearchParams

- window
- atob
- fetch
- clearTimeout
- clearInterval
- setTimeout
- setInterval
- location
- Blob
- CustomEvent
- Event
- EventTarget
- URL
- URLSearchParams
- Headers
- FormData
- TextEncoder
- TextDecoder
- performance

## 