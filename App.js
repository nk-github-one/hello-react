
const heading = React.createElement("h1", { class: "abc", id: "xyz"}, [
    React.createElement("div", {class: "child1"}, [
        React.createElement("span", {class: "span1"}, "Hello"),
        React.createElement("span", {class: "span1"}, "Hello"),
    ]),
    React.createElement("div", {class: "child2"},
        React.createElement("span", {class: "span1"}, "Hello"),
        React.createElement("span", {class: "span1"}, "Hello"),
    ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);