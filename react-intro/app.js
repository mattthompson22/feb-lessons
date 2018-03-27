const header =
    <div>
        <h1 id="header">Hell World</h1>
    </div>;

const content =
    <section className="section">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta asperiores, veritatis adipisci nemo obcaecati perferendis? Minima iste laboriosam quia voluptatibus temporibus? Aspernatur odit, modi eligendi dolor enim vel quidem quis.</p>
    </section>;

const footer =
    <footer>
        Made by VSchool
    </footer>;

const app =
    <div>
        {header}
        {content}
        {footer}
    </div>;

ReactDOM.render(app, document.getElementById("root"));