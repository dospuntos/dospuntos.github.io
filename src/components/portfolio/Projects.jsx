import Thumbnail from "./Thumbnail";
import LoadingSpinner from "./LoadingSpinner";

export default function Projects({ isLoading, projects }) {
  if (isLoading) return <LoadingSpinner />;
  if (!projects.length)
    return (
      <div className="content-wrap">
        <p>Sorry, no projects matching your query.</p>
      </div>
    );

  return (
    <div>
      {projects.map((project, index) => {
        let altLayout = index % 2;
        return (
          <Thumbnail
            key={index}
            client={project.title}
            link={project.link}
            image={project.thumbnail}
            imageFull={project.image}
            title={project.title}
            description={project.description}
            alt={altLayout}
            tags={project.tags}
            category={project.category}
          />
        );
      })}
    </div>
  );
}
