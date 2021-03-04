import { useState, useEffect } from "react";
import Filters from "./Filters";
import Projects from "./Projects";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Portfolio({ lang }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tagFilter, setTagFilter] = useState("");
  const { i18n } = useTranslation();
  /* 
  const [filterCategory, setFilterCategory] = useState("");
  const [found, setFound] = useState(false); */

  useEffect(() => {
    getAllProjects(i18n.language);
  }, [i18n.language]);

  function getAllProjects(lang = "en") {
    //setIsLoading(true);
    axios
      .get("./data." + lang + ".json")
      // Add some delay for testing
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1000)))
      .then((response) => {
        setProjects(response.data);
        setIsLoading(false);
      });
  }

  function handleTagFilter(e, tag) {
    e.preventDefault();
    tagFilter === tag ? setTagFilter("") : setTagFilter(tag);
    /* tagFilter.includes(tag)
      ? setTagFilter(tagFilter.filter((item) => item !== tag))
      : setTagFilter([...tagFilter, tag]); */
  }

  /* Create list of tags */
  const tags = [];

  projects.map((project) => {
    return tags.push(...project.tags);
  });

  /* Filter projects */

  let filteredProjects = projects;

  filteredProjects = filteredProjects.filter((eachItem) => {
    return (
      //!tagFilter.length || eachItem["tags"].some((r) => tagFilter.includes(r))
      tagFilter === "" || eachItem["tags"].some((r) => tagFilter === r)
    );
  });

  return (
    <div className="portfolio">
      <Filters
        /* handleFilterChange={handleFilterChange} */
        handleTagFilter={handleTagFilter}
        tags={[...new Set(tags)]}
        tagFilter={tagFilter}
      />
      <Projects isLoading={isLoading} projects={filteredProjects} />
    </div>
  );
}
