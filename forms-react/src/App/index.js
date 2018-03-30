import React from "react";
import Form from "./Form/";

function App() {
    const personToEdit = {
        firstName: "Ilian",
        lastName: "Johnson",
        email: "theilliest@imsoill.com"
    }
    return (
        <div>
            <Form {...personToEdit}></Form>
        </div>
    )
}

export default App;