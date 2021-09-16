import React, { useRef, useState, useEffect } from "react";

import FileUploadStyles from "./FileUpload.styles";

export default function FileUpload(props) {
  const [dragging, setDragging] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState(null);
  const [filesUploaded, setFilesUploaded] = useState(0);
  const fileInput = useRef(null);
  const form = useRef(null);
  function handleDragStart(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!dragging) {
      console.log("drag start");
      setDragging(true);
    }
  }
  function handleDragEnd(event) {
    event.preventDefault();
    event.stopPropagation();
    if (dragging) {
      setDragging(false);
    }
  }
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    let dt = event.dataTransfer;
    let files = dt.files;
    handleFiles(files);
    if (dragging) {
      setDragging(false);
    }
  }
  function handleFiles(files) {
    setFilesToUpload(files);
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // this logic needs to be replaced with actual upload logic. This is just a demo
  useEffect(() => {
    if (filesToUpload) {
      setFilesUploaded((prev) => prev + 1);
    }
    if (!filesToUpload) {
      setFilesUploaded(0);
    }
  }, [filesToUpload]);

  useEffect(() => {
    if (
      filesToUpload &&
      filesUploaded > 0 &&
      filesUploaded < filesToUpload.length
    ) {
      setTimeout(() => {
        setFilesUploaded(filesUploaded + 1);
      }, Math.random() * 1000);
    } else if (
      filesToUpload &&
      filesUploaded > 0 &&
      filesUploaded === filesToUpload.length
    ) {
      setTimeout(() => {
        setFilesToUpload(null);
        fileInput.current.value = null;
      }, 3000);
    }
  }, [filesUploaded, filesToUpload]);

  useEffect(() => {
    form.current.style.width = `${form.current.clientWidth + 4}px`;
    form.current.style.height = `${form.current.clientHeight + 15}px`;
  }, []);
  // this logic needs to be replaced with actual upload logic. This is just a demo

  return (
    <FileUploadStyles
      ref={form}
      uploading={filesToUpload}
      uploaded={filesToUpload && filesToUpload.length === filesUploaded}
      dragging={dragging}
      onDragEnter={handleDragStart}
      onDragOver={handleDragStart}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
      // onSubmit={handleSubmit}
      onClick={() => (filesToUpload ? null : fileInput.current.click())}
    >
      <input
        id={props.id}
        ref={fileInput}
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <span>
        {filesToUpload && filesToUpload.length === filesUploaded
          ? `Uploaded ${filesToUpload.length} ${
              filesToUpload.length > 1 ? "files" : "file"
            }!`
          : filesToUpload
          ? `Uploading ${filesToUpload.length} ${
              filesToUpload.length > 1 ? "files" : "file"
            }...`
          : "Click or Drop to Upload"}
      </span>
      {filesToUpload && (
        <progress
          id="progress-bar"
          max={filesToUpload.length}
          value={filesUploaded}
        ></progress>
      )}
    </FileUploadStyles>
  );
}
