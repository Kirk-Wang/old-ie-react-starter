# old-ie-react-starter

> 记得某大神说过：”现如今兼容底版本IE浏览器已不是一种荣耀，而是一种耻辱！”

但是作为战斗在一线的攻城狮－>我来说，目前部分业务还是需要兼容到ie7+～😭。<br/>
然而，在这个“前端代有框架出，各领风骚几个月”的前端乱世～<br/>
如果项目中不用上Webpack，React，TypeScript，PostCSS，CSSModules等一系列东西，着实觉得不甘。<br/>
基于此背景，所以弄了这个Starter，并已将其应用于生产(ie7+的老项目)～<br/>
主要目的还是为了在不久的将来无缝升级这些个项目或者模块～<br/>

### 功能特点
<ol>
  <li>可以用它开发兼容ie7+的UMD模块（React组件，JQuery插件，或者一个plain Javascript npm module）</li>
  <li>目前这个starter只提供一个基于React的UMD模块demo</li>
  <li>采用TypeScript2.4.2作为项目开发语言</li>
  <li>采用Sass(.scss)编写样式</li>
  <li>采用CSSModules，PostCSS，oldie对样式进行处理</li>
  <li>采用webpack-spritesmith处理css-sprites</li>
  <li>采用tslint，tslint-react保证代码风格</li>
  <li>采用基于webpack生态的nwb(Javascript Tools)来贯穿整个项目开发（nwb是个不错的开发工具）</li>
</ol>
