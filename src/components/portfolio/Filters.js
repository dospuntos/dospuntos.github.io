import "purecss/build/forms-min.css";

function Filters(props) {
  return (
    <div className="project-filters">
      <div className="content-wrap">
        <form className="pure-form">
          <fieldset>
            {props.tags.map((tag, index) => {
              return (
                <button
                  key={index}
                  onClick={(e) => props.handleTagFilter(e, tag)}
                  className={
                    props.tagFilter.includes(tag)
                      ? "pure-button enabled"
                      : "pure-button"
                  }
                >
                  {tag}
                </button>
              );
            })}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Filters;
