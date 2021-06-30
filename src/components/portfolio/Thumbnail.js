import { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./thumbnail.scss";
import "purecss/build/buttons-min.css";
import { useTranslation } from "react-i18next";
import { FaTags } from "react-icons/fa";

export default function Thumbnail(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={"blog-card step" + (props.alt ? " alt" : "")}>
      <div className="meta">
        <div
          className="photo"
          style={{
            backgroundImage: "url(img/portfolio/" + props.image + ")",
          }}
        ></div>
        <ul className="details">
          <li className="tags">
            <ul>
              <li style={{ verticalAlign: "middle" }}>
                <FaTags />{" "}
                {props.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{props.title}</h1>
        <h2>{props.category}</h2>
        <p>{props.description}</p>
        {props.link && (
          <p className="read-more">
            <a
              href="#/"
              onClick={(e) => {
                setOpen(true);
              }}
            >
              {t("READ_MORE")}
            </a>
          </p>
        )}
      </div>
      <Modal open={open} onClose={(e) => setOpen(false)} center>
        <h1 style={{ textAlign: "center" }}>{props.client}</h1>
        <img src={"img/portfolio/" + props.imageFull} alt="" />
        <a
          className="pure-button"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("BUTTON_VISIT_WEBSITE")}
        </a>
      </Modal>
    </div>
  );
}
