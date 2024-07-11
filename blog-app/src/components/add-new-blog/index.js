"use client";

import { Fragment } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddNewBlog({
  openBlogDilog,
  setOpenBlogDilog,
  loading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  return (
    <Fragment>
      <div>
        <Button onClick={() => setOpenBlogDilog(true)}>Add New Blog</Button>
      </div>
      <Dialog open={openBlogDilog} onOpenChange={setOpenBlogDilog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                id="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...FormData, title: e.target.value })
                }
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
                id="description"
                placeholder="Enter blog description"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveBlogData} type="button">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default AddNewBlog;
