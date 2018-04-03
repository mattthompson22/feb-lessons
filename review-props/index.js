// react apps are built from components
// components are functions 
// functions can take parameters
// props are parameters
// they are also OBJECTS

function FakeComponent(props = {}) {
    console.log(props);
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerHTML = props.title;
    const p = document.createElement("p");
    p.innerHTML = props.author;

    div.appendChild(h1);
    div.appendChild(p);
    return div;
}
const data = {title: "Props Sucks less now! still sucks. but not so bad.", author: "Laney, Phd"};
// document.querySelector("body").appendChild(FakeComponent());

FakeComponent({...data});
FakeComponent({data: data});

// function FakeComponent(props){
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.author}</p>
//         </div>
//     )
// }

// ReactDOM.render(<FakeComponent data ={data}>, document.querySelector("body"))