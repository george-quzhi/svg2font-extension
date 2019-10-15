# svg2font-extension 

svg2font-extension 是基于svg2font的一个Visual Studio Code的插件

svg2font项目地址：https://github.com/george-quzhi/svg2font

## Features

### 图标生成字体
在file explorer选择要转换的svg文件或者包含svg图标的目录，右键的context中选择SVG to Font选项，生成字体文件。默认情况下会导出到子目录（选中文件夹）或同级目录（选中svg）下的iconfont目录。

### 字体生成图标
在file explorer选择要转换的字体文件（支持ttf，woff，svg格式），右键的context中选择Font to SVG选项，生成svg文件。默认情况下会导出到同级目录下的icons目录。

## Extension Settings

|name|description|default|
|:---|:---|:---|
|svg2font.unicodeNum|Specifies the start unicode number.|60000|
|svg2font.fileName|Specifies the font file name.|iconfont|
|svg2font.fontFamily|Specifies the font family name.|iconfont|
|svg2font.fontClass|Specifies the prefix of font class for each icon.|icon-|
|svg2font.fontPath|Specifies the font target path. By default, use the subdirectory or sibling directory of the selected file.|null|
|svg2font.svgPath|Specifies the svg target path. By default, use the subdirectory or sibling directory of the selected file.|null|

## Release Notes

### 0.0.1

Initial release of svg2font extension
