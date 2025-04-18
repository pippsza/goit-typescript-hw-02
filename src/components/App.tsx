import css from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { fetchPhotosByQuery } from "./http/http";
import SearchBar from "./SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { BackendObj } from "../types/BackendObj";

export default function App() {
  const [articles, setArticles] = useState<BackendObj[]>([]);
  const [modalUrl, setModalUrl] = useState<string | boolean>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const handleSearch = (topic: string): void => {
    if (topic.trim() === "") {
      toast.error("Any search query is required!");
      return;
    }
    setSearchTerm(`${topic}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMoreClick = (): void => {
    setPage(page + 1);
  };
  function openModal(arg: string): void {
    setModalUrl(arg);
  }
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: BackendObj = await fetchPhotosByQuery(
          searchTerm.split("/")[0],
          page
        );
        setArticles((prevArticles): BackendObj[] => {
          console.log(data);

          return [...prevArticles, ...data.results];
        });
      } catch {
        setError(true);
        toast.error("Please reload there was an error!!!!");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchTerm]);

  return (
    <div className={css.mainApp}>
      <SearchBar onSearch={handleSearch}></SearchBar>

      <ImageGallery openModal={openModal} items={articles}></ImageGallery>

      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMoreClick}></LoadMoreBtn>
      )}
      {modalUrl != "" && (
        <ImageModal modalUrl={modalUrl} setModalUrl={setModalUrl}></ImageModal>
      )}
      {error && <ErrorMessage></ErrorMessage>}
      <Toaster position="top-center" reverseOrder={false} />
      <ClipLoader
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
