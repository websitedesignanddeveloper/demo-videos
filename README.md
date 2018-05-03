# Pictore Plugin

# Requirements
```
1. Install nodejs and npm
2. npm i gulp -g
```
pictor is a tool that helps you to create HTML5 elements on HTML5 VIDEO  player.

# Start new project
clone blank repo
```
git clone -b plugin --single-branch https://github.com/norahabsentia/pictorpv-complete.git foldername
```
cd into the project
```
cd foldername
```
run gulp
```
gulp
```
Your project will be running at http://localhost:3000.

# Project Setup
```
var config = {
  // config here
};
var pictor = new Pictor(config);

pictor.init();
```
# Configuration
```
videoUrl: 'path/to/video',
posterUrl: 'path/to/poster',
textUrl: 'path/to/json_file',
rules: [ set of HTML rules]
```
| rules | Description |
| --- | --- | --- |
| id | string | desired id of the element |
| tag | string | by default it creates a div. If you need any other tag, enter tag name |
| class | string | class names of the element |
| href | string | for anchor to refer |
| hrefTarget | string | In case you want href from JSON, use the JSON key here |
| newWindow | boolean | In case you want to open the link in a new tab |
| text | string | Text inside the tag |
| bgImg | string | Use JSON key on the image url |
| animations | string | Names of the animations (comma separated) |
| times | string | Timing of the animations (comma separated) |
| parent | string | '#id' or '.class' of the parent element |

#Example
```
var config = {
  videoUrl: 'path/to/video',
  posterUrl: 'path/to/poster',
  textUrl: 'path/to/json_file',
  rules: [
      {
        id: '#myElement',
        animations: 'animation1, animation2',
        times: '12, 14',
        target: 'nameFromJSON',
        class: 'charlie name',
        parent: '#parentElement',
        tag: 'a'
        href: 'http://domain.com/link',
        text: 'text inside',
        newWindow: true,
      }
  ]
};
```
# Additional Config
TBA