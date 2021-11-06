const container = document.getElementById("app")

const name = "Shashwat"

const jsx = 
<ul>
    <li>I am a heading</li>
    <li>I am a heading</li>
    <li>I am a heading</li>
    <ul>
        <li>sdf</li>
        <li>sdf</li>
    </ul>
</ul>

const content = React.createElement('ul', {}, [
    React.createElement('li', {}, "I am a heading"),
    React.createElement('li', {}, "I am a heading"),
    React.createElement('ul', {}, [
        React.createElement('li', {}, "content"),
        React.createElement('li', {}, "content"),
        React.createElement('li', {}, "content"),
        React.createElement('li', {}, "content"),
    ]),
])

ReactDOM.render(content, container)