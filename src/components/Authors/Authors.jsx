import { useState } from "react";

import { authors } from "../../data/authors";

import Author from "./Author";

import "./Authors.css"
 
const AuthorsComponent = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (

        <section className="authors">

            <div className="container">

                <form className="authors__search-form">

                    <input 
                    
                        type="search"
                        
                        placeholder="Search In Authors..."

                        value={ searchTerm }

                        onChange={e => setSearchTerm(e.target.value)}
                    
                    />

                </form>

                <div className="authors__wrapper">{

                    authors.filter(author => {

                        return author.name.toLowerCase().startsWith(
                            
                            searchTerm.toLowerCase()
                        
                        );

                    }).map(author => <Author
                        
                        key={ author.id }
                        
                        author={ author } 
                        
                    />)

                }</div>

            </div>

        </section>

    )

}

export default AuthorsComponent
