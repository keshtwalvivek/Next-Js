"use client";

import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
  title: "",
  description: "",
};

function BlogOverview() {
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [openBlogDilog, setOpenBlogDilog] = useState(false);

  console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      const apiResponse = await FeatherIcon(`/api/add-blog`, {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });

      const result = await apiResponse.json();
      console.log(result);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-300 to bg-blue-500 p-6">
      <AddNewBlog
        openBlogDilog={openBlogDilog}
        setOpenBlogDilog={setOpenBlogDilog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={setBlogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div> Add New Blog Section</div>
    </div>
  );
}

export default BlogOverview;
