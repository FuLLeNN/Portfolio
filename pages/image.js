"use client";

import {useState} from "react";
import imageStyle from "../styles/image.module.css";

export default function SearchPage() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(1);
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const imageResponse = await response.json();
    // setImageURL(imageResponse.imageURL)
    console.log(imageResponse);
    setImageURL(imageResponse.imageURL);
    setLoading(0);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (imageURL !== "" && loading === 0) {
    return (
      <div className={imageStyle.imageContainer}>
        <img src={imageURL}></img>
      </div>
    );
  }

  return (
    <div>
      <div className={imageStyle.search_box}>
        <form onSubmit={handleSubmit}>
          <button className={imageStyle.btn_search}>
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            id="prompt"
            name="prompt"
            className={imageStyle.input_search}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Generate Image with AI ..."></input>
        </form>
      </div>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
