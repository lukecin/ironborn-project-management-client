import "./ProjectListPage.css"


function ProjectListPage(props){

    const renderProjects = () => {
        const result = props.projects.map( (element) => {
            return (
                <div key={element._id} className="project-summary box">
                    <p>{element.title}</p>
                    <button>More details</button>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="ProjectListPage">
            <h1>List of Projects</h1>

             <section>
                 { props.projects === null
                    ? <p>loading...</p>
                    : renderProjects()
                }
             </section>

        </div>
    );
}

export default ProjectListPage;